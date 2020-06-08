import React from "react"
import { graphql, navigate } from "gatsby"
import { Container } from '../../styles'
import _ from 'lodash'
import {layoutWithLangKey} from "../../components/layout"
import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, FeatureImage, CurrentPost, PostTitle, PostHeader, Meta, Categories, Tags, PostContent, PostFooter, RelatedPosts, SectionTitle, BackButton, Breadcrumb } from './style'
import { Icon } from '@iconify/react'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'
import baselineArrowBack from '@iconify/icons-ic/baseline-arrow-back'
import bxHomeSmile from '@iconify/icons-bx/bx-home-smile'
import baselineKeyboardArrowRight from '@iconify/icons-ic/baseline-keyboard-arrow-right'

import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import BlogArticle from '../../components/BlogArticle'
import BlogReadingTime from '../../components/BlogReadingTime'
import BlogSharing from '../../components/BlogSharing'
import SEO from "../../components/seo"

const extractContent = str => {
  let span = document.createElement('span')
  span.innerHTML = str
  return span.textContent || span.innerText
};

const Post = props => {
  let currentPost = props.data.wordpressPost

  if (props.langKey !== currentPost.polylang_current_lang) {
    if (typeof window === 'undefined') {
      return <div></div>
    }

    navigate(`${props.langUri}/blog`)
  }

  let relatedPost = props.data.allWordpressPost.edges
    .filter(({node}) => {
      if (node.polylang_current_lang !== currentPost.polylang_current_lang || node.slug === currentPost.slug) {
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

    let currentTags = currentPost.tags && currentPost.tags.filter(tag => !_.includes(['top', 'right', 'hot'], tag.slug))
    
  return (
    <Wrapper>
      <SEO
        title={extractContent(currentPost.title)}
        description={""}
        lang={props.langKey}
        uri={props.uri}
        image={_.get(currentPost, 'featured_media.source_url')}
      />

      {_.get(currentPost, 'featured_media.source_url') &&
        <FeatureImage src={currentPost.featured_media.source_url}></FeatureImage>
      }

      {(typeof window !== 'undefined') &&
        <BackButton
          onClick={() => window.history.back()}
          className={_.get(currentPost, 'featured_media.source_url') ? '' : 'relative'}
        >
        <Icon icon={baselineArrowBack} />
      </BackButton>
    }

    <Container>
      <CurrentPost>
      <Row>
        <Col lg={{size: 10, order: 2}}>
              <PostHeader>
                <Breadcrumb>
                  <Link to={`${props.langUri}/blog`}>
                    <Icon icon={bxHomeSmile} />
                    <FormattedMessage id="blog.homeBlog" />
                  </Link>

                {
                  !_.isEmpty(currentPost.categories) &&
                  <React.Fragment>
                  <Icon icon={baselineKeyboardArrowRight} />
                  <Categories>
                    <ul>
                    {currentPost.categories
                      .map(cat => <li><Link key={cat.slug} to={`${props.langUri}/blog/category/${cat.slug}`}>{cat.name}</Link></li>)}
                      </ul>
                  </Categories>
                  </React.Fragment>
                }
                </Breadcrumb>
                <Meta>
                  <span>
                    <Icon icon={baselineAccessTime} />
                    {currentPost.date}
                  </span>
                  <BlogReadingTime post={currentPost} />
                </Meta>

              </PostHeader>
              <PostTitle dangerouslySetInnerHTML={{ __html: currentPost.title }} />
              <PostContent dangerouslySetInnerHTML={{ __html: currentPost.content }} />

              {!_.isEmpty(currentTags) &&
              <Tags>
                  {currentTags
                    .map(tag => <Link key={tag.slug} to={`${props.langUri}/blog/tag/${tag.slug}`}>{tag.name}</Link>)}
              </Tags>
            }
              <PostFooter>
                <p className="info">
                  <strong><FormattedMessage id="blog.editor" /></strong>
                  {currentPost.author.name}
                </p>
              </PostFooter>
          </Col>

        <Col lg={{size: 1, order: 1}}>
          <BlogSharing
            url={props.location.href}
            title={currentPost.title}
          />
        </Col>
      </Row>
      </CurrentPost>

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
      slug
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        source_url
      }
      categories {
        name
        slug
      }
      tags {
        slug
        name
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
