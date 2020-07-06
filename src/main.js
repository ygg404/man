// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpRequest from './utils/httpRequest' // api: https://github.com/axios/axios
import '@/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Meta from 'vue-meta'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Meta)
Vue.config.productionTip = false

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

