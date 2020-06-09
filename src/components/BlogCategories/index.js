import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, Category, Background } from './style'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

const findImage = str => {
  if (!str || typeof document === 'undefined') {
      return null
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let firstImage = div.getElementsByTagName('img')[0]

  if (!firstImage) {
    return null
  }
  
  return firstImage.outerHTML
}

const BlogCategories = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {slug: {nin: ["en", "vi", "id", "th"]}, count: {gt: 0}, _links: {about: {elemMatch: {href: {regex: "/blog.ezbiztrip.com/" }}}}}) {
          nodes {
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
      `}

      render={data => {
        let categories = data.allWordpressCategory.nodes
          .filter(node => _.get(node, 'parent_element.slug') === props.langKey)

        if (_.isEmpty(categories)) {
          return <div></div>
        }

        return (
         <Wrapper className="widget">
           <h3 className="widget-title"><FormattedMessage id="blog.categories" /></h3>
          
          <div className="widget-content">
           {!_.isEmpty(categories) && categories.map(node => (
                 <Category
                   key={node.slug}
                   to={`${props.langUri}/blog/category/${node.slug}`}
                   className="image-hover"
                 >
                   <Background active={node.slug === _.get(props, 'currentCategorySlug')} dangerouslySetInnerHTML={{ __html: findImage(_.get(node, 'description')) }} />
      
                   <span dangerouslySetInnerHTML={{ __html: node.name }} />


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
