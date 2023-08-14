import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/producto/listar',
      name: 'producto_listar',
      component: () => import('../views/ListarProducto.vue')
    },
    {
      path: '/producto/insertar',
      name: 'producto_insert',
      component: () => import('../views/InsertarProducto.vue')
    },
    {
      path: '/producto/actualizar/:id',
      name: 'producto_actualizar',
      component: () => import('../views/ActualizarProducto.vue')
    },
  ]
})

export default router
