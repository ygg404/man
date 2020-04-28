import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import comic from "@/components/comic";
import section from '@/components/section'

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
    }
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
