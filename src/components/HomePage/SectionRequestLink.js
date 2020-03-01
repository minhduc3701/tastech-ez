import React from 'react'
import styled from 'styled-components'
import bg from './../../images/home-page/5.jpg'
import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import { Icon } from '@iconify/react'
import baselineArrowForward from '@iconify/icons-ic/baseline-arrow-forward'

import { Container } from '../../styles'

const scope = 'components.HomePage.SectionRequestLink'

const Wrapper = styled.div`
  padding: 70px 0;
  background-image: url(${bg}),
    linear-gradient(310deg, #1d2148, rgba(244, 180, 0, 0.15));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;

  h3 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  p {
    font-size: 15px;
  }

  a {
    margin-top: 15px;
    display: inline-block;
    font-size: 15px;
    line-height: 21px;
    color: #fff;
    padding: 17px 26px 17px 36px;
    border-radius: 28px;
    background: #f4b400;

    svg {
      font-size: 20px;
      margin-left: 26px;
    }

    &:hover {
      color: #f4b400;
      text-decoration: none;
      background: #fff;
    }
  }
`
const SectionRequesLink = props => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <h3>
              <FormattedMessage id={`${scope}.title`} />
            </h3>
            <p>
              <FormattedMessage id={`${scope}.description`} />
            </p>
            <Link to="/request-demo">
              <FormattedMessage id={`${scope}.link`} />
              <Icon icon={baselineArrowForward} />
            </Link>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
export default SectionRequesLink
