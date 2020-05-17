import React from 'react'
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import { Col } from 'reactstrap'
import { layoutWithLangKey } from "../../components/layout"
import SEO from '../../components/seo'
import Article from '../../components/Article'
import ContacForm from '../../components/ContactForm'

import {
  Wrapper,
  Banner,
  BannerText,
  SectionQuote,
  SectionTeam,
  Member
} from '../../styles/aboutStyle'

import { Container, CustomRow } from '../../styles'

import img1 from '../../images/about-page/1.jpg'
import avt1 from '../../images/about-page/members/1.jpg'
import avt2 from '../../images/about-page/members/2.jpg'
import avt3 from '../../images/about-page/members/3.jpg'
import avt4 from '../../images/about-page/members/4.jpg'
import avt5 from '../../images/about-page/members/5.jpg'
import avt6 from '../../images/about-page/members/6.jpg'
import avt7 from '../../images/about-page/members/7.jpg'
import avt8 from '../../images/about-page/members/8.jpg'
import avt9 from '../../images/about-page/members/9.jpg'
import avt10 from '../../images/about-page/members/10.jpg'
const scope = 'page.AboutUs'

const members = [
  {
    name: 'Takaya Tomose',
    position: 'CEO',
    avatar: avt1
  },
  {
    name: 'Huong Vu',
    position: 'PO',
    avatar: avt2
  },
  {
    name: 'Traven Koo',
    position: 'SM',
    avatar: avt3
  },
  {
    name: 'Shazrina Aim',
    position: 'SE',
    avatar: avt4
  },
  {
    name: 'Minh Nguyen',
    position: 'Dev',
    avatar: avt5
  },
  {
    name: 'Tuan Nguyen',
    position: 'Dev',
    avatar: avt6
  },
  {
    name: 'Chan',
    position: 'Designer',
    avatar: avt7
  },
  {
    name: 'Phan Ha',
    position: 'Dev',
    avatar: avt8
  },
  {
    name: '',
    position: null,
    avatar: null
  }
  ,
  {
    name: 'Vu Hoan',
    position: 'Dev',
    avatar: avt9
  },
  {
    name: 'Thang Nguyen',
    position: 'Dev',
    avatar: avt10
  }
]

const AboutUs = props => {
  const { formatMessage } = props.intl
  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "about.meta.title" })}
        description={formatMessage({ id: "about.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />
      <Banner>
        <Container>
          <BannerText>
            <p className="text-above">
              <FormattedMessage
                id={`${scope}.bannerText1`}
              />
            </p>
            <h2>
              <FormattedMessage
                id={`${scope}.bannerText2`}
              />
            </h2>
          </BannerText>
        </Container>
      </Banner>

      <SectionQuote>
        <Container>
          <CustomRow spacing={20}>
            <Col md={6}>
              <div className="image-block">
                <img src={img1} alt="" />
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-center">
              <div className="text-block">
                <Article
                  fontSize='25'
                  title={<FormattedMessage id={`${scope}.1`} />}
                  content={<FormattedHTMLMessage id={`${scope}.1_`} />}
                />

                <div className="author">
                  <span className="name">Takaya Tomose</span>

                  <FormattedMessage id={`${scope}.ceo`} />
                </div>
              </div>
            </Col>
          </CustomRow>
        </Container>
      </SectionQuote>

      <SectionTeam>
        <Container>
          <h2 className="section-title">
            <FormattedMessage id={`${scope}.team`} />
          </h2>

          <CustomRow spacing={20}>
            {members.map((member, index) => (
              <Col md={3} xs={6} key={index}>
                <Member>
                  <img src={member.avatar} alt="" />
                  <h3 className="name">{member.name}</h3>
                  <p className="position">
                    {member.position &&
                      <FormattedMessage id={`${scope}.team.position.${member.position}`} />}
                  </p>
                </Member>
              </Col>
            ))}
          </CustomRow>
        </Container>
      </SectionTeam>

      <ContacForm bottom />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(AboutUs))
