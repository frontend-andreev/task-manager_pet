import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import ('../views/Register.vue')
    },
  ]
})

export default router