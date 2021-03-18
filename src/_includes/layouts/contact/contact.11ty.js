exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  <div class="text-center pt-12 lg:pt-20 mx-auto px-6 lg:px-0 md:w-4/5 lg:w-2/3 2xl:w-1/2">
    <h1 class="text-3xl lg:text-6xl 2xl:text-8xl">${data.title}</h1>
    ${data.subtitle
      ? /*html*/ `<h2 class="mt-6 lg:mt-8 2xl:mt-12 text-2xl lg:text-4xl 2xl:text-5xl">${data.subtitle}</h2>`
      : ``
    }
    ${data.description
      ? /*html*/ `<p class="mt-8 lg:mt-12 2xl:mt-16 text-xl lg:text-2xl 2xl:text-3xl">${data.description}</p>`
      : ``
    }
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
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16" style="max-width: 60ch;">
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
</main>
`
}