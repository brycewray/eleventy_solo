/* 
This shortcode takes the following form...
  {% imgc url, alt, width, height %}
...with url in the form of (note NO leading or ending slash):
  filename.ext
*/

const respSizes = require(`../../../_data/siteparams.json`).respSizes
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
// var LQIPpholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:eco,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash
 
module.exports = (url, alt, width, height) => {
  imgClass = `containedImage`
  nscClass = `containedImage`
  dataSzes = `(min-width: 1024px) 100vw, 50vw`
  
  var separator = ', '

  var stringtoRet = ``
  stringtoRet = `<img class="${imgClass}" aspect-ratio="${width} / ${height}" src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + url}" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `${cloudiBase + xFmPart1 + size + xFmPart2 + url} ${size}w`
      stringtoRet += separator
    }
  })
  stringtoRet = stringtoRet.substring(0, stringtoRet.length - 2)
  stringtoRet += `" alt="${alt}" width="${width}" height="${height}"`
  stringtoRet += ` loading="lazy"` // not good for above-the-fold images
  stringtoRet +=` sizes="${dataSzes}" />
  <noscript>
    <img class="${nscClass}" src="${cloudiBase + xFmPart1 + "300" + xFmPart2 + url}" alt="${alt}" />
  </noscript>`

  return stringtoRet
}
