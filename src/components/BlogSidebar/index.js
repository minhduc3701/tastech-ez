import React from "react"
import { Wrapper } from './style'
import BlogSearchBox from '../BlogSearchBox'
import BlogCategories from '../BlogCategories'
import BlogBannerRight from '../BlogBannerRight'
import BlogHotNews from '../BlogHotNews'

import { FacebookProvider, Page, Like } from 'react-facebook'

const BlogSidebar = props => {
  return (
  <Wrapper>
    <BlogSearchBox {...props} />
    <BlogCategories {...props} />
    <BlogHotNews {...props} />
    <BlogBannerRight {...props} />
    
    {/* not work */}
    <FacebookProvider appId="103365231056941">
      <Page href="https://www.facebook.com/ezbiztrip" tabs="timeline" />
      <Like href="http://www.facebook.com/ezbiztrip" colorScheme="dark" showFaces share />
    </FacebookProvider> 

  </Wrapper>
  )
}

export default BlogSidebar
