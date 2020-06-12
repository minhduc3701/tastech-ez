import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'

import { Wrapper } from './style'
import { Container } from '../../styles'
import { Row, Col } from 'reactstrap'
import BlogBannerTop from '../../components/BlogBannerTop'
import BlogSidebar from '../../components/BlogSidebar'
import BlogList from '../../components/BlogList'

const BlogHome = props => {
  let posts = props.data.allWordpressPost.nodes

  return (
    <Wrapper>
    <Container>
      <SEO title="Blog" />

      <BlogBannerTop
          langUri={props.langUri}
          langKey={props.langKey}
        />


      <Row>
        <Col md={8}>
          <BlogList 
            posts={posts}
            langUri={props.langUri}
          />
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
  query($lang: String!, $domain: String!) {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {polylang_current_lang: {eq: $lang}, link: {regex: $domain}} ) {
      nodes {
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
  `

export default layoutWithLangKey(injectIntl(BlogHome))
