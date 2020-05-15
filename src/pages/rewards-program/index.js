import React from 'react'
import { Row, Col } from 'reactstrap'
import { Container, CustomRow } from '../../styles'
import {
  Wrapper,
  SectionRP1,
  SectionRP2
} from '../../styles/featureStyle'


import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'

import { layoutWithLangKey } from "../../components/layout"
import SEO from '../../components/seo'
import Banner from '../../components/Banner'
import Article from '../../components/Article'
import PromoLinks from '../../components/PromoLinks'

import { Icon } from '@iconify/react'
import baselineSwapHoriz from '@iconify/icons-ic/baseline-swap-horiz'
import outlineSentimentSatisfied from '@iconify/icons-ic/outline-sentiment-satisfied'
import baselineCardGiftcard from '@iconify/icons-ic/baseline-card-giftcard'


import bg from '../../images/rewards-program/banner.jpg'
import img1 from '../../images/rewards-program/1.png'

const scope = 'page.rewardsProgram'

const RewardsProgramPage = props => {


  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "rewardsProgram.meta.title" })}
        description={formatMessage({ id: "rewardsProgram.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner
        bg={bg}
        bannerInnerWidth='65'
        text={<FormattedMessage id={`${scope}.banner.text`} />}
        button={<FormattedMessage id={`${scope}.banner.button`} />}
        video="https://www.youtube.com/embed/JmSQYhSAYvw?rel=0&autoplay=1"
      />

      <SectionRP1>
        <Container>
          <Row>
            <Col md={12} className="text-center headtitle">
              <h2>
                <FormattedMessage id={`${scope}.1title_`} />
              </h2>
            </Col>
            <Col md={6} className="text-center">
              <img src={img1} alt=""/>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className="text-block">
                <Article
                  fontSize='25'
                  title={<FormattedMessage id={`${scope}.1`} />}
                  content={<FormattedHTMLMessage id={`${scope}.1_`} />}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionRP1>

      <SectionRP2>
        <Container>
          <CustomRow spacing={60}>
            <Col md={5}>
              <Article
                icon={<Icon icon={outlineSentimentSatisfied} />}
                title={<FormattedMessage id={`${scope}.3`} />}
                content={<FormattedMessage id={`${scope}.3_`} />}
              />
            </Col>
            <Col md={{size:6,offset:1}}>
              <Article
                icon={<Icon icon={baselineCardGiftcard} />}
                title={<FormattedMessage id={`${scope}.4`} />}
                content={<FormattedMessage id={`${scope}.4_`} />}
              />
            </Col>
          </CustomRow>
        </Container>
      </SectionRP2>

      <PromoLinks langUri={props.langUri} />

    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(RewardsProgramPage))
