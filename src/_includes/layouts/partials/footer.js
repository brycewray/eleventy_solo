let copyYear = new Date().getFullYear()
const affilLink = `https://usefathom.com/ref/ZKHYWX` // This is just for Bryce Wray's site, please note
const { svgFooterIcon, svgGitHubIcon, svgTwitterIcon, svgLinkedInIcon, svgRSSIcon } = require( '../../../assets/svgjs/svgs.js')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function() {

    return /*html*/ `
    <footer>
      <div class="footerWrapper">
        <p><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" class="icon" aria-label="GitHub">${svgGitHubIcon}</a>&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" class="icon" aria-label="Twitter">${svgTwitterIcon}</a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" class="icon" aria-label="LinkedIn">${svgLinkedInIcon}</a>&nbsp;&nbsp;<a href="/index.xml" class="icon" aria-label="RSS">${svgRSSIcon}</a></p>
        <p>
          &copy;&nbsp;2018&ndash;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />Site built and managed with <a href="https://jamstack.org/" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://11ty.dev" target="_blank" rel="noopener">Eleventy</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <a href="https://sass-lang.com" target="_blank" rel="noopener">Sass</a>, <span class="text-nowrap">time, and&nbsp;love.</span> Images&nbsp;hosted and&nbsp;processed by&nbsp;<a href="https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/dqunpyaeqiizezj6lbdu" target="_blank" rel="noopener">Cloudinary</a>. <span class="text-nowrap">Analytics by <a href="https://usefathom.com/ref/ZKHYWX" target="_blank" rel="noopener">Fathom&nbsp;Analytics</a>.</span> <span class="text-nowrap"><a href="/privacy">View this site&rsquo;s <strong>privacy policy</strong></a>.</span>
        </p>
      </div>
    </footer>
    `
  })
}