/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

// const path = require('path')
// const fs = require('fs')
const sizeOf = require('image-size')
const respSizes = [20, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500]
const srcDir = 'src/images'
// const siteDir = '_site/images'
 
/*
try {
  const arrayOfFiles = fs.readdirSync("_site/images")
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}
*/

module.exports = (url, alt) => {
  var ext = url.substring((url.lastIndexOf('.') + 1))
  var urlBase = url.slice(0, -4)
  var dimensions = sizeOf(`${srcDir}/${url}`) // the REAL, original file
  var width = dimensions.width
  var stringtoRet = ``
  stringtoRet = `<picture>
  <source type="image/webp" srcset="/images/${urlBase}-20.webp" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.webp ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.webp ${width}w" /> 
  <source type="image/${ext}" srcset="/images/${urlBase}-20.${ext}" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.${ext} ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.${ext} ${width}w" />
  <img class="lazyload blur-up containedImage" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </picture>
  <noscript>
    <img class="containedImage" loading="lazy" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </noscript>`

  return stringtoRet
}
