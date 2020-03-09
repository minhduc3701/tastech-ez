/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from 'react-intl'

function SEO({ description, lang, meta, title, uri = '', ...props }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            languages {
              langs
              defaultLangKey
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const {langs, defaultLangKey} = site.siteMetadata.languages
  const slug = uri.replace(`/${lang}/`, '/')

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: props.intl.formatMessage({id: 'meta.keywords'})
        },
        {
          name: "image",
          content: `${process.env.GATSBY_SITE_URL}/images/cover.jpg`
        },
        {
          name: "og:image",
          content: `${process.env.GATSBY_SITE_URL}/images/cover.jpg`
        }
      ].concat(meta)}
    >
      {langs.map(l => {
        let isCurrentLang = (l === lang)
        let attrs =  {
          rel: isCurrentLang ? "canonical" : "alternate",
          href: `${process.env.GATSBY_SITE_URL}${l === defaultLangKey ? '' : ('/' + l)}${slug}`
        }

        if (!isCurrentLang) {
          attrs = {...attrs, hreflang: l}
        }

        return (
          <link {...attrs} />
        )
      })}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default injectIntl(SEO)
