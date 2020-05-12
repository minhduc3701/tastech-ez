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


import baselineNetworkCheck from '@iconify/icons-ic/baseline-network-check';
import outlinePoll from '@iconify/icons-ic/outline-poll'
// import baselineEventAvailable from '@iconify/icons-ic/baseline-event-available'
import { Container, CustomRow } from '../../styles'
import { Link } from 'gatsby'
import { Icon } from '@iconify/react'

import img1 from '../../images/remote-work-expense-management/1.jpg'
import img2 from '../../images/remote-work-expense-management/2.png'
import img3 from '../../images/remote-work-expense-management/3.png'
import img4 from '../../images/remote-work-expense-management/4.jpg'

const scope = 'page.AboutUs'

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
                  WORK FROM HOME EXPENSE 
            </p>
                <h1>
                  Simplify your expense claim with a report automation system.
              </h1>
                <p>EzBizTrip is the best platform to make business travel much easier and simpler.
            </p>
            <Link to={`${props.langUri}/request-demo/`}>
                  I’m ready to start
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
                Get your business
                ready for a remote working arrangement
              </h2>
              <p className="mb25">
                Remote working, be it work-from-home or multiple office work
                arrangements, may potentially be the norm as businesses
                undertake government COVID-19 advisories. EzBizTrip
                understands this firsthand as we have multiple teams working
                remotely in various South East Asia offices, even before COVID-19.
                Employees and management often find it challenging to work
                efficiently without the required supporting tools.
              </p>
              <p>
                With the comfort and convenience of working in office taken away,
                workers sometimes take on the extra burden of getting approval
                for their expense claims by superiors and accountants separately.
                This process can often be long, mundane and inefficient.
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
                Supporting remote workers with EzBizTrip’s Expense Claims Management
              </TitleWithCircle>
              <p>
                Taking advantage of EzBizTrip Corporate Travel platform’s “hidden”
                expense claims management is easy:
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
                  // icon={<Icon icon={outlinePoll} />}
                  icon ={<Icon icon={baselineNetworkCheck} />}
                  title={'Increase Productivity'}
                  content={'Using EzBizTrip’s platform, employees can simply create an expense report to record and submit their expenses no matter where they are.'}
                />
                <Article
                  dFlex={true}
                  iconLeft
                  icon={<Icon icon={outlinePoll} />}
                  // icon={<Icon icon={baselineEventAvailable} />}
                  title={'Higher Efficiency and Accuracy'}
                  content={'EzBizTrip’s expense claims allows photo taking/uploading of receipts and invoicesfrom mobile phones and tablets while the amount is being keyed into the systemside by side. This increases efficiency as well as accuracy.'}
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
                Analysis
              </h2>
              <p>
                With the option of categorizing these expenses, the company’s management
                canhave a bird’s eye view of  the full expenses and determine if any of the
                company’s resources can be reallocated for better use.
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
      <SectionRequestForm bottom bgSrc={img4} type="remote-form" />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(RemoteWorkExpenseManagement))
