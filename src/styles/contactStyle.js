import styled from 'styled-components'
import bg from '../images/contact-page/bg.jpg'
import { FormField, FormInput, FormTextarea } from './index'

export const Wrapper = styled.div`
  padding-top: 120px;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 120px;
    right: 0;
    left: 0;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &.image-bottom {
    padding-top: 0;
    padding-bottom: 120px;
    &:before {
      top: 120px;
      bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0 !important;

    &:before {
      top: 0 !important;
      bottom: 0 !important;
    }
  }
`

export const Title = styled.h3`
  font-size: 23px;
  font-weight: 600;
  color: #323232;
  line-height: 1.5;
  margin-bottom: 30px;
`

export const ContactWrapper = styled.div`
  position: relative;
  z-index: 9;
  border-radius: 20px;
  box-shadow: 0 3px 99px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: auto;

  @media screen and (max-width: 991px) {
    max-width: 726px;
  }
`

export const ContactForm = styled.form`
  padding: 55px 50px;
  background-color: #fff;

  ${FormField} {
    margin-bottom: 15px;
  }

  ${FormInput}, ${FormTextarea} {
    &:focus + label {
      font-size: 10px;
      top: 6px;
    }
  }

  ${FormTextarea} {
    padding-top: 15px;

    &+label {
      background: #fff;

      &:before {
        content: "";
        width: 100%;
        height: 5px;
        top: -5px;
        left: 0;
        position: absolute;
        background: #fff;
        }
    }
  }

  .form-footer {
    display: flex;
  }
  
  @media screen and (max-width: 767px) {
    padding: 40px 24px;

    ${FormField} {
      margin-bottom: 12px;
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

  @media screen and (max-width: 575px) {
    .form-footer {
      display: block;
    }
  }

`

export const Label = styled.label`
  color:  #323232;
  font-size: ${props => (props.focus ? '10px' : '15px;')};
  font-weight: normal;
  position: absolute;
  transition: all 0.15s ease;
  pointer-events: none;
  left: 25px;
  top: ${props => (props.focus ? '6px' : '17px')};
  margin: 0;
  width: calc(100% - 50px);
`

export const SubmitBtnWrapper = styled.div`
  flex: 1;

  button{
    width: 100%;
    padding: 17px 15px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 15px;
    bow-shadow: none;
    outline: none;
    border: none; 
    color: #fff;

  &:focus {
    bow-shadow: none;
    outline: none;
    border: none;
    }
  }
  button.submitBtn{
    background-color: #f4b400;
  }
  button.disableBtn{
    background-color: #EAEAEA;
  }

  @media screen and (max-width: 767px) {
    button {
      border-radius: 28px;
    }
  }
`

export const ContactInfo = styled.div`
  padding: 55px 50px;
  background-color: #1d2148;
  color: #fff;
  height: 100%;

  ${Title} {
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 24px;
  }
`

export const InfoDetail = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
    font-size: 15px;
    padding-left: 40px;
    position: relative;
    line-height: 1.33;
    margin-bottom: 22px;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      position: absolute;
      top: -2px;
      left: 0;
      font-size: 24px;
      line-height: 1;
    }

    a {
      color: #fff;
      transition: all .3s ease-in-out;

      &:hover {
        color: #9197b5;
        text-decoration: none;
      }
    }
  }
`

export const SocialLinks = styled.div`
  margin-top: 125px;

  a {
    display: inline-block;
    font-size: 24px;
    color: #f4b400;
    margin-right: 15px;
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #9197b5;
    }
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`