import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductsView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
        }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
        }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
        }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
        }
    },
  },
  {
    path: '/product/:prodID',
    name: 'SingleProduct',
    component: () => import('../views/SingleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router