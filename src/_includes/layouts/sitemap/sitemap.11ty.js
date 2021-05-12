exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
<main>
  <div class="container-narrower sitemapDiv">
    <h1>Sitemap</h1>
    <div class="post-line"></div>
    <h2>Main pages</h2>
    <ul>
      <li><a href="${data.siteparams.siteURLforOG}/">Home page</a></li>
      <li><a href="${data.siteparams.siteURLforOG}/about/">About me</a></li>
      <li><a href="${data.siteparams.siteURLforOG}/privacy/">Site&rsquo;s privacy policy</a></li>
      <li><a href="${data.siteparams.siteURLforOG}/contact/">How to contact me</a></li>
    </ul>
    <h2>Posts</h2>
    <ul>
      <li><a href="${data.siteparams.siteURLforOG}/posts/"><strong>Complete list</strong></a> <em>(first page of paginated list; five posts per page)</em></li>
    ${
      data.collections.post.slice().reverse().map(post =>
        /*html*/`
        <li><a href="${data.siteparams.siteURLforOG}${post.url}"><strong>${[post.data.title]}</strong></a>&nbsp;&bull;&nbsp;${this.pub_lastmod(post.date)}<br />
        <strong>${post.data.subtitle}</strong><br />
        ${post.data.description}
        </li>
        `
      ).join('')
    }
    </ul>
  </div>
</main>
`
}