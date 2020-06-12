import React from "react"
import { Link } from 'gatsby'
import _ from 'lodash'

import { Wrapper, Thumbnail, Categories, Title, Excerpt, Meta } from './style'
import { Icon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'
import AlternativeImage from '../AlternativeImage'
import BlogReadingTime from '../BlogReadingTime'

const BlogArticle = props => {
  const { post } = props
  return (
    <Wrapper>
      {!_.isEmpty(_.get(post, 'featured_media.source_url')) &&
        <Thumbnail>
          <Link
            to={`${props.langUri}/blog/${post.slug}`}
            className="image-hover"
          >
            <AlternativeImage
              ratio={250/350}
              imageSrc={_.get(post, 'featured_media.source_url')}
            />
          </Link>
        </Thumbnail>
      }

      {
          !_.isEmpty(post.categories) &&
           <Categories>
             <ul>
             {post.categories
               .map(cat => <li><Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link></li>)}
             </ul>
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
        <BlogReadingTime post={post} />
      </Meta>
    </Wrapper>
  )
}

export default BlogArticle