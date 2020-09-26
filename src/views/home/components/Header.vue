<template>
  <div class="header">
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
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data() {
    return {}
  },
  computed: {
    ...mapState(['locationAddress'])
  },
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.header
  height .5rem
  background-image: linear-gradient(#1cc2fc,#1fc2fd)
  .van-col
    display flex
    align-items center
    justify-content center
    height .5rem
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
