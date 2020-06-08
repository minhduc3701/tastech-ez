import React, { useState } from "react"
import { Wrapper, CopyButton, CopyNotify } from './style'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Icon } from '@iconify/react'
import baselineShare from '@iconify/icons-ic/baseline-share'
import { FormattedMessage } from 'react-intl'

const BlogSharing = ({ url, title }) => {
  const [copyNotify, setCopyNotify] = useState(false)

  const handleCopy = () => {
    setCopyNotify(true)
    setTimeout(() => setCopyNotify(false), 1000)
  }

  return (
    <Wrapper>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon round size={40}/>
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={40}/>
      </TwitterShareButton>

      <CopyToClipboard
        text={url}
        onCopy={handleCopy}
      >
        <CopyButton>
          <Icon icon={baselineShare} />
          { copyNotify && <CopyNotify><FormattedMessage id="blog.copied" /></CopyNotify>}
        </CopyButton>
      </CopyToClipboard>
    </Wrapper>
    )
}

export default BlogSharing
