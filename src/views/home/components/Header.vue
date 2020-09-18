<template>
  <div class="header">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { login } from '@/api/api'
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  },
  async mounted () {
    let res = await login()
    console.log(res);
  }
}
</script>

<style lang="stylus" scoped>
.header
  // width 1rem
  // height 1rem
  // font-size .14rem
  // background red
</style>
