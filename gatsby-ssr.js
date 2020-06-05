const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
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
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '724428344760952'); 
        fbq('track', 'PageView');
     `
      }}
    />,
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
        <img height="1" width="1" 
        src="https://www.facebook.com/tr?id=724428344760952&ev=PageView
        &noscript=1"/>
     `
      }}
    />

  ])
}
