const fs = require("fs")
const { DateTime } = require("luxon")
const htmlmin = require("html-minifier")
const ErrorOverlay = require("eleventy-plugin-error-overlay")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const svgContents = require("eleventy-plugin-svg-contents")
const path = require('path')
const Image = require("@11ty/eleventy-img")

async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 100vw, 50vw"
  let srcPrefix = `./src/assets/images/`
  src = srcPrefix + src
  console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsive image from: ${src}`)
  }  
  let metadataImg = await Image(src, {
    widths: [600, 900, 1500],
    formats: ['webp', 'jpeg'],
    urlPath: "/images/",
    outputDir: "./_site/images/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  })  
  let lowsrc = metadataImg.jpeg[0]  
  return `<picture>
    ${Object.values(metadataImg).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    }).join("\n")}
    <img
      src="${lowsrc.url}"
      width="${lowsrc.width}"
      height="${lowsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`
}

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  eleventyConfig.addLiquidShortcode("image", imageShortcode)
  // === Liquid needed if `markdownTemplateEngine` **isn't** changed from Eleventy default
  eleventyConfig.addJavaScriptFunction("image", imageShortcode)

  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(svgContents)
  eleventyConfig.addPlugin(ErrorOverlay)

  eleventyConfig.setQuietMode(true)

  eleventyConfig.addPassthroughCopy("browserconfig.xml")
  eleventyConfig.addPassthroughCopy("favicon.ico")
  eleventyConfig.addPassthroughCopy("robots.txt")
  eleventyConfig.addPassthroughCopy("./src/assets/fonts")
  eleventyConfig.addPassthroughCopy("./src/assets/js")
  eleventyConfig.addPassthroughCopy("./src/assets/svg")
  eleventyConfig.addPassthroughCopy("./src/images") // not just icons due to that one OG image

  eleventyConfig.setUseGitIgnore(false) // for the sake of CSS generated just for `head`


  /* --- date-handling --- */

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    )
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'America/Chicago' }).toFormat("MMMM d, yyyy")
  })

  eleventyConfig.addFilter("dateStringISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd")
  })

  eleventyConfig.addFilter("dateFromTimestamp", (timestamp) => {
    return DateTime.fromISO(timestamp, { zone: "utc" }).toJSDate()
  })

  eleventyConfig.addFilter("dateFromRFC2822", (timestamp) => {
    return DateTime.fromJSDate(timestamp).toISO()
  })

  eleventyConfig.addFilter("readableDateFromISO", (dateObj) => {
    return DateTime.fromISO(dateObj).toFormat("LLL d, yyyy h:mm:ss a ZZZZ")
  })

  eleventyConfig.addFilter("pub_lastmod", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "America/Chicago" }).toFormat(
      "MMMM d, yyyy"
    )
  })

  /* --- end, date-handling */


  // https://www.11ty.dev/docs/layouts/
  eleventyConfig.addLayoutAlias("base", "layouts/_default/base.njk")
  eleventyConfig.addLayoutAlias("singlepost", "layouts/posts/singlepost.njk")
  eleventyConfig.addLayoutAlias("index", "layouts/_default/index.njk")
  eleventyConfig.addLayoutAlias("contact", "layouts/contact/contact.njk")
  eleventyConfig.addLayoutAlias("privacy", "layouts/privacy/privacy.njk")
  eleventyConfig.addLayoutAlias("sitemap", "layouts/sitemap/sitemap.njk")


  /* --- Markdown handling --- */

  // https://www.11ty.dev/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it")
  let markdownItFootnote = require("markdown-it-footnote")
  let markdownItAttrs = require("markdown-it-attrs")
  let markdownItBrakSpans = require("markdown-it-bracketed-spans")
  let markdownItPrism = require("markdown-it-prism")
  let markdownItLinkAttrs = require("markdown-it-link-attributes")
  let markdownItOpts = {
    html: true,
    linkify: false,
    typographer: true,
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItFootnote)
  markdownEngine.use(markdownItAttrs)
  markdownEngine.use(markdownItBrakSpans)
  markdownEngine.use(markdownItPrism)
  markdownEngine.use(markdownItLinkAttrs, {
    pattern: /^https:/,
    attrs: {
      target: "_blank",
      rel: "noreferrer noopener",
    },
  })
  // START, de-bracketing footnotes
  //--- see http://dirtystylus.com/2020/06/15/eleventy-markdown-and-footnotes/
  markdownEngine.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString()
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId
    }
    return n
  }
  // END, de-bracketing footnotes
  eleventyConfig.setLibrary("md", markdownEngine)
  /* --- end, Markdown handling --- */


  eleventyConfig.addWatchTarget("src/**/*.js")
  // eleventyConfig.addWatchTarget("./src/assets/css/*.css")
  eleventyConfig.addWatchTarget("./src/assets/scss/*.scss")
  eleventyConfig.addWatchTarget("./src/**/*.md")


  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: [
      "src/**/*.js", 
      // "src/assets/css/*.css", 
      "src/assets/scss/*.scss", 
      "src/**/*.md"
    ],
    ghostMode: false,
    port: 3000,
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      }
    },
    snippet: false,
  })

  eleventyConfig.addShortcode(
    "imgc",
    require("./src/assets/utils/imgc.js")
  )
  eleventyConfig.addShortcode(
    "lazypicture",
    require("./src/assets/utils/lazy-picture.js")
  )
  eleventyConfig.addShortcode(
    "twitscrn",
    require("./src/assets/utils/twitscrn.js")
  )
  eleventyConfig.addShortcode(
    "disclaimer",
    require("./src/assets/utils/disclaimer.js")
  )

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }
    return content
  })


  /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
  eleventyConfig.addCollection("posts", function (collection) {
    const coll = collection.getFilteredByTag("post")
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1]
      const nextPost = coll[i + 1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll
  })
  /* === END, prev/next posts stuff === */

  
  /* pathPrefix: "/"; */
  return {
    dir: {
      input: "src", // <--- everything else in 'dir' is relative to this directory! https://www.11ty.dev/docs/config/#directory-for-includes
      data: "../_data",
      includes: "_includes",
    },
    templateFormats: [
      "html", 
      "md", 
      "njk", 
      "11ty.js"
    ],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  }
}