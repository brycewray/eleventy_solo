const metadata = require('../../../_data/metadata.json')

var analyticsCode = ``
metadata.domain == "brycewray.com"
  ? analyticsCode = `
  <!-- Fathom - beautiful, simple website analytics -->
  <script src="https://boa.brycewray.com/script.js" site="CSERHYIA" included-domains="brycewray.com,www.brycewray.com" defer></script>
  <!-- / Fathom -->

  <!-- Analytics by volument.com -->
  <script async src="https://cdn.volument.com/v1/volument-ui.js" onload="volument('c63cb179db')"></script>  
  `
  : analyticsCode = ``

module.exports = analyticsCode