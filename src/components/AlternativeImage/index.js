import React from 'react'
import 'styled-components/macro'
import brokenImagePlaceholder from '../../images/broken-image-placeholder.svg'

const AlternativeImage = props => {
  let alterRatio = props.ratio || 1
  return (
    <div
      {...props}
      css={`
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: ${alterRatio * 100}%;
      `}>
      <div
        css={`
          background: url(${props.imageSrc}), url(${brokenImagePlaceholder});
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  )
}

export default AlternativeImage
