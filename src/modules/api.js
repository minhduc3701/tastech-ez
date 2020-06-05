import axios from 'axios'

export const DOMAIN = process.env.GATSBY_API
const BLOG_SITE = 'https://blog.ezbiztrip.com/wp-json/wp/v2'

const endpoints = {
  requests: `${DOMAIN}/requests`,
  blog: BLOG_SITE
}

export default {
  creatRequest(data) {
    return axios({
      method: 'post',
      url: endpoints.requests,
      data
    })
  },

  sendContactForm(data) {
    return axios.post(`${endpoints.requests}/contact`, data)
  },

  searchBlogPosts(keyword) {
    return axios({
      method: 'get',
      url: `${endpoints.blog}/posts/?search=${keyword}&orderby=date&order=desc&_fields=slug,title,excerpt,content,polylang_current_lang,jetpack_featured_media_url,date,categories&per_page=200`
    })
  },
}