import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import baselineThumbUpAlt from '@iconify/icons-ic/baseline-thumb-up-alt'
import baselineNotificationImportant from '@iconify/icons-ic/baseline-notification-important'
import baselineSentimentSlightlyDissatisfied from '@iconify/icons-ic/baseline-sentiment-slightly-dissatisfied'

const ToastContainer = styled.div`
  display: flex;
`

const ToastIcon = styled.div`
  display: inline-flex;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  
  svg {
    font-size: 16px;
  }

  .success &{
    color: #34a853;
    background: #e0f1e5;
  }

  .error &{
    color: #f41c1c;
    background: #ffeceb;
  }

  .info &{
    color: #0f73ee;
    background: #e6ecf8;
  }
`

const ToastContent = styled.div`
  line-height: 1.4;

  h4 {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 3px;
    
    &::first-letter {
      text-transform: uppercase;
    }

    .success &{
      color: #34a853;
    }

    .error &{
      color: #f41c1c;
    }

    .info &{
      color: #0f73ee;
    }
  }
  p {
    font-size: 12px;
    color: #808080;
    margin: 0;
  }
  
`

const Toast = props => {
  let icon = ''
  switch (props.type) {
    case 'success':
      icon = baselineThumbUpAlt
      break
    case 'error':
      icon = baselineSentimentSlightlyDissatisfied
      break
    case 'info':
    default:
      icon = baselineNotificationImportant
  }

  return (
    <ToastContainer className={props.type}>
      <ToastIcon>
        <Icon
          icon={icon}
        />
      </ToastIcon>

      <ToastContent>
        <h4>
          {props.type}
        </h4>
        <p>{props.message}</p>
      </ToastContent>
    </ToastContainer>
  )
}
export default Toast
