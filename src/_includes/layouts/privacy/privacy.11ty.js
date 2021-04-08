exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16" style="max-width: 60ch;">
    <div class="border-t-2 border-blue-700 block mt-0 mx-auto mb-8 w-60"></div>
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
</main>
`
}