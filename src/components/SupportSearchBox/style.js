import styled from 'styled-components'
import bg from '../../images/support-page/bg.jpg'

export const Wrapper = styled.div`
  text-align: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 0 60px;
`

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
`

export const TextContact = styled.p`
  font-size: 15px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 0;

  a {
    color: #fff;

    &:hover {
      text-decoration: none;
    }
  }
`

export const Form = styled.form`
  display: block;
  position: relative;
`

export const Input = styled.input`
  border-radius: 28px;
  background-color: #f5f5f5;
  border: none;
  outline: none !important;
  width: 100%;
  height: 55px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 75px 0 35px;

  &::-webkit-input-placeholder {
    color: #626262;
  }
  &:-ms-input-placeholder {
    color: #626262;
  }
  &::placeholder {
    color: #626262;
  }
`


export const Button = styled.button`
  font-size: 19px;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  outline: none !important;
  background: transparent;
  color: #626262;
  position: absolute;
  top: 0;
  right: 0;
  transition: all .3s ease-in-out;

  &:hover {
    color: #f4b400;
  }
`