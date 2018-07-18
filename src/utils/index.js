/*
* 创建饿了么ui的message对象
* */
export const createElementMessage = (message = '默认消息', type = 'warning') => {
  return {
    message: message,
    type: type,
    center: true,
    showClose: true,
    duration: 2000
  }
}

/*
* 通过路由route的名称name从user的routes数组生成对应参数
* */
export const generateProps = (name, userRoutes) => {
  let props = {}
  if (userRoutes && userRoutes.length > 0) {
    userRoutes.forEach(userRoute => {
      if (name === userRoute['name'] && userRoute['propertyName']) {
        props[userRoute['propertyName']] = userRoute['propertyValue']
      }
    })
  }
  return props
}

/*
* 更新路由routes的props,根据user的routes数组
* */
export const updateProps = (routes, userRoutes) => {
  routes.forEach(route => {
    if (typeof route.props === 'object') {
      Object.assign(route.props, generateProps(route.name, userRoutes))
    }
    if (route.children && route.children.length > 0) {
      updateProps(route.children, userRoutes)
    }
  })
}
