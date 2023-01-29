import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
    //props: (route) => {
    //  const iduser = Number(route.params.id);
    //  const userRole = localStorage.getItem("userRole");
    //  return isNaN(iduser) ? { iduser: null, userRole } : { iduser, userRole };
    //}, 
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id);
      const productRole = localStorage.getItem("productRole");
      return isNaN(id) ? { id: null, productRole } : { id, productRole };
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
