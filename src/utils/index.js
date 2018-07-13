import config from '../config'

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
* 通过路由route的名称name从localStorage中user的routes数组生成对应参数
* */
export const generateProps = (name, userRoutes) => {
  let props = {}
  userRoutes.forEach(userRoute => {
    if (name === userRoute[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.NAME] && userRoute[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PROPERTY_NAME]) {
      props[userRoute[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PROPERTY_NAME]] = userRoute[config.LOCAL_STORAGE.USER_VALUE.ROUTES_VALUE.PROPERTY_VALUE]
    }
  })
  return props
}

/*
* 更新路由route的props,根据localStorage中user的routes数组
* */
export const updateProps = (route, userRoutes) => {
  if (typeof route.props === 'object') {
    Object.assign(route.props, generateProps(route.name, userRoutes))
  }
}
