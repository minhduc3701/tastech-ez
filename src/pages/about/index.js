import React from 'react'
import { FormattedHTMLMessage, injectIntl } from 'react-intl'
import { Row, Col } from 'reactstrap'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'

import {
  Wrapper,
  Banner,
  BannerText,
  Title,
  SubTitle,
  SectionQuote,
  Section1,
  Section2,
  IntroItem,
  VisionImgWrapper,
  VisionTextBlock
} from '../../styles/aboutStyle'

import { Container } from '../../styles'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Icon } from '@iconify/react'
import quoteIcon from '@iconify/icons-raphael/quote'

import VisionImg from '../../images/about-page/vision.jpg'
import IntroIcon1 from '../../images/about-page/icon-1.svg'
import IntroIcon2 from '../../images/about-page/icon-2.png'
import IntroIcon3 from '../../images/about-page/icon-3.png'

import ContacForm from '../../components/ContactForm'

const scope = 'components.AboutUs'

const sliderSettings = {
  dots: true,
  dotsClass: 'slick-dots',
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }
  ]
}

const AboutUs = props => {
  const { formatMessage } = props.intl
  return (
    <Wrapper>
      <SEO
          title={formatMessage({ id: "about.meta.title" })}
          description={formatMessage({ id: "about.meta.description" })}
          lang={props.langKey}
        />
      <Banner>
        <Container>
          <BannerText>
            <p>
              <FormattedHTMLMessage
                tagName="span"
                id={`${scope}.bannerText1`}
              />
            </p>
            <h2>
              <FormattedHTMLMessage
                tagName="span"
                id={`${scope}.bannerText2`}
              />
            </h2>
          </BannerText>
        </Container>
      </Banner>

      <SectionQuote>
        <Container>
          <div className="quote-content">
            <span className="icon">
              <Icon icon={quoteIcon} />
            </span>
            <h3>
              <FormattedHTMLMessage tagName="span" id={`${scope}.introTitle`} />
            </h3>
            <p>
              <FormattedHTMLMessage
                tagName="span"
                id={`${scope}.introSubTitle`}
              />
            </p>
          </div>
        </Container>
      </SectionQuote>

      <Section1>
        <Container>
          <Slider {...sliderSettings}>
            <IntroItem>
              <img src={IntroIcon1} alt="" />
              <h3>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro1Title`}
                />
              </h3>
              <p>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro1Content`}
                />
              </p>
            </IntroItem>
            <IntroItem>
              <img src={IntroIcon2} alt="" />
              <h3>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro2Title`}
                />
              </h3>
              <p>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro2Content`}
                />
              </p>
            </IntroItem>
            <IntroItem>
              <img src={IntroIcon3} alt="" />
              <h3>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro3Title`}
                />
              </h3>
              <p>
                <FormattedHTMLMessage
                  tagName="span"
                  id={`${scope}.intro3Content`}
                />
              </p>
            </IntroItem>
          </Slider>
        </Container>
      </Section1>

      <Section2>
        <Container>
          <Row>
            <Col md={5}>
              <VisionImgWrapper>
                <img src={VisionImg} alt="" />
              </VisionImgWrapper>
            </Col>

            <Col lg={{ size: 6, offset: 1 }} md={7}>
              <VisionTextBlock>
                <SubTitle>
                  <FormattedHTMLMessage
                    tagName="span"
                    id={`${scope}.visionSubTitle`}
                  />
                </SubTitle>
                <Title>
                  <FormattedHTMLMessage
                    tagName="span"
                    id={`${scope}.visionTitle1`}
                  />
                </Title>
                <p>
                  <FormattedHTMLMessage
                    tagName="span"
                    id={`${scope}.visionText1`}
                  />
                </p>
              </VisionTextBlock>
            </Col>
          </Row>
        </Container>
      </Section2>

      <ContacForm bottom />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(AboutUs))
