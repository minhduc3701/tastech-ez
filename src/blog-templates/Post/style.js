import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 120px;
  position: relative;

`

export const FeatureImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
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
  margin-right: 30px;

  > a {
    font-size: 15px;
    font-weight: 600;
    color: #626262;

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

export const Meta = styled.div`
  color: #626262;
  font-size: 14px;
  margin-bottom: 10px;

  svg {
    font-size: 24px;
    margin-right: 12px;
    position: relative;
    top: -2px;
  }

  > span {
    position: relative;

    &:after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 2px;
      background-color: #626262;
      border-radius: 50%;
      margin: 0 7px;
      position: relative;
      top: -3px;
    }

    &:last-child:after {
      display: none;
    }
  }
`

export const Categories = styled.div`
  display: inline-block;

  ul {
    padding: 0;
    margin: 0;

    li {
      position: relative;
      list-style-type: none;
      display: inline-block;

      &:after {
        content: ",";
        margin-right: 5px;
      }

      &:last-child:after {
        display: none;
      }
    }
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: #626262;

    &:hover {
      text-decoration: none;
      color: #f4b400;
    }
  }
`

export const Tags = styled.div`
  margin-top: 40px;

  >a {
    display: inline-block;
    position: relative;
    font-size: 12px;
    font-weight: 600;
    color: #222;
    margin: 0 7px 7px 0;
    padding: 5px 20px;
    border-radius: 18px;
    border: solid 1px #d1d1d1;

    &:hover {
      text-decoration: none;
      color: #f4b400;
      border-color: #f4b400;
    }
  }
`

export const PostTitle = styled.h1`
  font-size: 45px;
  font-weight: 600;
  line-height: 1.22;
  color: #000;
  margin-bottom: 40px;
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

export const RelatedPosts = styled.div`
  
`

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 50px;
`

export const BackButton = styled.div`
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
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 9;

  &.relative {
    position: relative;
    margin: 32px 0 0 32px;
    top: auto;
    left: auto;
  }
`
