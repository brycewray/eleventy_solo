exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `

  <main>

  <div class="hero-home">
    <img src="${data.featured_image}" alt="${data.featured_image_alt}" class="imgCover" />
  </div>
  ${
    (data.featured_image_caption)
    ? `<p class="legal ctr text-muted" style="margin-top: 0.5em;">${data.featured_image_caption}<span class="IEonly"> &bull; <em>(May appear distorted in obsolete browsers.)</em></span></p>`
    : ``
  }

  <div class="container-home">
    <div class="column-home-1">
      ${data.content}
    </div>
    <div class="column-home-2">
      <h2 class="h1 topofHome" style="margin-bottom: 0.5em;"><a href="/posts/">Posts</a></h2>
      ${
        data.collections.post.slice(0, 7).map(post =>
        `
      <div>
        <h2 class="h5"><a href="${post.url}">${post.data.title}</a></h2>
        <p class="h5"><em>${post.data.subtitle}</em></p>
        <p class="legal text-muted" style="margin-top: 0;">
          <time style="display: inline;" datetime="${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}">${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
          ${
            post.data.lastmod
            ? `
          &nbsp;&bull;&nbsp;&nbsp;Last modified: <time style="display: inline;" datetime="${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}">${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}</time>
            `
            : ``
          }
        </p>
        <p class="pokey text-body" style="margin-top: 0.5em; margin-bottom: 1.5em;">
          ${post.data.description}
        </p>
      </div>
        ` 
      ).join('')}

      <p><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="pokey"><em>(listed five per page)</em></span></p>
      <!-- Twitter timeline used to go here -->
    </div>
  </div>
</main>
  `
}
