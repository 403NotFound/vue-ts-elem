<template>
  <div class="header" :style="opacityStyle">
    <van-row>
      <van-col span="20">
        <van-cell :title="locationAddress" icon="location-o" to="/selectAddress" />
      </van-col>
      <van-col span="4" class="header-right">
        <van-icon name="smile-comment-o" badge="9" class="comment"/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeHeader',
  data() {
    return {
      opacityStyle: {
        opacity: 1
      }
    }
  },
  computed: {
    ...mapState(['locationAddress'])
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top < 38) {
        let opacity = 1 - top / 38
        this.opacityStyle.opacity = opacity
        this.changeOpacity(opacity)
      }
    },
    ...mapActions(['changeOpacity'])
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  height .6rem
  padding-top .1rem
  box-sizing border-box
  background-image: linear-gradient(#1cc2fc,#1fc2fd)
  .van-col
    display flex
    align-items center
    justify-content center
    height $headerHeight
    .van-cell
      background transparent
      color #fff
      font-size .16rem
      font-weight bold
    .van-icon
      font-size .2rem
  .header-right
    display flex
    .comment
      font-size .26rem
      color #fff
</style>
