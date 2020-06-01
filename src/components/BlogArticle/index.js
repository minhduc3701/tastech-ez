import React from "react"
import { Link } from 'gatsby'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import { Wrapper, Thumbnail, Categories, Title, Excerpt, Meta } from './style'
import { Icon, InlineIcon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'
import AlternativeImage from '../../components/AlternativeImage'

const BlogArticle = props => {
  const { post } = props

  return (
    <Wrapper>
      <Thumbnail>
        <Link to={`${props.langUri}/blog/${post.slug}`}>
          <AlternativeImage
            ratio={250/350}
            imageSrc={post.featured_media.source_url}
          />
        </Link>
      </Thumbnail>
      {
              !_.isEmpty(post.categories) &&
          <Categories>
            {post.categories.map(cat => <Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link>)}
          </Categories>
      }
      <Title>
        <Link to={`${props.langUri}/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
      </Title>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      
      <Meta>
        <span>
          <Icon icon={baselineAccessTime} />
          {post.date}
        </span>
        <span>
          {_.round(post.content.length * 0.0008 || 1)}
          &nbsp;
          <FormattedMessage id="blog.minRead" />
        </span>
      </Meta>
    </Wrapper>
  )
}

export default BlogArticle