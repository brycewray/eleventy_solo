const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svgjs/svgs.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js',
  tags: ['nav'],
  navtitle: 'Posts',
  title: 'Posts',
  pagination: { 
    data: 'collections.post',
    size: 5,
    reverse: true,
    alias: 'posts'
  }
}

exports.render = function (data) {
  const pagerThing = /*html*/ `
  <p class="text-center text-sm mt-2 mb-2">
    ${
      data.pagination.href.previous === null 
        ? /*html*/ `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.first}" class="border-transparent" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.previous}" class="border-transparent" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      data.pagination.href.next === null
        ? /*html*/ `<span class="text-gray-500">${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.next}" class="border-transparent" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.last}" class="border-transparent" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
    }
  </p>
`
  return /*html*/ `
  <main class="py-16 text-center">
  <div class="px-10 w-full md:w-2/3 lg:w-1/2 mx-auto">
    <h1 class="tracking-tight text-4xl lg:text-6xl lg:pt-16">Posts</h1>
    <div class="post-line"></div>
    <div>
      ${pagerThing}
      <hr class="mt-2 mb-6" />
      ${
        data.pagination.items.map(post => /*html*/ `
        <div>          
          <h2 class="text-xl lg:text-3xl 2xl:text-4xl mb-1 leading-tight tracking-tight"><a href="${post.url}">${post.data.title}</a><br />
          <span class="text-base lg:text-2xl 2xl:text-3xl tracking-tight">${post.data.subtitle}</span></h2>
          <p class="text-sm dateInfo mt-0">
            <time class="font-bold inline" datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}</time>
            ${
              post.data.lastmod
              ? /*html*/ `<br /><span class="text-xs">Last modified <time class="inline" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time></span>`
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-10">
            ${post.data.description}
          </p>
        </div>
        `
        ).join('')
      }
      <hr class="mt-6" />
      ${pagerThing}
    </div>
  </div>

</main>  
  `
}