import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { Container } from '../../styles'
import {
  Wrapper,
  Banner,
  BannerText,
  Section1,
  Section2,
  Section3,
  Section4,
  Title,
  List,
  ImageWrapper,
  TextWrapper,
  VideoPopup,
  VideoWrapper
} from './style'

import Img2 from '../../images/feature-page/2.png'
import Img3 from '../../images/feature-page/3.png'
import Img4 from '../../images/feature-page/4.png'
import Img5 from '../../images/feature-page/5.png'

import { FormattedMessage } from 'react-intl'

import { Helmet } from 'react-helmet'

import {layoutWithLangKey} from "../../components/layout"

import { Icon } from '@iconify/react'
import outlineInsertDriveFile from '@iconify/icons-ic/outline-insert-drive-file'
import baselineCropOriginal from '@iconify/icons-ic/baseline-crop-original'
import baselinePlaylistAddCheck from '@iconify/icons-ic/baseline-playlist-add-check'
import baselineAirplanemodeActive from '@iconify/icons-ic/baseline-airplanemode-active'

import SectionRequestForm from '../../components/HomePage/SectionRequestForm'
import SectionRequestLink from '../../components/HomePage/SectionRequestLink'

const scope = 'components.FeaturePage'

const FeaturePage = () => {
  const [openPopup, setOpenPopup] = useState(false)

  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  return (
    <Wrapper>
      <Helmet>
        <title>
          EzBizTrip – Expenses Management, less effort business travel booking
          system, ERP system
        </title>
        <meta
          name="description"
          content="EzBiz Trip unique feature that make us different, we provide a easy to use expense management system, a trip management system that track submitted request anywhere anytime and an itinerary on the go that will alert you of your trip events and plan. "
        />
      </Helmet>
      <Banner>
        <Container>
          <BannerText>
            <h2>
              <FormattedMessage id={`${scope}.bannerTitle`} />
            </h2>
            <p>
              <FormattedMessage id={`${scope}.bannerText`} />
            </p>

            <button onClick={togglePopup}>
              <span className="icon" />
              <FormattedMessage id={`${scope}.bannerButton`} />
            </button>
          </BannerText>
        </Container>
      </Banner>

      <Section1>
        <Container>
          <Row>
            <Col md={{ size: 6, order: 2 }} lg={5}>
              <TextWrapper>
                <header>
                  <span className="icon">
                    <Icon icon={outlineInsertDriveFile} />
                  </span>
                  <Title>
                    <FormattedMessage id={`${scope}.feature1Title`} />
                  </Title>
                </header>
                <List>
                  <li>
                    <FormattedMessage id={`${scope}.feature1Content1`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature1Content2`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature1Content3`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature1Content4`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature1Content5`} />
                  </li>
                </List>
              </TextWrapper>
            </Col>

            <Col md={{ size: 6, order: 1 }}>
              <ImageWrapper>
                <img src={Img2} alt="" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Section1>

      <Section2>
        <Container>
          <Row>
            <Col md={6} lg={{ size: 5, offset: 1 }}>
              <TextWrapper>
                <header>
                  <span className="icon">
                    <Icon icon={baselineCropOriginal} />
                  </span>
                  <Title>
                    <FormattedMessage id={`${scope}.feature2Title`} />
                  </Title>
                </header>
                <List>
                  <li>
                    <FormattedMessage id={`${scope}.feature2Content1`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature2Content2`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature2Content3`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature2Content4`} />
                  </li>
                </List>
              </TextWrapper>
            </Col>
            <Col md={6}>
              <ImageWrapper>
                <img src={Img3} alt="" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Section2>

      <Section3>
        <Container>
          <Row>
            <Col md={{ size: 6, order: 2 }} lg={5}>
              <TextWrapper>
                <header>
                  <span className="icon">
                    <Icon icon={baselinePlaylistAddCheck} />
                  </span>
                  <Title>
                    <FormattedMessage id={`${scope}.feature3Title`} />
                  </Title>
                </header>
                <List>
                  <li>
                    <FormattedMessage id={`${scope}.feature3Content1`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature3Content2`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature3Content3`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature3Content4`} />
                  </li>
                </List>
              </TextWrapper>
            </Col>
            <Col md={{ size: 6, order: 1 }}>
              <ImageWrapper>
                <img src={Img4} alt="" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Section3>

      <Section4>
        <Container>
          <Row>
            <Col
              md={6}
              lg={{ size: 5, offset: 1 }}
              className="justify-content-md-end">
              <TextWrapper>
                <header>
                  <span className="icon">
                    <Icon icon={baselineAirplanemodeActive} />
                  </span>
                  <Title>
                    <FormattedMessage id={`${scope}.feature4Title`} />
                  </Title>
                </header>
                <List>
                  <li>
                    <FormattedMessage id={`${scope}.feature4Content1`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature4Content2`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature4Content3`} />
                  </li>
                  <li>
                    <FormattedMessage id={`${scope}.feature4Content4`} />
                  </li>
                </List>
              </TextWrapper>
            </Col>
            <Col md={6}>
              <ImageWrapper>
                <img src={Img5} alt="" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Section4>

      <div className="d-none d-md-block">
        <SectionRequestLink />
      </div>

      <div className="d-block d-md-none">
        <SectionRequestForm />
      </div>

      <VideoPopup
        isOpen={openPopup}
        toggle={togglePopup}
        size="lg"
        centered={true}>
        <VideoWrapper>
          <iframe
            title="ezbiztrip"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JmSQYhSAYvw?rel=0&autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </VideoWrapper>
      </VideoPopup>
    </Wrapper>
  )
}

export default layoutWithLangKey(FeaturePage)
