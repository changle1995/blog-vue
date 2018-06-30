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
        if (utils.responseSuccess(response)) {
          localStorage.setItem(config.LOCAL_STORAGE.USER, JSON.stringify(response.data[config.RESPONSE.DATA]))
          dispatch('setRoutes', {router})
          resolve(response)
        } else {
          reject(response)
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
        if (utils.responseSuccess(response)) {
          localStorage.removeItem(config.LOCAL_STORAGE.USER)
          resolve(response)
        } else {
          reject(response)
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
