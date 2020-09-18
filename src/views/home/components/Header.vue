<template>
  <div class="header">Header</div>
</template>

<script>
import { login } from '@/api/api'
export default {
  name: 'HomeHeader',
  async mounted () {
    let res = await login()
    console.log(res);
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 1rem
  height 1rem
  font-size .14rem
  background red
</style>
