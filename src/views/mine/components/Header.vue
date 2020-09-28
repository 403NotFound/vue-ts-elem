<template>
  <div class="header" :style="opacityStyle">
    我的
  </div>
</template>

<script>
export default {
  name: 'MineHeader',
  props: {
    opacityStyle: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  height $headerHeight
  font-size $basicFontSize
  line-height $headerHeight
  background #ffffff
  text-align center
  position fixed
  top 0
  left 0
  right 0
  opacity 0
</style>
