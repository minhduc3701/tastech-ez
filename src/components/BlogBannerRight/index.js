import React  from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, PostLink } from './style'
import _ from 'lodash'
import AlternativeImage from '../../components/AlternativeImage'

const BlogBannerRight = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: "right"}}}}) {
          nodes {
              slug
              featured_media {
                source_url
              }
              polylang_current_lang
              tags {
                id
                slug
              }
          }
        }
      }
      `}

      render={data => {
        let posts = data.allWordpressPost.nodes
          .filter(node => _.get(node, 'polylang_current_lang') === props.langKey && !_.isEmpty(node.featured_media))
        
        if (_.isEmpty(posts)) {
          return <></>
        }

        return (
         <Wrapper className="widget">
          <div className="widget-content">
           <PostLink
            style={{backgroundImage: `url(${_.get(posts, '[0].featured_media.source_url')})`}}
            to={`${props.langUri}/blog/${posts[0].slug}`}
            className="image-hover"
          >
            <AlternativeImage
            imageSrc={_.get(posts, '[0].featured_media.source_url')}
          />
          </PostLink>
          </div>
         </Wrapper>
        )
      }}
  />
  )

}

export default BlogBannerRight
