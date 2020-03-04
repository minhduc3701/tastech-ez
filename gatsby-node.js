const {langs} = require('./src/data/config')

const isIndexPage = (page, lang) => page.path === `/${lang}`
const is404Page = page => page.path.startsWith('/404')

// @see https://youtu.be/wSIw0mu3Q1U
exports.onCreatePage = ({page, actions}) => {
  const skip = langs.some(lang => isIndexPage(page, lang)) || is404Page(page)

  if (!skip) {
    langs.forEach(lang => {
      const newPage = Object.assign({}, page)
      newPage.path = page.path.replace(/^\//, `/${lang}/`)
      actions.createPage(newPage)
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  const newLangs = ['', ...langs]

  // Oops
  newLangs.forEach(lang => {
    createRedirect({
      fromPath: `/${lang}/feature`,
      toPath: `/${lang}/features`,
      isPermanent: true,
      redirectInBrowser: true,
    });
  })
}