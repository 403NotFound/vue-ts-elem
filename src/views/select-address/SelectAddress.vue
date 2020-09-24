<template>
  <div>
    <nav-bar 
      :title="title" 
      :right="right"
      @clickRight="handleManageClick" 
    />
    <van-search
      v-model="keyword"
      show-action
      placeholder="请输入搜索关键词"
      @search="handleSearch"
      @cancel="handleCancel"
    />
    <baidu-map class="baidu-map">
      <bm-local-search 
        class="map-list" 
        :keyword="keyword" 
        :auto-viewport="true" 
        :location="location"
        :panel="false"
        @searchcomplete="handleSearchComplete"
      ></bm-local-search>
    </baidu-map>
    <van-list
      finished-text="没有更多了"
      @load="onLoad"
      class="address-list"
    >
      <van-cell-group v-for="item in addressList" :border="false" :key="item.title" class="item-group">
        <van-cell :title="item.title" :border="false" class="address-title"/>
        <van-cell :title="item.address" class="address-content"/>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Home',
  data() {
    return {
      keyword: '杭州',
      location: '杭州',
      title: '选择收货地址',
      right: '管理',
      addressList: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleSearchComplete(e) {
      let _arr = []
      if (e !== undefined) {
        let addressObj = {}
        e.Hr.forEach(item => {
          addressObj.title = item.title
          addressObj.address = item.address
          _arr.push(addressObj)
          addressObj = {}
        })
        this.addressList = _arr
      }
    },
    handleManageClick() {
      console.log('管理')
    },
    handleSearch() {},
    handleCancel() {},
    onLoad() {}
  }
}
</script>

<style lang="stylus" scoped>
.map-list
  width 100%
  height 2rem
.address-list
  .item-group
    margin .1rem
    .address-title
      font-size .16rem
      padding 0 .05rem
    .address-content
      font-size .14rem
      padding 0 .05rem
</style>