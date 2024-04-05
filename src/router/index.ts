import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AdminView from "../views/AdminView.vue"
import ShoppingView from "../views/ShoppingView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'adminView',
      component: AdminView
    },
    {
      path: '/shopping',
      name: 'shoppingView',
      component: ShoppingView
    },

  ]
})

export default router
