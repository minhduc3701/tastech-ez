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

export const ParentCategories = styled.div`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -10px;

    li {
      list-style-type: none;
      width: 20%;
      padding: 10px;
    }
  }

  @media screen and (max-width: 991px) {
    ul {
      li {
        width: 33.33%
      }
    }
  }

  @media screen and (max-width: 575px) {
    ul {
      margin: 0 -5px;

      li {
        width: 100%;
        padding: 5px;
      }
    }
  }
`

export const ParentCategory = styled(Link)`
  display: block;
  text-align: center;
  order: ${props => props.order};
  border-radius: 20px;
  border: solid 1px #d0cdcd;
  background: #fff;
  padding: 28px 10px 25px;
  height: 100%;
  
  * {
      transition: all .3s ease-in-out;
    }

  .icon {
    margin-bottom: 10px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    > div {
      display: inline-block;
      color: transparent;
      font-size: 0;

      >*:not(svg) {
        display: none;
      }
    }
    
    svg {
      width: 36px;
      height: 36px;
    }
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    color: #222;
    margin-bottom: 0;
    line-height: 1.5;
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

  @media screen and (max-width: 575px) {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 10px;

    .icon {
      flex: 0 0 30px;
      margin-right: 16px;
      margin-bottom: 0;

      svg {
        width: 30px;
        height: 30px;
      }
    }

    .title {
      font-size: 16px;
    }
  }
`

export const CurrentParentCategory = styled.div`
  text-align: center;
  margin-top: 80px;

  .title {
    font-size: 35px;
    font-weight: 600;
    color: #171e45;
    margin-bottom: 25px;
  }

  .description {
    font-size: 15px;
    color: #626262;

    code, svg {
      display: none;
    }
  }
`

export const Categories = styled.div`
  margin-top: 80px;

  ul {
    padding: 0;
    margin: 0 -20px;
    display: flex;
    overflow: auto;

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      list-style-type: none;
      display: inline-block;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 575px) {
    ul {
      margin: 0 -10px;

      li {
        padding: 0 10px;
      }
    }
  }
`

export const Category = styled(Link)`
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-bottom: 12px;
  white-space: nowrap;

  .title {
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #000;
    transition: all .3s ease-in-out;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  &:hover {
    .title {
      color: #f4b400;
    }
  }

  &.active {
    border-bottom-color: #f4b400;

    .title {
      color: #f4b400;
    }
  }
`
