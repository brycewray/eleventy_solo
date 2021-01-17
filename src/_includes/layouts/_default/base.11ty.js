module.exports = function (data) {
  return /*html*/ `
<!DOCTYPE html>
<html lang="en" class="dark:bg-black">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/lazyload_17-3-0.min.js"></script>
    <script>
      var lazyLoadInstance = new LazyLoad({
        threshold: 150,
      })
    </script>
  </body>
</html>
  `
}