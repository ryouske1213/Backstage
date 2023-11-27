import { createRouter, createWebHistory  } from 'vue-router'
import Index from '../views/index.vue'
import HomeMain from '../views/HomeMain.vue'
import Home from '../views/Home.vue'


export const router = createRouter({
  history: createWebHistory (),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HomeMain',
      name: 'HomeMain',
      component: HomeMain
    },
  ]
})

export default router