// based on lloyd.js in Reuben Lillie's code
// (https://gitlab.com/reubenlillie/reubenlillie.com/)

var webmentionList = require('./webmentionlist.js')

module.exports = function(eleventyConfig) {

  webmentionList(eleventyConfig)

  return
  
}