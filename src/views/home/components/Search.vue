<template>
  <div class="search-container" :style="opacityStyle">
    <div class="search">
      <van-search shape="round" v-model="value" placeholder="麦当劳" />
      <van-button round type="info" color="linear-gradient(to right, #07aff6,#22c5fe)">搜索</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeSearch',
  computed: {
    ...mapState(['opacity']),
    opacityStyle() {
      return {
        // opacity: this.opacity
      }
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search-container
  position sticky
  top 0
  // background $linearBgColor
  .search
    position relative
    .van-search
      border-radius .2rem .2rem 0 0
    .van-button
      position absolute
      width .55rem
      height .25rem
      font-size .11rem
      right 4%
      top 50%
      margin-top -.125rem
</style>
