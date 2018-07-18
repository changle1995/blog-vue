let routes = [
  {
    name: '用户展示',
    path: 'user/display',
    component: (resolve) => require(['../../pages/user/Display'], resolve),
    props: {}
  },
  {
    name: '分配角色',
    path: 'user/assignRoles',
    component: (resolve) => require(['../../pages/user/AssignRoles'], resolve),
    props: {}
  },
  {
    name: '角色展示',
    path: 'role/display',
    component: (resolve) => require(['../../pages/role/Display'], resolve),
    props: {}
  },
  {
    name: '分配权限',
    path: 'role/assignPermissions',
    component: (resolve) => require(['../../pages/role/AssignPermissions'], resolve),
    props: {}
  },
  {
    name: '分配路由',
    path: 'role/assignRoutes',
    component: (resolve) => require(['../../pages/role/AssignRoutes'], resolve),
    props: {}
  },
  {
    name: '权限展示',
    path: 'permission/display',
    component: (resolve) => require(['../../pages/permission/Display'], resolve),
    props: {}
  },
  {
    name: '路由展示',
    path: 'route/display',
    component: (resolve) => require(['../../pages/route/Display'], resolve),
    props: {}
  }
]

export default routes
