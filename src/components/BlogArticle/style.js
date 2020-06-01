import styled from 'styled-components'

export const Wrapper = styled.article`
  margin-bottom: 50px;
`

export const Thumbnail = styled.div`
  margin-bottom: 22px;
`

export const Categories = styled.div`
  margin-bottom: 10px;

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

export const Title = styled.h3`
  margin-bottom: 20px;

  a {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    line-height: 1.5;

    &:hover {
      text-decoration: none;
      color: #f4b400;
    }
  }
`

export const Excerpt = styled.div`
  p {
    font-size: 15px;
    color: #626262;
    line-height: 1.53;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Meta = styled.div`
  color: #626262;
  font-size: 14px;

  svg {
    font-size: 24px;
    margin-right: 12px;
    position: relative;
    top: -1px;
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