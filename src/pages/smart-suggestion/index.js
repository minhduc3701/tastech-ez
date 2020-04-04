import React from 'react'
import { Row, Col } from 'reactstrap'
import { Container } from '../../styles'
import {
  Wrapper,
  SectionSG
} from '../../styles/featureStyle'


import { FormattedMessage, injectIntl } from 'react-intl'

import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import Banner from '../../components/Banner'
import Article from '../../components/Article'
import PromoLinks from '../../components/PromoLinks'

import { Icon } from '@iconify/react'
import baselinePlaylistAddCheck from '@iconify/icons-ic/baseline-playlist-add-check'
import baselineAccessTime from '@iconify/icons-ic/baseline-access-time'

import bg from '../../images/smart-suggestion/banner.jpg'
import img1 from '../../images/smart-suggestion/1.png'
import img2 from '../../images/smart-suggestion/2.png'
import img3 from '../../images/smart-suggestion/3.png'

const scope = 'page.smartSuggestion'

const SmartSuggestionPage = props => {
  

  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "smartSuggestion.meta.title" })}
        description={formatMessage({ id: "smartSuggestion.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner 
        bg={bg}
        text={<FormattedMessage id={`${scope}.banner.text`} />}
        button={<FormattedMessage id={`${scope}.banner.button`} />}
        video="https://www.youtube.com/embed/JmSQYhSAYvw?rel=0&autoplay=1"
      />

      <SectionSG>
        <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <img src={img1} alt=""/>
          </Col>
          <Col md={6} className="text-center">
            <p><FormattedMessage id={`${scope}.1_`} /></p>
            <br/>
          </Col>
        </Row>

        <Row>
              <Col md={{ size: 6 }} className="d-flex align-items-center">
                <Article
                  icon={<Icon icon={baselineAccessTime} />}
                  title={<FormattedMessage id={`${scope}.2`} />}
                  content={<FormattedMessage id={`${scope}.2_`} />}
                  
                />
              </Col>

              <Col md={{ size: 6 }} className="text-center">
                <img src={img2} alt="" />
              </Col>
            </Row>

            <Row>
              <Col md={{ size: 6, order: 2 }} className="d-flex align-items-center">
                <Article
                  icon={<Icon icon={baselinePlaylistAddCheck} />}
                  title={<FormattedMessage id={`${scope}.3`} />}
                  content={<FormattedMessage id={`${scope}.3_`} />}
                  
                />
              </Col>

              <Col md={{ size: 6, order: 1 }} className="text-center">
                <img src={img3} alt="" />
              </Col>
            </Row>
      </Container>
      </SectionSG>

      <PromoLinks langUri={props.langUri}/>

    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(SmartSuggestionPage))
