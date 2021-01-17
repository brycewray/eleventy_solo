exports.data = {
  permalink: 'sitemap.xml'
}

exports.render = data => /*html*/ `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${
      data.collections.post.reverse().map(post =>
        `
        <url>
          <loc>${data.siteparams.siteURLforOG}${post.url}</loc>
          ${
            post.data.lastmod
            ?/*html*/ `<lastmod>${this.dateStringISO(post.data.lastmod)}</lastmod>`
            :/*html*/ `<lastmod>${this.dateStringISO(post.date)}</lastmod>`
          }
        </url>
        `
      ).join('')
    }
    <url>
      <loc>${data.siteparams.siteURLforOG}/about</loc>
      <lastmod>2020-09-27</lastmod>
    </url>
    <url>
      <loc>${data.siteparams.siteURLforOG}/</loc>
      <lastmod>2020-07-17</lastmod>
    </url>
  </urlset>
`