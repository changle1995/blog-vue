import Vue from 'vue'
import App from './App'
import router from './config/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './vuex/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
