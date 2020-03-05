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
} from '../../styles/featureStyle'

import Img2 from '../../images/feature-page/2.png'
import Img3 from '../../images/feature-page/3.png'
import Img4 from '../../images/feature-page/4.png'
import Img5 from '../../images/feature-page/5.png'

import { FormattedMessage, injectIntl } from 'react-intl'

import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'

import { Icon } from '@iconify/react'
import outlineInsertDriveFile from '@iconify/icons-ic/outline-insert-drive-file'
import baselineCropOriginal from '@iconify/icons-ic/baseline-crop-original'
import baselinePlaylistAddCheck from '@iconify/icons-ic/baseline-playlist-add-check'
import baselineAirplanemodeActive from '@iconify/icons-ic/baseline-airplanemode-active'

import SectionRequestForm from '../../components/HomePage/SectionRequestForm'
import SectionRequestLink from '../../components/HomePage/SectionRequestLink'

const scope = 'components.FeaturePage'

const FeaturePage = props => {
  const [openPopup, setOpenPopup] = useState(false)

  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "features.meta.title" })}
        description={formatMessage({ id: "features.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
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
        <SectionRequestLink langUri={props.langUri}/>
      </div>

      <div className="d-block d-md-none">
        <SectionRequestForm langUri={props.langUri}/>
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

export default layoutWithLangKey(injectIntl(FeaturePage))
