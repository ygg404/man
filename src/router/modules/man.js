import index from '@/components/Index'
import comic from "@/components/comic";
import section from '@/components/section'

export function getRouterList() {
  return  [{
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
  ]
}

