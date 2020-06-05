import React, { useEffect } from "react"
import { Wrapper } from './style'
import BlogSearchBox from '../BlogSearchBox'
import BlogCategories from '../BlogCategories'
import BlogBannerRight from '../BlogBannerRight'
import BlogHotNews from '../BlogHotNews'

import { FacebookProvider, Page, Like } from 'react-facebook'

const BlogSidebar = props => {

  // 103365231056941

  useEffect(() => {
    // if (window.FB) {
    //   var el = this.refs.fbplugins.getDOMNode();
    //   window.FB.XFBML.parse(el);
    // }
  }, [])

  return (
  <Wrapper>
    <BlogSearchBox {...props} />
    <BlogCategories {...props} />
    <BlogHotNews {...props} />
    <BlogBannerRight {...props} />
    
    <FacebookProvider appId="103365231056941">
      <Page href="https://www.facebook.com" tabs="timeline" />
      <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
    </FacebookProvider> 
  </Wrapper>
  )
}

export default BlogSidebar
