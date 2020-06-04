import React from "react"
import { graphql, navigate } from "gatsby"
import { Container } from '../../styles'
import _ from 'lodash'
import {layoutWithLangKey} from "../../components/layout"
import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, FeatureImage, CurrentPost, PostTitle, PostHeader, Meta, Categories, PostContent, PostFooter, RelatedPosts, SectionTitle } from './style'
import { Icon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'

import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import BlogArticle from '../../components/BlogArticle'
import BlogReadingTime from '../../components/BlogReadingTime'

const Post = props => {
  const currentPost = props.data.wordpressPost

  if (props.langKey !== currentPost.polylang_current_lang) {
    navigate(`${props.langUri}/blog`)
  }

  const relatedPost = props.data.allWordpressPost.edges
    .filter(({node}) => {
      if (node.polylang_current_lang !== currentPost.polylang_current_lang) {
        return false
      }

      for (let cat of node.categories) {
        for (let currentCat of currentPost.categories) {
          if (cat.slug === currentCat.slug) {
            return true
          }
        }
      }

      return false
    })
    .slice(0, 3)  

  return (
    <Wrapper>
      {_.get(currentPost, 'featured_media.source_url') &&
        <FeatureImage src={currentPost.featured_media.source_url}></FeatureImage>
      }

    <Container>
      <Row className="justify-content-center">
        <Col lg={10}>
      <CurrentPost>
        <PostHeader>
          <Meta>
            <span>
              <Icon icon={baselineAccessTime} />
              {currentPost.date}
            </span>
            <BlogReadingTime post={currentPost} />
          </Meta>

          {
              !_.isEmpty(currentPost.categories) &&
          <Categories>
            {currentPost.categories
              .map(cat => <Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link>)}
          </Categories>
      }

        </PostHeader>
        <PostTitle dangerouslySetInnerHTML={{ __html: currentPost.title }} />
        <PostContent dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          
        <PostFooter>
          <p className="info">
            <strong><FormattedMessage id="blog.editor" /></strong>
            {currentPost.author.name}
          </p>
        </PostFooter>
      </CurrentPost>
              </Col>
      </Row>

      {!_.isEmpty(relatedPost) && (
      <RelatedPosts>
        <SectionTitle>
          <FormattedMessage id="blog.relatedPosts" />
        </SectionTitle>
        <Row>
          { relatedPost.map(({ node }, index) => (
              <Col sm={4} key={index}>
              <BlogArticle
                post={node}
                langUri={props.langUri}
              />
              </Col>
          )
          )}
        </Row>
      </RelatedPosts>
      )}
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
      author {
        name
      }
      polylang_current_lang
    }

    allWordpressPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            source_url
          }
          categories {
            name
            slug
          }
          polylang_current_lang
        }
      }
    }

  }
`

export default layoutWithLangKey(injectIntl(Post))
