import React from "react"
import { FormattedMessage } from 'react-intl'

import { Wrapper, Button } from './style'

const BlogReadmore = props => {
  return (
    <Wrapper>
      <Button onClick={props.onClick}>
        <FormattedMessage id="blog.readMore" />
      </Button>
    </Wrapper>
  )
}

export default BlogReadmore