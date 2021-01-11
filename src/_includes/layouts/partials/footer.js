let copyYear = new Date().getFullYear()
const affilLink = `https://usefathom.com/ref/ZKHYWX` // This is just for Bryce Wray's site, please note
const { svgFooterIcon, svgGitHubIcon, svgTwitterIcon, svgLinkedInIcon, svgRSSIcon } = require( '../../../assets/svg/svgs.js')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function(data) {

    return `
    <footer class="text-center pb-6">
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="GitHub">${svgGitHubIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="Twitter">${svgTwitterIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="LinkedIn">${svgLinkedInIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/index.xml" class="mb-0 border-transparent" aria-label="RSS">${svgRSSIcon}</a></p>
        <p class="text-xs">
          &copy;&nbsp;2018&ndash;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
          Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span class="text-nowrap">time, and&nbsp;love.</span> Images&nbsp;hosted and&nbsp;processed by&nbsp;<a href="https://cloudinary.com" target="_blank" rel="noopener">Cloudinary</a>. Analytics&nbsp;by <a href="${affilLink}" target="_blank" rel="noopener">Fathom&nbsp;Analytics</a>. <span class="text-nowrap"><a href="/privacy">View this site&rsquo;s <strong>privacy policy</strong></a>.</span>
        </p>
      </div>
    </footer>    
    `
  })
}