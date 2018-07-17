import Vue from 'vue'
import App from './App'
//router
import router from './config/router'
//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//vuex
import store from './vuex/store'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {ImageExtend} from 'quill-image-extend-module'
VueQuillEditor.Quill.register('modules/ImageExtend', ImageExtend)
import {ImageDrop} from 'quill-image-drop-module'
VueQuillEditor.Quill.register('modules/imageDrop', ImageDrop)
import ImageResize from 'quill-image-resize-module'
// VueQuillEditor.Quill.register('modules/imageResize', ImageResize)//注册会有警告,只需import即可,在ImageResize最后有自动注册
import editorOption from './config/quill'
Vue.use(VueQuillEditor, editorOption)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
