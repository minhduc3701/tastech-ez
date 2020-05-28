const {langs, defaultLangKey} = require('./src/data/config')
const path = require("path")
const _ = require("lodash")
const { slash } = require(`gatsby-core-utils`)

const isIndexPage = (page, lang) => page.path === `/${lang}`
const is404Page = page => page.path.startsWith('/404')

// @see https://youtu.be/wSIw0mu3Q1U
exports.onCreatePage = ({page, actions}) => {
  const skip = langs.some(lang => isIndexPage(page, lang)) || is404Page(page)

  if (!skip) {
    langs.forEach(lang => {
      if(lang !== defaultLangKey){ // skip create /GATSBY_DEFAULT_LANGUAGE/url path
        const newPage = Object.assign({}, page)
        newPage.path = page.path.replace(/^\//, `/${lang}/`)
        actions.createPage(newPage)
      }
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  // Oops
  createRedirect({
    fromPath: `/privacy-policy`,
    toPath: `/policy`,
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: `/terms-and-conditions`,
    toPath: `/terms`,
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: `/about-us`,
    toPath: `/about`,
    isPermanent: true,
    redirectInBrowser: true,
  });

  const result = await graphql(`
    {
      allWordpressPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
          }
        }
      }
    }

  `)

    _.get(result, 'data.allWordpressPost.edges', []).forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: slash(path.resolve(`./src/templates/post/index.js`)),
        context: {
          // This is the $slug variable
          // passed to template
          slug: node.slug,
        },
      })
    })


}