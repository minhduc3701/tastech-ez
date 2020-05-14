import React from 'react'
import { Row, Col } from 'reactstrap'
import { Container,CustomRow } from '../../styles'
import {
  Wrapper,
  SectionEM1,
  SectionEM2,
  SectionIntro
} from '../../styles/featureStyle'


import { FormattedMessage, injectIntl, FormattedHTMLMessage } from 'react-intl'

import { layoutWithLangKey } from "../../components/layout"
import SEO from '../../components/seo'
import Banner from '../../components/Banner'
import Article from '../../components/Article'
import PromoLinks from '../../components/PromoLinks'

import { Icon } from '@iconify/react'
import outlinePhotoCamera from '@iconify/icons-ic/outline-photo-camera'
import outlinePoll from '@iconify/icons-ic/outline-poll'
import outlineLaptopMac from '@iconify/icons-ic/outline-laptop-mac'
import baselineNetworkCheck from '@iconify/icons-ic/baseline-network-check'
import outlineCheckBox from '@iconify/icons-ic/outline-check-box'


import bg from '../../images/expense-management/banner.jpg'
import img1 from '../../images/expense-management/1.png'
import img3 from '../../images/expense-management/3.png'

const scope = 'page.expenseManagement'

const ExpenseManagementPage = props => {


  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "expenseManagement.meta.title" })}
        description={formatMessage({ id: "expenseManagement.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner
        bg={bg}
        // text={<FormattedMessage id={`${scope}.banner.text`} />}
        bannerInnerWidth='60'
        text={<FormattedHTMLMessage tagName="span" id={`${scope}.banner.text`} />}
        button={<FormattedMessage id={`${scope}.banner.button`} />}
        video="https://www.youtube.com/embed/JmSQYhSAYvw?rel=0&autoplay=1"
      />

      <SectionEM1>
        <Container>
          <Row>
            <Col md={12} className="text-center headtitle">
              <h2>
                <FormattedMessage id={`${scope}.1title_`} />
              </h2>
            </Col>
            <Col md={{ size: 6 }} className="d-flex align-items-center">
              <Article
                icon={<Icon icon={outlinePhotoCamera} />}
                title={<FormattedMessage id={`${scope}.1`} />}
                content={<ul>
                  <li><FormattedMessage id={`${scope}.1_1`} /></li>
                  <li><FormattedMessage id={`${scope}.1_2`} /></li>
                  <li><FormattedMessage id={`${scope}.1_3`} /></li>
                  <li><FormattedMessage id={`${scope}.1_4`} /></li>
                </ul>}
              />
            </Col>

            <Col md={{ size: 6 }} className="text-center">
              <img src={img1} alt="" />
            </Col>
          </Row>
        </Container>
      </SectionEM1>

      <SectionEM2>
        <Container>
          <Row>
            <Col md={6}>
              <Article
                icon={<Icon icon={outlinePoll} />}
                title={<FormattedMessage id={`${scope}.2`} />}
                content={<FormattedMessage id={`${scope}.2_`} />}

              />
            </Col>
            <Col md={6}>
              <Article
                icon={<Icon icon={outlineLaptopMac} />}
                title={<FormattedMessage id={`${scope}.3`} />}
                content={<FormattedMessage id={`${scope}.3_`} />}

              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Article
                icon={<Icon icon={baselineNetworkCheck} />}
                title={<FormattedMessage id={`${scope}.4`} />}
                content={<FormattedMessage id={`${scope}.4_`} />}

              />
            </Col>
            <Col md={6}>
              <Article
                icon={<Icon icon={outlineCheckBox} />}
                title={<FormattedMessage id={`${scope}.5`} />}
                content={<FormattedMessage id={`${scope}.5_`} />}

              />
            </Col>
          </Row>
        </Container>
      </SectionEM2>

      <SectionIntro mt={80} mb={150} className="howcanhelp">
        <Container>
          <CustomRow spacing={20}>
          <Col lg={{ size: 10, offset: 1, order: 1 }} className="text-center">
              <div className="image-block">
                <img src={img3} alt="" />
              </div>
            </Col>
            <Col lg={{ size: 8, offset: 2, order: 2 }}>
              <h2 className="mb20">

                <FormattedMessage id={`${scope}.6_title`} />
              </h2>
              <p>
                <FormattedMessage id={`${scope}.6_content`} />
              </p>
            </Col>
            
          </CustomRow>
        </Container>
      </SectionIntro>
      
      <SectionEM2>
        <Container>
          
          <Row>
            <Col md={6}>
              <Article
                icon={<Icon icon={baselineNetworkCheck} />}
                title={<FormattedMessage id={`${scope}.7`} />}
                content={<FormattedMessage id={`${scope}.7_`} />}

              />
            </Col>
            <Col md={6}>
              <Article
                icon={<Icon icon={outlineCheckBox} />}
                title={<FormattedMessage id={`${scope}.8`} />}
                content={<FormattedHTMLMessage type='span' id={`${scope}.8_`} />}

              />
            </Col>
          </Row>
        </Container>
      </SectionEM2>
      
      <PromoLinks langUri={props.langUri} />

    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(ExpenseManagementPage))
