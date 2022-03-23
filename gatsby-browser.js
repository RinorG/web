/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it
require('normalize.css')
require('phosphor-icons/src/css/phosphor.css')
require('prismjs/themes/prism.css')
require('remark-admonitions/styles/classic.css')

require('./src/styles/global.css')
require('./src/styles/grid.css')
require('./src/styles/icons.css')
require('./src/styles/themes/default.css')
require('./src/styles/typography.css')

exports.onClientEntry = () => {
  if (process.env.NODE_ENV === 'production') {
    const script = document.createElement('script')
    script.src = '/scripts.js'
    script.async = true

    script.onload = function () {
      window.initAnalytics('GTM-5JC2SVK')
    }

    document.body.appendChild(script)
  }
}
