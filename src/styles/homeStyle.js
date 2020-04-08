import styled from 'styled-components'
import { Link } from 'gatsby'
import Backdrop from '../images/home-page/howWeWork.jpg'

export const HomeWrapper = styled.div`
  overflow: hidden;
  
  .slick-dots {
    position: absolute;
    bottom: 35px;

    li {
      margin: 0 2px;
    }
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    outline: none;

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      content: '';
      border-radius: 50%;
      background: #9197b5;
      border: 1px solid transparent;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: all .3s ease-in-out;
    }
  }

  .slick-dots li.slick-active button:before {
    background: #f4b400;
    border-color: #fff;
  }

  .slick-prev, .slick-next {
    background: #fff !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    color: #626262 !important;
    opacity: 0.4;
    transition: all .3s ease-in-out;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &:before {
      display: none;
    }
  }
  
  .slick-prev {
    left: 70px;
  }

  .slick-next {
    right: 70px;
  }

  .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    opacity: 1;
  }

  .slick-slider {
    user-select: auto;
  }

  @media screen and (max-width: 991px) {
    .slick-prev, .slick-next {
      display: none !important;
    }
  }
`

export const Heading = styled.h2`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.37;
  margin-bottom: 70px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 1.4;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  outline: none;


  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(19, 29, 126, 0.7) 0%, rgba(0, 15, 118, 0) 68%);
    position: absolute;
    top: 0;
    left: 0;
  }

  .customContainer {
    display: flex !important;
    height: 100%;
    position: relative;
  }

  .text {
    position: absolute;
    bottom: 130px;
    left: 8.333333%;;
    width: 50%;
    font-size: 35px;
    font-weight: 600;
    color: #fff;
    line-height: 1.4;
    margin-bottom: 0;
  }


  @media screen and (max-width: 767px) {
    .text {
      left: 40px;
      bottom: 70px;
      width: 70%;
    }
  }
`


export const SeeMore = styled(Link)`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #f4b400;
  margin-top: 30px;

  svg {
    font-size: 24px;
    margin-left: 12px;
  }

  &:hover {
    color: #f4b400;
    text-decoration: none;
    margin-left: 15px;
  }
`

export const SectionIntro = styled.div`
  padding: 120px 0 30px;

  .article {
    padding: 0 50px;
  }

  .row {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1199px) {
    .article {
      padding: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0 0;

    .article {
      margin-bottom: 15px;
    }
  }


`

export const SectionHowWeWork = styled.div`
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  
  .backdrop {
    display: block;
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(60deg, #131d7e 1%, rgba(0, 15, 118, 0.15) 102%), url(${Backdrop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & ~ * {
      position: relative;
    }
  }

  ${Heading} {
    color: #fff;
    margin-bottom: 110px;
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0;

    ${Heading} {
      margin-bottom: 80px;
    }

    .backdrop {
      height: 100%;
    }
  }
`

export const Customer = styled.div`
  border-radius: 15px;
  border: solid 1px #e4e4e4;
  background-color: #ffffff;
  height: 100%;
  padding: 0 40px 50px;
  position: relative;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border-radius: 50%;

    svg {
      font-size: 60px;
      color: ${props => props.color}
    }
  }

  header {
    text-align: center;
    margin-top: -40px;
    margin-bottom: 50px;
  }

  .title {
    margin-top: 24px;
    margin-bottom: 0;
  }

  .underline >span {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 4px;

    &:after {
      content: "";
      display: inline-block;
      width: calc(100% + 6px);
      height: 10px;
      position: absolute;
      bottom: 3px;
      left: -3px;
      background-color: ${props => props.color === '#f4b400' ? '#fae5a8' : '#9fc3f0'};
      z-index: -1;
    }

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      display: flex;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }

      svg {
        font-size: 30px;
        color: ${props => props.color};
        flex: 0 0 30px;
        margin-right: 30px;

        +div {
          flex: 1;
        }
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.39;
        margin-bottom: 15px;
      }

      p {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    padding: 0 16px 40px;

    ul {
      li {
        svg {
          margin-right: 25px;
        }
      }
    }

  }

  @media screen and (max-width: 767px) {
    height: auto;

    &.owner {
      margin-top: 75px;
    }

    .title {
      font-size: 20px;
    }

    ul {
      li {
        h3 {
        font-size: 16px;
        line-height: 1.44;
      }

      }
    }

    .underline >span:after {
      bottom: 0;
    }
  }
`
