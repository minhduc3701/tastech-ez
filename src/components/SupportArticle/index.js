import React from "react"
import { Link } from 'gatsby'
import _ from 'lodash'

import { Wrapper, Thumbnail, Categories, Title, Excerpt, Meta } from './style'
import { Icon } from '@iconify/react'

const SupportArticle = props => {
  const { post } = props
  return (
    <Wrapper>
      <Title>
        <Link to={`${props.langUri}/support/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
      </Title>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </Wrapper>
  )
}

export default SupportArticle