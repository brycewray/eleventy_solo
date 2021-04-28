const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
  <main>
    ${this.billboard(data)}

    <div class="container-narrower">
      ${stringtoRet(data.featured_image, data.featured_image_alt, data.featured_image_width, data.featured_image_height)}
      <p class="ctr legal">
        ${ data.featured_image_caption 
          ? `${data.featured_image_caption}`
          : /*html*/ `&nbsp;`
        }
      </p>
      <article class="article">
        ${data.content}
      </article>
    </div>
    
    ${data.page.url !== "/about/"
    ? /*html*/ `
      <div class="bg-dark">
        <h3 class="ctr wht prevnextH3"><a href="/posts" class="border-transparent text-blue-100 hover:text-white">Other posts</a></h3>
        ${data.nextPost && data.nextPost.url !== null
          ? /*html*/ `<p class="ctr prevnextP">
            <strong>Next</strong>: 
            <a class="next" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
          </p>`
          : ``
        }
        ${data.prevPost && data.prevPost.url !== null
          ? /*html*/ `<p class="ctr prevnextP">
            <strong>Previous</strong>: 
            <a class="previous" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
          </p>`
          : ``
        }
      </div>`
      : ``
    }
</main>  
  `
}