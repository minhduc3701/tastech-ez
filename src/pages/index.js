import React from "react"
import { layoutWithLangKey } from '../components/layout'
import { Row, Col } from 'reactstrap'

import SEO from "../components/seo"
import Article from '../components/Article'
import SectionRequestForm from '../components/HomePage/SectionRequestForm'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { HomeWrapper, CampaignWrapper, VideoWrapper, BannerContent, SliderItem, Heading, SectionIntro, SeeMore, SectionHowWeWork, Customer } from '../styles/homeStyle'
import { Container, CustomRow } from '../styles'

import banner1 from '../images/home-page/banner-1.jpg'
import banner2 from '../images/home-page/banner-2.jpg'
import banner3 from '../images/home-page/banner-3.jpg'
import banner4 from '../images/home-page/banner-4.jpg'
import intro1 from '../images/home-page/1.png'
import intro2 from '../images/home-page/2.png'
import intro3 from '../images/home-page/3.png'
import intro4 from '../images/home-page/4.png'
import intro5 from '../images/home-page/5.png'

import { Icon } from '@iconify/react'
import baselineChevronRight from '@iconify/icons-ic/baseline-chevron-right'
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left'
import baselineArrowRightAlt from '@iconify/icons-ic/baseline-arrow-right-alt'
import baselineFlight from '@iconify/icons-ic/baseline-flight'
import outlinePhotoCamera from '@iconify/icons-ic/outline-photo-camera'
import outlinePoll from '@iconify/icons-ic/outline-poll'
import outlineCardGiftcard from '@iconify/icons-ic/outline-card-giftcard'
import roundBusinessCenter from '@iconify/icons-ic/round-business-center'
import baselinePerson from '@iconify/icons-ic/baseline-person'
import baselinePlus from '@iconify/icons-ic/baseline-plus'
import outlineAnnouncement from '@iconify/icons-ic/outline-announcement'
import { FormattedMessage, injectIntl ,FormattedHTMLMessage} from 'react-intl'

const scope = 'page.HomePage'

const NextArrow = sliderProps => {
  const { className, style, onClick } = sliderProps
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon={baselineChevronRight} />
    </div>
  )
}

const PrevArrow = sliderProps => {
  const { className, style, onClick } = sliderProps
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon={baselineChevronLeft} />
    </div>
  )
}

const sliderSettings = {
  dots: true,
  dotsClass: 'slick-dots',
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  swipe: true,
  // fade: true
}

const LinkDetail = link => (
  <SeeMore to={link.to}>
    <FormattedMessage id={`${scope}.moreDetail`} />
    <Icon icon={baselineArrowRightAlt} />
  </SeeMore>
)

