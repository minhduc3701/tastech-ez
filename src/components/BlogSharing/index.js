import React from "react"
import { Wrapper } from './style'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

const BlogSharing = ({ url, title }) => {
  return (
    <Wrapper>
    <FacebookShareButton url={url} title={title}>
      <FacebookIcon round size={40}/>
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title}>
      <TwitterIcon round size={40}/>
    </TwitterShareButton>
  </Wrapper>
    )
}

export default BlogSharing
