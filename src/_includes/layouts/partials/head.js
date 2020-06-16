const jsonInfo = require(`../../../../package.json`)
var eleventyVersion = jsonInfo.devDependencies['@11ty/eleventy']
if (eleventyVersion.charAt(0) == "^") {
  eleventyVersion = eleventyVersion.substring(1)
}
let bodyName = 'Public+Sans'
let codeName = 'Roboto+Mono'

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('headTag', function(data) {

    return `
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=10"><!-- due to IE 11 issue with TWCSS -->
    <meta name="generator" content="Eleventy - 11ty - https://11ty.dev - Version ${eleventyVersion}" />        
    ${
      (data.title == "Home page")
      ? `
      <title>${data.siteparams.siteTitle}</title> 
      <meta property="og:title" content="${data.siteparams.siteTitle}" />
      `
      : `
      <title>${data.title} | ${data.siteparams.siteTitle}</title>
      <meta property="og:title" content="${data.title} | ${data.siteparams.siteTitle}" />
      `
    }
    <!-- IndieWeb -->
    ${
      (data.title == "Home page")
      ? `
      <link rel="me" href="https://twitter.com/BryceWrayTX" />
      <link rel="me" href="https://github.com/brycewray" />
      `
      : ``
    }
    <link rel="webmention" href="https://webmention.io/brycewray.com/webmention" />
    <link rel="pingback" href="https://webmention.io/brycewray.com/xmlrpc" />

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta property="og:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720-1280.jpg" />
    ${
      (data.title == "Home page")
      ? `
      <meta name="description" content="${data.siteparams.siteDescription}" />
      <meta property="og:description" content="${data.siteparams.siteDescription}" />
      `
      : (data.description != "")
        ? `
      <meta name="description" content="${data.description}">
        `
      : ``
    }
    ${
      (data.page.url !== null)
      ? `
      <meta property="og:url" content="${data.siteparams.siteURLforOG}${data.page.url}" />
      `
      : `<meta property="og:url" content="${data.siteparams.siteURLforOG}" />`
    }

    <!-- Twitter meta -->
    <meta name="twitter:site" content="@BryceWrayTX">
    <meta name="twitter:creator" content="@BryceWrayTX">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720-1280.jpg" />
    ${
      data.title !== "Home page"
      ? `
      <meta name="twitter:description" content="${data.description}" />
      <meta name="twitter:title" content="${data.title}" />
      `
      : `
      <meta name="twitter:description" content="${data.siteparams.siteDescription}" />
      <meta name="twitter:title" content="${data.siteparams.siteTitle}" />
      `
    }

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png">
    <meta name="msapplication-TileImage" content="/images/ms-icon-icons/144x144.png">

    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=${bodyName}:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=${bodyName}:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=${codeName}&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=${codeName}&display=swap" rel="stylesheet">
    <link rel="preload" as="style" href="/css/index.css" />
    <link rel="stylesheet" href="/css/index.css" type="text/css" />
    <style>@-moz-document url-prefix() {.lazy:-moz-loading {visibility:hidden;}}.ieOnly {display: none;}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.ieOnly {display: block;}.notInIE{display: none;}}</style>

    <noscript>
      <!-- Dark mode for Twitter items if browser blocks JS at bottom; it’s debatable whether it’s needed since non-JS Twitter is pretty spare and mostly adheres to other CSS, but we’ll do it just to be consistent -->
      <meta name="twitter:widgets:theme" content="dark">
      <meta name="twitter:widgets:link-color" content="#00bbff">
    </noscript>

    <!-- Fathom - beautiful, simple website analytics -->
    <script src="https://boa.brycewray.com/script.js" site="CSERHYIA" defer></script>
    <!-- / Fathom -->
  </head>
    `

  })

}