const {langs, defaultLangKey} = require('./src/data/config')
const path = require("path")
const _ = require("lodash")

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

  const blogPosts = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
          }
        }
      }
    }

  `)

    _.get(blogPosts, 'data.allWordpressPost.edges', []).forEach(({ node }) => {
    langs.forEach(lang => {
      let langUri = lang === defaultLangKey ? '' : `/${lang}/`

      createPage({
        path: `${langUri}blog/${node.slug}`,
        component: path.resolve(`./src/blog-templates/Post/index.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })

  const blogCategories = await graphql(`
    {
      allWordpressCategory(filter: {count: {gt: 0}}) {
        edges {
          node {
            id
            count
            name
            slug
            description
          }
        }
      }
    }

  `)

  _.get(blogCategories, 'data.allWordpressCategory.edges', []).forEach(({ node }) => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
          path: `${langUri}blog/category/${node.slug}`,
          component: path.resolve(`./src/blog-templates/CategoryArchive/index.js`),
          context: {
            slug: node.slug
          },
        })
      })
    })

  const blogTags = await graphql(`
    {
      allWordpressTag(filter: {count: {gt: 0}}) {
        edges {
          node {
            id
            count
            name
            slug
            description
          }
        }
      }
    }

  `)

  _.get(blogTags, 'data.allWordpressTag.edges', []).forEach(({ node }) => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
          path: `${langUri}blog/tag/${node.slug}`,
          component: path.resolve(`./src/blog-templates/TagArchive/index.js`),
          context: {
            slug: node.slug
          },
        })
      })
    })


    langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
              path: `${langUri}blog/search`,
              component: path.resolve(`./src/blog-templates/Search/index.js`)
          })
      })


}