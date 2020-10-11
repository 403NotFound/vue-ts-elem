<template>
  <div class="icons-container">
    <div 
      class="icon-item" 
      v-for="(item, index) in iconClass" 
      :key="index"
      @click="handleIconClick(item.name)"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconClass: [
        {
          icon:'#icon-waimai',
          name: '外卖'
        },
        {
          icon:'#icon-yinpin',
          name: '饮品'
        },
        {
          icon:'#icon-shuiguo2',
          name: '水果'
        },
        {
          icon:'#icon-convenience-',
          name: '超市便利'
        },
        {
          icon:'#icon-huoguo-',
          name: '火锅'
        },
        {
          icon:'#icon-xianhua',
          name: '鲜花'
        },
        {
          icon:'#icon-taiwanzhaji',
          name: '炸鸡烤串'
        },
        {
          icon:'#icon-tongchengpaotui',
          name: '同城跑腿'
        },
        {
          icon:'#icon-zaocan',
          name: '早餐'
        },
        {
          icon:'#icon-yao',
          name: '送药上门'
        }
      ]
    }
  },
  methods: {
    handleIconClick(name) {
      Toast({
        message: name,
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      });
    }
  },
  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
.icons-container
  display flex
  flex-wrap wrap
  padding 0 2.5%
  margin-top .1rem
  .icon-item
    width 20%
    font-size .4rem
    text-align center
    padding .05rem 0
  .name
    font-size .14rem
    margin-top .1rem
</style>
