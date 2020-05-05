/* * * * * * * * * * 
Based on:
https://web.dev/serve-responsive-images/
https://sharp.pixelplumbing.com/api-output
https://nodejs.org/api/fs.html

* * * * * * * * * */

const sharp = require('sharp');
const fs = require('fs');
const SITEDIR = '_site'
const IMGLNDG = '_site/images'
const directory = 'src/images';
const respSizes = [300, 600, 900, 1200]

// begin, for test only
if(!fs.existsSync(SITEDIR)) {
  fs.mkdirSync(SITEDIR)
}
if(!fs.existsSync(IMGLNDG)) {
  fs.mkdirSync(IMGLNDG)
}
// end, for test only

fs.readdirSync(directory).forEach(file => {
  var fileExt = file.substr((file.lastIndexOf('.') + 1 ))
  var fileBas = file.slice(0, -4)
  respSizes.forEach(size => {
    fileExt == 'jpg'
    ? sharp(`${directory}/${file}`)
        .jpeg({
          quality: 60,
        })
      .resize(size)
      .toFile(`${IMGLNDG}/${fileBas}-${size}.${fileExt}`)
      .then()
      .catch(err => {console.log(err + file)})
      : ``
    fileExt == 'png'
    ? sharp(`${directory}/${file}`)
        .png({})
      .resize(size)
      .toFile(`${IMGLNDG}/${fileBas}-${size}.${fileExt}`)
      .then()
      .catch(err => {console.log(err + file)})
      : ``
    // now, make webp for each, regardless of original file format
    fileExt == 'jpg' || fileExt == 'png' // trying to miss the 'icons' dir and the hidden .DS_Store files on macOS
    ? sharp(`${directory}/${file}`)
        .webp({
          quality: 60,
        })
      .resize(size)
      .toFile(`${IMGLNDG}/${fileBas}-${size}.webp`)
      .then()
      .catch(err => {console.log(err + file)})
    : ``
  })
})
