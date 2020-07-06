import gdetail from "@/components/h5/gdetail";
import h5index from "@/components/h5/index"

export function getRouterList() {
  return [
    {
      path: '/',
      name: 'h5index',
      component: h5index
    },
    {
      path: '/h5index',
      name: 'h5index',
      component: h5index
    },
    {
      path: '/gdetail',
      name: 'gdetail',
      component: gdetail
    },

  ]
}
