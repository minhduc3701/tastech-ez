import React from "react"
import { graphql, navigate } from "gatsby"
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
import { findOrder } from '../../modules/extractContent'

const SupportHome = props => {
  let categories = props.data.allWordpressCategory.nodes
  let firstCategory = categories.filter(node => _.isEqual(findOrder(node.parent_element.description), '1'))[0]

  if (!_.get(firstCategory, 'parent_element.slug') || !_.get(firstCategory, 'slug')) {
    return (
      <Wrapper>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <BlogNoResult />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }

  if (typeof window === 'undefined') {
    return <div></div>
  }
    
  navigate(`${props.langUri}/support/category/${_.get(firstCategory, 'parent_element.slug')}/${_.get(firstCategory, 'slug')}`)

  return <div></div>
}


export const query = graphql`
  query($lang: String!, $domain: String!) {
    allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {parent_element: {slug: {eq: $lang}}}, link: {regex: $domain}} ) {
      nodes {
        slug
        parent_element {
          slug
          description
        }
      }
    }
  }
  `

export default layoutWithLangKey(injectIntl(SupportHome))
