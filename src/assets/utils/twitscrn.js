/* 
This shortcode takes the following form...
  {% twitscrn imageUrl, alt, width, height, twitterUrl %}
*/

const respSizes = require(`../../../_data/siteparams.json`).respSizes
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
var LQIPholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:best,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash
 
module.exports = (imageUrl, alt, width, height, twitterUrl) => {
  imgClass = `containedImage twitter-tweet`
  nscClass = `containedImage`
  dataSzes = `(min-width: 1024px) 100vw, 50vw`
  
  var separator = ', '

  var stringtoRet = ``
  stringtoRet = `<a href="${twitterUrl}" target="_blank" rel="noopener"><img class="${imgClass}" aspect-ratio="${width} / ${height}" src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + imageUrl}" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `${cloudiBase + xFmPart1 + size + xFmPart2 + imageUrl} ${size}w`
      stringtoRet += separator
    }
  })
  stringtoRet = stringtoRet.substring(0, stringtoRet.length - 2)
  stringtoRet += `" alt="${alt}" width="${width}" height="${height}" loading="lazy" sizes="${dataSzes}" /></a>
  <noscript>
    <a href="${twitterUrl}" target="_blank" rel="noopener"><img class="${nscClass}" src="${cloudiBase + xFmPart1 + "300" + xFmPart2 + imageUrl}" alt="${alt}" loading="lazy" /></a>
  </noscript>`

  return stringtoRet
}
