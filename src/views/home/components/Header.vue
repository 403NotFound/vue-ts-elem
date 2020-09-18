<template>
  <div class="header">
    <van-button type="primary" class="btn">主要按钮</van-button>
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
    console.log(res2);
  }
}
</script>

<style lang="stylus" scoped>
.header
  .btn
    width 1rem
    height .5rem
  // width 1rem
  // height 1rem
  // font-size .14rem
  // background red
</style>
