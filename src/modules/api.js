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

  getBlogPosts() {
    return axios({
      method: 'get',
      url: `${endpoints.blog}/posts`
    })
  },
}