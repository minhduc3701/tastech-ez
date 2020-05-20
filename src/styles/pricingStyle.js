import styled from 'styled-components'
import BannerBg from '../images/pricing-page/banner.jpg'
import ContactBg from '../images/pricing-page/bg-contact.jpg'

export const Wrapper = styled.div`
  overflow: hidden;

  .section-title {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.57;
    color: #222222;
    text-align: center;
  }

  .section-desc {
    font-size: 15px;
    line-height: 1.53;
    color: #707070;
    text-align: center;
  }

  .customContainer.narrow {
    max-width: 866px;
  }

  @media screen and (max-width: 767px) {
    .section-title {
      font-size: 23px;
      line-height: 1.4;
    }
  }
`

export const Banner = styled.div`
  padding: 110px 0 230px;
  position: relative;
  border-radius: 0 0 50% 50%;
  margin: 0 -5%;
  overflow: hidden;

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    background-image: url(${BannerBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    background-image: linear-gradient(46deg, rgba(19, 29, 126, 0.9) 21%, rgba(244, 180, 0, 0.5) 209%);
    opacity: 0.63;
  }

  > div {
    position: relative;
    z-index: 9;
    text-align: center;
  }

  .page-title {
    font-family:work sans;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
  }

  .page-desc {
    font-size: 15px;
    color: #fff;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 767px) {
    .page-title {
      font-size: 35px;
      line-height: 1.34;
    }
  }
`

export const SectionPricing = styled.section`
  margin-top: -170px;
  position: relative;
  z-index: 10;

  .row {
    padding: 0 35px;
  }

  .available-from {
    text-align: center;
    font-size: 15px;
    color: #323232;
    margin-top: 40px;

    b {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 767px) {
    .row {
      padding: 0;
    }

    .subscriptions > div {
      margin-bottom: 50px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const SectionFAQ = styled.section`
  padding: 120px 0;

  header {
    margin-bottom: 60px;
  }
`

export const Question = styled.div`
  border-bottom: 1px solid #e4e4e4;

  .label {
    display: flex;
    padding: 25px 0;
    cursor: pointer;

    h4 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #323232;
      transition: all .3s ease-in-out;
    }

    svg {
      font-size: 24px;
      margin-right: 26px;
      flex: 0 0 24px;
      color: #f4b400;
    }
  }

  .detail {
    padding: 0 0 25px 50px;
    line-height: 1.6;
  }

  &.active .label h4 {
    color: #f4b400;
  }

  @media screen and (max-width: 767px) {
    .label h4 {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`

export const SectionContact = styled.section`
  padding: 100px 0;
  background-image: url(${ContactBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    background-image: linear-gradient(297deg, rgba(19, 29, 126, 0.9) 20%, rgba(244, 180, 0, 0.5));
  }

  > div {
    position: relative;
    z-index: 9;
    text-align: center;
  }

  header {
    margin-bottom: 40px;

    * {
      color: #fff !important;
    }
  }

  .item {
    border-radius: 20px;
    background-color: #ffffff;
    color: #222;
    padding: 30px;
    text-align: center;
    display: block;
    text-decoration: none;
    transition: all .3s ease-in-out;

    svg {
      font-size: 40px;
      transition: all .3s ease-in-out;
    }

    .info {
      font-size: 21px;
      font-weight: 600;
      margin-top: 23px;
      transition: all .3s ease-in-out;
    }

    .desc {
      font-size: 15px;
      color: #626262;
      margin-top: 11px;
    }

    &:hover {
      background-color: #fef6eb;

      svg, .info {
        color: #f4b400;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
`
