import styled from 'styled-components'

export const Wrapper = styled.div`
  counter-reset: block;
  color: #626262;
  padding-top: 50px;

  .page-title {
    font-size: 23px;
    color: #222;
    text-transform: uppercase;
  }

  .last-updated-date {
    margin-bottom: 15px;
    color: #c1c1c1;
  }

  .page-intro {
    margin-bottom: 30px;
  }

  .heading {
    font-size: 16px;
    font-weight: 600;
    color: #323232;
    text-transform: uppercase;

    &:before {
      counter-increment: block;
      content: counter(block) ". ";
    } 
  }

  .lower-alpha {
    list-style-type: lower-alpha;
  }

  .lower-roman {
    list-style-type: lower-roman;
  }

  .content {
    padding-left: 40px;
    margin-bottom: 20px;

    > .lower-alpha {
      padding-left: 0;
    }
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
    color: #323232;
  }

  ul {
    margin-top: 10px;

    li {
      margin-bottom: 10px;
    }
  }
`

export const Footer = styled.footer`
  padding: 30px 0;
  margin-top: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`