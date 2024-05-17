import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Login from '@/pages/Login.vue'
// @ts-ignore
import Map from '@/pages/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map


      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
