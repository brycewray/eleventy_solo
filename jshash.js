const fs = require('fs')
const md5 = require('md5')
const JSDATAFILE = '_data/jshash.json'
const JSHASHFILE = 'jshash'
const DIRECTORY = 'src/assets/js/hash'
var lazyloadFile =  'src/assets/js/lazyload-helper.js'

var lazyloadMd5Total = 0
var lazyloadContent = ''

lazyloadContent = fs.readFileSync(lazyloadFile)

lazyloadMd5Total = md5(lazyloadContent)
console.log(`lazyload MD5 result =`, lazyloadMd5Total)

var jsonValue = `{
  "lazyloadJS": "lazyload-helper-${lazyloadMd5Total}.js"
}`

fs.writeFileSync(JSDATAFILE, jsonValue)

// actual file-handling
// first, get rid of existing hashed content
if(fs.existsSync(DIRECTORY)) {
  fs.rmdir(DIRECTORY, {recursive: true})
}
if(!fs.existsSync(DIRECTORY)) {
  fs.mkdirSync(DIRECTORY)
}
// create the actual file
fs.writeFile(DIRECTORY + '/' + 'lazyload-helper-' + lazyloadMd5Total + '.js', lazyloadContent, (err) => {
  if (err)
    console.log(err)
})

var txtValue = `lazyload-helper-${lazyloadMd5Total}.js`
fs.writeFileSync(JSHASHFILE, txtValue)
// ...the latter because, otherwise, you get the following error:
// The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.
