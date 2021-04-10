module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('billBoard', function(data) {

    return /*html*/ `
    <div class="text-center">
      <h1 class="tracking-tight text-4xl lg:text-7xl pt-8 lg:pt-16">${data.title}</h1>      
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
    `
})

}