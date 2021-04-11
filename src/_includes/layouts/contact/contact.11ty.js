exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  <div class="text-center px-4 md:px-6 lg:px-8 2xl:px-12">
    <h1 class="tracking-tight text-4xl md:text-5xl lg:text-7xl pt-8 lg:pt-16">${data.title}</h1>      
    ${
      data.subtitle
        ? /*html*/ `
        <h2 class="mt-6 lg:mt-8 2xl:mt-12 text-2xl lg:text-4xl 2xl:text-5xl">
          ${data.subtitle}
        </h2>
        `
        : ``
    }
    <p class="mt-8 lg:mt-12 2xl:mt-16 text-xl lg:text-2xl 2xl:text-3xl">${data.description}</p>
    <p class="text-lg lg:text-xl mt-4 lg:mt-6 2xl:mt-8"><strong>${this.pub_lastmod(data.page.date)}</strong>
      ${
        data.lastmod !== null && data.lastmod !== undefined
        ? /*html*/ `<br /><span class="text-base">Last modified ${this.pub_lastmod(data.lastmod)}</span>`
        : ``
      }
    </p>
  </div>
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 2xl:w-5/12 mt-8 mx-auto px-6 lg:px-0">
    <div class="border-t-2 border-blue-700 block mt-0 mx-auto mb-8 w-60"></div>
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
</main>
`
}