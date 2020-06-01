import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper } from '../../styles/blogStyle'
import { Container } from '../../styles'
import { Link } from 'gatsby'
import _ from 'lodash'
import { Row, Col } from 'reactstrap'
import Categories from  '../../components/BlogCategories'
import BlogArticle from '../../components/BlogArticle'
import BlogReadmore from '../../components/BlogReadmore'


const Blog = props => {
  const [page, setPage] = useState(1)
  const perPage = 10

  let posts = props.data.allWordpressPost.edges.filter(edge => edge.node.polylang_current_lang === props.langKey)
  let categories = props.data.allWordpressCategory.edges

  return (
    <Wrapper>
    <Container>
      <SEO title="Blog" />
      <Row>
        <Col md={8}>
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

        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v7.0"></script>
        <div class="fb-page" data-href="https://www.facebook.com/ezbiztrip/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ezbiztrip/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ezbiztrip/">ezbiztrip.com</a></blockquote></div>

        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}


export const query = graphql`
  query {
    allWordpressPost {
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

    allWordpressCategory {
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
  }
  `

export default layoutWithLangKey(injectIntl(Blog))
