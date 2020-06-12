import React from "react"
import { graphql, navigate } from "gatsby"
import {layoutWithLangKey} from "../../components/layout"
import LoadingPage from '../../components/Common/LoadingPage'
import { injectIntl } from 'react-intl'

import { Wrapper } from './style'
import { Container } from '../../styles'
import { Row, Col } from 'reactstrap'
import BlogNoResult from '../../components/BlogNoResult'
import _ from 'lodash'
import { findOrder } from '../../modules/extractContent'

const SupportHome = props => {
  let categories = props.data.allWordpressCategory.nodes
  let firstParentCategory = _.get(
        categories.find(node => _.isEqual(findOrder(node.parent_element.description), '1')),
        'parent_element'
      )
  let firstCategory = !_.isEmpty(firstParentCategory) && categories.find(node => (node.parent_element.slug === firstParentCategory.slug) && _.isEqual(findOrder(node.description), '1'))

  if (_.isEmpty(firstParentCategory) || _.isEmpty(firstCategory)) {
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
    
  navigate(`${props.langUri}/support/category/${firstParentCategory.slug}/${firstCategory.slug}`)

  return <LoadingPage height="100vh" />
}


export const query = graphql`
  query($lang: String!, $domain: String!) {
    allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {parent_element: {slug: {eq: $lang}}}, link: {regex: $domain}} ) {
      nodes {
        slug
        description
        parent_element {
          slug
          description
        }
      }
    }
  }
  `

export default layoutWithLangKey(injectIntl(SupportHome))
