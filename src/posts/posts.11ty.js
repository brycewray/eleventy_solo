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

exports.render = function (data) {
  const pagerThing = /*html*/ `
  <p class="ctr pokey" style="margin-top: 0.5em; margin-bottom: 0.5em;">
    ${
      data.pagination.href.previous === null 
        ? /*html*/ `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.first}" class="icon" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.previous}" class="icon" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      data.pagination.href.next === null
        ? /*html*/ `<span>${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.next}" class="icon" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.last}" class="icon" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
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
          data.pagination.items.map(post => /*html*/ `
          <div>          
            <h2 class="posts-Title"><a href="${post.url}">${post.data.title}</a></h2>
            <p class="posts-Subtitle"><strong>${post.data.subtitle}</strong></p>
            <p class="posts-Dates">
              <strong><time style="display: inline;" datetime="${this.pub_lastmod(post.date)}}">${this.pub_lastmod(post.date)}</time></strong>
              ${
                post.data.lastmod
                ? /*html*/ `<br /><span style="font-size: 85%;">Last modified <time style="display: inline;" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time></span>`
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
