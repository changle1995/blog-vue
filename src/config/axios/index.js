/*
  axios基础配置以及拦截器
*/
import axios from 'axios'
import config from '..'

axios.defaults.baseURL = config.BASE_URL
axios.defaults.withCredentials = true

axios.interceptors.request.use(request => {
  let user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
  if (user) {
    request.headers.common[config.REQUEST.HEADER.USER_TOKEN] = user[config.LOCAL_STORAGE.USER_VALUE.USER_TOKEN]
  }
  return request
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default axios
