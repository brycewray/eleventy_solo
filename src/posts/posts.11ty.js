const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svgjs/svgs.js')

exports.data = {
  layout: 'base',
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
// 'previous'/'next' functionality below is as of Eleventy 0.10.0:
// https://www.11ty.dev/docs/pagination/nav/#add-previous-and-next-links

exports.render = function (data) {  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { pagination } = data
  const { href } = pagination
  const { first, last, previous, next } = href

  const pagerThing = /*html*/ `
  <p class="posts-pagerThingp">
    ${
      previous === null 
        ? /*html*/ `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : /*html*/ `<a href="${first}" class="icon" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${previous}" class="icon" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      next === null
        ? /*html*/ `<span>${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${next}" class="icon" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${last}" class="icon" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
    }
  </p>
`
  return /*html*/ `
  <main>
    <div class="container ctr">
      <h1 class="posts-Head">Posts</h1>
      <div class="posts-Container">
        ${pagerThing}
        <hr class="paginatorTop" />
        ${
          pagination.items.map(post => /*html*/ `
          <div>          
            <h2 class="posts-Title"><a href="${post.url}">${post.data.title}</a></h2>
            <p class="posts-Subtitle"><strong>${post.data.subtitle}</strong></p>
            <p class="posts-Dates">
              <strong><time datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}</time></strong>
              ${
                post.data.lastmod
                ? /*html*/ `<br /><span class="eightyFive">Last modified <time datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time></span>`
                : ``
              }
            </p>
            <p class="posts-Description">
              ${post.data.description}
            </p>
          </div>
          `
          ).join('')
        }
        <hr class="paginatorBottom" />
        ${pagerThing}
      </div>
    </div>

  </main>  
  `
}
