exports.data = {
  permalink: 'index.json'
}

exports.render = data => 
 `{
    "version": "https://jsonfeed.org/version/1.1",
    "title": "BryceWray.com",
    "description": "${data.siteparams.siteDescription}",
    "home_page_url": "${data.siteparams.siteURLforOG}",
    "feed_url": "${data.siteparams.siteURLforOG}/index.json",
    "items": [
      ${data.collections.post.slice().reverse().map(post => `{
        "id": "${data.siteparams.siteURLforOG}${post.url}",
        "title": "${post.data.title}",
        "summary": "${post.data.description}",
        "url": "${data.siteparams.siteURLforOG}${post.url}",
        "date_published": "${this.dateFromRFC2822(post.date)}",
        "date_modified": "${
          post.data.lastmod
            ? this.dateFromRFC2822(post.data.lastmod)
            : this.dateFromRFC2822(post.date)
          }"
      }${post.url != "/posts/2018/09/hardy-press-wp-ssg-with-twist/" ? `,` : ``}
      `).join('')}]
  }
`