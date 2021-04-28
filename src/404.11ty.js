exports.data = {
  locale: 'en',
  title: '404 - Page not found',
  layout: 'base',
  permalink: '404.html'
}

// following (as opposed to 'module.exports = `` without 'data') needed to work with above front matter
exports.render = data => /*html*/ `
  <main class="ctr">
    <h1 class="billboard-title-text">Page not found</h1>
    <p class="billboard-subtitle-text">Sorry, that page isn&rsquo;t on this site.</p>
    <p class="billboard-description-text" style="margin-bottom: 10em;">Please use the navigation menu, above, to find another&nbsp;page.</p>
  </main>
`
