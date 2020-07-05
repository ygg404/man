import gdetail from "@/components/h5game/gdetail";
import h5index from "@/components/h5game/index"

export function getRouterList() {
  return [
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
  ]
}
