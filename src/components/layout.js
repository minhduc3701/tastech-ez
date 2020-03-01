import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';

import vi from '../data/messages/vi';
import en from '../data/messages/en';

const messages = {
  vi,
  en
}

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
          <IntlProvider
            locale={langKey}
            messages={messages[langKey]}
          >
            <div>
              <Helmet
                title="Gatsby Default Starter"
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                {children({langKey, defaultLangKey, homeLink})}
              </div>
            </div>
          </IntlProvider>
        )
      }}
    />
  );
};

export const layoutWithLangKey = C => props => (
  <Layout {...props}>
    {({langKey, defaultLangKey, homeLink}) => (
      <C
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
