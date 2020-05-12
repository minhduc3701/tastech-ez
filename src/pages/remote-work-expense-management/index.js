import React from 'react'
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import { Col } from 'reactstrap'
import { layoutWithLangKey } from "../../components/layout"
import SEO from '../../components/seo'
import Article from '../../components/Article'
import SectionRequestForm from '../../components/HomePage/SectionRequestForm'

import {
  Wrapper,
  Banner,
  BannerContent,
  VideoWrapper,
  SectionIntro,
  TitleWithCircle
} from '../../styles/remoteStyle'

import outlinePoll from '@iconify/icons-ic/outline-poll'
import baselineEventAvailable from '@iconify/icons-ic/baseline-event-available'
import { Container, CustomRow } from '../../styles'
import { Link } from 'gatsby'
import { Icon } from '@iconify/react'

import img1 from '../../images/remote-work-expense-management/1.jpg'
import img2 from '../../images/remote-work-expense-management/2.png'
import img3 from '../../images/remote-work-expense-management/3.png'
import img4 from '../../images/remote-work-expense-management/4.jpg'

const scope = 'page.remoteWork'

const RemoteWorkExpenseManagement = props => {
  const { formatMessage } = props.intl
  return (
    <Wrapper>
      <SEO
        // title={formatMessage({ id: "about.meta.title" })}
        title={`Remote Working & Expense Management | EzBizTrip`}
        // description={formatMessage({ id: "about.meta.description" })}
        description={`Automate & Manage your daily expense even when working remotely. Track, manage and snap photos of your receipts. Enquire with us today.`}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner>
        <Container>
          <CustomRow spacing={20}>
            <Col xl={{ size: 5, order: 2 }} lg={12} className="d-flex align-items-center">
              <BannerContent>
                <p className="sub">
                  <FormattedMessage id={`${scope}.subTitle`} />
                </p>
                <h1>
                  <FormattedMessage id={`${scope}.mainTitle`} />
                </h1>
                <FormattedMessage id={`${scope}.description`} />  <p>
                </p>
                <Link to={`${props.langUri}/request-demo/`}>
                  <FormattedMessage id={`${scope}.startBtn`} />
                </Link>
              </BannerContent>
            </Col>
            <Col xl={{ size: 7, order: 1 }} lg={12} className="video" >
              <VideoWrapper>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/l6ClKu66vI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </VideoWrapper>
            </Col>

          </CustomRow>
        </Container>
      </Banner>

      <SectionIntro mt={150}>
        <Container>
          <CustomRow spacing={70}>
            <Col md={6}>
              <h2>
                <FormattedMessage id={`${scope}.s1_title`} />

              </h2>
              <p className="mb25">
                <FormattedMessage id={`${scope}.s1_content`} />
              </p>
              <p>
                <FormattedMessage id={`${scope}.s1_content2`} />
              </p>
            </Col>
            <Col md={6}>
              <div className="image-block">
                <img src={img1} alt="" />
              </div>
            </Col>
          </CustomRow>
        </Container>
      </SectionIntro>

      <SectionIntro mt={100}>
        <Container>
          <CustomRow spacing={20}>
            <Col md={12} lg={{ size: 6, offset: 3 }}>
              <TitleWithCircle>
                <FormattedMessage id={`${scope}.s2_title`} />
              </TitleWithCircle>
              <p>
                <FormattedMessage id={`${scope}.s2_content`} />
              </p>
            </Col>
          </CustomRow>
        </Container>
      </SectionIntro>

      <SectionIntro mt={95} >
        <Container>
          <CustomRow spacing={20}>
            <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, order: 2, offset: 0 }} className="d-flex">
              <div className="text-block">
                <Article
                  dFlex={true}
                  iconLeft
                  icon={<Icon icon={outlinePoll} />}
                  title={<FormattedMessage id={`${scope}.s3_title`} />}
                  content={<FormattedMessage id={`${scope}.s3_content`} />}
                />
                <Article
                  dFlex={true}
                  iconLeft
                  icon={<Icon icon={baselineEventAvailable} />}
                  title={<FormattedMessage id={`${scope}.s3_title2`} />}
                  content={<FormattedMessage id={`${scope}.s3_content2`} />}
                />
              </div>
            </Col>

            <Col md={{ size: 6, order: 1 }} >
              <div className="image-block  text-center">
                <img src={img2} alt="" />
              </div>
            </Col>


          </CustomRow>
        </Container>
      </SectionIntro>
      <SectionIntro mt={80} mb={150} className="analysis">
        <Container>
          <CustomRow spacing={20}>
            <Col lg={{ size: 8, offset: 2, order: 2 }}>
              <h2 className="mb20">

                <FormattedMessage id={`${scope}.s4_title4`} />
              </h2>
              <p>
                <FormattedMessage id={`${scope}.s4_content`} />
              </p>
            </Col>
            <Col lg={{ size: 10, offset: 1, order: 1 }} className="text-center">
              <div className="image-block">
                <img src={img3} alt="" />
              </div>
            </Col>
          </CustomRow>
        </Container>
      </SectionIntro>
      <SectionRequestForm bottom bgSrc={img4} />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(RemoteWorkExpenseManagement))
