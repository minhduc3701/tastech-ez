import React from "react"
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

const BlogReadingTime = props => {
  const { post } = props


  let readingTime = _.ceil(_.get(post, 'content', '')
    .replace(/<[^>]*>/g," ")
    .replace(/\s+/g, ' ')
    .trim()
    .split(" ").length / 200)

  return (
        <span>
          {readingTime}
          &nbsp;
          <FormattedMessage id="blog.minRead" />
        </span>
  )
}

export default BlogReadingTime