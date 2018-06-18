import axios from '../config/axios'
import qs from 'qs'

/*  登录  */
export const requestLogin = (username, password) => {
  return axios.post('login', qs.stringify({username, password}))
}

/*  退出  */
export const requestLogout = () => {
  return axios.post('logout')
}
