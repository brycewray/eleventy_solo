module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  ${this.headTag(data)}
  <body>
    <p class="ieOnly text-center">Sorry, this site&rsquo;s CSS&mdash;and many others&rsquo;&mdash;no longer fully supports Internet&nbsp;Explorer.</p>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
    <script src="/assets/js/lazysizes.min.js"></script>
    <script src="/assets/js/flying-pages.min.js"></script>
    <script src="/assets/js/twitterMeta.js"></script>
  </body>
</html>
  `
}
