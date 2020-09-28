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
      shape="round"
      placeholder="请输入搜索关键词"
      @search="handleSearch"
      @cancel="handleCancel"
      class="search"
    />
    <baidu-map class="baidu-map" @ready="handleMapReady">
      <bm-local-search 
        class="map-list" 
        :keyword="keyword" 
        :auto-viewport="true" 
        :location="location"
        :panel="false"
        @searchcomplete="handleSearchComplete"
      ></bm-local-search>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" @locationSuccess="locationSuccess" :showAddressBar="false" :autoLocation="true"></bm-geolocation>
    </baidu-map>
    <van-cell-group class="location-container">
      <van-cell :border="false" icon="location-o" @click="handleSaveAddress(locationName)">{{locationName}}</van-cell>
      <van-button color="#fff" icon="aim"  @click="handleLocation" size="small" class="re-location">重新定位</van-button>
    </van-cell-group>
    <van-list
      finished-text="没有更多了"
      @load="onLoad"
      class="address-list"
    >
      <van-cell-group v-for="item in addressList" @click="handleSaveAddress(item.title)" :border="false" :key="item.title" class="item-group">
        <van-cell :title="item.title" :border="false" class="address-title"/>
        <van-cell :title="item.address" class="address-content"/>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      keyword: '',
      location: '杭州',
      title: '选择收货地址',
      right: '管理',
      addressList: [],
      BMap: null,
      map: null,
      locationName: '定位中...'
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
    onLoad() {},
    locationSuccess(addressInfo) {
      const { point, address } = addressInfo
      this.locationName = address.city
    },
    // 进入页面自动定位
    handleMapReady({ BMap, map }) {
      this.BMap = BMap
      this.map = map
      this.handleLocation()
    },
    handleLocation() {
      this.locationName = '定位中...'
      let _this = this
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          _this.locationSuccess({ point: r.point, address: r.address })
        } else {
          alert('failed' + this.getStatus());
        }
      }, { enableHighAccuracy: true })
    },
    handleSaveAddress(title) {
      this.changeAddress(title)
      this.push('/home')
    },
    ...mapActions(['changeAddress'])
  }
}
</script>

<style lang="stylus" scoped>
.location-container
  display flex
  align-items center
  .van-button
    width 1.2rem
    margin-right .1rem
    color #2395ff !important
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