const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html:`
        ;(function(d, w, c) {
          w.ChatraID = 'kz5bSkjXmTZxr23N7'
          var s = d.createElement('script')
          w[c] =
            w[c] ||
            function() {
              ;(w[c].q = w[c].q || []).push(arguments)
            }
          s.async = true
          s.src = 'https://call.chatra.io/chatra.js'
          if (d.head) d.head.appendChild(s)
        })(document, window, 'Chatra')

        window.ChatraSetup = {
          colors: {
            buttonText: '#f0f0f0' /* chat button text color */,
            buttonBg: '#0f73ee' /* chat button background color */
          }
        }
     `
     }}
    />,
    <script
      dangerouslySetInnerHTML={{
        __html:`
        ;(function(h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function() {
              ;(h.hj.q = h.hj.q || []).push(arguments)
            }
          h._hjSettings = { hjid: 1539809, hjsv: 6 }
          a = o.getElementsByTagName('head')[0]
          r = o.createElement('script')
          r.async = 1
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
          a.appendChild(r)
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
     `
     }}
    />
  ])
}
