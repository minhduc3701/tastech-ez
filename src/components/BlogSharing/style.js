import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  top: 120px;
  margin-top: 40px;

  button {
    margin-bottom: 20px;
    outline: none !important;

    &:last-child {
      margin: 0;
    }
  }

  @media screen and (max-width: 991px) {
    flex-direction: row;
    margin-bottom: 0;
    position: relative;
    top: auto;

    button {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`

export const CopyButton= styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: solid 1px #e4e4e4;
  border-radius: 50%;
  outline: none !important;
  font-size: 20px;
  color: #626262;
  background-color: transparent;
  position: relative;
`

export const CopyNotify = styled.div`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 100%);
  display: inline-block;
  font-size: 10px;
`