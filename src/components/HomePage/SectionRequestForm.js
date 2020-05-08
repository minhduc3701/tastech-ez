import React, { Component } from 'react'
import RequestForm from '../Common/RequestForm'
import styled from 'styled-components'
import bg from './../../images/home-page/requestDemo.jpg'
import { injectIntl } from 'react-intl'
import {navigate} from 'gatsby'

import { Container } from '../../styles'

const scope = 'page.HomePage.RequestForm'

const Wrapper = styled.div`
  padding: 75px 0;
  background-image: linear-gradient(328deg, rgba(19, 29, 126, 0.4), rgba(0, 15, 118, 0.1) 80%), url(${props => props.bgSrc ? props.bgSrc : bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
  }
`

class SectionRequestForm extends Component {
  handleSubmit = values => {
    navigate(`${this.props.langUri}/request-demo?thanks=1`)
  }
  render() {
    const { formatMessage } = this.props.intl

    return (
      <Wrapper bgSrc={this.props.bgSrc}>
        <Container className="text-center text-xl-right">
          <RequestForm
            langUri={this.props.langUri}
            title={formatMessage({ id: `${scope}.title` })}
            des={formatMessage({ id: `${scope}.des` })}
            onSubmit={this.handleSubmit}
          />
        </Container>
      </Wrapper>
    )
  }
}
export default injectIntl(SectionRequestForm)
