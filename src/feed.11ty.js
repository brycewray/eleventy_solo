const createRssFeed = require('eleventy-rss-helper')
const permalink = '/index.xml'
/*
  The feed permalink previously was feed.xml, but index.xml makes it compatible with 
  Hugo's fixed setting for those times when we switch SSGs for some reason and, thus, 
  doesn't break it for forexisting subscribers.
*/
 
module.exports = createRssFeed({
  permalink,
  feedOptions(data) {
    var baseUrl = data.siteparams.siteURLforOG
    return {
      title: `${data.siteparams.siteTitle}`,
      description: `${data.siteparams.siteDescription}`,
      feed_url: `${baseUrl}${permalink}`,
      site_url: baseUrl,
      image_url: `${baseUrl}/images/icons/favicon-96x96.png`,
      language: 'en'
    }
  },
  items(collections, data) {
    return data.collections.posts
      .slice()
      .reverse()
  },
  itemOptions(item, data) {
    var baseUrl = data.siteparams.siteURLforOG
    return {
      title: `${item.data.title}`,
      description: `${item.data.description}`,
      url: `${baseUrl}${item.url}`,
      date: `${item.date}`
    }
  }
})