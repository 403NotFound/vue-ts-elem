<template>
  <div class="food">
    {{ $route.params.foodId }}
  </div>
</template>

<script>
// import HomeHeader from './components/Header.vue'

export default {
  name: 'Food',
  data() {
    return {
    }
  },
  mounted() {
    console.log(123)
  }
}
</script>

<style lang="stylus" scoped>
</style>