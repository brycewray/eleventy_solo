exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
  <main>
    ${this.billBoard(data)}

    <div class="container-narrower">
      <article>
        <div class="post-line"></div>
        ${data.content}
    </div>
  </main>
  `
}