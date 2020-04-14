const {langs} = require('./src/data/config')

const isIndexPage = (page, lang) => page.path === `/${lang}`
const is404Page = page => page.path.startsWith('/404')

// @see https://youtu.be/wSIw0mu3Q1U
exports.onCreatePage = ({page, actions}) => {
  const skip = langs.some(lang => isIndexPage(page, lang)) || is404Page(page)

  if (!skip) {
    langs.forEach(lang => {
      if(lang !== process.env.GATSBY_DEFAULT_LANGUAGE){ // skip create /GATSBY_DEFAULT_LANGUAGE/url path
        const newPage = Object.assign({}, page)
        newPage.path = page.path.replace(/^\//, `/${lang}/`)
        actions.createPage(newPage)
      }
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/id/`,
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: `/id`,
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
  });
  
  // Oops
  createRedirect({
    fromPath: `/feature`,
    toPath: `/features`,
    isPermanent: true,
    redirectInBrowser: true,
  });

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
}