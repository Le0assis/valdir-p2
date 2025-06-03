import { createRouter, createWebHistory } from 'vue-router'


import ProductsView from '../views/ProductsView.vue'
import DetailView from '../views/DetailsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/products/:id',
      name: 'detalhes',
      component: DetailView,
      props: true,
    },
  ],
})

export default router
