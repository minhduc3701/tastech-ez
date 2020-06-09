import React, { useState } from "react"
import { Row, Col } from 'reactstrap'
import SupportArticle from '../../components/SupportArticle'

const SupportList = props => {
  let { posts } = props
  
  return (
    <div>
      { posts.map((node, index) => (
          <SupportArticle
            key={index}
            post={node}
            langUri={props.langUri}
          />
      )
      )}

    </div>
  )
}

export default SupportList
