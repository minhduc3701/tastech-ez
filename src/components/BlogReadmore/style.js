import styled from 'styled-components'

export const Wrapper = styled.article`
  margin: 20px auto;
  text-align: center;
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 23px;
  border: solid 1px #c1c1c1;
  background: transparent;
  color: #000000;
  outline: none !important;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 45px;
  min-width: 350px;
  transition: all .3s ease-in-out;

  &:hover {
    color: #f4b400;
    border-color: #f4b400;
  }

  @media screen and (max-width: 767px) {
    min-width: 0;
  }
`