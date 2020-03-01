import React from 'react'
import styled from 'styled-components'

import { Icon } from '@iconify/react'
import baselineError from '@iconify/icons-ic/baseline-error'
import outlineCheckCircle from '@iconify/icons-ic/outline-check-circle'

const AlertWrapper = styled.div.attrs({ className: 'tas-alert' })`
  margin-bottom: 20px;
  display: flex;

  svg {
    font-size: 20px;
    margin-right: 10px;
  }

  .content {
    flex: 1;
    display: inline-flex;
    align-items: center;
  }

  &.error {
    color: #f41c1c;
    font-size: 12px;
  }

  &.success {
    border-radius: 10px;
    border: solid 1px #e4e4e4;
    overflow: hidden;
    font-size: 14px;

    .icon {
      display: inline-flex;
      flex: 0 0 45px;
      color: #fff;
      background: #34a853;
      align-items: center;
      justify-content: center;
      margin: 0;

      svg {
        margin: 0;
      }
    }

    .content {
      padding: 16px 24px;
    }
  }
`

const Alert = props => {
  let { message } = props

  return (
    <AlertWrapper className={message.type}>
      {message.type === 'error' && <Icon icon={baselineError} />}
      {message.type === 'success' && (
        <div className="icon">
          <Icon icon={outlineCheckCircle} />
        </div>
      )}

      <div className="content">{message.content}</div>
    </AlertWrapper>
  )
}

export default Alert
