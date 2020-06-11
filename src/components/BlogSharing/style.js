import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  top: 120px;
  margin-top: 40px;

  button {
    margin-bottom: 12px;
    border: solid 1px #e4e4e4 !important;
    border-radius: 50%;
    outline: none !important;

    &:last-child {
      margin: 0;
    }

    circle {
      fill: #fff;
      transition: all .3s ease-in-out;

      + path {
        fill: #626262;
        transition: all .3s ease-in-out;
      }
    }

    &:hover {
      border-color: transparent !important;

      circle + path {
        fill: #fff;
      }
    }
  }

  [aria-label="facebook"]:hover circle {
    fill: #3b5998;
  }

  [aria-label="twitter"]:hover circle {
    fill: #00aced;
  }

  [aria-label="linkedin"]:hover circle {
    fill: #007fb1;
  }

  @media screen and (max-width: 991px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    position: relative;
    top: auto;

    button {
      margin-bottom: 0;
      margin-right: 12px;
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

  &:hover {
    background-color: #f4b400;
    color: #fff;
  }
`

export const CopyNotify = styled.div`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 100%);
  display: inline-block;
  font-size: 10px;
`

export const BackButton = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 50%;
  font-size: 24px;
  color: #626262;
  position: relative;
  left: -5px;
  margin: -5px 0 35px;

  @media screen and (max-width: 991px) {
    left: auto;
    margin: 0 20px 0 0;
  }
`
