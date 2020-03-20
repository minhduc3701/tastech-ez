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
    />
  ])
}
