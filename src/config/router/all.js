/*
  除基础路由外其余所有路由
*/
import auth from '../../modules/auth/config/router'

let routes = []

routes = routes.concat(auth)

export default routes
