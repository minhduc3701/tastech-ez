import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.article`
  border-bottom: 1px solid #e4e4e4;
`

export const Header = styled.div.attrs({className: 'header'})`
  padding: 25px 0;
  display: flex;
`

export const Title = styled.h3`
  margin: 0;
  flex: 1;
  font-size: 19px;
  font-weight: 600;
  color: #323232;
  padding-top: 4px;
  transition: all .3s ease-in-out;

  .header:hover &, &.active {
    color: #f4b400;
  }
`

export const Toggler = styled.div`
  display: inline-flex;
  flex: 0 0 30px;
  align-items: flex-start;
  margin-right: 35px;
  font-size: 30px;
  color: #f4b400;
`

export const LinkDetail = styled(Link)`
  display: inline-flex;
  flex: 0 0 32px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: solid 1px #e4e4e4;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 24px;
  color: #626262;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: #e4e4e4;
    color: #000;
  }
`


export const Content = styled.div`
  font-size: 15px;
  color: #323232;
  line-height: 1.67;
  padding-left: 65px;
  padding-bottom: 20px;

  .wp-block-image, figure {
    margin: 2rem auto;

    .aligncenter {
      text-align: center;
    }
  }

  p + h1, p + h2, p + h3, p + h4, p + h5, p + h6 {
    margin-top: 1.5em;
  }
`
