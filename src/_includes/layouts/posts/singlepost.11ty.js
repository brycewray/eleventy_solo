const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}  
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 2xl:w-5/12 mt-8 mx-auto px-6 lg:px-0">
    ${stringtoRet(data.featured_image, data.featured_image_alt, data.featured_image_width, data.featured_image_height)}
    <p class="mt-2 mb-6 md:mb-8 lg:mb-12 text-center text-xs">
      ${ data.featured_image_caption 
        ? `${data.featured_image_caption}`
        : /*html*/ `&nbsp;`
      }
    </p>
    <article id="articleContent">
      ${data.content}

      ${data.page.url !== "/about/"
      ? /*html*/ `
        ${data.oldComments
          ? data.oldComments
          : ``
        }
        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
        <div id="fastcomments-widget"></div>
        <script>
          (function () {
            var url = window.location.href
            if (url.substr(-1) === '/') {
              url = url.substr(0, url.length - 1)
            }
            window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
              tenantId: 'V9knlcOKk',
              urlId: url
            })
          })()
        </script>`
      : ``
      }
    </article>
  </div>
  
  ${data.page.url !== "/about/"
    ? /*html*/ `
      <div class="w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
        <h3 class="text-center text-3xl tracking-normal mb-2 pt-2"><a href="/posts" class="border-transparent text-blue-100 hover:text-white">Other posts</a></h3>
        ${data.nextPost && data.nextPost.url !== null
          ? /*html*/ `<p class="text-center my-2 text-xl text-white leading-tight">
            <strong>Next</strong>: 
            <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
          </p>`
          : ``
        }
        ${data.prevPost && data.prevPost.url !== null
          ? /*html*/ `<p class="text-center pb-4 my-2 text-xl text-white leading-tight">
            <strong>Previous</strong>: 
            <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
          </p>`
          : /*html*/ `<p class="text-xs my-0 py-0 leading-tight">&nbsp;</p>`
        }
      </div>`
      : ``
    }
</main>
`
}