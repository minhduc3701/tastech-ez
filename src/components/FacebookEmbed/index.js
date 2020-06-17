import React, {useEffect} from 'react';

const FacebookEmbed = ({ langKey }) => {
   useEffect(() => {
    if (typeof window !== 'undefined') {
     window.fbAsyncInit = function() {
      window.FB.init({
         xfbml            : true,
         version          : 'v7.0'
       })
     }
    }

    if (typeof document !== 'undefined') {
     (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = 'https://connect.facebook.net/en_US/sdk.js';
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'))
   }

   })

  const renderFacebookPage = () => {
    let fb = ''

    switch (langKey) {
      case 'vi': 
        fb = <div className="fb-page" data-href="https://www.facebook.com/ezbiztripvietnam/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ezbiztripvietnam/" className="fb-xfbml-parse-ignore"></blockquote></div> 
        break;
      case 'id':
        fb = <div className="fb-page" data-href="https://www.facebook.com/ezbiztrip.id/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ezbiztrip.id/" className="fb-xfbml-parse-ignore"></blockquote></div>
        break;
      case 'en':
      default:
        fb = <div className="fb-page" data-href="https://www.facebook.com/ezbiztrip" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ezbiztrip" className="fb-xfbml-parse-ignore"></blockquote></div>
    }

    return fb
  }
  return(
    <div>
      <div id="fb-root" />

      {renderFacebookPage()}      
    </div>
  )
}


export default FacebookEmbed