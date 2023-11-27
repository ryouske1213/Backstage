import { createRouter, createWebHistory  } from 'vue-router'
import Index from '../views/index.vue'
import HomeMain from '../views/HomeMain/index.vue'
import product from '../views/product/index.vue'


export const router = createRouter({
  history: createWebHistory (),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/HomeMain',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
  ]
})

export default router