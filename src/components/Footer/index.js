import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Link } from 'gatsby'

import { Icon } from '@iconify/react'
import linkedinBox from '@iconify/icons-mdi/linkedin-box'
import facebookBox from '@iconify/icons-mdi/facebook-box'
import twitterBox from '@iconify/icons-mdi/twitter-box'
import bxlInstagramAlt from '@iconify/icons-bx/bxl-instagram-alt'

import { Container } from '../../styles'
import companyLogo from '../../images/logo.svg'

const scope = 'components.Common.Footer'

const Wrapper = styled.div`
  background-color: #1d2148;
`

const FooterTop = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #212b62;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1199px) {
    display: block;
    padding: 40px 0 35px;
  }
`

const TopLeft = styled.div`
  @media screen and (min-width: 1200px) {
    flex: 0 0 150px;
  }

  @media screen and (max-width: 1199px) {
    display: block;
    text-align: center;
  }
`

const TopCenter = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: center;

  ul {
    padding: 0;
    margin: 0;
    display: inline-block;

    li {
      margin-right: 40px;
      display: inline-block;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #fff;
        font-size: 14px;
        transition: all 0.3s ease-in-out;

        &:hover {
          text-decoration: none;
          color: #9197b5;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    display: block;
    text-align: center;
    margin: 35px 0 30px;
  }

  @media screen and (max-width: 767px) {
    ul {
      li {
        display: block;
        margin-right: 0;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`

const TopRight = styled.div`
  display: inline-flex;
  justify-content: flex-end;

  ul {
    padding: 0;
    margin: 0;
    display: inline-block;

    li {
      margin-right: 10px;
      display: inline-block;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #fff;
        font-size: 20px;
        transition: all 0.3s ease-in-out;

        &:hover {
          text-decoration: none;
          color: #9197b5;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    flex: 0 0 150px;
  }

  @media screen and (max-width: 1199px) {
    display: block;
    text-align: center;
  }
`

const FooterBottom = styled.div`
  padding: 27px 0 25px;
  font-size: 12px;
  color: #9197b5;
  text-align: center;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`

const Footer = props => {
  const { formatMessage } = props.intl

  return (
    <Wrapper>
      <Container>
        <FooterTop>
          <TopLeft>
            <Link exact="true" to={`${props.langUri}`}>
              <img src={companyLogo} alt="" />
            </Link>
          </TopLeft>

          <TopCenter>
            <ul>
              <li>
                <a
                  href={formatMessage({
                    id: 'link.careers'
                  })}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormattedMessage id={`components.Common.Header.careers`} />
                </a>
              </li>
              <li>
                <Link to={`${props.langUri}/policy`}>
                  <FormattedMessage id={`${scope}.privacy`} />
                </Link>
              </li>
              <li>
                <Link to={`${props.langUri}/terms`}>
                  <FormattedMessage id={`${scope}.terms`} />
                </Link>
              </li>
              <li>
                <Link to={`${props.langUri}/contact`}>
                  <FormattedMessage id={`${scope}.contactUs`} />
                </Link>
              </li>
              <li>
                <Link to={`${props.langUri}/sitemap`}>
                  <FormattedMessage id={`${scope}.sitemap`} />
                </Link>
              </li>
            </ul>
          </TopCenter>

          <TopRight>
            <ul>
              <li>
                <a
                  href={formatMessage({
                    id: 'link.facebook'
                  })}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon icon={facebookBox} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ezbiztrip"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon icon={twitterBox} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ezbiztrip/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon icon={bxlInstagramAlt} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ezbiztrip/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon icon={linkedinBox} />
                </a>
              </li>
            </ul>
          </TopRight>
        </FooterTop>

        <FooterBottom>
            <FormattedMessage
              id={`${scope}.copyright`}
              values={{ year: new Date().getFullYear() }}
            />
        </FooterBottom>
      </Container>
    </Wrapper>
  )
}

export default injectIntl(Footer)
