let copyYear = new Date().getFullYear()

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function(data) {

    return `

  <footer class="text-center pb-6">
    <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
      <p class="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_bundler" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/GitHub_octocat_logo_blue_48x48.png" style="height: 24px; width: 24px;" alt="GitHub"></a>&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/twitter-2430933_48x48.png" style="height: 24px; width: 24px;" alt="Twitter"></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/linked-in-2674741_48x48.png" style="height: 24px; width: 24px;" alt="LinkedIn"></a>&nbsp;&nbsp;<a href="/feed.xml" class="mb-0 border-transparent"><img src="/images/icons/rss-2440955_48x48.png" style="height: 24px; width:24px;" alt="RSS"></a></p>
      <p class="text-xs tracking-normal">
        &copy;&nbsp;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
        Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the JAMstack</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener">CSS Grid</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span class="text-nowrap">time, and&nbsp;love.</span> <span class="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
      </p>
    </div>
    <!-- for webmentions -->
    <hr class="mt-8 border-black" />
    <div class="w-full mx-auto">
      <h4 class="not-italic text-sm tracking-tighter mt-4 mb-2">Information for webmentions</h4>
      <p class="inline-flex mt-0"><img class="u-photo" alt="This site's 'BW' logo" src="/images/icons/favicon-512x512.png" style="width: 45px; height: 45px;" /></p>
      <p class="p-note text-xs tracking-normal leading-tight mt-0">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
      ${data.title !="Posts"
      ? `<h4 class="text-center not-italic text-sm mt-4">About this page</h4>
      <article class="h-entry text-xs leading-tight">
        <div class="e-content p-name tracking-normal">
        ${data.title}
          ${data.subtitle 
            ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.subtitle}`
            : ``
          }
          ${data.description 
            ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.description}`
            : ``
        }
        </div>
        <a class="u-url tracking-normal" href="${data.page.url}">Published <time class="dt-published">${this.dateFromRFC2822(data.page.date)}</time>
        </a>
        <link rel="author" href="https://brycewray.com/" />
      </article>`
      : ``
      }
    </div>
  </footer>    
    `
  })    
}
