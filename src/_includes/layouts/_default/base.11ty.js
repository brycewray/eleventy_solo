module.exports = function (data) {
  return /*html*/ `
<!DOCTYPE html>
<html lang="en">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
  </body>
</html>
  `
}