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
import { injectIntl } from 'react-intl'

function SEO({ description, lang, meta, title, image, uri = '', ...props }) {
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
  const metaImage = image || `${process.env.GATSBY_SITE_URL}/images/cover.jpg`
  const { langs, defaultLangKey } = site.siteMetadata.languages
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
          name: "image",
          content: metaImage
        },
        {
          name: "og:image",
          content: metaImage
        }
      ].concat(meta)}
    >
      {langs.map(l => {
        let isCurrentLang = (l === lang)
        if (!isCurrentLang) {
          let attrs = {
            rel: "alternate",
            href: `${process.env.GATSBY_SITE_URL}${l === defaultLangKey ? '' : ('/' + l)}${slug}`
          }
          attrs = { ...attrs, hreflang: l }
          return (
            <link key={lang} {...attrs} />
          )
        }
        return 
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
