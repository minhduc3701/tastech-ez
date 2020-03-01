import React from 'react'
import { Row, Col } from 'reactstrap'

import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { Title } from './style'
import { Container } from '../../styles'
import { Icon } from '@iconify/react'
import baselineFlight from '@iconify/icons-ic/baseline-flight'
import outlineAddAPhoto from '@iconify/icons-ic/outline-add-a-photo'
import outlinePieChart from '@iconify/icons-ic/outline-pie-chart'
import outlineInsertChartOutlined from '@iconify/icons-ic/outline-insert-chart-outlined'

const scope = 'components.HomePage.FirstFeature'

const Wrapper = styled.div`
  margin: 120px auto 40px;

  @media screen and (max-width: 767px) {
    margin: 50px auto 0;
  }
`

const Feature = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media screen and (max-width: 767px) {
    margin-bottom: 35px;
  }
`

const IconWrapper = styled.div`
  display: inline-flex;
  width: 70px;
  height: 70px;
  flex: 0 0 70px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  border-radius: 50%;
  background-color: #f4b400;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 767px) {
    margin-right: 28px;
    width: 60px;
    height: 60px;
    flex: 0 0 60px;
    font-size: 24px;
  }
`

const Content = styled.div`
  p {
    font-size: 15px;
    line-height: 1.53;
    color: #323232;
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #323232;
  margin-bottom: 70px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 23px;
    margin-bottom: 50px;
  }
`

const FirstFeature = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>
          <FormattedHTMLMessage tagName="span" id={`${scope}.heading`} />
        </SectionTitle>

        <Row>
          <Col xl={5} md={6}>
            <Feature>
              <IconWrapper>
                <Icon icon={baselineFlight} />
              </IconWrapper>
              <Content>
                <Title>
                  <FormattedMessage id={`${scope}.title1`} />
                </Title>
                <p>
                  <FormattedMessage id={`${scope}.content1`} />
                </p>
              </Content>
            </Feature>
          </Col>

          <Col xl={{ size: 5, offset: 2 }} md={6}>
            <Feature>
              <IconWrapper>
                <Icon icon={outlineAddAPhoto} />
              </IconWrapper>
              <Content>
                <Title>
                  <FormattedMessage id={`${scope}.title3`} />
                </Title>
                <p>
                  <FormattedMessage id={`${scope}.content3`} />
                </p>
              </Content>
            </Feature>
          </Col>
        </Row>

        <Row>
          <Col xl={5} md={6}>
            <Feature>
              <IconWrapper>
                <Icon icon={outlinePieChart} />
              </IconWrapper>
              <Content>
                <Title>
                  <FormattedMessage id={`${scope}.title2`} />
                </Title>
                <p>
                  <FormattedMessage id={`${scope}.content2`} />
                </p>
              </Content>
            </Feature>
          </Col>

          <Col xl={{ size: 5, offset: 2 }} md={6}>
            <Feature>
              <IconWrapper>
                <Icon icon={outlineInsertChartOutlined} />
              </IconWrapper>
              <Content>
                <Title>
                  <FormattedMessage id={`${scope}.title4`} />
                </Title>
                <p>
                  <FormattedMessage id={`${scope}.content4`} />
                </p>
              </Content>
            </Feature>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
export default FirstFeature
