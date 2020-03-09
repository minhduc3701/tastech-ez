import React from "react"

import {layoutWithLangKey} from '../components/layout'
import SEO from "../components/seo"
import FirstFeature from '../components/HomePage/FirstFeature'
import SecondFeature from '../components/HomePage/SecondFeature'
import SectionRequestForm from '../components/HomePage/SectionRequestForm'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { HomeWrapper, SliderItem } from '../styles/indexStyle'
import { Container } from '../styles'

import Banner1 from '../images/home-page/banner-1.jpg'
import Banner2 from '../images/home-page/banner-2.jpg'
import Banner3 from '../images/home-page/banner-3.jpg'
import Banner4 from '../images/home-page/banner-4.jpg'
import { Icon } from '@iconify/react'
import baselineChevronRight from '@iconify/icons-ic/baseline-chevron-right'
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left'

import { FormattedMessage, injectIntl } from 'react-intl'
const scope = 'components.HomePage'

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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

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
          <SliderItem src={Banner1}>
            <Container>
              <h2 className="text">
                <FormattedMessage id={`${scope}.banner1`} />
              </h2>
            </Container>
          </SliderItem>
          <SliderItem src={Banner2}>
            <Container>
              <h2 className="text">
                <FormattedMessage id={`${scope}.banner2`} />
              </h2>
            </Container>
          </SliderItem>
          <SliderItem src={Banner3}>
            <Container>
              <h2 className="text">
                <FormattedMessage id={`${scope}.banner3`} />
              </h2>
            </Container>
          </SliderItem>
          <SliderItem src={Banner4}>
            <Container>
              <h2 className="text">
                <FormattedMessage id={`${scope}.banner4`} />
              </h2>
            </Container>
          </SliderItem>
        </Slider>

        <FirstFeature />
        <SecondFeature langUri={props.langUri} />
        <SectionRequestForm langUri={props.langUri} />
      </HomeWrapper>
)
}

export default layoutWithLangKey(injectIntl(IndexPage))



