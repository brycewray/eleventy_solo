exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `

  <main>

    <div class="w-full height-hero pt-12">
        <img src="/images/${data.featured_image_base}.${data.featured_image_ext}" alt="${data.featured_image_alt}" class="object-cover object-center h-full w-full" />
    </div>
    ${
      (data.featured_image_caption)
      ? `<p class="text-center text-xs tracking-normal mt-1">${data.featured_image_caption}</p>`
      : ``
    }

    <div class="container px-8 lg:grid lg:grid-cols-5 lg:gap-16 lg:w-5/6 mr-auto ml-auto">
      <div class="col-span-3 home-colOne">
        ${data.content}
      </div>
      <div class="col-span-2 border-black border-t lg:border-0 pt-4 lg:pt-0">
        <h2 class="h1 mb-4"><a href="/posts/">Posts</a></h2>
        ${
          data.collections.post.slice(0, 7).map(post =>
          `
        <div>
          <h2 class="h4 not-italic tracking-tighter"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="font-bold text-base mt-2 mb-0 italic leading-5"><em>${post.data.subtitle}</em></p>
          <p class="text-xs tracking-normal mt-0 mb-1">
            <time style="display: inline;" datetime="${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}">${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
            ${
              post.data.lastmod
              ? `
            &nbsp;&bull;&nbsp;&nbsp;Last modified: <time style="display: inline;" datetime="${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}">${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}</time>
              `
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-3">
            ${post.data.description}
          </p>
        </div>
          ` 
        ).join('')}

        <p><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
        <!-- Twitter timeline used to go here -->
      </div>
    </div>
  </main>
  `
}
