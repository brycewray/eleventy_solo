/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

const sizeOf = require('image-size')
const respSizes = [250, 500, 750, 1000, 1250, 1500]
  // was 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500
const srcDir = 'src/images'
const fs = require('fs')
const cacheFile = '.base64imgs.json'
const jsonData = JSON.parse(fs.readFileSync(cacheFile))
 
module.exports = (url, alt, tmpl) => {
  const fileSeek = jsonData.find(image => image.file === url)
  var base64Img = fileSeek.b64Res
  if (!tmpl) tmpl == "none"

  switch(tmpl) {
    case 'index':
      divClass = `h-full`
      imgClass = `lazy object-cover object-center h-full w-full containedImage`
      nscClass = `imgCover hero`
      dataSzes = `100vw`
      break
    case 'posts':
      divClass = `h-full`
      imgClass = `imgCover hero lazy`
      nscClass = `imgCover`
      dataSzes = `100vw`
      break
    default:
      divClass = `relative`
      imgClass = `lazy containedImage`
      nscClass = `containedImage`
      dataSzes = `(min-width: 1024px) 25vw, 100vw`
  }
  
  var ext = url.substring((url.lastIndexOf('.') + 1))
  var ext64 = ext
  if (ext == 'jpg') {
    ext64 = 'jpeg'
  }
  var urlBase = url.slice(0, -4)
  var dimensions = sizeOf(`${srcDir}/${url}`) // the REAL, original file
  var width = dimensions.width
  var height = dimensions.height

  var stringtoRet = ``
  stringtoRet = `<div class="${divClass}" style="background-image: url(${base64Img}); background-position: center; background-repeat: no-repeat; background-size: cover;">
  <picture>
  <source type="image/webp" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.webp ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.webp ${width}w" data-sizes="${dataSzes}" />
  <img class="${imgClass}" src="${base64Img}" data-src="/images/${urlBase}-${width}.${ext}" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.${ext} ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.${ext} ${width}w" alt="${alt}" width="${width}" height="${height}" data-sizes="${dataSzes}" />
  </picture>
  </div>
  <noscript>
    <img class="${nscClass}" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </noscript>`

  return stringtoRet
}
