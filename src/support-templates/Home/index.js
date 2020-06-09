import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'

import { Wrapper } from './style'
import { Container } from '../../styles'
import { Row, Col } from 'reactstrap'
import SupportList from '../../components/SupportList'
import SupportCategories from '../../components/SupportCategories'
import SupportSearchBox from '../../components/SupportSearchBox'
import BlogNoResult from '../../components/BlogNoResult'
import _ from 'lodash'

const Blog = props => {
  let posts = props.data.allWordpressPost.nodes

  return (
    <Wrapper>
      <SEO title="Support" />

      <SupportSearchBox langUri={props.langUri} />
      <SupportCategories
        langUri={props.langUri}
        langKey={props.langKey}
      />

    <Container>
      <Row className="justify-content-center">
        <Col lg={10}>
          {_.isEmpty(posts) ?
           <BlogNoResult />
           :
          <SupportList 
            posts={posts}
            langUri={props.langUri}
          />
        }
        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}


export const query = graphql`
  query($lang: String!, $domain: String!) {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {polylang_current_lang: {eq: $lang}, _links: {about: {elemMatch: {href: {regex: $domain}}}}} ) {
      nodes {
          title
          content
          slug
          categories {
            name
            slug
          }
          polylang_current_lang
      }
    }
  }
  `

export default layoutWithLangKey(injectIntl(Blog))
