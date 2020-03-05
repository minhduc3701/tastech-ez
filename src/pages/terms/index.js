import React from 'react'
import { Wrapper, Footer } from '../../styles/termsStyle'
import { Container } from '../../styles'
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'

const scope = 'components.TermsAndConditionsPage'

const TermsAndConditions = props => {
      const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "terms.meta.title" })}
        description={formatMessage({ id: "terms.meta.description" })}
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

        <h4 className="heading">
          <FormattedMessage id={`${scope}.1`} />
        </h4>
        <div className="content">
          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.1a`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.1a_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.1b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.1b_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.2`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.2_`} />
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.3`} />
        </h4>
        <div className="content">
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

              <ul className="lower-roman">
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b1`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b2`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b3`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b4`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b5`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b6`} />
                </li>
                <li>
                  <FormattedHTMLMessage tagName="div" id={`${scope}.3b7`} />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.4`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.4_`} />
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.5`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.5_`} />
          <ul className="lower-roman">
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5a`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5b`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5c`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5d`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5e`} />
            </li>
            <li>
              <FormattedHTMLMessage tagName="div" id={`${scope}.5f`} />
            </li>
          </ul>
          <FormattedHTMLMessage tagName="div" id={`${scope}.5_1`} />
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.6`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.6_`} />
          <ul className="lower-alpha">
            <li>
              <h5>
                <FormattedMessage id={`${scope}.6a`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.6a_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.6b`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.6b_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.6c`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.6c_`} />
            </li>
            <li>
              <h5>
                <FormattedMessage id={`${scope}.6d`} />
              </h5>
              <FormattedHTMLMessage tagName="div" id={`${scope}.6d_`} />
            </li>
          </ul>
        </div>

        <h4 className="heading">
          <FormattedMessage id={`${scope}.7`} />
        </h4>
        <div className="content">
          <FormattedHTMLMessage tagName="div" id={`${scope}.7_`} />
        </div>

        <Footer>
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(TermsAndConditions))
