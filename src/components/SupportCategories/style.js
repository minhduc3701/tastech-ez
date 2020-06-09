import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 55px;
  padding-top: 60px;
`

export const GuideText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #626262;
  margin-bottom: 40px;
`

export const MainCategories = styled.div`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    margin: 0 -10px;

    li {
      list-style-type: none;
      flex: 0 0 20%;
      padding: 10px;
    }
  }
`

export const MainCategory = styled(Link)`
  display: block;
  text-align: center;
  order: ${props => props.order};
  border-radius: 20px;
  border: solid 1px #d0cdcd;
  background: #fff;
  padding: 17px 10px 22px;
  
  * {
      transition: all .3s ease-in-out;
    }

  .icon {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    color: #222;
    margin-bottom: 0;
  }

  &:hover, &.active {
    box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.16);
    border-color: #fff;
    text-decoration: none;

    .icon svg path:first-child {
      fill: #f4b400 !important;
    }

    .title {
      color: #f4b400;
    }
  }
`

export const CurrentCategory = styled.div`
  
`

export const SubCategories = styled.div`
  
`