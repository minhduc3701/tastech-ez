import React, { useState } from "react"
import { Row, Col } from 'reactstrap'
import SupportArticle from '../../components/SupportArticle'
import BlogNoResult from '../../components/BlogNoResult'
import _ from 'lodash'

const SupportList = props => {
  const [openSlug, setOpenSlug] = useState(null)
  let { posts } = props
  
  if (_.isEmpty(posts)) {
    return <BlogNoResult />
  }
           
  return (
    <div>
      { posts.map((node, index) => (
          <SupportArticle
            key={index}
            post={node}
            langUri={props.langUri}
            openSlug={openSlug}
            setOpenSlug={slug => setOpenSlug(slug)}
          />
      )
      )}

    </div>
  )
}

export default SupportList
