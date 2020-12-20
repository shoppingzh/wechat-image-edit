import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/home')
  },
  {
    path: '/edit',
    component: () => import('@/views/edit'),
    props: route => ({
      url: route.query.url
    })
  },
  {
    path: '/result',
    component: () => import('@/views/result')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
