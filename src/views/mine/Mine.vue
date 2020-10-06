<template>
  <div>
    <div class="mine-top-login">
      <div class="icon">图标</div>

      <div class="top-login">
        <div class="login-text">登录/注册</div>
        <div class="login-privilege">登录后享受更多特权</div>
      </div>

      <div>></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Mine',
}
</script>

<style lang="stylus" scoped>
  .mine-top-login
    background-color deepskyblue
    height 1.2rem
    display flex
    justify-content space-around
  
  .icon
    width 0.5rem
    height 0.5rem
    border-radius 100%

  .login-privilege
    font-size 15px
</style>
