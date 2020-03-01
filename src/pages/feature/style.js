import styled from 'styled-components'
import BannerImage from '../../images/feature-page/banner.jpg'
import { Modal } from 'reactstrap'

export const Wrapper = styled.div`
  section {
    overflow: hidden;

    [class*="col-"] {
      display: flex;
      align-items: center;
    }
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #323232;
  margin-bottom: 0;
`

export const List = styled.ul`
  padding: 0 0 0 13px;
  margin: 0;

  li {
    list-style-type: none;
    font-size: 15px;
    color: #323232;
    padding-left: 24px;
    position: relative;
    margin-bottom: 12px;

    &:before {
      content: "";
      width: 3px;
      height: 3px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
      top: 9px;
      left: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    li {
      font-size: 14px;
    }
  }
`

export const Banner = styled.div`
  padding: 150px 0 140px;
  background-image: url(${BannerImage});
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
    padding: 220px 0 65px;
  }

  @media screen and (max-width: 767px) {
    &:before {
      background-image: linear-gradient(to top, rgba(19, 29, 126, 0.7) 0%, rgba(0, 15, 118, 0) 68%);
    }
  }
`

export const BannerText = styled.div`
  position: relative;
  color: #fff;
  z-index: 10;
  width: 50%;
  max-width: 320px;
  margin-left: 100px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  button {
    background: none;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 15px;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-top: 35px;
    transition: all .3s ease-in-out;
    white-space: nowrap;

    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      position: relative;
      margin-right: 22px;
      transition: all .3s ease-in-out;

      &:before {
        content: "";
        width: 0;
        height: 0;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #f4b400;
        border-style: solid;
        transition: all .3s ease-in-out;
      }
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      color: #f4b400;

      .icon {
        background-color: #f4b400;

        &:before {
          border-left-color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    padding: 0 20px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    text-align: center !important;
    margin-top: 20px;
  }
`

export const Section1 = styled.section`
  padding: 50px 0;

  img {
    max-width: 500px;
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0 20px;
  }
`

export const Section2 = styled.section`
  img {
    max-width: 530px;
  }

  ${ImageWrapper} {
    text-align: right;
  }

`

export const Section3 = styled.section`
  padding: 50px 0;

  img {
    max-width: 510px;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 0 20px;
  }
`

export const Section4 = styled.section`
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    padding-bottom: 20px;
  }
`

export const TextWrapper = styled.div`
  header {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .icon {
      display: inline-flex;
      width: 50px;
      height: 50px;
      flex: 0 0 50px;
      background: #f5f5f5;
      border-radius: 50%;
      font-size: 24px;
      color: #626262;
      align-items: center;
      justify-content: center;
      margin-right: 26px;
    }
  }
`

export const VideoPopup = styled(Modal)`
  .modal-content {
    background-color: transparent;
    border: none;
    border-radius: 0;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1066px;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;

  iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
