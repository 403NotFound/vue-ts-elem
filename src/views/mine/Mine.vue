<template>
  <div>
    <mine-header :opacityStyle='opacityStyle'/>
    <mine-user @changeOpacity='changeOpacity'/>
    <div class="scroll"></div>
  </div>
</template>

<script>
import MineHeader from './components/Header'
import MineUser from './components/UserInfo'

export default {
  name: 'Mine',
  components: {
    MineHeader,
    MineUser
  },
  data() {
    return {
      opacityStyle: {}
    }
  },
  methods: {
    changeOpacity(opacityStyle) {
      this.opacityStyle = opacityStyle
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll
  height 10rem
</style>
