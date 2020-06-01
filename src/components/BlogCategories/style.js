import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  
`

export const WidgetTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 15px 0 30px;
`

export const Category = styled(Link)`
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: rgba(91, 184, 217, 0.8);
  padding: 33px 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: 
  }

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  span {
    position: relative;
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointter-events: none;

  * {
    display: none;
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
  }


  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`