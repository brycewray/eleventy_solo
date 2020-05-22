const sharp = require('sharp')
const fs = require('fs')
const sizeOf = require('image-size')
const dir = require('node-dir')
const SITEDIR = '_site'
const IMGLNDG = '_site/images'
const directory = 'src/images'
const respSizes = [20, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500]

if(!fs.existsSync(SITEDIR)) {
  fs.mkdirSync(SITEDIR)
}

if(!fs.existsSync(IMGLNDG)) {
  fs.mkdirSync(IMGLNDG)
}

dir.files(directory, function(err, files){
  if (err) throw err
  files = files.filter(file => {
    return [
      'src/images/.DS_Store',
      'src/images/icons/.DS_Store',
      'src/images/icons/apple-icon-57x57.png',
      'src/images/icons/apple-icon-60x60.png',
      'src/images/icons/apple-icon-72x72.png',
      'src/images/icons/apple-icon-76x76.png',
      'src/images/icons/apple-icon-114x114.png',
      'src/images/icons/apple-icon-120x120.png',
      'src/images/icons/apple-icon-144x144.png',
      'src/images/icons/apple-icon-152x152.png',
      'src/images/icons/apple-icon-180x180.png',
      'src/images/icons/apple-icon-precomposed.png',
      'src/images/icons/apple-icon.png',
      'src/images/icons/apple-touch-icon_120x120.png',
      'src/images/icons/apple-touch-icon_152x152.png',
      'src/images/icons/apple-touch-icon_167x167.png',
      'src/images/icons/apple-touch-icon_180x180.png',
      'src/images/icons/apple-touch-icon_1024x1024.png',
      'src/images/icons/favicon-16x16.png',
      'src/images/icons/favicon-32x32.png',
      'src/images/icons/favicon-45x45.png',
      'src/images/icons/favicon-90x90.png',
      'src/images/icons/favicon-96x96.png',
      'src/images/icons/favicon-512x512.png',
      'src/images/icons/favicon.ico',
      'src/images/icons/ms-icon-70x70.png',
      'src/images/icons/ms-icon-144x144.png',
      'src/images/icons/ms-icon-150x150.png',
      'src/images/icons/ms-icon-310x310.png',
      'src/images/icons/webmention-avatar-default.svg'
    ].indexOf(file) === -1
  })
  .forEach(file => {
    var dimensions = sizeOf(`${file}`)
    var fileWidth = dimensions.width
    file = file.replace('src/images/','') // losing the directory now, before processing
    var fileExt = file.substring((file.lastIndexOf('.') + 1 ))
    var fileBas = file.slice(0, -4)
    // process a JPG
    fileExt == 'jpg'
    ? sharp(`${directory}/${file}`)
      .jpeg({
        quality: 60,
      })
      .toFile(`${IMGLNDG}/${fileBas}-${fileWidth}.${fileExt}`)
      .then(() => {
        // console.log(`Sharp output ${file} as ${fileBas}-${fileWidth}.${fileExt}`)
      })
      .catch(err => {console.log(err + file)})
    : ``
    // process a PNG
    fileExt == 'png'
    ? sharp(`${directory}/${file}`)
      .png({})
      .toFile(`${IMGLNDG}/${fileBas}-${fileWidth}.${fileExt}`)
      .then(() => {
        // console.log(`Sharp output ${file} as ${fileBas}-${fileWidth}.${fileExt}`)
      })
      .catch(err => {console.log(err + file)})
    : ``
    // now, make webp for each, regardless of original file format
    sharp(`${directory}/${file}`)
      .webp({
        quality: 50,
      })
      .toFile(`${IMGLNDG}/${fileBas}-${fileWidth}.webp`)
      .then(() => {
        // console.log(`Sharp output ${file}-${fileWidth} as ${fileBas}-${fileWidth}.webp`)
      })
      .catch(err => {console.log(err + file)})
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
          // console.log(`Sharp output ${file} as ${fileBas}-${size}.${fileExt}`)
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
          // console.log(`Sharp output ${file} as ${fileBas}-${size}.${fileExt}`)
        })
        .catch(err => {console.log(err + file)})
      : ``
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
          // console.log(`Sharp output ${file} as ${fileBas}-${size}.webp`)
        })
        .catch(err => {console.log(err + file)})
      : ``
    })
  })
  console.log(`Writing responsive images...`)
})
