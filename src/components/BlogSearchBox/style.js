import styled from 'styled-components'

export const Form = styled.form`
  display: block;
  position: relative;
`

export const Input = styled.input`
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  outline: none !important;
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 65px 0 25px;

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
  font-size: 24px;
  padding: 0 20px;
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