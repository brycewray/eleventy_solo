const sharp = require('sharp')
const globAll = require('glob-all')
const fs = require('fs')
const sizeOf = require('image-size')
const SITEDIR = '_site'
const IMGLNDG = '_site/images'
const directory = 'src/images'
const respSizes = [250, 500, 750, 1000, 1250, 1500]
//            was: 20, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500
var respSizesThis = Array.from(respSizes)
const cacheFile = '.base64imgs.json'
// clear cacheFile...
fs.writeFileSync(cacheFile,'')
let base64Cache = []

if(!fs.existsSync(SITEDIR)) {
  fs.mkdirSync(SITEDIR)
}
if(!fs.existsSync(IMGLNDG)) {
  fs.mkdirSync(IMGLNDG)
}

files = globAll.sync([
  'src/images/*.jpg',
  'src/images/*.png',
])

files.forEach(file => {
  var dimensions = sizeOf(`${file}`)
  var fileWidth = dimensions.width
  file = file.replace('src/images/','') // losing the directory now, before processing
  var fileExt = file.substring((file.lastIndexOf('.') + 1 ))
  var fileBas = file.slice(0, -4)

  // first, the 20-pixel Base64
  sharp(`${directory}/${file}`, {failOnError: false })
    .resize(20)
    .toBuffer()
    .then(data => {
      var b64Res = `data:image/jpeg;base64,${data.toString('base64')}`
      var b64Add = {file, b64Res}
      base64Cache = [...base64Cache, b64Add]
      fs.writeFileSync(cacheFile, JSON.stringify(base64Cache, null, 2))
    })
    .catch(err => {
      console.log(err)
    })

  // now, check whether the respSizesThis array includes the image width; if not,
  // add it so we create a processed, original-width file, too
  !respSizesThis.includes(fileWidth)
  ? respSizesThis.push(fileWidth)
  : ``
  respSizesThis.forEach(size => {
    // now, the responsive images
    fileExt == 'jpg' && size <= fileWidth
    ? sharp(`${directory}/${file}`)
      .jpeg({
        quality: 60,
      })
      .resize({
        width: size,
        withoutEnlargement: true,
      })
      .toFile(`${IMGLNDG}/${fileBas}-${size}.jpg`)
      .then(() => {
      })
      .catch(err => {console.log(err + file)})
    : ``
    // commenting out the PNG part since we're eschewing its use for now - 2020-06-06
    /*
    fileExt == 'png' && size <= fileWidth
    ? sharp(`${directory}/${file}`)
      .toFormat('jpeg')
      .jpeg({
        quality: 60,
        progressive: true,
        chromaSubsampling: '4:4:4'
      })
      .resize({
        width: size,
        withoutEnlargement: true,
      })
      .toFile(`${IMGLNDG}/${fileBas}-${size}.jpg`)
      .then(() => {
      })
      .catch(err => {console.log(err + file)})
    : ``
    */

    // now, make webp for each, regardless of original file format
    size <= fileWidth    
    ? sharp(`${directory}/${file}`)
      .webp({
        quality: 50,
      })
      .resize({
        width: size,
        withoutEnlargement: true,
      })
      .toFile(`${IMGLNDG}/${fileBas}-${size}.webp`)
      .then(() => {
      })
      .catch(err => {console.log(err + file)})
    : ``
  })

  // resetting respSizesThis to original ref array (respSizes) so extra values don't keep getting added
  respSizesThis.splice(0,respSizesThis.length)
  respSizesThis = Array.from(respSizes)

})
console.log(`Writing responsive images...`)