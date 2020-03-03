import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
    position: absolute;
  }
`

const LoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: scale(0.6);

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    margin: -3px 0 0 -3px;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 50px;
    left: 50px;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 54px;
    left: 45px;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 57px;
    left: 39px;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 58px;
    left: 32px;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 57px;
    left: 25px;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 54px;
    left: 19px;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 50px;
    left: 14px;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 45px;
    left: 10px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Button = styled.button`
  position: relative;
  overflow: hidden;
`

const Loading = props => {
  return (
    <LoadingWrapper>
      <LoadingSpinner {...props}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </LoadingSpinner>
    </LoadingWrapper>
  )
}

const LoadingButton = props => {
  return (
    <Button {...props} disabled={props.submitting}>
      {props.submitting && <Loading color={props.submittingColor} />}
      {props.children}
    </Button>
  )
}

export default LoadingButton
