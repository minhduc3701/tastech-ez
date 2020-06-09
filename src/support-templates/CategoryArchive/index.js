import React from "react"
import { graphql, navigate } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import SupportList from '../../components/SupportList'

const CategoryArchive = props => {

  let posts = _.get(props.data, 'allWordpressPost.nodes', [])
  let currentCategoryLang = _.get(props, 'data.wordpressCategory.parent_element.slug')

   if (props.langKey !== currentCategoryLang) {
    if (typeof window === 'undefined') {
      return <div></div>
    }
     
    navigate(`${props.langUri}/support`)
   }

  return (
    <Wrapper>
    <SEO
        title={_.get(props, 'data.wordpressCategory.name')}
        description={""}
        lang={props.langKey}
        uri={props.uri}
      />

    <Container>
      <Row className="justify-content-center">
        <Col lg={10}>
          <PageTitle>{_.get(props, 'data.wordpressCategory.name')}</PageTitle>
          <SupportList 
            posts={posts}
            langUri={props.langUri}
          />
        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}


export const query = graphql`
  query($slug: String!) {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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

    wordpressCategory(slug: {eq: $slug}) {
      slug
      name
      parent_element {
        slug
      }
    }
  
  }
  `

export default layoutWithLangKey(injectIntl(CategoryArchive))
