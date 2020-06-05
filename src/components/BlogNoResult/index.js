import React from "react"
import noResultImg from '../../images/no-result.svg'
import { Wrapper } from './style'

const NoResult = () => {
  return (
  <Wrapper>
    <img src={noResultImg} alt=""/>
  </Wrapper>
)}

export default NoResult
