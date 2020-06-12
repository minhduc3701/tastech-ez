import React from 'react'
import styled, { keyframes } from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  height: ${props => `${props.height || '100%'}`};
  width: 100%;
  align-items: center;
`
const e1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const e2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`
const e3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const Spinner = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0px auto;
`

const SpinnerElement = styled.div`
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #f4b400;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  &:nth-child(1) {
    left: 6px;
    animation: ${e1} 0.6s infinite;
  }
  &:nth-child(2) {
    left: 6px;
    animation: ${e2} 0.6s infinite;
  }
  &:nth-child(3) {
    left: 26px;
    animation: ${e2} 0.6s infinite;
  }
  &:nth-child(4) {
    left: 45px;
    animation: ${e3} 0.6s infinite;
  }
`

const LoadingPage = props => {
  return (
    <Wrapper {...props}>
      <Spinner>
        <SpinnerElement />
        <SpinnerElement />
        <SpinnerElement />
        <SpinnerElement />
      </Spinner>
    </Wrapper>
  )
}

export default LoadingPage
