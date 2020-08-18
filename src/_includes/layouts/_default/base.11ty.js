module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/lazyload.min.js"></script>
    <script>
      var lazyLoadInstance = new LazyLoad({
        threshold: 150,
        use_native: true,
      })
    </script>
  </body>
</html>
  `
}