exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `
<main class="pt-12">
  <div class="container h-auto w-full min-w-full relative overflow-hidden gradient-titles pt-12 pb-6 px-4 md:px-16 xb:px-20">
    <h1 class="text-center text-4xl md:text-left md:text-5xl lg:text-6xl xb:text-8xl tracking-tight leading-tight mb-6 px-4 md:px-0 text-white">${data.title}</h1>
    <h2 class="text-center text-2xl md:text-left md:text-3xl lg:text-5xl xb:text-6xl leading-tight tracking-tight px-6 md:px-0 text-white">
      ${
        data.subtitle
          ? data.subtitle
          : `&nbsp;`
      }
    </h2>
    <p class="font-sans hidden not-italic md:block md:text-2xl xb:text-4xl tracking-tight md:mt-8 mb-6 text-white">${data.description}</p>
    <p class="font-sans text-base xb:text-lg text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
      <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${(data.page.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'})}</strong><span style="font-variant: small-caps;">&nbsp;utc</span><br />
      <span class="text-sm xb:text-base">
      ${
        data.lastmod !== null && data.lastmod !== undefined
        ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${(data.lastmod).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'})}<span style="font-variant: small-caps;">&nbsp;utc</span>`
        : `&nbsp;`
      }
      </span>
    </p>
  </div>

  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16">
    <article>
      ${data.content}
    </article>
  </div>
</main>
`
}