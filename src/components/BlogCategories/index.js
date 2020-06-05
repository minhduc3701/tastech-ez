import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, Category, Background } from './style'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

const BlogCategories = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {slug: {nin: ["en", "vi", "id", "th"]}, count: {gt: 0}}) {
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
      `}

      render={data => {
        let categories = data.allWordpressCategory.edges
          .filter(({ node }) => _.get(node, 'parent_element.slug') === props.langKey)

        if (_.isEmpty(categories)) {
          return <div></div>
        }

        return (
         <Wrapper className="widget">
           <h3 className="widget-title"><FormattedMessage id="blog.categories" /></h3>
          
          <div className="widget-content">
           {!_.isEmpty(categories) && categories.map(({ node }) => (
                 <Category
                   key={node.slug}
                   to={`${props.langUri}/blog/category/${node.slug}`}
                   className="image-hover"
                 >
                   {node.description && <Background active={node.slug === _.get(props, 'currentCategorySlug')} dangerouslySetInnerHTML={{ __html: node.description }} />}

                   <span>{node.name}</span>


                 </Category>
                 ))}
           </div>
         </Wrapper>
        )
      }}
  />
  )

}

export default BlogCategories
