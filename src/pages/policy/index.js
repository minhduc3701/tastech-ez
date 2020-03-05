import React from 'react'
import { Wrapper, Footer } from '../../styles/policyStyle'
import { Container } from '../../styles'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'

import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
const scope = 'components.PrivacyPolicyPage'

const PrivacyPolicy = props => {
      const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "policy.meta.title" })}
        description={formatMessage({ id: "policy.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />

      <Container>
        <h1 className="page-title">
          <FormattedMessage id={`${scope}.pageTitle`} />
        </h1>

        <hr />

        <div className="last-updated-date">
          <FormattedMessage id={`${scope}.lastUpdatedDate`} />
        </div>

        <div className="page-intro">
          <FormattedHTMLMessage tagName="div" id={`${scope}.0`} />
        </div>

        <div className="list-of-content">
          <ol>
            <li>
              <a href="#who-we-are">
                <FormattedMessage id={`${scope}.1`} />
              </a>
            </li>
            <li>
              <a href="#information-we-collect">
                <FormattedMessage id={`${scope}.2`} />
              </a>
            </li>
            <li>
              <a href="#cookie-usage">
                <FormattedMessage id={`${scope}.3`} />
              </a>
            </li>
            <li>
              <a href="#how-we-use-your-information">
                <FormattedMessage id={`${scope}.4`} />
              </a>
            </li>
            <li>
              <a href="#how-we-share-your-information">
                <FormattedMessage id={`${scope}.5`} />
              </a>
            </li>
            <li>
              <a href="#how-we-protect-your-information">
                <FormattedMessage id={`${scope}.6`} />
              </a>
            </li>
            <li>
              <a href="#how-long-we-store-your-information">
                <FormattedMessage id={`${scope}.7`} />
              </a>
            </li>
            <li>
              <a href="#minors-under-18-years-of-age">
                <FormattedMessage id={`${scope}.8`} />
              </a>
            </li>
            <li>
              <a href="#links-to-other-websites">
                <FormattedMessage id={`${scope}.9`} />
              </a>
            </li>
            <li>
              <a href="#your-rights">
                <FormattedMessage id={`${scope}.10`} />
              </a>
            </li>
            <li>
              <a href="#how-to-contact-us">
                <FormattedMessage id={`${scope}.11`} />
              </a>
            </li>
            <li>
              <a href="#changes-to-our-policy">
                <FormattedMessage id={`${scope}.12`} />
              </a>
            </li>
            <li>
              <a href="#governing-law-and-jurisdiction">
                <FormattedMessage id={`${scope}.13`} />
              </a>
            </li>
          </ol>
        </div>

        <h4 className="heading" id="who-we-are">
          <FormattedMessage id={`${scope}.1`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.1_`} />
        </div>

        <h4 className="heading" id="information-we-collect">
          <FormattedMessage id={`${scope}.2`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.2_`} />
          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.2a`} />
              </h5>
              <ul className="lower-roman">
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.2a1`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.2a2`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.2a3`} />
                </li>
              </ul>
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.2b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.2b_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.2c`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.2c_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.2d`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.2d_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading" id="cookie-usage">
          <FormattedMessage id={`${scope}.3`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.3_`} />
          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.3a`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.3a_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.3b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.3b_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.3c`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.3c_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.3d`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.3d_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.3e`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.3e_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading" id="how-we-use-your-information">
          <FormattedMessage id={`${scope}.4`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.4_`} />

          <ul className="lower-alpha">
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4a`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4b`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4c`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4d`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4e`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4f`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4g`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4h`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4i`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4j`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4k`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4l`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4m`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4n`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4o`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4p`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4q`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4r`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4s`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4t`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.4u`} />
            </li>
          </ul>
        </div>

        <h4 className="heading" id="how-we-share-your-information">
          <FormattedMessage id={`${scope}.5`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.5_`} />
          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5a`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5a_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5b_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5c`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5c_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5d`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5d_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5e`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5e_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.5f`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5f_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading" id="how-we-protect-your-information">
          <FormattedMessage id={`${scope}.6`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.6_`} />
        </div>

        <h4 className="heading" id="how-long-we-store-your-information">
          <FormattedMessage id={`${scope}.7`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.7_`} />
        </div>

        <h4 className="heading" id="minors-under-18-years-of-age">
          <FormattedMessage id={`${scope}.8`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.8_`} />
        </div>

        <h4 className="heading" id="links-to-other-websites">
          <FormattedMessage id={`${scope}.9`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.9_`} />
        </div>

        <h4 className="heading" id="your-rights">
          <FormattedMessage id={`${scope}.10`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.10_`} />

          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.10a`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.10a_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.10b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.10b_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.10c`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.10c_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.10d`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.10d_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading" id="how-to-contact-us">
          <FormattedMessage id={`${scope}.11`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.11_`} />
        </div>

        <h4 className="heading" id="changes-to-our-policy">
          <FormattedMessage id={`${scope}.12`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.12_`} />
        </div>

        <h4 className="heading" id="governing-law-and-jurisdiction">
          <FormattedMessage id={`${scope}.13`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.13_`} />
        </div>

        <Footer>
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(PrivacyPolicy))
