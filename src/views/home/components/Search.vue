<template>
  <div class="search-container" :style="opacityStyle">
    <div class="search">
      <van-search shape="round" v-model="value" placeholder="麦当劳" />
      <van-button round type="info" color="linear-gradient(to right, #07aff6,#22c5fe)">搜索</van-button>
    </div>
    <div class="recommend-tag">
      <div class="item" :class="index === 0 ? 'hot' : ''" v-for="(item, index) in tagList" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import { recommendTag } from '@/api/home/home'
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
      value: '',
      tagList: []
    }
  },
  async mounted() {
    const res = await recommendTag()
    this.tagList = res.data.tags
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search-container
  position sticky
  top 0
  z-index 1
  // background $linearBgColor
  .search
    position relative
    .van-search
      border-radius .2rem .2rem 0 0
    .van-button
      position absolute
      width .55rem
      height .25rem
      font-size .1rem
      right 4%
      top 50%
      margin-top -.125rem
  .recommend-tag
    display flex
    font-size .11rem
    padding-left .1rem
    overflow hidden
    .item
      background #f2f2f2
      padding .05rem .08rem
      margin 0 .03rem
      border-radius .1rem
      color #393939
    .hot
      background #fef0ed
      color #ff7753
</style>
