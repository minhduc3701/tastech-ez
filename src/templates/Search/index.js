import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl, FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import BlogSidebar from  '../../components/BlogSidebar'
import BlogList from '../../components/BlogList'

import api from '../../modules/api'
import axios from 'axios'

const Search = (props) => {
  // console.log(props)
  // const [keyword, setKeyword] = useState(props.location.state.keyword)
  let keyword = props.location.state.keyword
  const [result, setResult] = useState([])

  // window.alert(props.location.state.keyword)

  // let keyword = _.last(_.get(props, 'location.search', '').split("?s="))

  const fetchData = async str => {
   const res = await api.searchBlogPosts(str)
   setResult(res)
  }

  useEffect(() => {
    // if (_.get(props, 'location.search', '')) {
    //   setKeyword(_.last(_.get(props, 'location.search', '').split("?s=")))
    // }
    // console.log('keyword', keyword)
        // window.alert(keyword)


    fetchData(keyword)
  }, [keyword])

  // console.log('aaa', result)

  let posts = []


  return (
    <Wrapper>

    <Container>
      <SEO title="Blog" />

      <Row>
        <Col md={8}>

        <PageTitle>
          <FormattedMessage id="blog.searchResults" />:
          &nbsp;"
          {keyword.split("+").join(" ")}
          "
          ({posts.length})

        </PageTitle>

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
  query {
    allWordpressPost(sort: {fields: date, order: DESC}) {
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
  
  }
  `

export default layoutWithLangKey(injectIntl(Search))
