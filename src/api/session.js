import axios from '../config/axios'
import qs from 'qs'

/*  登录  */
export const login = (username, password) => {
  return axios.post('login', qs.stringify({username, password}))
}

/*  退出  */
export const logout = () => {
  return axios.post('logout')
}
