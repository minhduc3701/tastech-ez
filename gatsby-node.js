const {langs} = require('./src/data/config')

const isIndexPage = (page, lang) => page.path === `/${lang}`
const is404Page = page => page.path.startsWith('/404')

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
