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


  /* CREATE PAGES FOR BLOG SITE */

  const blogPosts = await graphql(`
    {
      allWordpressPost(filter: {link: {regex: "/blog.ezbiztrip.com/"}} ) {
        nodes {
            slug
        }
      }
    }
  `)

  _.get(blogPosts, 'data.allWordpressPost.nodes', [])
    .forEach(node => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
          path: `${langUri}blog/${node.slug}`,
          component: path.resolve(`./src/blog-templates/Post/index.js`),
          context: {
            slug: node.slug
          },
        })
      })
    })

  const blogCategories = await graphql(`
    {
      allWordpressCategory(filter: {count: {gt: 0}, link: {regex: "/blog.ezbiztrip.com/"}} ) {
        nodes {
            count
            slug
        }
      }
    }
  `)

  _.get(blogCategories, 'data.allWordpressCategory.nodes', []).forEach(node => {
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
       allWordpressTag(filter: {count: {gt: 0}} ) {
         nodes {
             count
             slug
         }
       }
     }
   `)
 
   _.get(blogTags, 'data.allWordpressTag.nodes', []).forEach(node => {
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
        path: `${langUri}blog`,
        component: path.resolve(`./src/blog-templates/Home/index.js`),
        context: {
          lang: lang,
          domain: "/blog.ezbiztrip.com/"
        },
      })

      createPage({
        path: `${langUri}blog/search`,
        component: path.resolve(`./src/blog-templates/Search/index.js`)
      })

    })


  /* CREATE PAGES FOR SUPPORT SITE */

  const supportPosts = await graphql(`
    {
      allWordpressPost(filter: {link: {regex: "/support.ezbiztrip.com/"}} ) {
        nodes {
            slug
        }
      }
    }
  `)

  _.get(supportPosts, 'data.allWordpressPost.nodes', [])
    .forEach(node => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
          path: `${langUri}support/${node.slug}`,
          component: path.resolve(`./src/support-templates/Post/index.js`),
          context: {
            slug: node.slug
          },
        })
      })
    })

  const supportCategoriesRes = await graphql(`
    {
      allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {parent_element: {slug: {regex: "/^(?!'').*$/"}}}, link: {regex: "/support.ezbiztrip.com/"}}) {
      nodes {
        slug
        parent_element {
          slug
        }
      }
    }
    }
  `)
  
  let supportCategories = _.get(supportCategoriesRes, 'data.allWordpressCategory.nodes', [])
  
  supportCategories.forEach(node => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
           path: `${langUri}support/category/${node.parent_element.slug}/${node.slug}`,
           component: path.resolve(`./src/support-templates/CategoryArchive/index.js`),
           context: {
             slug: node.slug
           },
         })
 
       })
     })

   let parentCategories = _.uniqBy(supportCategories.map(cat => cat.parent_element), 'slug')

   parentCategories.forEach(node => {
      langs.forEach(lang => {
        let langUri = lang === defaultLangKey ? '' : `/${lang}/`

        createPage({
           path: `${langUri}support/category/${node.slug}`,
           component: path.resolve(`./src/support-templates/CategoryRedirect/index.js`),
           context: {
             slug: node.slug
           },
         })
      })
    })


    langs.forEach(lang => {
      let langUri = lang === defaultLangKey ? '' : `/${lang}/`
      
      createPage({
        path: `${langUri}support`,
        component: path.resolve(`./src/support-templates/Home/index.js`),
        context: {
          lang: lang,
          domain: "/support.ezbiztrip.com/"
        },
      })

      createPage({
        path: `${langUri}support/search`,
        component: path.resolve(`./src/support-templates/Search/index.js`)
      })

    })


}