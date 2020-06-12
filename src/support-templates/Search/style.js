import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  padding-bottom: 150px;
`

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  margin: 50px 65px;

  @media screen and (max-width: 991px) {
    margin: 50px 30px;
  }
`

export const Question = styled(Link)`
  display: block;
  padding: 35px 65px;
  position: relative;
  color: #323232;
  border-radius: 10px;

  &:after {
    content: "";
    display: block;
    height: 1px;
    background-color: #e4e4e4;
    position: absolute;
    bottom: 0;
    left: 65px;
    right: 65px;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }

  &:hover {
    text-decoration: none;
    color: #323232;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);

    &:after {
      opacity: 0;
    }
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    margin-bottom: 15px;
  }

  .categories {
    margin-bottom: 20px;

    > span {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;

      &:first-letter {
        text-transform: uppercase;
      }

      &.current {
        color: #f4b400;
      }
    }

    > svg {
      font-size: 19px;
      position: relative;
      top: -1px;
      margin: 0 7px;
    }
  }

  .excerpt {
    font-size: 15px;
    line-height: 1.67;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 30px;
  }
`