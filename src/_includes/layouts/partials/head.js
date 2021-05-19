const alpineJSVer = '2.8.2'
const fs = require('fs')
let socialImg = `https://res.cloudinary.com/brycewray-com/image/upload/`
socialImg += `c_fill,w_1024,h_512,q_auto:eco,f_auto,x_0,z_1/`
const fallbackImg = `typewriter-monochrome_2242164_6260x4374.jpg`
const fallbackImg_Alt = `Monochrome photo of hands typing on a typewriter`
const analyticsCode = require('../../../assets/utils/analytics.js')
var internalCSS = ''
var internalCSSPath = 'src/_includes/css/index.css'
if (process.env.NODE_ENV === 'production') {
  if(fs.existsSync(internalCSSPath)) {
    internalCSS = fs.readFileSync(internalCSSPath)
  }  
}

module.exports = function(eleventyConfig) {

  // restructuring for easier reading/typing
  // ... https://wesbos.com/destructuring-objects
  eleventyConfig.addShortcode('headTag', function({ siteparams, page, description, title, featured_image, featured_image_alt, csshash }) {
    const { siteTitle, siteDescription, siteURLforOG } = siteparams
    const { url } = page

    return /*html*/ `
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <meta name="generator" content="Eleventy v${require(`@11ty/eleventy/package.json`).version}" />  

    ${
      (url === "/")
      ? /*html*/ `
      <title>${siteTitle}</title> 
      <meta property="og:title" content="${siteTitle}" />
      <link rel="canonical" href="${siteURLforOG}" />
      `
      : /*html*/ `
      <title>${title} | ${siteTitle}</title>
      <meta property="og:title" content="${title} | ${siteTitle}" />
      <link rel="canonical" href="${siteURLforOG + url}" />
      `
    }

    <meta property="og:type" content="website" />
    
    <meta property="og:image" content="${featured_image
      ? `${socialImg + featured_image}`
      : `${socialImg + fallbackImg}`
    }" />

    <meta property="og:image:alt" content="${featured_image_alt
      ? `${featured_image_alt}`
      : `${fallbackImg_Alt}`
    }" />

    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="512" />

    <meta name="description" content="${description
      ? `${description}`
      : `${siteDescription}`
    }" />

    <meta name="og:description" content="${description
      ? `${description}`
      : `${siteDescription}`
    }" />

    <meta property="og:url" content="${url
      ? `${siteURLforOG + url}`
      : `${siteURLforOG}`
    }" />

    <!-- Twitter meta -->
    <meta name="twitter:site" content="@BryceWrayTX">
    <meta name="twitter:creator" content="@BryceWrayTX">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${featured_image
      ? `${socialImg + featured_image}`
      : `${socialImg + fallbackImg}`
    }" />

    <meta name="twitter:description" content="${description
      ? `${description}`
      : `${siteDescription}`
    }" />

    <meta name="twitter:title" content="${title
      ? `${title}`
      : `${siteTitle}`
    }" />


    <!-- discover news feeds -->
    <link rel="alternate" title="News feed - RSS" type="application/rss+xml" href="https://www.brycewray.com/index.xml" />
    <link rel="alternate" title="News feed - JSON" type="application/feed+json" href="https://www.brycewray.com/index.json" />

    
    <!-- **** BEGINNING, favicons **** -->

    <!-- generics -->
    <link rel="icon" type="image/svg+xml" href="/assets/svg/svgNavIcon_reduced.svg" />
    <link rel="icon" type="image/png" href="/images/icons/favicon-16x16.png" sizes="16x16" />
    <!--
    <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/images/icons/favicon-96x96.png" sizes="96x96" />
    -->

    <!-- iOS -->
    <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/apple-touch-icon-167x167.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
    <link rel="apple-touch-icon" sizes="1024x1024" href="/images/icons/apple-icon-1024x1024.png" />

    <!-- Android -->
    <link rel="shortcut icon" sizes="196x196" href="/images/icons/favicon-196x196.png" />

    <!-- Windows 8, IE 10 -->
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />

    <!-- Windows 8.1 and up, IE 11 -->
    <meta name="msapplication-config" content="/browserconfig.xml" />

    <!-- **** CONCLUSION, favicons **** -->

    <!--<link rel="preload" href="/assets/fonts/Inter-3-18_subset_2021-03-31.woff2" crossorigin="anonymous" as="font" type="font/woff2" />-->

    ${ process.env.NODE_ENV === 'production' 
      ? /*html*/ `
      <link rel="preload" href="/css/${csshash['index.css']}" as="style" />
      <link rel="stylesheet" href="/css/${csshash['index.css']}" type="text/css" />
      `
      : /*html*/ `
      <link rel="preload" href="/css/index.css" as="style" />
      <link rel="stylesheet" href="/css/index.css" type="text/css"  />
      `
    }
    <!-- re above, thanks to Duncan McDougall: https://www.belter.io/eleventy-sass-workflow/ -->

    <style>@-moz-document url-prefix() {.lazy:-moz-loading {visibility:hidden;}}.ieOnly {display: none;}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.ieOnly {display: block;}.notInIE{display: none;}}</style>

    ${analyticsCode}

    <!-- https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch#best_practices -->
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    <link rel="preconnect" href="https://cdn.jsdeliver.net" crossorigin />
    <link rel="dns-prefetch" href="https://res.cloudinary.com" />
    <link rel="preconnect" href="https://res.cloudinary.com" crossorigin />

    <script type="module" src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${alpineJSVer}/dist/alpine.min.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${alpineJSVer}/dist/alpine-ie11.min.js" defer></script>
    
  </head>
    `

  })

}
