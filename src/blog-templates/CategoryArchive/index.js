import React from "react"
import { graphql, navigate } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import BlogSidebar from  '../../components/BlogSidebar'
import BlogList from '../../components/BlogList'

const CategoryArchive = props => {

  let posts = _.get(props.data, 'allWordpressPost.edges', [])
  let currentCategoryLang = _.get(props, 'data.wordpressCategory.parent_element.slug')

   if (props.langKey !== currentCategoryLang) {
     navigate(`${props.langUri}/blog`)
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
      <Row>
        <Col md={8}>

        <PageTitle>{_.get(props, 'data.wordpressCategory.name')}</PageTitle>

          <BlogList 
            posts={posts}
            langUri={props.langUri}
          />
        </Col>
        <Col md={4}>
          <BlogSidebar
          langUri={props.langUri}
          langKey={props.langKey}
          currentCategorySlug={_.get(props, 'data.wordpressCategory.slug')}
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
