exports.data = {
  permalink: 'sitemap.xml'
}

exports.render = data => /*XML*/`
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${
      data.collections.post.slice().reverse().map(post =>
        /*XML*/`
        <url>
          <loc>${data.siteparams.siteURLforOG}${post.url}</loc>
          ${
            post.data.lastmod
            ? /*XML*/`<lastmod>${this.dateStringISO(post.data.lastmod)}</lastmod>`
            : /*XML*/`<lastmod>${this.dateStringISO(post.date)}</lastmod>`
          }
        </url>
        `
      ).join('')
    }
    <url>
      <loc>${data.siteparams.siteURLforOG}/about</loc>
      <lastmod>2021-01-30</lastmod>
    </url>
    <url>
      <loc>${data.siteparams.siteURLforOG}/</loc>
      <lastmod>2021-01-30</lastmod>
    </url>
  </urlset>
`