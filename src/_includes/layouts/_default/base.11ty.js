let copyYear = new Date().getFullYear()

module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  <head>
  <meta name="generator" content="Eleventy - https://11ty.dev" />
      
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

  <link rel="stylesheet" href="/css/index.css" type="text/css">
  <style>
    .ieOnly {
      display: none;
    }
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      .ieOnly {
        display: block;
      }
    }
  </style>

  <noscript>
    <!-- Dark mode for Twitter items if browser blocks JS at bottom; it’s debatable whether it’s needed since non-JS Twitter is pretty spare and mostly adheres to other CSS, but we’ll do it just to be consistent -->
    <meta name="twitter:widgets:theme" content="dark">
    <meta name="twitter:widgets:link-color" content="#00bbff">
  </noscript>
  </head>
  <body>
    <p class="ieOnly text-center">Sorry, this site&rsquo;s CSS&mdash;and many others&rsquo;&mdash;no longer fully supports Internet&nbsp;Explorer.</p>
    <header class="h-12 bg-darkblue font-body w-full fixed p-0 mt-0 z-50">
      <p class="text-white font-bold mt-2 pt-1 text-lg ml-4 md:ml-8 lg:ml-10"><span class="site-logo-holder"><a href="/" class="text-white no-underline border-b-0 active:text-gray-400 hover:text-gray-400"><img class="inline" src="/images/icons/BW_avatar_36x36_xpar.png" alt="This site's logo; click here to go to the home page"></a></span>&nbsp;&nbsp;&nbsp;<a href="/" class="text-white no-underline border-b-0 active:text-gray-400 hover:text-gray-400">BryceWray.com</a></p>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-hidden="true" />
      <label for="nav-toggle" class="nav__icon" aria-hidden="true">
        Expand the menu
          <span class="nav__icon-line"></span>
          <span class="nav__icon-line"></span>
          <span class="nav__icon-line"></span>
      </label>
      <nav role="navigation" class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <a href="/about" title="About">About</a>
          </li>
          <li class="nav__item">
            <a href="/posts" title="Posts">Posts</a>
          </li>
        </ul>
      </nav>
    </header>
    ${data.content}
    <footer class="text-center pb-6">
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/GitHub_octocat_logo_blue_96x96.png" style="height: 48px; width: 48px;" alt="GitHub logo"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/twitter-2430933_circle_96x96.png" style="height: 48px; width: 48px;" alt="Twitter logo"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" class="mb-0 border-transparent"><img src="/images/icons/linked-in-2674741_circle_96x96.png" style="height: 48px; width: 48px;" alt="LinkedIn logo"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/feed.xml" class="mb-0 border-transparent"><img src="/images/icons/rss-2440955_circle_96x96.png" style="height: 48px; width:48px;" alt="RSS logo"></a></p>
        <p class="text-xs tracking-tight">
          &copy;&nbsp;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
          Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://11ty.dev" target="_blank" rel="noopener">Eleventy</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span class="text-nowrap">time, and&nbsp;love.</span> <span class="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
        </p>
      </div>
      <!-- for webmentions -->
      <hr class="mt-8 border-black" />
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="font-bold text-base tracking-tighter mt-4 mb-2">Information for webmentions</p>
        <p class="inline-flex mt-0"><img class="u-photo" alt="This site's 'BW' logo" src="/images/icons/favicon-90x90.png" style="width: 45px; height: 45px;" /></p>
        <p class="p-note text-xs tracking-tight leading-tight mt-0">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and&nbsp;opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
        ${data.title !="Posts"
        ? `<p class="font-bold text-center text-sm mt-4 mb-0 tracking-tight">About this page</p>
        <article class="h-entry text-xs leading-tight">
          <div class="e-content p-name tracking-tight">
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
          <a class="u-url no-underline border-0 text-black dark:text-white tracking-normal" href="${data.page.url}">Published <time class="dt-published">${this.dateFromRFC2822(data.page.date)}</time>
          </a>
          <link rel="author" href="https://brycewray.com/" />
        </article>`
        : ``
        }
      </div>
    </footer>    
    <script src="/assets/js/flying-pages.min.js"></script>
    <script src="/assets/js/twitterMeta.min.js"></script>
  </body>
</html>
  `
}
