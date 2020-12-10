// Detect when any CSS files change by adding their timestamps (integers only)

const fs = require('fs')
const md5 = require('md5')
const globAll = require('glob-all')
const DATAFILE = '_data/csshash.json'
const PCSSFILE = 'csshash'
cssFiles = globAll.sync([
  'src/assets/css/*.css'
])

var cssTotal = 0
var cssMd5Total = 0
var cssContent = ''

for(i=0; i<cssFiles.length; i++) {
  cssTotal += parseInt((fs.statSync(cssFiles[i])).mtimeMs)
  cssContent += (fs.readFileSync(cssFiles[i]))
}
cssMd5Total = md5(cssContent)
console.log(`CSS hash = `, cssTotal)
console.log(`CSS MD5 result =`, cssMd5Total)

var jsonValue = `{
  "index.css": "index-${cssMd5Total}.css"
}`
fs.writeFileSync(DATAFILE, jsonValue)

var txtValue = `index-${cssMd5Total}.css`
fs.writeFileSync(PCSSFILE, txtValue)
// ...the latter because, otherwise, you get the following error:
// The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.
