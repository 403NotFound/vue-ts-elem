<template>
  <div>
    <router-view />
    <van-tabbar route v-model="active" @change="onChange">
      <van-tabbar-item to="/home" icon="home-o">外卖</van-tabbar-item>
      <van-tabbar-item to="/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    // tabbar 切换事件
    onChange () {}
  }
}
</script>
