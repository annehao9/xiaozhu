import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Like from '../views/Like'
import Details from '../views/Details'
import Commheader from '../components/Commheader'
import Register from '../views/Register'
import Form from '../views/Form'
import Rate from '../views/Rate'
import Me from '../views/Me'
import Order from '../views/Order'
import Landlady from '../views/Landlady'


Vue.use(VueRouter)

const routes = [
  {
    path: '/landlady',
    name: 'Landlady',
    component: Landlady
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/rate',
    name: 'Rate',
    component: Rate
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/commheader',
    name: 'Commheader',
    component: Commheader
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
