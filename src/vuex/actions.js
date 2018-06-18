import config from '../config'
import {requestLogin, requestLogout} from '../api/login'
import * as utils from '../utils'
import allRoutes from '../config/router/all'

/*
  登录
 */
export const login = ({commit, state, dispatch}, {username, password, router}) => {
  return new Promise((resolve, reject) => {
    requestLogin(username, password)
      .then(response => {
        let restResponse = response.data
        if (restResponse[config.RESPONSE.CODE] === config.RESPONSE.CODE_VALUE_MAP.SUCCESS_CODE) {
          localStorage.setItem(config.LOCAL_STORAGE.USER, JSON.stringify(restResponse[config.RESPONSE.DATA]))
          dispatch('setRoutes', {router})
          resolve(restResponse)
        } else {
          reject(restResponse)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*
  退出
 */
export const logout = () => {
  return new Promise((resolve, reject) => {
    requestLogout()
      .then(response => {
        let restResponse = response.data
        if (restResponse[config.RESPONSE.CODE] === config.RESPONSE.CODE_VALUE_MAP.SUCCESS_CODE) {
          localStorage.removeItem(config.LOCAL_STORAGE.USER)
          resolve(restResponse)
        } else {
          reject(restResponse)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*
  将用户路由设置到router中
*/
export const setRoutes = ({}, {router}) => {
  let user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
  if (user) {
    router.addRoutes(utils.getRoutes(user[config.LOCAL_STORAGE.USER_VALUE.ROUTES], allRoutes))
    router.addRoutes([{
      path: '*',
      redirect: '/404'
    }])
  }
}
