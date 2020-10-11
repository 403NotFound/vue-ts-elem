<template>
  <div class="home">
    <home-header />
    <home-search />
    <home-swiper />
    <home-float />
    <home-icons />
    <div class="scroll"></div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeFloat from './components/Float.vue'
import HomeIcons from './components/Icons.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper,
    HomeFloat,
    HomeIcons
  },
  methods: {
    handleSearchComplete(e) {
      // console.log(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  background #fff
  .scroll
    height 10rem
</style>