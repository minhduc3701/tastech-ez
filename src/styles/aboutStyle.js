import styled from 'styled-components'
import BannerBg from '../images/about-page/banner.jpg'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const Banner = styled.div`
  padding: 225px 0 125px;
  background-image: url(${BannerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    background-image: linear-gradient(65deg, #131d7e -4%, rgba(0, 15, 118, 0.15) 91%);;
  }


  @media screen and (max-width: 1199px) {
    padding: 250px 0 90px;
  }

  @media screen and (max-width: 767px) {
    &:before {
      background-image: linear-gradient(to top, rgba(19, 29, 126, 0.7) 0%, rgba(0, 15, 118, 0) 68%);
    }
  }

`

export const BannerText = styled.div`
  position: relative;
  z-index: 10;
  color: #fff;
  max-width: 500px;
  margin-left: 100px;

  p {
    display: inline-block;
    font-size: 15px;
    margin: 0;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin: 20px 0 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    padding: 0 20px;

    h2 {
      font-size: 30px;
    }
  }
`

export const SectionQuote = styled.section`
  text-align: center;
  padding: 100px 0;

  .quote-content {
    max-width: 580px;
    margin: auto;
  }

  .icon {
    font-size: 32px;
    color: #f4b400;
  }

  h3 {
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 25px;
    margin-top: 15px;
    color: #323232;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
    color: #323232;
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
`

export const Section1 = styled.section`
  .slick-dots {
    position: relative;
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
      background: #e4e4e4;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: all .3s ease-in-out;
    }
  }

  .slick-dots li.slick-active button:before {
    background: #f4b400;
  }
`

export const IntroItem = styled.div`
  text-align: center;
  padding: 0 35px;

  img {
    width: 210px;
    display: inline-block !important;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #323232;
  }

  p {
    font-size: 15px;
    line-height: 1.53;
    color: #707070;
    margin: 0;
  }


  @media screen and (max-width: 767px) {
    p {
      font-size: 14px;
    }
  }
`

export const Section2 = styled.section`
  padding: 100px 0 0;

  @media screen and (max-width: 767px) {
    padding: 70px 0 50px;
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #323232;
  line-height: 1.5;
  margin-bottom: 25px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const SubTitle = styled.span`
  font-size: 15px;
  color: #f4b400;
  display: inline-block;
  margin: 25px 0;
`

export const VisionImgWrapper = styled.div`
  img {
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
`

export const VisionTextBlock = styled.div`
  p {
    font-size: 15px;
    color: #323232;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    p {
      font-size: 14px;
    }
  }
`
