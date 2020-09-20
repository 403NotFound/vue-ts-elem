import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: () => import('@/components/Home.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order/Order.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine/Mine.vue')
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
