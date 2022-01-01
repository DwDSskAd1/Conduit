import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/layout/index.vue';
import Blank from '@/layout/blank.vue';
// import NewArticle from '@/views/NewArticle.vue';
// import Settings from '@/views/Settings.vue';
// import SignUp from '@/views/SignUp.vue';
// import SignIn from '@/views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/NewArticle',
        name: 'NewArticle',
        component: () => import(/* webpackChunkName: "NewArticle" */ '../views/NewArticle.vue'),
      },
      {
        path: '/Settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue'),
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "SignUp" */ '../views/SignUp.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ]
  },
  {
    path: '/SignIn',
    component: Blank,
    children: [
      {
        path: '',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue'),
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
