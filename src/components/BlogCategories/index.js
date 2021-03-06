import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, Categories, Category, Background } from './style'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'
import { findImg } from '../../modules/extractContent'

const BlogCategories = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {slug: {nin: ["en", "vi", "id", "th"]}, count: {gt: 0}, link: {regex: "/blog.ezbiztrip.com/"}} ) {
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
          .sort((a, b) => _.get(a, 'description', 'z').localeCompare(_.get(b, 'description', 'z')) )
          

        if (_.isEmpty(categories)) {
          return <></>
        }

        return (
         <Wrapper className="widget">
           <h3 className="widget-title"><FormattedMessage id="blog.categories" /></h3>
          
          <div className="widget-content">
            <Categories>
           {categories.map(node => (
                 <Category
                   key={node.slug}
                   to={`${props.langUri}/blog/category/${node.slug}`}
                   className="image-hover"
                 >
                  {findImg(_.get(node, 'description')) &&
                   <Background
                    active={node.slug === _.get(props, 'currentCategorySlug')}
                    src={findImg(_.get(node, 'description'))}
                  />
                }
      
                   <span dangerouslySetInnerHTML={{ __html: node.name }} />

                 </Category>
                 ))}
           </Categories>
           </div>
         </Wrapper>
        )
      }}
  />
  )

}

export default BlogCategories
