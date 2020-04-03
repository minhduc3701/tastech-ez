import React from 'react'
import { Row, Col } from 'reactstrap'
import { Container } from '../../styles'
import {
  Wrapper,
  SectionTP
} from '../../styles/featureStyle'


import { FormattedMessage, injectIntl } from 'react-intl'

import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import Banner from '../../components/Banner'
import Article from '../../components/Article'
import PromoLinks from '../../components/PromoLinks'

import { Icon } from '@iconify/react'
import outlinePoll from '@iconify/icons-ic/outline-poll'
import baselineEventAvailable from '@iconify/icons-ic/baseline-event-available'


import bg from '../../images/travel-policy-management/banner.jpg'
import img1 from '../../images/travel-policy-management/1.png'

const scope = 'page.travelPolicyManagement'

const TravelPolicyManagementPage = props => {
  

  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "travelPolicyManagement.meta.title" })}
        description={formatMessage({ id: "travelPolicyManagement.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner 
        bg={bg}
        text={<FormattedMessage id={`${scope}.banner.text`} />}
        description={<FormattedMessage id={`${scope}.banner.description`} />}
        button={<FormattedMessage id={`${scope}.banner.button`} />}
        video="https://www.youtube.com/embed/JmSQYhSAYvw?rel=0&autoplay=1"
      />

      <SectionTP>
        <Container>
        <Row>
          <Col md={6} className="text-center">
            <img src={img1} alt=""/>
          </Col>
              <Col md={6} className="d-flex align-items-center">
                <div className="text-block">
                  <p><FormattedMessage id={`${scope}.1`} /></p>
                  <Article
                  iconLeft
                  icon={<Icon icon={outlinePoll} />}
                  title={<FormattedMessage id={`${scope}.2`} />}
                  content={<FormattedMessage id={`${scope}.2_`} />}
                  
                />
                <Article
                iconLeft
                  icon={<Icon icon={baselineEventAvailable} />}
                  title={<FormattedMessage id={`${scope}.3`} />}
                  content={<FormattedMessage id={`${scope}.3_`} />}
                  
                />
                </div>
              </Col>
            </Row>
      </Container>
      </SectionTP>

      <PromoLinks langUri={props.langUri}/>

    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(TravelPolicyManagementPage))
