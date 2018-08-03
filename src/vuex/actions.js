import config from '../config'
import * as utils from '../utils'
import * as session from '../api/session'
import {getUserRoutes} from '../modules/auth/api/route'

/*
  登录
 */
export const login = ({}, {username, password}) => {
  return new Promise((resolve, reject) => {
    session.login(username, password)
      .then(data => {
        localStorage.setItem(config.LOCAL_STORAGE.USER, JSON.stringify(data))
        resolve(data)
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
    session.logout()
      .then(data => {
        localStorage.removeItem(config.LOCAL_STORAGE.USER)
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*
  更新路由参数
 */
export const updateProps = ({}, {router}) => {
  return new Promise((resolve, reject) => {
    getUserRoutes()
      .then(data => {
        utils.updateProps(router.options.routes, data)
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*
  删除所有路由参数
 */
export const deleteProps = ({}, {router}) => {
  utils.deleteProps(router.options.routes)
}
