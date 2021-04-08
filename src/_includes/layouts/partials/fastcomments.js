module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('fastcomments'), function(data) {

    return /*html*/ `

    ${data.oldComments
      ? data.oldComments
      : ``
    }
    <div>
      <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
      <div id="fastcomments-widget"></div>
      <script>
        (function () {
          var url = window.location.href;
          if (url.substr(-1) === '/') {
            url = url.substr(0, url.length - 1)
          }
          window.FastCommentsUI(document.getElementById
          'fastcomments-widget'), {
            tenantId: 'V9knlcOKk',
            urlId: url
          })
        })()
      </script>
    </div>
    `
  }
}