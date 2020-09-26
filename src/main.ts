import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决移动端触控 300ms 问题
import fastClick from 'fastclick'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
// import 'amfe-flexible'
import '@/utils/rem'
import './utils/request'
// vant
import './plugins/index.ts'
// baidu map
import BaiduMap from 'vue-baidu-map'
import { AK } from './utils/config'

import { RouteParams } from '@/utils/interface'

Vue.use(BaiduMap, {
  ak: AK
})

Vue.config.productionTip = false

fastClick.attach(document.body)

// 路由 push 方法
Vue.prototype.push = (route: string, params: RouteParams) => {
  router.push(route)
}

// 路由 replace 方法
Vue.prototype.replace = (route: string, params: RouteParams) => {
  router.replace(route)
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
