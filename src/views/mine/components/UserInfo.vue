<template>
  <div class="user-info">
    <div class="img">
      <van-image
        round
        fit="cover"
        width=".6rem"
        height=".6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="info">
      <div class="name">404NotFound</div>
      <div class="sign">美团外卖,送啥都快</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineUser',
  data() {
    return {}
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      console.log(top);
      if (top > 30) {
        let opacity = top / 70
        opacity = opacity > 1 ? 1 : opacity
        const opacityStyle = {
          opacity
        }
        this.$emit('changeOpacity', opacityStyle)
      } else {
        const opacityStyle = {
          opacity: 0
        }
        this.$emit('changeOpacity', opacityStyle)
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.user-info
  height 1rem
  padding .1rem
  box-sizing border-box
  display flex
  align-items center
  .info
    padding-left .1rem
    .name
      font-size .22rem
    .sign
      font-size .12rem
      margin-top .05rem
      color #999
</style>
