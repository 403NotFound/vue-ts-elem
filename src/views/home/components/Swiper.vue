<template>
  <div class="swiper-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in 4" :key="item">
        <img src="../../../assets/imgs/item1.png" alt="" class="item-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      tagList: []
    }
  },
  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  width 95%
  margin 0 auto
  margin-top .1rem
  .my-swipe 
    .van-swipe-item
      color #fff
      font-size 20px
      text-align center
      background-color #39a9ed
      border-radius .1rem
      box-sizing border-box
      .item-img
        width 100%
</style>
