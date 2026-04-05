import api from '@/lib/api'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/register', name: 'register', component: RegisterPage },
  ],
})

router.beforeEach(async (to) => {
  if (to.name !== 'login' && to.name !== 'register') {
    try {
      await api.get('/auth/verify')
    } catch (err) {
      return { name: 'login' }
    }
  }
})

export default router
