module.exports = {
  currentYear() {
    const today = new Date()
    return today.getFullYear()
  }
}
// thanks to https://piccalil.li/quick-tip/dynamic-footer-copyright-date-in-eleventy