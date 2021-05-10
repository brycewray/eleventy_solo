exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { collections } = data
  const { length } = collections.post

  return /*html*/ `
  <main>
    <div class="container-home">
      <div class="homeOpen">
        <h1>Welcome to brycewray.com.<br />
        &nbsp;<br />
        Offering&nbsp;observations, opinions, and&nbsp;geekiness since&nbsp;2018.</h1>
      </div>
      <div class="homePost-Div">
        <div class="post-line"></div>
        <h2 class="homePost-Latest">Latest <a href="/posts/">posts</a></h2>
        ${
          collections.post.slice(-3).reverse().map(
            ({url,
              date,
              data: {
                title,
                subtitle,
                lastmod,
                description
              },
            }) => /*html*/ `
        <div>
          <h2 class="homePost-Title"><a href="${url}">${title}</a></h2>
          <p class="homePost-Subtitle">${subtitle}</p>
          <p class="homePost-Dates">
            <time datetime="${this.pub_lastmod(date)}}"><strong>${this.pub_lastmod(date)}</strong></time>
            ${
              lastmod
              ? /*html*/ `
            <br />Last modified <time datetime="${this.pub_lastmod(lastmod)}">${this.pub_lastmod(lastmod)}</time>
              `
              : ``
            }
          </p>
          <p class="homePost-Description">
            ${description}
          </p>
        </div>
          ` 
        ).join('')}

        <p style="margin-top: 2em;"><a href="/posts/"><strong>All ${length} posts</strong></a> <span class="pokey"><em>(listed five per page)</em></span></p>
      </div>
    </div>
  </main>
  `
}
