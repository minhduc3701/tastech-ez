import React from "react"
import { graphql, navigate } from "gatsby"
import { Container } from '../../styles'
import _ from 'lodash'
import {layoutWithLangKey} from "../../components/layout"
import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, FeatureImage, PostEntry, PostTitle, PostHeader, Meta, Categories, PostContent, PostFooter } from './style'
import { Icon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'

import { Link } from 'gatsby'

const Post = props => {
  const post = props.data.wordpressPost
  
    if (props.langKey !== post.polylang_current_lang) {
      navigate(`${props.langUri}/blog`)
    }

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
              {_.ceil(post.fields.readingTime.minutes)}
              &nbsp;
              <FormattedMessage id="blog.minRead" />
            </span>
          </Meta>

          {
              !_.isEmpty(post.categories) &&
          <Categories>
            {post.categories
              .map(cat => <Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link>)}
          </Categories>
      }

        </PostHeader>
        <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          
        <PostFooter>
          <p className="info">
            <strong><FormattedMessage id="blog.editor" /></strong>
            {post.author.name}
          </p>
        </PostFooter>
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
      fields {
        readingTime {
          minutes
        }
      }
      author {
        name
      }
      polylang_current_lang
    }

  }
`

export default layoutWithLangKey(injectIntl(Post))
