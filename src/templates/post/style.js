import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 120px;
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
  margin-bottom: 40px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Meta = styled.div`
  color: #626262;
  font-size: 14px;
  margin-right: 30px;

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
  >a {
    position: relative;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #626262;

    &:after {
      content: ", "
    }

    &:last-child:after {
      display: none;
    }

    &:hover {
      text-decoration: none;
      color: #f4b400;
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
    margin: 1rem auto;

    .aligncenter {
      text-align: center;
    }
  }
`

export const PostFooter = styled.div`
  margin-top: 50px;
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
