import styled from 'styled-components'
import BannerBg from '../images/about-page/banner.jpg'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const Banner = styled.div`
  padding: 480px 0 80px;
  background-image: url(${BannerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 301px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-image: linear-gradient(to top, rgba(0, 15, 118, 0.5) 5%, rgba(0, 15, 118, 0));
  }


  @media screen and (max-width: 1199px) {
    padding: 250px 0 90px;
  }

  @media screen and (max-width: 767px) {

  }

`

export const BannerText = styled.div`
  z-index: 3;
  color: #fff;
  max-width: 600px;
  width: 100%;
  position: relative;

  .text-above {
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    position: relative;
    text-transform: uppercase;
    z-index: 1;

    &:after {
      content: "";
      display: inline-block;
      width: 65px;
      height: 8px;
      background-color: #f4b400;
      position: absolute;
      bottom: 1px;
      left: -15px;
      z-index: -1;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.38;
    margin: 15px 0 0;
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

export const SectionQuote = styled.div`
  padding: 120px 0;

  .image-block {
    img {
      width: 100%;
    }
  }

  .text-block {
    margin-left: -115px;
    background: #fff;
    padding: 60px 0 60px 60px;
  }

  .author {
    padding-left: 30px;
    margin-top: 30px;
    font-size: 13px;

    .name {
      color: #f4b400;
      display: inlie-block;
      font-size: 15px;

      &:after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 23px;
        background: #707070;
        position: relative;
        top: 6px;
        margin: 0 20px;
      }
    }
  }
`

export const SectionTeam = styled.div`
  padding-bottom: 80px;
  .section-title {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.37;
    text-align: center;
    margin-bottom: 70px;
  }
`

export const Member = styled.div`
  margin-bottom: 70px;
  text-align: center;
  
  img {
    width: 100%;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0 5px;
  }

  .position {
    font-size: 13px;
    margin: 0;
  }
`
