// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignupView from '../views/SignupView'
import LoginView from '../views/LoginView'
import LandingPage from '../components/LandingPage'
import WishList from '../components/WishList'
import UserProfile from '../components/UserProfile'
import Cart from '../components/Cart'
import AdminView from '../views/AdminView'
import AdminPage from '../components/AdminPage'
import ManageOrders from '../components/ManageOrders'
import AllUsers from '../components/AllUsers'
import BookDetails from '../components/BookDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '',
        name: 'LandingPage',
        component: LandingPage,
      },
      {
        path:'wishlist',
        name: 'WishList',
        component: WishList,
      },
      {
        path:'userprofile',
        name: 'UserProfile',
        component: UserProfile,
      },
      {
        path:'cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path:'/bookdetails/:id',
        name: 'BookDetails',
        component: BookDetails,
      }
    ]
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
  {
    path: '/adminview',
    name: 'AdminView',
    component: AdminView,
    children:[
      {
        path: '',
        name: 'AdminPage',
        component: AdminPage,
      },
      {
        path:'manageorders',
        name: 'ManageOrders',
        component: ManageOrders,
      },
      {
        path:'allusers',
        name: 'AllUsers',
        component: AllUsers,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
