import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl, FormattedMessage } from 'react-intl'
import _ from 'lodash'
import moment from 'moment'
import { Wrapper, PageTitle } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import BlogSidebar from  '../../components/BlogSidebar'
import BlogList from '../../components/BlogList'
import BlogNoResult from '../../components/BlogNoResult'

import { PlaceholderLoadingNews } from '../../components/PlaceholderLoading'

import api from '../../modules/api'
import { connect } from "react-redux"


const Search = (props) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  let keywordSearch = props.keyword || _.first(_.last(_.get(props, 'location.search').split("?s=")).split("&")).split("%20").join(" ").split("+").join(" ") || ""


  const fetchData = async str => {
    setLoading(true)
    const res = await api.searchBlogPosts(str)
    setResults(res.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData(keywordSearch)    
  }, [keywordSearch])

  const parseCategories = cats => {
     return props.data.allWordpressCategory.edges
      .filter(({node}) => _.includes(cats, node.wordpress_id) )
      .map(({node}) => node)
  }

  let posts = []

  if (!loading && !_.isEmpty(results)) {
    posts = results
      .filter(result => result.polylang_current_lang === props.langKey)
      .map(result => {
        return {
          node: {
            title: result.title.rendered,
            excerpt: result.excerpt.rendered,
            content: result.content.rendered,
            slug: result.slug,
            date: moment(result.date).format("MMMM DD, YYYY"),
            featured_media: {
               source_url: result.jetpack_featured_media_url
             },
            categories: parseCategories(result.categories),
            polylang_current_lang: result.polylang_current_lang
          }
        }
      })
  }


  return (
    <Wrapper>
      <SEO
        title={"Search"}
        description={""}
        lang={props.langKey}
        uri={props.uri}
      />
    <Container>
      <Row>
        <Col md={8}>

        <PageTitle>
          <FormattedMessage id="blog.searchResults" />
          {' '}
          "
          {keywordSearch}
          "
          {' '}
          {!loading && `(${posts.length})`}
        </PageTitle>

        {loading && (
          <Row>
            <Col md={6}><PlaceholderLoadingNews /></Col>
            <Col md={6}><PlaceholderLoadingNews /></Col>
            <Col md={6}><PlaceholderLoadingNews /></Col>
            <Col md={6}><PlaceholderLoadingNews /></Col>
            <Col md={6}><PlaceholderLoadingNews /></Col>
            <Col md={6}><PlaceholderLoadingNews /></Col>
          </Row>
        )}
        
        {!loading && _.isEmpty(posts) && <BlogNoResult />}

      { posts &&
           <BlogList 
             posts={posts}
             langUri={props.langUri}
           />
        }
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
    allWordpressCategory(filter: {slug: {nin: ["en", "vi", "id", "th"]}}) {
          edges {
            node {
              wordpress_id
              name
              slug
              parent_element {
                slug
              }
            }
          }
        }
  
  }
  `
const mapStateToProps = state => {
  return {
    keyword: state.keyword
  }
}


export default layoutWithLangKey(injectIntl(
  connect(mapStateToProps)(Search)
  ))
