import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 120px;
  position: relative;

`

export const CurrentPost = styled.div`
  margin-bottom: 120px;
`

export const PostHeader = styled.div`
  margin-bottom: 30px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Breadcrumb = styled.div`
  margin-bottom: 10px;

  > a {
    font-size: 15px;
    font-weight: 600;
    color: #626262;
    display: inline-block;

    &:first-letter {
      text-transform: uppercase;
    }

    svg {
      font-size: 24px;
      margin-right: 10px;
      position: relative;
      top: -3px;
    }

    &:hover {
      text-decoration: none;
      color: #f4b400;
    }
  }

  > svg {
    font-size: 20px;
    margin: 0 7px;
    position: relative;
    top: -1px;
  }
`

export const PostTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.37;
  color: #000;
  margin-bottom: 35px;
`

export const PostContent = styled.div`
  .wp-block-image, figure {
    margin: 2rem auto;

    .aligncenter {
      text-align: center;
    }
  }

  p + h1, p + h2, p + h3, p + h4, p + h5, p + h6 {
    margin-top: 1.5em;
  }
`

export const PostFooter = styled.div`
  margin-top: 40px;
  padding-left: 30px;
  border-left: 5px solid #f4b400;

  .info {
    strong {
      margin-right: 30px;
    }
  }
`