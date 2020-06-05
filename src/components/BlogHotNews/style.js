import styled from 'styled-components'

export const Wrapper = styled.div`
  
`

export const Post = styled.div`
  display: flex;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Thumbnail = styled.div`
  flex: 0 0 28%;
  margin-right: min(8%, 30px);
`

export const Content = styled.div`
  flex: 1;

  h4 {
    line-height: 1;
    margin-top: -4px;
    margin-bottom: 11px;

    a {
      font-size: 15px;
      font-weight: 600;
      color: #000;
      line-height: 1.2;

      &:hover {
        text-decoration: none;
        color: #f4b400;
      }
    }
  }

  p {
    font-size: 14px;
    color: #626262;

    &:last-child {
      margin-bottom: 0;
    }
  }
`