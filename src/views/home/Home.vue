<template>
  <div>
    <input type="text" v-model="keyword">
    <baidu-map class="baidu-map">
      <!-- <bm-view class="map"></bm-view> -->
      <bm-local-search 
        class="map-list" 
        :keyword="keyword" 
        :auto-viewport="true" 
        :location="location"
        @searchcomplete="handleSearchComplete"
      ></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'

export default {
  name: 'Home',
  data() {
    return {
      keyword: '杭州',
      location: '杭州'
    }
  },
  components: {
    HomeHeader
  },
  methods: {
    handleSearchComplete(e) {
      console.log(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
.map-list
  width 100%
  height 2rem
</style>