module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/lazysizes.min.js"></script>
    <script src="/assets/js/ls.blur-up.min.js"></script>
    <script src="/assets/js/flying-pages.min.js"></script>
    <script src="/assets/js/twitterMeta.js"></script>
  </body>
</html>
  `
}