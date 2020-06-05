import styled from 'styled-components'

const Loading = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: #fff;

  &:before {
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 500%;
    margin-left: -250%;
    -webkit-animation: slideAnimation 0.8s linear infinite;
    animation: slideAnimation 0.8s linear infinite;
    background: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 46%,
        hsla(0, 0%, 100%, 0.35) 50%,
        hsla(0, 0%, 100%, 0) 54%
      )
      50% 50%;
  }

  .heading {
    display: block;
    width: 100%;
    height: 20px;
    margin-bottom: 15px;
    background-color: #e4e4e4;
  }

  .text {
    display: inline-block;
    width: 100%;
    height: 10px;
    margin-bottom: 7px;
    background-color: #e4e4e4;
  }

  .img {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: #e4e4e4;
  }

  .row {
    width: calc(100% + 30px);
  }

  .w-20 {
    width: 20%;
  }

  .w-30 {
    width: 30%;
  }

  .w-40 {
    width: 40%;
  }

  .w-60 {
    width: 60%;
  }

  .w-70 {
    width: 70%;
  }

  .w-80 {
    width: 80%;
  }

  .w-90 {
    width: 90%;
  }

  .w-100 {
    width: 100%;
  }

  .align-center {
    text-align: center;
    margin: 0 auto;
  }

  .floatLeft {
    float: left;
  }

  .floatRight {
    float: right;
  }

  @-webkit-keyframes slideAnimation {
    0% {
      transform: translate3d(-30%, 0, 0);
    }
    to {
      transform: translate3d(30%, 0, 0);
    }
  }
  @keyframes slideAnimation {
    0% {
      transform: translate3d(-30%, 0, 0);
    }
    to {
      transform: translate3d(30%, 0, 0);
    }
  }
`

export const News = styled(Loading)`
  margin-bottom: 50px;

  .img {
    margin-bottom: 10px;
    padding-bottom: 71.43%;
  }
`