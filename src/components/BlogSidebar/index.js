import React from "react"
import { Wrapper } from './style'
import BlogSearchBox from '../BlogSearchBox'
import BlogCategories from '../BlogCategories'
import BlogBannerRight from '../BlogBannerRight'
import BlogHotNews from '../BlogHotNews'
import FacebookEmbed from '../FacebookEmbed'

const BlogSidebar = props => {
  return (
  <Wrapper>
    <BlogSearchBox {...props} />
    <BlogCategories {...props} />
    <BlogHotNews {...props} />
    <BlogBannerRight {...props} />
    <FacebookEmbed {...props} />
  </Wrapper>
  )
}

export default BlogSidebar
