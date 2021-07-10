/* 
This shortcode takes the following form...
  {% imgc url, alt, width, height, tmpl %}
...with url in the form of (note NO leading or ending slash):
  filename.ext
...and 'temp[late]' optional in body copy. The template is used 
to specify hero images on either the home page ('index') or 
post pages ('posts'). Without this parameter, the `switch` 
statement below defaults to body copy-style image-handling.
*/

const respSizes = require(`../../../_data/siteparams.json`).respSizes
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
var LQIPpholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:eco,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash
 
module.exports = (url, alt, width, height, tmpl) => {
  if (!tmpl) tmpl == "none"

  switch(tmpl) {
    /*
    case 'index':
      divClass = `h-full`
      imgClass = `object-cover object-center h-full w-full containedImage lazy`
      nscClass = `imgCover hero`
      dataSzes = `100vw`
      break
    */
    case 'posts':
      divClass = `h-full`
      imgClass = `imgCover hero lazy`
      nscClass = `imgCover`
      dataSzes = `100vw`
      break
    default:
      divClass = `relative`
      imgClass = `containedImage lazy`
      nscClass = `containedImage`
      dataSzes = `(min-width: 1024px) 100vw, 50vw`
  }
  
  var separator = ', '

  var stringtoRet = ``
  stringtoRet = `<div class="${divClass} bg-center bg-no-repeat bg-cover" data-bg="url(${cloudiBase + LQIPpholder + url})">
    <img class="${imgClass}" aspect-ratio="${width} / ${height}" data-src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + url}" data-srcset="`
    respSizes.forEach(size => {
      if (size <= width) {
        stringtoRet += `${cloudiBase + xFmPart1 + size + xFmPart2 + url} ${size}w`
        stringtoRet += separator
      }
    })
    stringtoRet = stringtoRet.substring(0, stringtoRet.length - 2)
    stringtoRet += `" alt="${alt}" width="${width}" height="${height}"`
    if (divClass !== "h-full") {
      stringtoRet += ` loading="lazy"` // not good for above-the-fold images
    }
    stringtoRet +=` sizes="${dataSzes}" />
  </div>
  <noscript>
    <img class="${nscClass}" src="${cloudiBase + xFmPart1 + "300" + xFmPart2 + url}" alt="${alt}" />
  </noscript>`

  return stringtoRet
}
