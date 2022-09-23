import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import store from '../store';
import HomeView from '../views/HomeView';
import CollectionsView from '../views/CollectionsView';
import ProductView from '../views/ProductView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/homeview',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/collectionsview/:name/:id',
    name: 'CollectionsView',
    component: CollectionsView
  },
  {
    path: '/productview',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
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
    path: '/account',
    name: 'Create-account',
    component: () => import('../views/Account.vue')
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
    path: '/give',
    name: 'Give',
    component: () => import('../views/Give.vue')
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
