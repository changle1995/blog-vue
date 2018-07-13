/*
  VueRouter基础route以及路由守卫配置
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '..'
import blog from '../../modules/blog/config/router'
import auth from '../../modules/auth/config/router'

Vue.use(VueRouter)

let routes = [
  {
    name: '登录',
    path: '/login',
    component: (resolve) => require(['../../pages/Login'], resolve)
  },
  {
    name: '找不到页面',
    path: '/404',
    component: (resolve) => require(['../../pages/404'], resolve)
  },
  {
    name: '首页',
    path: '/home',
    component: (resolve) => require(['../../pages/Home'], resolve)
  },
  {
    path: "/",
    redirect: "/home"
  }
]

routes = routes.concat(blog)
routes = routes.concat(auth)
routes = routes.concat([{path: '*', component: (resolve) => require(['../../pages/404'], resolve)}])

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    localStorage.removeItem(config.LOCAL_STORAGE.USER)
  }
  next()
})

export default router
