import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SecondBag from '../views/SecondBag.vue'
import Tada from '../views/Tada.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secondbag',
    name: 'SecondBag',
    component: SecondBag
  },
  {
    path: '/tada',
    name: 'Tada',
    component: Tada
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
