require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const languages = require('./src/data/config')

module.exports = {
  siteMetadata: {
    title: `EzBizTrip`,
    description: `Discover coporate travel management solutions. Travel real-time market rate search, online add expense to trip, eliminating paper and expediting expenses. EzBizTrip makes business travel much easier and better`,
    author: `@ezbiztrip`,
    siteUrl: process.env.GATSBY_SITE_URL,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_META_ROBOTS_CONTENT || 'noindex',
        env: {
          'all': {
            policy: [{ userAgent: '*'}],
          },
          'noindex': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_KEY,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    `gatsby-plugin-meta-redirect`,

    {
        resolve: `gatsby-source-wordpress`,
        options: {
            // Specify the URL of the WordPress source
            baseUrl: `https://blog.ezbiztrip.com`,
            protocol: `http`,
            hostingWPCOM: false,
            includedRoutes: [
              '**/posts',
              '**/tags',
              '**/categories',
              '**/media',
              '**/users'
            ],
            useACF: false
        }
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            // Specify the URL of the WordPress source
            baseUrl: `https://support.ezbiztrip.com`,
            protocol: `http`,
            hostingWPCOM: false,
            includedRoutes: [
              '**/posts',
              '**/tags',
              '**/categories',
              '**/media',
              '**/users'
            ],
            useACF: false
        }
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/createStore',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        cleanupOnClient: true
      }
    },
     {
        resolve: `gatsby-plugin-facebook-sdk`,
       // options: {
       //   appId: '103365231056941',
       // },
     },
  ]
}
