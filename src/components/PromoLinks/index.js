import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container } from '../../styles'
import bg from '../../images/home-page/promoLinks.jpg'

import { FormattedMessage } from 'react-intl'
const scope = 'components.promoLinks'

const Wrapper = styled.div`
  padding-bottom: 190px;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 90px;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 100px;

    &:before {
      top: 60px;
    }
  }
`


export const Box = styled.div`
  box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
  // text-align: center;
  padding: 55px 60px 60px;
  

  h3 {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.2;
    color: #171e45;
    margin-bottom: 18px;
    font-family:work sans;
  }

   p {
    font-size: 18px;
   }

   footer {
    margin-top: 30px;
   }
   .buttonAlignCenter{
     margin:auto;
   }

   @media screen and (max-width: 767px) {
    padding: 50px 40px;

    h3 {
      font-size: 25px;
      line-height: 1.4;
      margin-bottom: 13px;
    }

    p {
      font-size: 15px;
    }

    footer {
      margin-top: 25px;
    }
  }
`

export const StartLink = styled(Link)`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  min-width: 200px;
  padding: 16px 20px;
  border-radius: 5px;
  background-color: #f4b400;
  color: #fff;
  text-align:center;

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #e3a800;
  }
`

const PromoLinks = props => {
  return (
    <Wrapper bg={props.bg}>
      <Container>
        <Box>
          <Row>
            <Col md={{size:7,offset:1}}>
              <h3>
                <FormattedMessage id={`${scope}.title`} />
              </h3>
              <p>
                <FormattedMessage id={`${scope}.description`} />
              </p>
            </Col>

            <Col md={{size:3,offset:1}} className="buttonAlignCenter">
              <StartLink to={`${props.langUri}/request-demo`}>
                  <FormattedMessage id={`${scope}.startLink`} />
              </StartLink>
            </Col>

          </Row>

        </Box>
      </Container>
    </Wrapper>
  )
}

export default PromoLinks
