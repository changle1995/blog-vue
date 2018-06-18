import routesChildren from './routerChildren'

let routes = [
  {
    name: '用户管理',
    path: '/auth/user',
    component: (resolve) => require(['../../pages/User'], resolve),
    props: {},
    children: []
  },
  {
    name: '角色管理',
    path: '/auth/role',
    component: (resolve) => require(['../../pages/Role'], resolve),
    props: {},
    children: []
  },
  {
    name: '权限管理',
    path: '/auth/permission',
    component: (resolve) => require(['../../pages/Permission'], resolve),
    props: {},
    children: []
  },
  {
    name: '路由管理',
    path: '/auth/route',
    component: (resolve) => require(['../../pages/Route'], resolve),
    props: {},
    children: []
  }
]

routes = routes.concat(routesChildren)

export default routes
