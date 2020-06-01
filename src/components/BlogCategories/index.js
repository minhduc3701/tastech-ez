import React, { useState } from "react"
import { graphql } from "gatsby"

import { Wrapper, WidgetTitle, Category, Background } from './style'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

const BlogCategories = props => {
  let filteredCategories = props.categories
        .filter(({ node }) => _.get(node, 'parent_element.slug') === props.langKey)

  return (
    <Wrapper>
      <WidgetTitle><FormattedMessage id="blog.categories" /></WidgetTitle>

      {filteredCategories && filteredCategories.map(({ node }, index) => (
            <Category
              to={`${props.langUri}/blog/category/${node.slug}`}
            >
              {node.description && <Background dangerouslySetInnerHTML={{ __html: node.description }} />}

              <span>{node.name}</span>


            </Category>
            ))}
    </Wrapper>
  )
}

export default BlogCategories
