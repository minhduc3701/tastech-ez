import React  from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, PostLink } from './style'
import _ from 'lodash'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Icon } from '@iconify/react'
import baselineChevronRight from '@iconify/icons-ic/baseline-chevron-right'
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left'

const NextArrow = sliderProps => {
  const { className, style, onClick } = sliderProps
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon={baselineChevronRight} />
    </div>
  )
}

const PrevArrow = sliderProps => {
  const { className, style, onClick } = sliderProps
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon={baselineChevronLeft} />
    </div>
  )
}

const sliderSettings = {
  dots: true,
  dotsClass: 'slick-dots',
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  swipe: true,
  // fade: true
}

const BlogBannerTop = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: "top"}}}} ) {
          nodes {
              slug
              featured_media {
                source_url
              }
              polylang_current_lang
          }
        }
      }
      `}

      render={data => {
        let posts = data.allWordpressPost.nodes
          .filter(node => _.get(node, 'polylang_current_lang') === props.langKey && !_.isEmpty(node.featured_media) )

        if (_.isEmpty(posts)) {
          return <div></div>
        }

        return (
         <Wrapper>
           <Slider {...sliderSettings}>
            {posts
              .slice(0, 5)
              .map(node => (
              <div key={node.slug}>
                <PostLink
                  style={{backgroundImage: `url(${_.get(node, 'featured_media.source_url')})`}}
                  to={`${props.langUri}/blog/${node.slug}`}
                />
              </div>
              ))
            }
           </Slider>
         </Wrapper>
        )
      }}
  />
  )

}

export default BlogBannerTop
