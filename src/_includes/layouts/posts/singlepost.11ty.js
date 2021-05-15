const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'base'
}

exports.render = function (data) {  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { featured_image, featured_image_alt, featured_image_caption, featured_image_width, featured_image_height, content, page, prevPost, nextPost } = data

  return /*html*/ `
  <main>
    ${this.billBoard(data)}

    <div class="container-narrower">
    ${stringtoRet(data.featured_image, data.featured_image_alt, data.featured_image_width, data.featured_image_height)}
    <p class="ctr legal">
      ${ data.featured_image_caption 
        ? `${data.featured_image_caption}`
        : /*html*/ `&nbsp;`
      }
    </p>
    <article class="article">
        ${content}
      </article>
    </div>
    
    ${page.url !== "/about/"
    ? /*html*/ `
      <div class="bg-dark">
        <h3 class="ctr wht prevnextH3"><a href="/posts" class="border-transparent text-blue-100 hover:text-white">Other posts</a></h3>
        ${nextPost && nextPost.url !== null
          ? /*html*/ `<p class="ctr prevnextP">
            <strong>Next</strong>: 
            <a class="next" href="${nextPost.url}">${nextPost.data.title}</a>
          </p>`
          : ``
        }
        ${prevPost && prevPost.url !== null
          ? /*html*/ `<p class="ctr prevnextP">
            <strong>Previous</strong>: 
            <a class="previous" href="${prevPost.url}">${prevPost.data.title}</a>
          </p>`
          : ``
        }
      </div>`
      : ``
    }
</main>  
  `
}