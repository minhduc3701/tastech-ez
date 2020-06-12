import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import {layoutWithLangKey} from "../../components/layout"

import { injectIntl, FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { Wrapper, PageTitle, Question } from './style'
import { Container } from '../../styles'

import { Row, Col } from 'reactstrap'
import BlogNoResult from '../../components/BlogNoResult'
import SupportSearchBox from '../../components/SupportSearchBox'

import { PlaceholderLoadingQuestion } from '../../components/PlaceholderLoading'

import api from '../../modules/api'
import { connect } from "react-redux"

import { Icon } from '@iconify/react'
import baselineKeyboardArrowRight from '@iconify/icons-ic/baseline-keyboard-arrow-right'

const Search = (props) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  let keywordSearch = props.keyword || _.first(_.last(_.get(props, 'location.search').split("?s=")).split("&")).split("%20").join(" ").split("+").join(" ") || ""


  const fetchData = async str => {
    setLoading(true)
    const res = await api.searchSupportPosts(str)
    setResults(res.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData(keywordSearch)    
  }, [keywordSearch])

  const parseCategories = cats => {
     return props.data.allWordpressCategory.nodes
      .filter(node => _.includes(cats, node.wordpress_id) )
      .map(node => node)
  }

  let posts = []

  if (!loading && !_.isEmpty(results)) {
    posts = results
      .filter(result => result.polylang_current_lang === props.langKey && !_.isEmpty(parseCategories(result.categories)))
      .map(result => {
        return {
            title: result.title.rendered,
            excerpt: result.excerpt.rendered,
            slug: result.slug,
            categories: parseCategories(result.categories),
            polylang_current_lang: result.polylang_current_lang
        }
      })
  }

  console.log(posts)


  return (
    <Wrapper>
      <SEO
        title={"Search"}
        description={""}
        lang={props.langKey}
        uri={props.uri}
      />

      <SupportSearchBox langUri={props.langUri} />
    <Container>
      <Row className="justify-content-center">
        <Col lg={10}>

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
          <div>
            <PlaceholderLoadingQuestion />
            <PlaceholderLoadingQuestion />
            <PlaceholderLoadingQuestion />
          </div>
        )}
        
        { !loading && _.isEmpty(posts) &&
           <BlogNoResult />
        }

        { !loading && !_.isEmpty(posts) && posts.map(post => (
          <Question to={`${props.langUri}/support/${post.slug}`}>
            <h3 className="title" dangerouslySetInnerHTML={{ __html: post.title }} />
            <div className="categories">
              <span>{_.get(post, 'categories[0].parent_element.name')}</span>
              <Icon icon={baselineKeyboardArrowRight} />
              <span className="current">{_.get(post, 'categories[0].name')}</span>
            </div>
            <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </Question>
        ))}
        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}

export const query = graphql`
  query {
        allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {parent_element: {slug: {regex: "/^(?!'').*$/"}}}, link: {regex: "/support.ezbiztrip.com/"}}) {
          nodes {
              name
              slug
              wordpress_id
              parent_element {
                slug
                name
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
