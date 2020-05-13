const { DateTime } = require('luxon')
const htmlmin = require('html-minifier')
const ofotigrid = require('./src/_includes/ofotigrid.js')
const sanitizeHTML = require('sanitize-html')
const filters = require('./src/assets/utils/filters.js')
const pluginLocalRespImg = require('eleventy-plugin-local-respimg')
const ErrorOverlay = require('eleventy-plugin-error-overlay')
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')

module.exports = function (eleventyConfig) {

  // theming -- based on Reuben Lillie's code (https://gitlab.com/reubenlillie/reubenlillie.com/)
  ofotigrid(eleventyConfig)

  // Filters for webmentions are added
  // **IN THAT SECTION BELOW!!**

  eleventyConfig.setQuietMode(true)

  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('./src/assets/fonts')
  eleventyConfig.addPassthroughCopy('./src/assets/js')
  eleventyConfig.addPassthroughCopy('./src/images/icons')

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy")
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })

  eleventyConfig.addFilter('dateStringISO', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
  })

  eleventyConfig.addFilter('dateFromTimestamp', timestamp => {
    return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
  })

  eleventyConfig.addFilter('dateFromRFC2822', timestamp => {
    return DateTime.fromJSDate(timestamp).toISO()
  })

  eleventyConfig.addFilter('readableDateFromISO', dateObj => {
    return DateTime.fromISO(dateObj).toFormat('LLL d, yyyy h:mm:ss a ZZZZ')
  })

  // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  eleventyConfig.addLayoutAlias("posts", "src/_includes/layouts/posts/singlepost.11ty.js")

  /* Markdown plugins */
  // https://www.11ty.dev/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it")
  let markdownItFootnote = require("markdown-it-footnote")
  let markdownItPrism = require('markdown-it-prism')
  let markdownItAttrs = require('markdown-it-attrs')
  let markdownItBrakSpans = require('markdown-it-bracketed-spans')
  let markdownItLinkAttrs = require('markdown-it-link-attributes')
  let markdownItOpts = {
    html: true,
    linkify: false,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItFootnote)
  markdownEngine.use(markdownItPrism)
  markdownEngine.use(markdownItAttrs)
  markdownEngine.use(markdownItBrakSpans)
  markdownEngine.use(markdownItLinkAttrs, {
    pattern: /^https:/,
    attrs: {
      target: '_blank',
      rel: 'noreferrer noopener'
    }
  })
  eleventyConfig.setLibrary("md", markdownEngine)

  eleventyConfig.addWatchTarget("src/**/*.js")
  eleventyConfig.addWatchTarget("./src/assets/css/*.css")
  eleventyConfig.addWatchTarget("./src/**/*.md")

  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: [
      "src/**/*.js",
      "src/assets/css/*.css",
    ],
    ghostMode: false
  })

  eleventyConfig.addPlugin(ErrorOverlay)

  eleventyConfig.addPlugin(lazyImagesPlugin)

  eleventyConfig.addPlugin(pluginLocalRespImg, {
    folders: {
      source: 'src',
      output: '_site',      
    },
    images: {
      resize: {
        min: 300,
        max: 1500,
        step: 300,
      },
      gifToVideo: false,
      sizes: '100vw',
      lazy: true,
      additional: [
        'images/icons/**/*',
      ],
      watch: {
        src: 'images/**/*'
      },
      pngquant: {
        speed: 10,
        quality: [0.5, 0.7]
      },
      mozjpeg: {
        quality: 60
      },
      svgo: {},
      gifresize: {},
      webp: {
        quality: 60
      },
      gifwebp: {
        quality: 60
      },
    }
  })

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  /* === START, webmentions stuff === */
  // https://mxb.dev/blog/using-webmentions-on-static-sites/
  // https://sia.codes/posts/webmentions-eleventy-in-depth/
  
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }
    return array.slice(0, n)
  })

  
  // Webmentions Filter
  eleventyConfig.addFilter('webmentionsForUrl', (webmentions, url) => {
    const allowedTypes = [
      'like-of',
      'mention-of',
      'in-reply-to',
      'repost-of',
      'bookmark-of'
    ]

    const orderByDate = (a, b) =>
      new Date(a.published) - new Date(b.published)

    const clean = content =>
      sanitizeHTML(content, {
        allowedTags: [
          'b',
          'i',
          'em',
          'strong',
          'a'],
        allowedAttributes: {
          a: [
            'href'
          ]
        }
      })

    return webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => allowedTypes.includes(entry['wm-property']))
      .sort(orderByDate)/*
      .filter(entry => !!entry.content)
      .map(entry => {
        const { html, text } = entry.content
        entry.content.value = html ? clean(html) : clean(text)
        return entry
      })*/
  })

  // next is based on the 'const filters' line at the top
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  /* === END, webmentions stuff === */

  /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426

  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("post")
    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll
  })

  /* === END, prev/next posts stuff === */
  
  /* pathPrefix: "/"; */
  return {
    dir: {
      input: 'src', // <--- everything else in 'dir' is relative to this directory! https://www.11ty.dev/docs/config/#directory-for-includes
      data: '../_data',
      includes: '_includes'
    },
    templateFormats: [
      'html',
      'md',
      'njk',
      '11ty.js'
    ],
    passthroughFileCopy: true,
  }
}