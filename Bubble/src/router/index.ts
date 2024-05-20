import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Login from '@/pages/Login.vue'
// @ts-ignore
import Main from '@/pages/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})

export default router
