exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `
<main class="pt-12">
  <div class="container h-auto w-full min-w-full relative overflow-hidden gradient-titles pt-12 pb-6 px-16">
    <h1 class="text-center text-3xl md:text-left md:text-5xl lg:text-6xl text-white tracking-tighter leading-tight mb-6 px-4 md:px-0">${data.title}</h1>
    <h2 class="text-center italic text-xl md:text-left md:text-3xl lg:text-5xl text-white leading-tight tracking-tighter px-6 md:px-0">
      ${
        data.subtitle
          ? data.subtitle
          : `&nbsp;`
      }
    </h2>
    <p class="hidden not-italic md:block md:text-xl lg:text-2xl tracking-tighter md:text-base md:mt-8 mb-6 text-white">${data.description}</p>
    <p class="text-base text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
      <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${(data.page.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'})}</strong><br />
      <span class="text-sm">
      ${
        data.lastmod !== null && data.lastmod !== undefined
        ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${(data.lastmod).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'})}`
        : `&nbsp;`
      }
      </span>
    </p>
  </div>

  <div class="sm:w-5/6 md:w-2/3 lg:w-1/2 mt-10 mr-auto ml-auto px-16">
    <article>
      ${data.content}
    </article>
  </div>

  ${data.title != "Home page" && data.title != "Posts" && data.title != "The obligatory About Me page"
    ? `
      ${data.oldComments
        ? data.oldComments
        : ``
      }
      ${this.webmentionList(data)}`
    : ``
  }
  
  ${data.title != "The obligatory About Me page"
    ? `<div class="w-full px-8 md:px-0 bg-blue-deep align-middle mt-10 mb-10">
    <h3 class="text-center text-3xl tracking-tight mb-0 pt-2"><a href="/posts" class="border-transparent text-blue-200 hover:text-white italic">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? `<p class="text-center mt-2 mb-2 text-xl text-gray-200 leading-tight">
        <strong>Next</strong>: 
        <a class="border-transparent text-blue-200 hover:text-white hover:border-blue-200" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? `<p class="text-center pb-4 my-0 text-xl text-gray-200 leading-tight">
        <strong>Previous</strong>: 
        <a class="border-transparent text-blue-200 hover:text-white hover:border-blue-200" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : `<p class="text-xs my-0 py-0 leading-tight">&nbsp;</p>`
    }
    </div>`
    : ``
  }
`
}