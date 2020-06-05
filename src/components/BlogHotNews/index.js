import React  from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Wrapper, Post, Thumbnail, Content } from './style'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'
import AlternativeImage from '../AlternativeImage'
import BlogReadingTime from '../BlogReadingTime'

const BlogBannerTop = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: "hot"}}}} ) {
          edges {
            node {
              slug
              title
              content
              featured_media {
                source_url
              }
              polylang_current_lang
            }
          }
        }
      }
      `}

      render={data => {
        let posts = data.allWordpressPost.edges
          .filter(({ node }) => _.get(node, 'polylang_current_lang') === props.langKey )

        if (_.isEmpty(posts)) {
          return <div></div>
        }

        return (
         <Wrapper className="widget">
          <h3 className="widget-title"><FormattedMessage id="blog.mustRead" /></h3>

          <div className="widget-content">
            {posts
              .slice(0, 5)
              .map(({node}) => (
              <Post key={node.slug}>
                {!_.isEmpty(_.get(node, 'featured_media.source_url')) &&
                  <Thumbnail>
                    <Link
                      to={`${props.langUri}/blog/${node.slug}`}
                      className="image-hover"
                    >
                      <AlternativeImage
                        imageSrc={_.get(node, 'featured_media.source_url')}
                      />
                    </Link>
                  </Thumbnail>
                }

                <Content>
                  <h4>
                    <Link
                      to={`${props.langUri}/blog/${node.slug}`}
                    >
                      {node.title}
                    </Link>
                  </h4>
                  <p>
                    <BlogReadingTime post={node} />
                  </p>
                </Content>
              </Post>
              ))
            }
            </div>
         </Wrapper>
        )
      }}
  />
  )

}

export default BlogBannerTop
