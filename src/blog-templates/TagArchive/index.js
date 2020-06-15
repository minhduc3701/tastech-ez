import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import BlogSidebar from  '../../components/BlogSidebar'
import BlogList from '../../components/BlogList'

const TagArchive = props => {

  let posts = _.get(props.data, 'allWordpressPost.nodes', [])
    .filter(node => node.polylang_current_lang === props.langKey)

  return (
    <Wrapper>
    <SEO
        title={_.get(props, 'data.wordpressTag.name')}
        description={""}
        lang={props.langKey}
        uri={props.uri}
      />

    <Container>
      <Row>
        <Col md={8}>

        <PageTitle>{_.get(props, 'data.wordpressTag.name')}</PageTitle>

          <BlogList 
            posts={posts}
            langUri={props.langUri}
            langKey={props.langKey}
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
  query($slug: String!) {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
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

    wordpressTag(slug: {eq: $slug}) {
      slug
      name
    }
  
  }
  `

export default layoutWithLangKey(injectIntl(TagArchive))
