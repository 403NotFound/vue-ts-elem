<template>
  <div class="float-container" :class="isHide ? 'hide': ''">
    <van-icon name="shopping-cart-o" />
  </div>
</template>

<script>
export default {
  name: 'HomeFloat',
  data() {
    return {
      isHide: false,
      timer: null
    }
  },
  methods: {
    handleScroll() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isHide = false
      }, 500);
      this.isHide = true
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.float-container
  width .5rem
  height .5rem
  color #818181
  font-size .3rem
  background #ccc
  display flex
  justify-content center
  align-items center
  border-radius .25rem
  background #fff
  position fixed
  right 0.1rem
  bottom 1rem
  box-shadow 1px 2px 2px #eee
  transition all .5s
.hide
  right -.5rem
</style>
