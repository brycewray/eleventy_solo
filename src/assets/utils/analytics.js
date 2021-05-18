const metadata = require('../../../_data/metadata.json')

var analyticsCode = ``
metadata.domain == "brycewray.com"
  ? analyticsCode = /*HTML*/`
  <!-- Fathom - beautiful, simple website analytics -->
  <script src="https://boa.brycewray.com/script.js" site="CSERHYIA" included-domains="brycewray.com,www.brycewray.com" defer></script>
  <!-- / Fathom -->

  <!-- Analytics by volument.com -->
  <script>
    function startVolument() {
      volument.start({
        token: 'c63cb179db',
        policy_url: '/privacy',
      })
    }
  </script>
  <script async src="https://cdn.volument.com/v1/volument-ui.js" onload="startVolument()"></script>  
  `
  : analyticsCode = ``

module.exports = analyticsCode