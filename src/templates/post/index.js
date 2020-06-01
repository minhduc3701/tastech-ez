import React from "react"
import { graphql } from "gatsby"
import { Container } from '../../styles'
import _ from 'lodash'
import {layoutWithLangKey} from "../../components/layout"
import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, FeatureImage, PostEntry, PostTitle, PostHeader, Meta, Categories, PostContent } from './style'
import { Icon, InlineIcon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'

import { Link } from 'gatsby'

const Post = props => {
  const post = props.data.wordpressPost

  return (
    <Wrapper>
      {_.get(post, 'featured_media.source_url') &&
        <FeatureImage src={post.featured_media.source_url}></FeatureImage>
      }

    <Container>
      <PostEntry>
        <PostHeader>
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

          {
              !_.isEmpty(post.categories) &&
          <Categories>
            {post.categories.map(cat => <Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link>)}
          </Categories>
      }

        </PostHeader>
        <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostEntry>
    </Container>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        source_url
      }
      categories {
        name
        slug
      }
    }

  }
`

export default layoutWithLangKey(injectIntl(Post))
