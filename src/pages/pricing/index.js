import React, { useState } from 'react'
import moment from 'moment'
import { Col, Collapse } from 'reactstrap'
import { layoutWithLangKey } from "../../components/layout"
import SEO from '../../components/seo'
import { Container, CustomRow } from '../../styles'
import {
  Wrapper,
  Banner,
  SectionPricing,
  SectionFAQ,
  Question,
  SectionContact
} from '../../styles/pricingStyle'
import Subscription from '../../components/PricingPage/Subscription'
import SectionRequestForm from '../../components/HomePage/SectionRequestForm'
import { Icon } from '@iconify/react'
import outlineMinus from '@iconify/icons-ic/outline-minus'
import outlinePlus from '@iconify/icons-ic/outline-plus'
import outlineEmail from '@iconify/icons-ic/outline-email'

import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
const scope = 'page.pricingPlan'

const subscriptions = [
  {
    name: 'basic',
    price: 0,
    currency: 'SGD',
    period: 'freetrail',
    pricePerUser:'price',
    features: [
      {
        category: 'booking',
        combo: true,
        flight: true,
        hotel: true,
        // transportation: false,
        // restaurant: false,
        // group: false
      },
      {
        category: 'management',
        itinerary: true,
        expense: true,
        reward: true,
        report: true
      },
      {
        category: 'assistance',
        basicSupport: true,
        // advanceSupport: false,
        // insurance: false
      },
      {
        category: 'expensemanagement',
        expenseclaims:true,
        autoreport:true

      }
    ]
  },
  // {
  //   name: 'premium',
  //   price: 7,
  //   currency: 'SGD',
  //   period: 'month',
  //   features: [
  //     {
  //       category: 'booking',
  //       combo: true,
  //       flight: true,
  //       hotel: true,
  //       transportation: true,
  //       restaurant: true,
  //       group: true
  //     },
  //     {
  //       category: 'management',
  //       itinerary: true,
  //       expense: true,
  //       reward: true,
  //       report: true
  //     },
  //     {
  //       category: 'assistance',
  //       basicSupport: true,
  //       advanceSupport: true,
  //       insurance: true
  //     }
  //   ]
  // }
]

const availableFrom = '2020-01-06'

const PricingPlan = props => {
  const [collapse, setCollapse] = useState(false)

  const toggleCollapse = index => {
    if (collapse === index) {
      setCollapse(false)
    } else {
      setCollapse(index)
    }
  }

  const renderQuestions = () => {
    let questions = []

    for (let i = 0; i < 5; i++) {
      questions.push(
        <Question className={collapse === i ? 'active' : ''}>
          <div className="label" onClick={() => toggleCollapse(i)}>
            {collapse === i ? (
              <Icon icon={outlineMinus} />
            ) : (
                <Icon icon={outlinePlus} />
              )}

            <h4>
              <FormattedMessage id={`${scope}.faq.${i + 1}`} />
            </h4>
          </div>
          <Collapse isOpen={collapse === i}>
            <div className="detail">
              <FormattedMessage id={`${scope}.faq.${i + 1}_`} />
            </div>
          </Collapse>
        </Question>
      )
    }
    return <div>{questions}</div>
  }

  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "pricing.meta.title" })}
        description={formatMessage({ id: "pricing.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />

      <Banner>
        <Container className="narrow">
          <h2 className="page-title">
            <FormattedMessage id={`${scope}.pageTitle`} />
          </h2>
          <p className="page-desc">
            <FormattedMessage id={`${scope}.pageDesc`} />
          </p>
        </Container>
      </Banner>

      <SectionPricing>
        <Container className="narrow">
          <CustomRow spacing={40} className="subscriptions">
            {
              subscriptions.map(item => (
                <Col md={{size:8,offset:2}} >
                  <Subscription {...item} langUri={props.langUri} />
                </Col>
              ))
            }
          </CustomRow>

          {/* <div className="available-from">
            *&nbsp;
            <FormattedMessage id={`${scope}.availableFrom`} />
            &nbsp;
            <b>{moment(availableFrom).format('MMMM YYYY')}</b>
          </div> */}
        </Container>
      </SectionPricing>

      <SectionFAQ>
        <Container className="narrow">
          <header>
            <h3 className="section-title">
              <FormattedMessage id={`${scope}.faqTitle`} />
            </h3>
          </header>

          {renderQuestions()}
        </Container>
      </SectionFAQ>

     
      <SectionRequestForm langUri={props.langUri} type="pricing-form" />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(PricingPlan))
