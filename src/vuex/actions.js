import config from '../config'
import * as utils from '../utils'
import * as session from '../api/session'

/*
  登录
 */
export const login = ({dispatch}, {username, password, router}) => {
  return new Promise((resolve, reject) => {
    session.login(username, password)
      .then(data => {
        localStorage.setItem(config.LOCAL_STORAGE.USER, JSON.stringify(data))
        dispatch('updateProps', router)
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
export const updateProps = ({}, router) => {
  let user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
  if (user) {
    router.options.routes.forEach(route => {
      utils.updateProps(route, user[config.LOCAL_STORAGE.USER_VALUE.ROUTES])
    })
  }
}
