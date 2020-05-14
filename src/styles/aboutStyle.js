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


  @media screen and (max-width: 767px) {
    padding: 320px 0 70px;
  }

`

export const BannerText = styled.div`
  z-index: 3;
  color: #fff;
  max-width: 767px;
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
      width: 60px;
      height: 8px;
      background-color: #f4b400;
      position: absolute;
      bottom: 1px;
      left: -10px;
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
    padding: 0 24px;

    h2 {
      font-size: 25px;
      line-height: 1.4;
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
    font-size: 16px;

    .name {
      color: #f4b400;
      display: inlie-block;
      font-size: 16px;

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

  @media screen and (max-width: 767px) {
    padding: 70px 0;

    .image-block {
      img {
        height: 250px;
        object-fit: cover;
      }
    }

    .text-block {
      margin: -80px 16px 0;
      padding: 25px 23px 0;

      .article {
        text-align: left;
      }
    }

    .author {
      padding-left: 0;

      .name {
        display: block;
        margin-bottom: 5px;

        &:after {
          display: none;
        }
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

  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  
  .section-title {
    font-size: 20px;
    margin-bottom: 60px;
  }

  .row {
    margin-right: -5px;
    margin-left: -5px;
      > [class*='col'] {
      padding-right: 5px;
      padding-left: 5px;
    }

  }
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

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;

    .name {
      font-size: 16px;
      margin: 20px 0 5px;
    }

    .position {
      font-size: 12px;
    }
  }
`
