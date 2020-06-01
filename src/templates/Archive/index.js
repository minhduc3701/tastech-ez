import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'
import { Link } from 'gatsby'
import _ from 'lodash'
import { Row, Col } from 'reactstrap'
import Categories from  '../../components/BlogCategories'
import BlogArticle from '../../components/BlogArticle'
import BlogReadmore from '../../components/BlogReadmore'

const Archive = props => {
  const [page, setPage] = useState(1)
  const perPage = 10

  let posts = _.get(props.data, 'allWordpressPost.edges', [])
  let categories = _.get(props.data, 'allWordpressCategory.edges', [])
  
  return (
    <Wrapper>
    <Container>
      <SEO title="Blog" />

      <Row>
        <Col md={8}>

        <PageTitle>{props.data.wordpressCategory.name}</PageTitle>

        <Row>
      { posts
        .slice(0, Math.min(posts.length, page * perPage))
        .map(({ node }, index) => (
          <Col sm={6} key={index}>
          <BlogArticle
            post={node}
            langUri={props.langUri}
          />
          </Col>
      )
      )}
        </Row>

        {page * perPage < posts.length &&
          <BlogReadmore onClick={() => setPage(page + 1)} />
        }
        </Col>
        <Col md={4}>
          <Categories
          categories={categories}
          langUri={props.langUri}
          langKey={props.langKey}
        />
        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}


export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          title
          excerpt
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
          polylang_current_lang
        }
      }
    }

    allWordpressCategory(filter: {count: {gt: 0}}) {
      edges {
        node {
          count
          name
          slug
          description
          parent_element {
            slug
          }
        }
      }
    }

    wordpressCategory(slug: {eq: $slug}) {
      slug
      name
    }
  
  }
  `

export default layoutWithLangKey(injectIntl(Archive))
