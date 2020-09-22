<template>
  <div class="header">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="item" @click="handleClick(index)">{{item.title}}</div>
      <div class="item-c" v-if="item.children && active === index" :data="index">
        <home-list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    list: Array
  },
  data() {
    return {
      active: null
    }
  },
  methods: {
    handleClick(idx) {
      this.active = idx
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  .item-c
    width 2rem
    position absolute
    left 2rem
    top 0
    // display none

</style>
