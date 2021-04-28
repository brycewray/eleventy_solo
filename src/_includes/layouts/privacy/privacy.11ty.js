exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
<main>
  ${this.billBoard(data)}
  <div class="container-narrower">
    <div class="post-line"></div>
    <article id="articleContent">
      ${data.content}
    </article>
  </div>
</main>
`
}