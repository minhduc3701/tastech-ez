import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article.attrs({ className: 'article' })`
  .icon {
    margin-bottom: 25px;
  }
  display: ${props => props.dFlex ? 'flex' : 'block'};
  ul {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      padding-left: 25px;
      position: relative;
      margin-bottom: 10px;

      &:before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #626262;
        border-radius: 50%;
        position: absolute;
        top: 9px;
        left: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    &.iconLeft {
    display: flex;

    .icon {
      flex: 0 0 60px;
      margin-right: 46px;
    }

    .content {
      flex: 1;
    }
  }
  }

  @media screen and (max-width: 767px) {
    text-align: ${props => props.dFlex ? 'left' : 'center'};
    .icon {
      margin-right: ${props => props.dFlex ? '28px' : '0'};
    }
   
    ul {
      text-align: left;
    }
  }
`

const Icon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  background-color: #f4b400;
`

const Title = styled.h3.attrs({ className: 'title' })`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 25px;
  color: #171e45;
  font-family: work sans;

  @media screen and (max-width: 991px) {
    font-size: 25px;
  }
  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`
const Content = styled.div.attrs({ className: 'content' })`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 25px;
  color: #171e45;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

const Article = props => {
  return (
    <Wrapper className={props.iconLeft ? 'iconLeft' : ''} dFlex={props.dFlex}>
      {props.icon &&
        <div className="icon">
          <Icon>{props.icon}</Icon>
        </div>
      }

      <div className="content">
        <Title fontSize={props.fontSize}>{props.title}</Title>
        <Content>{props.content}</Content>
        {props.link}
      </div>
    </Wrapper>
  )
}

export default Article
