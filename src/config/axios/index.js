/*
  axios基础配置以及拦截器
*/
import axios from 'axios'
import config from '..'
import router from '../router'

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
  if (response.data[config.RESPONSE.CODE]) {
    if (response.data[config.RESPONSE.CODE] === config.RESPONSE.CODE_VALUE_MAP.SUCCESS_CODE) {
      return response.data[config.RESPONSE.DATA]
    } else if (response.data[config.RESPONSE.CODE] === config.RESPONSE.CODE_VALUE_MAP.UNAUTHORIZED_CODE) {
      router.push('/login')
    } else {
      return Promise.reject(response.data)
    }
  }
  return Promise.reject(response)
}, error => {
  return Promise.reject(error)
})

export default axios
