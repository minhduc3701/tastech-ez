import axios from 'axios'

export const DOMAIN = process.env.GATSBY_API

const endpoints = {
  requests: `${DOMAIN}/requests`
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
  }
}