const IndexPage = props => {
  const { formatMessage } = props.intl
  return (
    <HomeWrapper>
      <SEO
        title={formatMessage({ id: "home.meta.title" })}
        description={formatMessage({ id: "home.meta.description" })}
        lang={props.langKey}
      />

      <Slider {...sliderSettings}>
    
        <CampaignWrapper>
          <Container>
            <CustomRow spacing={20}>
              <Col xl={{ size: 5, order: 2 }} lg={12} className="d-flex align-items-center">
                <BannerContent>
                  <p className="sub">
                    <FormattedMessage id={`${scope}.WFHsubTitle`} />
                  </p>
                  <h2>
                    <FormattedMessage id={`${scope}.WFHtitle`} />
                  </h2>
                  
                  <p>
                    <FormattedMessage id={`${scope}.WFHdes`} />
                  </p>
                  <a href={`${props.langUri}remote-work-expense-management/`} target="_blank">
                    <FormattedMessage id={`${scope}.WFHbtn`} />
                  </a>
                </BannerContent>
              </Col>
              <Col xl={{ size: 7, order: 1 }} lg={12} className="video" >
                <VideoWrapper>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/l6ClKu66vI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
              </Col>
            </CustomRow>
          </Container>
        </CampaignWrapper>
        {/* <SliderItem src={banner1}>
          <Container>
            <h2 className="text">
              <FormattedMessage id={`${scope}.banner1`} />
            </h2>
          </Container>
        </SliderItem> */}
      </Slider>

      <SectionIntro>
        <Container>
          <h1>
            <FormattedMessage id={`${scope}.intro.sectionTitle`} />
          </h1>

          <Row>
            <Col md={{ size: 6, order: 2 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={baselineFlight} />}
                title={<FormattedMessage id={`${scope}.intro.1`} />}
                content={<ul>
                  <li><FormattedMessage id={`${scope}.intro.1_1`} /></li>
                  <li><FormattedMessage id={`${scope}.intro.1_2`} /></li>
                  <li><FormattedMessage id={`${scope}.intro.1_3`} /></li>
                  <li><FormattedMessage id={`${scope}.intro.1_4`} /></li>
                </ul>}
                link={<LinkDetail to={`${props.langUri}/smart-suggestion/`} />}
              />
            </Col>

            <Col md={{ size: 6, order: 1 }} className="text-center">
              <img src={intro1} alt="" />
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 6 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={outlinePhotoCamera} />}
                title={<FormattedMessage id={`${scope}.intro.2`} />}
                content={<FormattedMessage id={`${scope}.intro.2_`} />}
                link={<LinkDetail to={`${props.langUri}/expense-management/`} />}
              />
            </Col>

            <Col md={{ size: 6 }} className="text-center">
              <img src={intro2} alt="" />
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 6, order: 2 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={outlinePoll} />}
                title={<FormattedMessage id={`${scope}.intro.3`} />}
                content={<FormattedMessage id={`${scope}.intro.3_`} />}
                link={<LinkDetail to={`${props.langUri}/travel-policy-management/`} />}
              />
            </Col>

            <Col md={{ size: 6, order: 1 }} className="text-center">
              <img src={intro3} alt="" />
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 6 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={outlineCardGiftcard} />}
                title={<FormattedMessage id={`${scope}.intro.4`} />}
                content={<FormattedMessage id={`${scope}.intro.4_`} />}
                link={<LinkDetail to={`${props.langUri}/rewards-program/`} />}
              />
            </Col>

            <Col md={{ size: 6 }} className="text-center">
              <img src={intro4} alt="" />
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 6, order: 2 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={outlineAnnouncement} />}
                title={<FormattedMessage id={`${scope}.intro.5`} />}
                content={<FormattedHTMLMessage type='span' id={`${scope}.intro.5_`} />}
              />
            </Col>

            <Col md={{ size: 6, order: 1 }} className="text-center">
              <img src={intro5} alt="" />
            </Col>
          </Row>
        </Container>
      </SectionIntro>

      <SectionHowWeWork>
        <div className="backdrop"></div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Heading>
                <FormattedMessage id={`${scope}.howWeWork.sectionTitle`} />
              </Heading>
            </Col>
          </Row>

          <CustomRow spacing={50}>
            <Col md={6}>
              <Customer color="#0f73ee">
                <header>
                  <div className="icon">
                    <Icon icon={roundBusinessCenter} />
                  </div>

                  <h2 className="title">
                    <FormattedMessage id={`${scope}.howWeWork.for`} />
                    &nbsp;
                    <span className="underline">
                      {
                        formatMessage({ id: `${scope}.travellers` })
                          .split(" ")
                          .map((word, index) => <span key={index}>{word}</span>)
                      }
                    </span>
                  </h2>
                </header>

                <ul>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.travellers.1`} /></h3>
                      <p><FormattedMessage id={`${scope}.travellers.1_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.travellers.2`} /></h3>
                      <p><FormattedMessage id={`${scope}.travellers.2_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.travellers.3`} /></h3>
                      <p><FormattedMessage id={`${scope}.travellers.3_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.travellers.4`} /></h3>
                      <p><FormattedMessage id={`${scope}.travellers.4_`} /></p>
                    </div>
                  </li>
                </ul>
              </Customer>
            </Col>
            <Col md={6}>
              <Customer color="#f4b400" className="owner">
                <header>
                  <div className="icon">
                    <Icon icon={baselinePerson} />
                  </div>

                  <h2 className="title">
                    <FormattedMessage id={`${scope}.howWeWork.for`} />
                    &nbsp;
                    <span className="underline">
                      {
                        formatMessage({ id: `${scope}.owner` })
                          .split(" ")
                          .map((word, index) => <span key={index}>{word}</span>)
                      }
                    </span>
                  </h2>
                </header>

                <ul>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.owner.1`} /></h3>
                      <p><FormattedMessage id={`${scope}.owner.1_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.owner.2`} /></h3>
                      <p><FormattedMessage id={`${scope}.owner.2_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.owner.3`} /></h3>
                      <p><FormattedMessage id={`${scope}.owner.3_`} /></p>
                    </div>
                  </li>
                  <li>
                    <Icon icon={baselinePlus} />
                    <div>
                      <h3><FormattedMessage id={`${scope}.owner.4`} /></h3>
                      <p><FormattedMessage id={`${scope}.owner.4_`} /></p>
                    </div>
                  </li>
                </ul>
              </Customer>
            </Col>
          </CustomRow>
        </Container>
      </SectionHowWeWork>

      <SectionRequestForm langUri={props.langUri} />
    </HomeWrapper>
  )
}

export default layoutWithLangKey(injectIntl(IndexPage))



