import React, { Component } from 'react'
import RequestForm from '../Common/RequestForm'
import styled from 'styled-components'
import bg from './../../images/home-page/4.jpg'
import { injectIntl } from 'react-intl'

import { Container } from '../../styles'

const scope = 'components.HomePage.FourthFeature'

const Wrapper = styled.div`
  padding: 75px 0;
  background-image: url(${bg}),
    linear-gradient(310deg, #1d2148, rgba(244, 180, 0, 0.15));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 991px) {
    padding: 60px 0;
  }
`

class SectionRequesForm extends Component {
  handleSubmit = values => {
    // this.props.history.push({
    //   pathname: '/request-demo',
    //   state: {
    //     tksFlag: true
    //   }
    // })
  }
  render() {
    const { formatMessage } = this.props.intl

    return (
      <Wrapper>
        <Container className="text-center text-xl-right">
          <RequestForm
            title={formatMessage({ id: `${scope}.title` })}
            des={formatMessage({ id: `${scope}.des` })}
            onSubmit={this.handleSubmit}
          />
        </Container>
      </Wrapper>
    )
  }
}
export default injectIntl(SectionRequesForm)
