<template>
  <div>
    <div class="not-login" v-if="!isLogin">
      <div class="login-container">
        <van-image
          width="1rem"
          height="1rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p>登录后查看订单</p>
        <van-button class="btn" round type="info" @click="handleToLogin">去登录</van-button>
      </div>
    </div>
    <div v-else>
      订单列表
    </div>
  </div>
</template>

<script>

export default {
  name: 'Order',
  data() {
    return {
      isLogin: null
    }
  },
  methods: {
    handleToLogin() {
      this.$router.push('/login')
    }
  },
  mounted() {
    const token = window.localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.not-login
  position absolute
  top 0
  right 0
  left 0
  bottom 0
  display flex
  justify-content center
  align-items center
  .login-container
    display flex
    flex-direction column
    align-items center
    font-size .14rem
    p 
      padding .05rem
    .btn
      padding 0 .3rem
</style>
