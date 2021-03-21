const analyticsCode = require('../../../assets/utils/analytics.js')
const fs = require('fs')
var internalCSS = ''
var internalCSSPath = 'src/_includes/css/index.css'
if (process.env.NODE_ENV === 'production') {
  if(fs.existsSync(internalCSSPath)) {
    internalCSS = fs.readFileSync(internalCSSPath)
  }  
}
let socialImg = `https://res.cloudinary.com/brycewray-com/image/upload/`
socialImg += `c_fill,w_1024,h_512,q_auto:eco,f_auto,x_0,z_1/`
const fallbackImg = `typewriter-monochrome_2242164_6260x4374.jpg`
const alpineJSVer = '2.8.1'

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('headTag', function(data) {
    
    return /*html*/ `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="IE=10"><!-- due to IE 11 issue with TWCSS -->

    <meta name="generator" content="Eleventy v${require(`@11ty/eleventy/package.json`).version}" />  

    ${
      (data.title == "Home page")
      ? /*html*/ `
      <title>${data.siteparams.siteTitle}</title> 
      <meta property="og:title" content="${data.siteparams.siteTitle}" />
      <link rel="canonical" href="${data.siteparams.siteURLforOG}" />
      `
      : /*html*/ `
      <title>${data.title} | ${data.siteparams.siteTitle}</title>
      <meta property="og:title" content="${data.title} | ${data.siteparams.siteTitle}" />
      <link rel="canonical" href="${data.siteparams.siteURLforOG + data.page.url}" />
      `
    }
    
    <meta property="og:image" content="${data.featured_image
      ? `${socialImg + data.featured_image}`
      : `${socialImg + fallbackImg}`
    }" />

    <meta name="description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta name="og:description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta property="og:url" content="${data.page.url
      ? `${data.page.url}`
      : `${data.siteparams.siteURLforOG}`
    }" />

    <!-- Twitter meta -->
    <meta name="twitter:site" content="@BryceWrayTX">
    <meta name="twitter:creator" content="@BryceWrayTX">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${data.featured_image
      ? `${socialImg + data.featured_image}`
      : `${socialImg + fallbackImg}`
    }" />

    <meta name="twitter:description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta name="twitter:title" content="${data.title
      ? `${data.title}`
      : `${data.siteparams.siteTitle}`   
    }" />


    <!-- **** BEGINNING, favicons **** -->

    <!-- generics -->
    <link rel="icon" type="image/svg+xml" href="/assets/svg/svgNavIcon_reduced.svg" />
    <link rel="icon" type="image/png" href="/images/icons/favicon-16x16.png" sizes="16x16">
    <!--
    <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/images/icons/favicon-96x96.png" sizes="96x96">
    -->

    <!-- iOS -->
    <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/apple-touch-icon-167x167.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="1024x1024" href="/images/icons/apple-icon-1024x1024.png">

    <!-- Android -->
    <link rel="shortcut icon" sizes="196x196" href="/images/icons/favicon-196x196.png">

    <!-- Windows 8, IE 10 -->
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png">

    <!-- Windows 8.1 and up, IE 11 -->
    <meta name="msapplication-config" content="/browserconfig.xml">

    <!-- **** CONCLUSION, favicons **** -->

    <link rel="preconnect" href="https://res.cloudinary.com" />

    <link rel="preload" href="/assets/fonts/Inter-3-15_subset_2020-08-20.woff2" as="font" type="font/woff2" crossorigin />

    ${ process.env.NODE_ENV === 'production' 
      ? /*html*/ `<style>${internalCSS}</style>`
      : /*html*/ `<link rel="stylesheet" href="/css/index.css" type="text/css" />`
    }

    <style>@-moz-document url-prefix() {.lazy:-moz-loading {visibility:hidden;}}.ieOnly {display: none;}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.ieOnly {display: block;}.notInIE{display: none;}}</style>

    ${analyticsCode}

    <script type="module" src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${alpineJSVer}/dist/alpine.min.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${alpineJSVer}/dist/alpine-ie11.min.js" defer></script>
    
  </head>
    `

  })

}