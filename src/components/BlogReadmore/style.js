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
  outline: none !important;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 45px;
  min-width: 350px;

  @media screen and (max-width: 767px) {
    min-width: 0;
  }
`