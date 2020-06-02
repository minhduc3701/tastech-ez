import React from "react"
import { Wrapper } from './style'
import BlogSearch from '../BlogSearch'
import BlogCategories from '../BlogCategories'
import BlogBannerRight from '../BlogBannerRight'
import BlogHotNews from '../BlogHotNews'

const BlogSidebar = props => (
  <Wrapper>
    <BlogSearch {...props} />
    <BlogCategories {...props} />
    <BlogHotNews {...props} />
    <BlogBannerRight {...props} />
  </Wrapper>
  )

export default BlogSidebar
