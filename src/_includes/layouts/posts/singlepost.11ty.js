const stringtoRet = require('../../../assets/utils/lazy-picture.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  <div class="text-center pt-12 lg:pt-20 mx-auto px-6 lg:px-0 md:w-4/5 lg:w-2/3 2xl:w-1/2">
    <h1 class="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl">${data.title}</h1>
    <h2 class="mt-6 lg:mt-8 2xl:mt-12 text-2xl lg:text-4xl 2xl:text-5xl">
        ${
          data.subtitle
            ? data.subtitle
            : /*html*/ `&nbsp;`
        }
    </h2>
    <p class="mt-8 lg:mt-12 2xl:mt-16 text-xl lg:text-2xl 2xl:text-3xl">${data.description}</p>
    <p class="mt-4 lg:mt-6 2xl:mt-8"><strong>${this.pub_lastmod(data.page.date)}</strong><br />
      <span class="text-base">
      ${
        data.lastmod !== null && data.lastmod !== undefined
        ? /*html*/ `Last modified ${this.pub_lastmod(data.lastmod)}`
        : /*html*/ `&nbsp;`
      }
      </span>
    </p>
  </div>   
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 2xl:w-5/12 mt-8 mx-auto px-6 lg:px-0">
    ${stringtoRet(data.featured_image, data.featured_image_alt, data.featured_image_width, data.featured_image_height)}
    <p class="mt-2 text-center text-xs">
      ${ data.featured_image_caption 
        ? `${data.featured_image_caption}`
        : /*html*/ `&nbsp;`
      }
    </p>
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
  
  ${data.title != "About me"
    ? /*html*/ `<div class="w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
    <h3 class="text-center text-3xl tracking-normal mb-2 pt-2"><a href="/posts" class="border-transparent text-blue-100 hover:text-white">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? /*html*/ `<p class="text-center my-2 text-xl text-white leading-tight tracking-tight">
        <strong>Next</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? /*html*/ `<p class="text-center pb-4 my-2 text-xl text-white leading-tight tracking-tight">
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