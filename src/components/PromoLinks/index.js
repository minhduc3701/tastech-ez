import React from 'react'
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
  text-align: center;
  padding: 55px 60px 60px;

  h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.67;
    color: #000;
    margin-bottom: 18px;
  }

   p {
    font-size: 20px;
   }

   footer {
    margin-top: 30px;
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
          <h3>
              <FormattedMessage id={`${scope}.title`} />
            </h3>
            <p>
              <FormattedMessage id={`${scope}.description`} />
            </p>

            <footer>
              <StartLink to={`${props.langUri}/request-demo`}>
              <FormattedMessage id={`${scope}.startLink`} />
            </StartLink>
            </footer>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default PromoLinks
