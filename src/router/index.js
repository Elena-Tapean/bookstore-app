import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Collection from '../views/Collection.vue';
import Product from '../views/Product.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import store from '../store';
import Basket from '../views/Basket.vue';
import Authors from '../views/Authors.vue';
import Genre from '../views/Genre.vue';
//import HomeView from '../views/HomeView';
//import CollectionsView from '../views/CollectionsView';
//import ProductView from '../views/ProductView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collection/:id',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/genre/:id',
    name: 'Genre',
    component: Genre,
  },
  {
    path: '/authors/:id',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      auth: true
    },
    component: Profile
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '*',
    name: 'page not found',
    component: () => import('../views/PageNotFound.vue')
  },
  {
    path: '/cpanel',
    name: 'Cpanel',
    meta: {
      auth: true,
      role: 'admin'
    },
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.auth) {
    store.state.user?.name ? next() : next('/login')
  } else {
    next()
  }
})

export default router
