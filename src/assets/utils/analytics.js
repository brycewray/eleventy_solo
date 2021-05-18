const metadata = require('../../../_data/metadata.json')

var analyticsCode = ``
metadata.domain == "brycewray.com"
  ? analyticsCode = /*HTML*/`
  <!-- Fathom - beautiful, simple website analytics -->
  <script src="https://boa.brycewray.com/script.js" site="CSERHYIA" included-domains="brycewray.com,www.brycewray.com" defer></script>
  <!-- / Fathom --> 
  `
  : analyticsCode = ``

module.exports = analyticsCode