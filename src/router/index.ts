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
  {
    path: '/selectAddress',
    name: 'SeleclAddress',
    component: () => import('@/views/select-address/SelectAddress.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// // 用于获取 Token
// const getToken = () => {
//   return window.localStorage.getItem('token')
// }

// // 路由守卫
// router.beforeEach(to, from, next) {
//   if (to.path === '/login') return next()

//   // 获取登录令牌 Token
//   const token = getToken()
//   if (!token) return next('/login')
//   next()
// }


export default router;
