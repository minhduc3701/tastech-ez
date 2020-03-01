import styled from 'styled-components'

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

  @media screen and (max-width: 991px) {
    .slick-prev, .slick-next {
      display: none !important;
    }
  }
`

export const Title = styled.h3`
	font-size: 20px;
  font-weight: 600;
	line-height: 1.5;
	color: #323232;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.44;
    margin-bottom: 15px;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;

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
    bottom: 22%;
    left: 30px;
    width: 50%;
    font-size: 35px;
    font-weight: 600;
    color: #fff;
    line-height: 1.4;
    margin-left: 8.333333%;
  }

  @media screen and (max-width: 991px) {
    .text {
      left: 18px;
      bottom: 80px;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .text {
      left: 50px;
      width: 80%;
    }
  }
`
