import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Home.vue';
import Book from '../views/Book.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book
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
