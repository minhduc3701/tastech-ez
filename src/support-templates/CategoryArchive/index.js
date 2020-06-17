import React from "react"
import { graphql, navigate } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { Wrapper } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import SupportList from '../../components/SupportList'
import SupportCategories from '../../components/SupportCategories'
import SupportSearchBox from '../../components/SupportSearchBox'

const CategoryArchive = props => {

  let posts = _.get(props.data, 'allWordpressPost.nodes', [])
  let currentCategoryLang = _.get(props, 'data.wordpressCategory.parent_element.parent_element.slug')

   if (currentCategoryLang !== props.langKey) {
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
    
    <SupportSearchBox langUri={props.langUri} />
    <SupportCategories
      langUri={props.langUri}
      langKey={props.langKey}
      currentCategorySlug={_.get(props, 'data.wordpressCategory.slug')}
      currentParentCategory={_.get(props, 'data.wordpressCategory.parent_element')}
    />
    <Container>
      <Row className="justify-content-center">
        <Col lg={10}>
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
    allWordpressPost(sort: {fields: tags, order: ASC}, filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
          title
          content
          slug
          categories {
            name
            slug
          }
      }
    }

    wordpressCategory(slug: {eq: $slug}) {
      slug
      parent_element {
        slug
        name
        description
        parent_element {
          slug
        }
      }
    }
  
  }
  `

export default layoutWithLangKey(injectIntl(CategoryArchive))
