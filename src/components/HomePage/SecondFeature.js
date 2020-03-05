import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import img_1 from '../../images/home-page/1.jpg'
import img_2 from '../../images/home-page/2.jpg'
import img_3 from '../../images/home-page/3.jpg'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'

import { Link } from 'gatsby'
import { Title } from '../../styles/indexStyle'
import { Container } from '../../styles'

import { Icon } from '@iconify/react'
import baselineArrowRightAlt from '@iconify/icons-ic/baseline-arrow-right-alt'

const scope = 'components.HomePage.SecondFeature'

const Wrapper = styled.div``

const Thumbnail = styled.img`
  max-width: 100%;
`

const Content = styled.div`
  padding-top: 30px;

  .btn-wrapper {
    margin-top: 25px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 25px;

    .btn-wrapper {
      margin-top: 10px;
      text-align: center;
    }
  }
`

const ViewMoreBtn = styled(Link)`
  display: inline-block;
  font-size: 15px;
  color: #f4b400;
  transition: all 0.3s ease-in-out;

  svg {
    font-size: 24px;
    margin-left: 16px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #f4b400;
    text-decoration: none;
    padding-left: 10px;

    svg {
      margin-left: 6px;
    }
  }
`

const Article = styled.article`
  margin-bottom: 100px;

  p {
    font-size: 15px;
    line-height: 1.53;
    color: #323232;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
`

class SecondFeature extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Article>
            <Row>
              <Col md={5}>
                <Thumbnail src={img_1} alt="" />
              </Col>
              <Col xl={{ size: 5, offset: 1 }} md={7}>
                <Content>
                  <Title>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.title1`}
                    />
                  </Title>
                  <p>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.content1`}
                    />
                  </p>
                  <div className="btn-wrapper">
                    <ViewMoreBtn to={`${this.props.langUri}/features`}>
                      <FormattedHTMLMessage tagName="span" id="btn.readMore" />
                      <Icon icon={baselineArrowRightAlt} />
                    </ViewMoreBtn>
                  </div>
                </Content>
              </Col>
            </Row>
          </Article>

          <Article>
            <Row>
              <Col xl={{ offset: 1 }} md={{ size: 5, order: 2 }}>
                <Thumbnail src={img_2} alt="" />
              </Col>
              <Col xl={{ size: 5, offset: 1 }} md={{ size: 7, order: 1 }}>
                <Content>
                  <Title>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.title2`}
                    />
                  </Title>
                  <p>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.content2`}
                    />
                  </p>
                  <div className="btn-wrapper">
                    <ViewMoreBtn to={`${this.props.langUri}/features`}>
                      <FormattedHTMLMessage tagName="span" id="btn.readMore" />
                      <Icon icon={baselineArrowRightAlt} />
                    </ViewMoreBtn>
                  </div>
                </Content>
              </Col>
            </Row>
          </Article>

          <Article>
            <Row>
              <Col md={5}>
                <Thumbnail src={img_3} alt="" />
              </Col>
              <Col xl={{ size: 5, offset: 1 }} md={7}>
                <Content>
                  <Title>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.title3`}
                    />
                  </Title>
                  <p>
                    <FormattedHTMLMessage
                      tagName="span"
                      id={`${scope}.content3`}
                    />
                  </p>
                  <div className="btn-wrapper">
                    <ViewMoreBtn to={`${this.props.langUri}/features`}>
                      <FormattedHTMLMessage tagName="span" id="btn.readMore" />
                      <Icon icon={baselineArrowRightAlt} />
                    </ViewMoreBtn>
                  </div>
                </Content>
              </Col>
            </Row>
          </Article>
        </Container>
      </Wrapper>
    )
  }
}
export default SecondFeature
