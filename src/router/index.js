import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
   {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
    {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
  ,
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/Pay.vue')
  }
   ,
  {
    path: '/pannier',
    name: 'Pannier',
    component: () => import('../views/Pannier.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
