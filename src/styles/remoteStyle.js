import styled from 'styled-components'
import BannerBg from '../images/remote-work-expense-management/banner.jpg'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const Banner = styled.div`
  padding: 100px 8.33333% 20px;
  width: 100%;
  min-height: 500px;
  height:max-content;
  background-color: #F5F5F5;
  background-repeat: no-repeat;
  position: relative;
  

  &:before {
    content: "";
    display: inline-block;
    width: 44%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${BannerBg});
  }

  .video{
    padding-right: 100px !important;
  }
 
  @media screen and (max-width: 1319px) {
    .video{
      padding-right: 10px !important;
    }
  }

  @media screen and (max-width: 1199px) {
    padding: 50px 6.33333% 0;
    background-color: #fff;
    margin-bottom:50px;
    &:before {
      width: 100%;
      height: 500px;
    }
    .video{
      padding-right: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 50px;
    &:before {
      width: 100%;
      height:90%;
    }
  }
  @media screen and (max-width: 575px) {
    padding: 50px 6.33333% 0;
    margin-bottom:30px;
   
  }

`

export const BannerContent = styled.div`
  margin: 0 auto;
  p{
    font-size: 16px;
    line-height: 1.56;
    color: #171e45;
    padding: 0;
    margin: 0;
  }
  p.sub{
    margin:0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.64;
  }
  h1{
    font-size: 40px;
    font-weight: 600;
    line-height: 1.13;
    color: #171e45;
    margin: 20px 0 25px;
    font-family:work sans;
  }
  a{
    min-width: 170px;
    border-radius: 20px;
    background-color: #f4b400;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.33;
    color: #ffffff;
    cursor: pointer;
    margin: 25px 0 0 0;
  }
  a:hover{
    text-decoration: none;
  }
  @media screen and (max-width: 1199px) {
   p, h1{
    color: #fff;
   }
   a{
     margin:35px 0;
   }
  }
  @media screen and (max-width: 767px) {
    p{
      display: none;
    }
  }
  @media screen and (max-width: 575px) {
    a{
      margin: 0 0 50px;
    }
  }
`

export const VideoWrapper = styled.div`
  z-index: 2;
  position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;

  iframe{
    z-index: 2;
    border-radius: 20px;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1199px) {
    margin: 10px 0 0;
    justify-content: center;
  }

`

export const SectionIntro = styled.div`
  padding: ${props => props.mt ? `${props.mt}px` : '0'} 0 ${props => props.mb ? `${props.mb}px` : '0'};
  p{
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.56;
    text-align: left;
    color: #323232;
  }
  p.sub{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.64;
  }
  h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    line-height: 1.2;
    color: #171e45;
    margin: 0 0 40px 0;
  }
  .mb30{
    margin: 0 0 30px 0;
  }
  .mb25{
    margin: 0 0 25px 0;
  }
  .mb20{
    margin: 0 0 20px 0;
  }
  .article {
    padding: 0 50px;
    margin-top: 35px;
  }
  .article:first-child {
    margin-top: 70px;
  }

 
  &.analysis{
    p, h2{
      text-align: center
    }
  }

  @media screen and (max-width: 1199px) {
    padding: 35px 0 25px;
    .article {
      padding: 0;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 35px 0 25px;
    .article {
      padding: 0;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 20px 0 0;   
    margin-bottom:20px;
    h2{
      font-size: 30px;
      margin: 0 0 20px 0;
    }
    &.analysis{
      p, h2{
        text-align: left
      }
      margin-bottom:60px;
      .image-block{
        margin-top:0;
      }
    }
    .article {
      margin-bottom: 15px;
    }
    .article:first-child {
      margin-top: 0;
    }
    .image-block{
      margin-top:20px;
    }
  }

`

export const TitleWithCircle = styled.h2`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.2;
  color: #171e45;
  margin: 0 0 30px 0;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 186px;
    height: 186px;
    background-color: #e6ecf8;
    position: absolute;
    border-radius: 50%;
    top: -60px;
    left: -88px;
    z-index: -1;
  }
  @media screen and (max-width: 767px) {
    padding: 35px 0 25px;
    &:before {
      top: 0;
      left: -67px;
      width: 139px;
      height: 139px;
    }
    
  }
`

