<template>
  <div>
    <home-header />
    <home-search />
    <div class="scroll"></div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSearch
  },
  methods: {
    handleSearchComplete(e) {
      // console.log(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll
  height 10rem
</style>