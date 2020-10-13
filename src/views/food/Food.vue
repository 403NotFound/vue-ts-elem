<template>
  <div class="food">
    {{ $route.params.foodId }}
    <food-header @click.native="handleClick"/>
  </div>
</template>

<script>
import FoodHeader from './components/Header.vue'

export default {
  name: 'Food',
  components: {
    FoodHeader
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      console.log(1234);
    }
  },
  mounted() {
    console.log(123)
  }
}
</script>

<style lang="stylus" scoped>
</style>