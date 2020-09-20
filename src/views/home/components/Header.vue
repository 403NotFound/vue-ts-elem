<template>
  <div class="header">
    <van-button type="primary" class="btn">主要按钮</van-button>
    <div class="test">test</div>
  </div>
</template>

<script>
import { login, list } from '@/api/api.ts'
export default {
  name: 'HomeHeader',
  data() {
    return {}
  },
  async mounted() {
    const res = await login()
    const res2 = await list()
  }
}
</script>

<style lang="stylus" scoped>
  .test
    width 1rem
    height 1rem
    background red
</style>
