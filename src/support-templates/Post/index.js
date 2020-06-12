import React from "react"
import { graphql, navigate } from "gatsby"
import { Container } from '../../styles'
import _ from 'lodash'
import {layoutWithLangKey} from "../../components/layout"
import { injectIntl, FormattedMessage } from 'react-intl'

import { Wrapper, CurrentPost, PostTitle, PostHeader, PostContent, PostFooter, Breadcrumb } from './style'
import { Icon } from '@iconify/react'
import bxHomeSmile from '@iconify/icons-bx/bx-home-smile'
import baselineKeyboardArrowRight from '@iconify/icons-ic/baseline-keyboard-arrow-right'

import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import BlogSharing from '../../components/BlogSharing'
import SupportSearchBox from '../../components/SupportSearchBox'
import SEO from "../../components/seo"
import { parseString } from '../../modules/extractContent'

const Post = props => {
  let currentPost = props.data.wordpressPost

  let currentCategory = currentPost.categories.find(cat => !_.includes(["en", "vi", "id", "th"], _.get(cat, 'parent_element.slug')))

  if (props.langKey !== currentPost.polylang_current_lang) {
    if (typeof window === 'undefined') {
      return <div></div>
    }

    navigate(`${props.langUri}/blog`)
  }
    
  return (
    <Wrapper>
      <SEO
        title={parseString(_.get(currentPost, 'title'))}
        description={""}
        lang={props.langKey}
        uri={props.uri}
      />
      
      <SupportSearchBox langUri={props.langUri} />
    <Container>
      <CurrentPost>
      <Row>
        <Col lg={{size: 10, order: 2}}>
              <PostHeader>
                <Breadcrumb>
                  <Link to={`${props.langUri}/support`}>
                    <Icon icon={bxHomeSmile} />
                    <FormattedMessage id="support.homeSupport" />
                  </Link>

                  <Icon icon={baselineKeyboardArrowRight} />

                  <Link to={`${props.langUri}/support/category/${_.get(currentCategory, 'parent_element.slug')}`}>
                    {_.get(currentCategory, 'parent_element.name')}
                  </Link>

                  <Icon icon={baselineKeyboardArrowRight} />

                  <Link to={`${props.langUri}/support/category/${_.get(currentCategory, 'parent_element.slug')}/${_.get(currentCategory, 'slug')}`}>
                    {_.get(currentCategory, 'name')}
                  </Link>
                </Breadcrumb>

              </PostHeader>
              <PostTitle dangerouslySetInnerHTML={{ __html: _.get(currentPost, 'title') }} />
              <PostContent dangerouslySetInnerHTML={{ __html: _.get(currentPost, 'content') }} />

              <PostFooter>
                <p className="info">
                  <strong><FormattedMessage id="blog.editor" /></strong>
                  {_.get(currentPost, 'author.name')}
                </p>
              </PostFooter>
          </Col>

        <Col lg={{size: 1, order: 1}}>
          <BlogSharing
            url={props.location.href}
            title={_.get(currentPost, 'title')}
            showBackButton
          />
        </Col>
      </Row>
      </CurrentPost>
    </Container>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      slug
      categories {
        name
        slug
        parent_element {
          name
          slug
        }
      }
      author {
        name
      }
      polylang_current_lang
    }

  }
`

export default layoutWithLangKey(injectIntl(Post))
