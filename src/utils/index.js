import config from '../config'

/*
* 自动装配所有路由并返回装配后的路由
* */
export const getRoutes = (userRoutes, routes) => {
  // 获取路由最大等级
  let maxLevel = 1
  userRoutes.forEach(value => {
    maxLevel = maxLevel < value[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.LEVEL] ? value[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.LEVEL] : maxLevel
  })
  // 开始循环设置路由参数props及子路由children
  for (let level = 1; level <= maxLevel; level++) {
    let currentLevelRoutes = getRoutesByLevel(userRoutes, routes, level)
    currentLevelRoutes.forEach(route => {
      setPropsOfRoutesByUserRoutes(userRoutes, currentLevelRoutes)
      getRoutesByParentName(userRoutes, routes, route.name).forEach(children => {
        route.children.push(children)
      })
    })
  }
  return getRoutesByLevel(userRoutes, routes, 1)
}

/*
* 通过parentName获取子路由
* */
export const getRoutesByParentName = (userRoutes, routes, parentName) => {
  let filteredUserRoutes = userRoutes.filter(value => {
    return parentName === value[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PARENT_NAME]
  })
  return getRoutesByUserRoutes(filteredUserRoutes, routes)
}

/*
* 通过level获取指定等级的路由
* */
export const getRoutesByLevel = (userRoutes, routes, level) => {
  let filteredUserRoutes = userRoutes.filter(value => {
    return level === value[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.LEVEL]
  })
  return getRoutesByUserRoutes(filteredUserRoutes, routes)
}

/*
* 获取userRoutes中所有名称的路由
* */
export const getRoutesByUserRoutes = (userRoutes, routes) => {
  return routes.filter(route => {
    return userRoutes.map(routeOfUser => {
      return routeOfUser[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.NAME]
    }).includes(route.name)
  })
}

/*
* 将userRoutes中props参数设置到对应路由中
* */
export const setPropsOfRoutesByUserRoutes = (userRoutes, routes) => {
  userRoutes.forEach(routeOfUser => {
    routes.forEach(route => {
      if (route.name === routeOfUser[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.NAME]) {
        route.props[routeOfUser[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PROPERTY_NAME]] = routeOfUser[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PROPERTY_VALUE]
      }
    })
  })
}

/*
* 创建饿了么ui的message对象
* */
export const createElementMessage = (message = '默认消息', type = 'warning') => {
  return {
    message: message,
    type: type,
    center: true,
    showClose: true,
    duration: 1000
  }
}

/*
* 判断是否请求成功
* */
export const responseSuccess = (response) => {
  return response.data[config.RESPONSE.CODE] && response.data[config.RESPONSE.CODE] === config.RESPONSE.CODE_VALUE_MAP.SUCCESS_CODE
}
