<template>
  <div>
    <van-nav-bar 
      :title="title" 
      :right="right"
      left-arrow
      :border="false"
      :right-text="right"
      @click-left="handleLeftClick"
      @click-right="handleRightClick"
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
    },
    right: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    handleLeftClick() {
      this.$router.go(-1)
    },
    handleRightClick() {
      this.$emit('clickRight')
    }
  }
}
</script>


