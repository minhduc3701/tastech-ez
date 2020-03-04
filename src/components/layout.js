import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';
import styled from 'styled-components'
import { Main } from '../styles'
import 'bootstrap/dist/css/bootstrap.min.css';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import vi from '../data/messages/vi';
import en from '../data/messages/en';

const messages = {
  vi,
  en
}

// config react-toast
toast.configure({
  hideProgressBar: false
})

const Wrapper = styled(Main)`
  height: 100%;
  width: 100%;
`

const Content = styled.main`
  margin-top: 64px;

  @media screen and (max-width: 1199px) {
    margin-top: 56px;
  }
`

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        return (
          <Wrapper>
            <IntlProvider
              locale={langKey}
              messages={messages[langKey]}
            >
                <Header langs={langsMenu} langKey={langKey}/>
                <Content>
                  {children({langKey, defaultLangKey, homeLink})}
                </Content>
                <Footer langKey={langKey} />
            </IntlProvider>
          </Wrapper>
        )
      }}
    />
  );
};

export const layoutWithLangKey = C => props => (
  <Layout {...props}>
    {({langKey, defaultLangKey, homeLink}) => (
      <C
        {...props}
        langUri={homeLink}
        langKey={langKey}
        defaultLangKey={defaultLangKey}
      />
    )}
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
