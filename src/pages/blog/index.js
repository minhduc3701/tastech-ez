import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl } from 'react-intl'

import { Wrapper } from '../../styles/blogStyle'
import { Container } from '../../styles'
import { Link } from 'gatsby'

const Blog = ({ data }) => {
  return (
    <Wrapper>
    <Container>
      <SEO title="blog" />

      {data.allWordpressPost.edges.map(({ node }) => {
        return (
        <div>
          <h3>
            <Link to={`blog/${node.slug}`} dangerouslySetInnerHTML={{ __html: node.title }} />
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          {node.date}
        </div>
      )
      }
      )}
    </Container>
    </Wrapper>
  )
}


export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  `

export default layoutWithLangKey(injectIntl(Blog))
