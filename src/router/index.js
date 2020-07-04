import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import comic from "@/components/comic";
import section from '@/components/section'
import gdetail from "@/components/h5game/gdetail";
import h5index from "@/components/h5game/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/comic',
      name: 'comic',
      component: comic
    },
    {
      path: '/section',
      name: 'section',
      component: section
    },
    {
      path: '/gdetail',
      name: 'gdetail',
      component: gdetail
    },
    {
      path: '/h5index',
      name: 'h5index',
      component: h5index
    }
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
