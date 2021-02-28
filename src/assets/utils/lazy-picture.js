/* 
This shortcode takes the following form...
  {% lazypicture url, alt, width, height [, temp] %}
...with url in the form of (note NO leading or ending slash):
  filename.ext
...and 'temp[late]' optional in body copy. The template is used 
to specify hero images on either the home page ('index') or 
post pages ('posts'). Without this parameter, the `switch` 
statement below defaults to body copy-style image-handling.

The name 'lazypicture' (rather than 'lazy-picture') comes from the config 
in .eleventy.js. ¯\_(ツ)_/¯
*/

const respSizes = require(`../../../_data/siteparams.json`).respSizes
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
var LQIPpholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:eco,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash
 
module.exports = (url, alt, width, height, tmpl) => {
  if (!tmpl) tmpl == "none"

  switch(tmpl) {
    case 'index':
      divClass = `h-full`
      imgClass = `object-cover object-center h-full w-full containedImage`
      nscClass = `object-cover object-center h-full w-full containedImage`
      dataSzes = `100vw`
      break
    case 'posts':
      divClass = `h-full`
      imgClass = `imgCover hero`
      nscClass = `imgCover hero`
      dataSzes = `100vw`
      break
    default:
      divClass = `relative`
      imgClass = `containedImage`
      nscClass = `containedImage`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
  }
  
  var separator = ', '

  var stringtoRet = ``
  stringtoRet = `<div class="${divClass}" style="background-image: url(${cloudiBase + LQIPpholder + url}); background-position: center; background-repeat: no-repeat; background-size: cover;">
  <img class="${imgClass}" src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + url}" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `${cloudiBase + xFmPart1 + size + xFmPart2 + url} ${size}w`
      stringtoRet += separator
    }
  })
  stringtoRet = stringtoRet.substring(0, stringtoRet.length - 2)
  stringtoRet += `" alt="${alt}" width="${width}" height="${height}" loading="lazy" sizes="${dataSzes}" />
  <noscript>
    <img class="${nscClass}" src="${cloudiBase + xFmPart1 + "300" + xFmPart2 + url}" alt="${alt}" loading="lazy" />
  </noscript>
  </div>`

  return stringtoRet
}
