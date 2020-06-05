import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  margin-bottom: 70px;

  .slick-dots {
    position: absolute;
    bottom: 30px;

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
    left: 50px;
  }

  .slick-next {
    right: 50px;
  }

  .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    opacity: 1;
  }

  .slick-slider {
    user-select: auto;
  }
  
  @media screen and (max-width: 1199px) {
    .slick-prev {
    left: 32px;
  }

  .slick-next {
    right: 32px;
  }
  }

  @media screen and (max-width: 991px) {
    .slick-prev, .slick-next {
      display: none !important;
    }
  }
`

export const PostLink = styled(Link)`
  display: block;
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
