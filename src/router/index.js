import Vue from 'vue'
import Router from 'vue-router'
import *  as man from './modules/man'
import h5 from './modules/h5'

Vue.use(Router)

export default new Router({
  routes: man.getRouterList()
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }

})
