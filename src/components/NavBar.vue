<template>
  <div>
    <van-nav-bar 
      :title="title" 
      left-arrow
      @click-left="handleLeftClick"
    >
      <template #right v-if="hasIcon">
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    title: {
      type: String
    },
    hasIcon: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    handleLeftClick() {
      this.$router.go(-1)
    }
  }
}
</script>


