import React from "react"
import { Wrapper } from './style'
import BlogSearchBox from '../BlogSearchBox'
import BlogCategories from '../BlogCategories'
import BlogBannerRight from '../BlogBannerRight'
import BlogHotNews from '../BlogHotNews'

const BlogSidebar = props => (
  <Wrapper>
    <BlogSearchBox {...props} />
    <BlogCategories {...props} />
    <BlogHotNews {...props} />
    <BlogBannerRight {...props} />
  </Wrapper>
  )

export default BlogSidebar
