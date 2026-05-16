import { createRouter, createWebHistory } from 'vue-router'

// Define components as async functions that will load from MFEs
const ProductsApp = () => import('mfe1/ProductsApp')
const CartApp = () => import('mfe2/CartApp')
const Home = () => import('../views/Home.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsApp
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartApp
    }
  ]
})

export default router