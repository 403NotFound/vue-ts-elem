<template>
  <div>
    <home-header />
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    HomeHeader
  },
  methods: {
    handleSearchComplete(e) {
      // console.log(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
.map-list
  width 100%
  height 2rem
</style>