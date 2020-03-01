import React from 'react'
import 'styled-components/macro'
import _ from 'lodash'

const HiddenInput = props => (
  <input
    {...props}
    onChange={_.noop}
    css={`
      bottom: 0;
      right: 0;
      height: 0;
      opacity: 0;
      width: 100%;
      position: absolute;
      left: ${props => (props.left ? props.left : '')};
      pointer-events: none;
    `}
  />
)

export default HiddenInput
