import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/admin/',
      name: 'admin',
      component: () => import('../layouts/AdminLayout.vue'),
    }
  
  ],
})

export default router
