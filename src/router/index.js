// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView'
import LoginView from '../views/LoginView'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/signupview',
    name: 'SignupView',
    component: SignupView,
  },
  {
    path: '/loginview',
    name: 'LoginView',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
