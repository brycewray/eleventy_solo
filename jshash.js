const fs = require('fs')
const md5 = require('md5')
const DIRECTORY = 'src/assets/js'
const LAZYDATAFILE = '_data/lazyloadhelper.json'
const MOBIDATAFILE = '_data/mobilemenuhelper.json'
var lazyloadFile = DIRECTORY + '/' + 'lazyload-helper.js'
var mobimenuFile = DIRECTORY + '/' + 'mobile-menu-helper.js'

var lazyloadMd5Total = 0
var lazyloadContent = ''
var mobimenuMd5Total = 0
var mobimenuContent = ''

lazyloadContent = fs.readFileSync(lazyloadFile)
mobimenuContent = fs.readFileSync(mobimenuFile)

lazyloadMd5Total = md5(lazyloadContent)
console.log(`lazyload MD5 result = `, lazyloadMd5Total)
mobimenuMd5Total = md5(mobimenuContent)
console.log(`mobimenu MD5 result = `, mobimenuMd5Total)

var lazyloadValue = `{
  "lazyloadJS": "lazyload-helper-${lazyloadMd5Total}.js"
}`
var mobimenuValue = `{
  "mobimenuJS": "mobile-menu-helper-${mobimenuMd5Total}.js"
}`

// actual file-handling

fs.writeFileSync(LAZYDATAFILE, lazyloadValue)
fs.writeFileSync(MOBIDATAFILE, mobimenuValue)

// create the actual JS files
fs.writeFile(DIRECTORY + '/' + 'lazyload-helper-' + lazyloadMd5Total + '.js', lazyloadContent, (err) => {
  if (err)
    console.log(err)
})
fs.writeFile(DIRECTORY + '/' + 'mobile-menu-helper-' + mobimenuMd5Total + '.js', mobimenuContent, (err) => {
  if (err)
    console.log(err)
})
