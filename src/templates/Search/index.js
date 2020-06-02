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
import BlogSidebar from  '../../components/BlogSidebar'
import BlogArticle from '../../components/BlogArticle'
import BlogReadmore from '../../components/BlogReadmore'

const Archive = props => {
  const [page, setPage] = useState(1)
  const perPage = 10

  let posts = _.get(props.data, 'allWordpressPost.edges', [])
  
  console.log(props.location)
  return (
    <Wrapper>
    <Container>
      <SEO title="Blog" />

      <Row>
        <Col md={8}>

        <PageTitle>Search</PageTitle>

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
          <BlogSidebar
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
  query {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {categories: {elemMatch: {slug: {eq: ""}}}}) {
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
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  
  }
  `

export default layoutWithLangKey(injectIntl(Archive))
