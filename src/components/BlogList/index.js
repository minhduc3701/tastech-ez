import React, { useState } from "react"
import { Row, Col } from 'reactstrap'
import BlogArticle from '../../components/BlogArticle'
import BlogReadmore from '../../components/BlogReadmore'
import BlogNoResult from '../../components/BlogNoResult'
import _ from 'lodash'

const BlogList = props => {
  const [page, setPage] = useState(1)
  const perPage = 10

  let { posts } = props
  
  if (_.isEmpty(posts)) {
    return <BlogNoResult />
  }
  
  return (
    <div>
        <Row>
      { posts
        .slice(0, Math.min(posts.length, page * perPage))
        .map((node, index) => (
          <Col sm={6} key={index}>
          <BlogArticle
            post={node}
            langUri={props.langUri}
            langKey={props.langKey}
          />
          </Col>
      )
      )}
        </Row>

        {page * perPage < posts.length &&
          <BlogReadmore onClick={() => setPage(page + 1)} />
        }

    </div>
  )
}

export default BlogList
