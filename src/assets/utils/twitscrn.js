/* 
This shortcode takes the following form...
  {% twitscrn imageUrl, alt, width, height, twitterUrl %}
*/

const respSizes = require(`../../../_data/siteparams.json`).respSizes
var cloudiBase = 'https://res.cloudinary.com/brycewray-com/image/upload/'
var LQIPpholder = 'f_auto,q_1,w_20/' // note ending slash
var xFmPart1 = 'f_auto,q_auto:best,w_'
var xFmPart2 = ',x_0,z_1/' // note ending slash
 
module.exports = (imageUrl, alt, width, height, twitterUrl) => {
  divClass = `relative`
  imgClass = `containedImage lazy`
  nscClass = `containedImage`
  dataSzes = `(min-width: 1024px) 25vw, 100vw`
  
  var separator = ', '

  var stringtoRet = ``
  stringtoRet = `<div class="${divClass}" style="background-image: url(${cloudiBase + LQIPpholder + imageUrl}); background-position: center; background-repeat: no-repeat; background-size: cover;">
  <a href="${twitterUrl}" target="_blank" rel="noopener"><img class="${imgClass}" data-src="${cloudiBase + xFmPart1 + "600" + xFmPart2 + imageUrl}" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `${cloudiBase + xFmPart1 + size + xFmPart2 + imageUrl} ${size}w`
      stringtoRet += separator
    }
  })
  stringtoRet = stringtoRet.substring(0, stringtoRet.length - 2)
  stringtoRet += `" alt="${alt}" width="${width}" height="${height}"`
  /*
  if (divClass !== "h-full") {
    stringtoRet += ` loading="lazy"` // not good for above-the-fold images
  }
  */
  stringtoRet +=` sizes="${dataSzes}" /></a>
  </div>
  <noscript>
    <a href="${twitterUrl}" target="_blank" rel="noopener"><img class="${nscClass}" src="${cloudiBase + xFmPart1 + "300" + xFmPart2 + imageUrl}" alt="${alt}" /></a>
  </noscript>`

  return stringtoRet
}
