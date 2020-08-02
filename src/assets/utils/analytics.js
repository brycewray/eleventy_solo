const metadata = require('../../../_data/metadata.json')

var analyticsCode = ``
metadata.domain == "brycewray.com"
  ? analyticsCode = `
  <!-- Fathom - beautiful, simple website analytics -->
  <script src="https://cdn.usefathom.com/script.js" site="CSERHYIA" excluded-domains="localhost" defer></script>
  <!-- / Fathom -->
  `
  : analyticsCode = ``

module.exports = analyticsCode