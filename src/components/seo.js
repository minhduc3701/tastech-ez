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

function SEO({ description, lang, meta, title }) {
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
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

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
          content: 'Business trip, Business travel, Add expense, E-receipts, E-bills, Personal trip, Personal travel, Quick add, Quick add expense, Trip management, Trip management solutions, EzBizTrip, Easy Business Trip, Real-time market search, combo search, Real time market rate, real time market search, Flight search, Hotel search, Flight and hotel search, add services, itinerary, business analytics, business travel analytics, business travel report, business travel policy, Add expense to business trip, E-business trip receipts, E-business trip bills, ezb, easy biz trip, ez biz trip, ezbiz trip, ezbiz travel, easy business travel, EzBizTravel, ez biz travel, travel report, travel itinerary.'
        },
        {
          name: "image",
          content: "/images/cover.jpg"
        }
      ].concat(meta)}
    >
  
      {site.siteMetadata.languages.langs.map(l => {
        let isCurrentLang = l === lang
        let attrs =  {
          rel: isCurrentLang ? "canonical" : "alternate",
          href: process.env.GATSBY_SITE_URL + (isCurrentLang ? "" : `/${l}`)
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

export default SEO
