const sharp = require('sharp')
const fs = require('fs')
const SITEDIR = '_site'
const IMGLNDG = '_site/images'
const directory = 'src/images'
const sizeOf = require('image-size')
const respSizes = [300, 600, 900, 1200]

// begin, for test only
if(!fs.existsSync(SITEDIR)) {
  fs.mkdirSync(SITEDIR)
}
if(!fs.existsSync(IMGLNDG)) {
  fs.mkdirSync(IMGLNDG)
}
// end, for test only

fs.readdirSync(directory)
  /*.filter(function(file) {
    return file !== '.DS_Store' 
  })
  */
  .forEach((file) => {
    var fileExt = file.substr((file.lastIndexOf('.') + 1 ))
    var fileBas = file.slice(0, -4)
    console.log(`Directory = ${directory} and file = ${file}`)
    // var dimensions = sizeOf(file)
    // var fileWidth = dimensions.width
    fileWidth = 1201
    respSizes.forEach(size => {
      fileExt == 'jpg' && size <= fileWidth
      ? sharp(`${directory}/${file}`)
        .jpeg({
          quality: 60,
        })
        .resize({
          width: size,
          withoutEnlargement: true,
        })
        .toFile(`${IMGLNDG}/${fileBas}-${size}.${fileExt}`)
        .then(() => {
          console.log(`Sharp output ${file} as ${fileBas}-${size}.${fileExt}`)
        })
        .catch(err => {console.log(err + file)})
      : ``
      fileExt == 'png' && size <= fileWidth
      ? sharp(`${directory}/${file}`)
        .png({})
        .resize({
          width: size,
          withoutEnlargement: true,
        })
        .toFile(`${IMGLNDG}/${fileBas}-${size}.${fileExt}`)
        .then(() => {
          console.log(`Sharp output ${file} as ${fileBas}-${size}.${fileExt}`)
        })
        .catch(err => {console.log(err + file)})
      : ``
      // now, make webp for each, regardless of original file format
      size <= fileWidth    
      ? sharp(`${directory}/${file}`)
        .webp({
          quality: 60,
        })
        .resize({
          width: size,
          withoutEnlargement: true,
        })
        .toFile(`${IMGLNDG}/${fileBas}-${size}.webp`)
        .then(() => {
          console.log(`Sharp output ${file} as ${fileBas}-${size}.${fileExt}`)
        })
        .catch(err => {console.log(err + file)})
      : ``
    })
  })
