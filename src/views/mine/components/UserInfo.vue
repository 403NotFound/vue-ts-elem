<template>
  <div class="user-info">
    <div class="img">
      <van-image
        round
        fit="cover"
        width=".6rem"
        height=".6rem"
        :src="userInfo.avatar"
      />
    </div>
    <div class="info">
      <div class="name">{{userInfo.name}}</div>
      <div class="sign">{{userInfo.sign}}</div>
    </div>
  </div>
</template>

<script>
import { userInfo } from '@/api/user/user'
export default {
  name: 'MineUser',
  data() {
    return {
      userInfo: {
        avatar: '',
        name: '',
        sign: ''
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        let opacity = top / 70
        opacity = opacity > 1 ? 1 : opacity
        const opacityStyle = {
          opacity
        }
        this.$emit('changeOpacity', opacityStyle)
      } else {
        const opacityStyle = {
          opacity: 0
        }
        this.$emit('changeOpacity', opacityStyle)
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  async mounted() {
    const res = await userInfo()
    const user = res.data
    this.userInfo = user
  }
}
</script>

<style lang="stylus" scoped>
.user-info
  height 1rem
  padding .1rem
  box-sizing border-box
  display flex
  align-items center
  .info
    padding-left .1rem
    .name
      font-size .19rem
    .sign
      font-size .12rem
      margin-top .05rem
      color #999
</style>
