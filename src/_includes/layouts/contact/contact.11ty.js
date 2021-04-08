exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}  
  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 2xl:w-5/12 mt-8 mx-auto px-6 lg:px-0">
    <div class="border-t-2 border-blue-700 block mt-0 mx-auto mb-8 w-60"></div>
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
</main>
`
}