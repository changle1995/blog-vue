import children from './children'

let routes = [
  {
    name: '权限管理',
    path: '/auth',
    component: (resolve) => require(['../../pages/Auth'], resolve),
    children: children
  }
]

export default routes
