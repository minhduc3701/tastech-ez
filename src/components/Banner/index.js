import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal } from 'reactstrap'
import { Container } from '../../styles'

import { Icon } from '@iconify/react'
import baselineArrowRight from '@iconify/icons-ic/baseline-arrow-right'


const Wrapper = styled.div`
  padding: 190px 0 120px;
  background-image: linear-gradient(64deg, rgba(19, 29, 126, 0.65) 19%, rgba(244, 180, 0, 0.45) 121%), url(${props => props.bg || ''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  @media screen and (max-width: 767px) {
    padding: 230px 0 70px;
    background-image: linear-gradient(to top, rgba(19, 29, 126, 0.7) 0%, rgba(0, 15, 118, 0) 68%), url(${props => props.bgMobile ? props.bgMobile : props.bg || ''});
  }
`

const Inner = styled.div`
  position: relative;
  color: #fff;
  z-index: 10;
  width: ${props => props.bannerInnerWidth ? `${props.bannerInnerWidth}%`:'50%'};

  @media screen and (max-width: 1199px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 24px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0;
  font-family: work sans;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 1.4;
  }
`
export const Titleh2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0;
  font-family: work sans;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 1.4;
  }
`

export const Description = styled.h2`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 15px;
`

export const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-top: 30px;
    transition: all .3s ease-in-out;
    white-space: nowrap;

    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 50%;
      position: relative;
      margin-right: 22px;
      transition: all .3s ease-in-out;
      
      svg {
        font-size: 46px;
        color: #f4b400;
        transition: all .3s ease-in-out;
      }
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      color: #f4b400;

      .icon {
        background-color: #D8D8D8;

        svg {
          // color: #fff;
        }
      }
    }
    
    @media screen and (max-width: 767px) {
    margin-top: 25px;
  }

`

export const VideoPopup = styled(Modal)`
  .modal-content {
    background-color: transparent;
    border: none;
    border-radius: 0;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1066px;
  }
`

export const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;

  iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`


const Banner = props => {
  const [openPopup, setOpenPopup] = useState(false)
  return (
    <Wrapper bg={props.bg}>
        <Container>
          <Inner bannerInnerWidth={props.bannerInnerWidth}>
            {
               props.Titleh2?<Titleh2>{props.text}</Titleh2>:<Title>{props.text}</Title>
            }  
            
            {props.description && <Description>{props.description}</Description>}
            {props.video &&
              <Button onClick={() => setOpenPopup(!openPopup)}>
              <span className="icon">
                <Icon icon={baselineArrowRight} />
              </span>
              {props.button}
            </Button>
            }
          </Inner>
        </Container>

        {props.video && 
          <VideoPopup
        isOpen={openPopup}
        toggle={() => setOpenPopup(!openPopup)}
        size="lg"
        centered={true}>
        <Video>
          <iframe
            title="ezbiztrip"
            width="560"
            height="315"
            src={props.video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Video>
      </VideoPopup>
        }
      </Wrapper>
  )
}

export default Banner
