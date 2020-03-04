import React from 'react'
import { FormattedMessage } from 'react-intl'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import { Link } from 'gatsby'

import { Container } from '../../styles'
import { injectIntl } from 'react-intl'

import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 0;
  min-height: calc(100vh - 250px);

  .page-title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
  }

  .page-list {
    li {
      margin-bottom: 10px;
    }

    a {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: 0;

    .page-title {
      font-size: 30px;
    }
  }

`

const Sitemap = props => {
    const { formatMessage } = props.intl

  return (
    <Wrapper>
            <SEO
          title={formatMessage({ id: "sitemap.meta.title" })}
          description={formatMessage({ id: "sitemap.meta.description" })}
          lang={props.langKey}
        />


      <Container>
        <h2 className="page-title">
          <FormattedMessage id="components.Common.Footer.sitemap" />
        </h2>

        <ul className="page-list">
          <li>
            <Link to="/">
              <FormattedMessage id={`components.Common.Header.home`} />
            </Link>
          </li>
          <li>
            <Link to="/feature">
              <FormattedMessage id={`components.Common.Header.feature`} />
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <FormattedMessage id={`components.Common.Header.pricing`} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FormattedMessage id={`components.Common.Header.aboutUs`} />
            </Link>
          </li>
          <li>
            <a href={'blogSite'}>
              <FormattedMessage id={`components.Common.Header.blog`} />
            </a>
          </li>
          <li>
            <a href={'supportSite'}>
              <FormattedMessage id={`components.Common.Header.support`} />
            </a>
          </li>
          <li>
           <Link to="/request-demo">
              <FormattedMessage id={`components.Common.Header.getStarted`} />
            </Link>
          </li>
          <li>
            <a href={`${'blogSite'}/category/careers`}>
              <FormattedMessage id={`components.Common.Header.careers`} />
            </a>
          </li>
          <li>
            <Link to="/policy">
              <FormattedMessage id={`components.Common.Footer.privacy`} />
            </Link>
          </li>
          <li>
            <Link to="/terms">
              <FormattedMessage id={`components.Common.Footer.terms`} />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FormattedMessage id={`components.Common.Footer.contactUs`} />
            </Link>
          </li>
        </ul>
      </Container>
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(Sitemap))
