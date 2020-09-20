<template>
  <div>
    <nav-bar title="登录" :hasIcon="hasIcon"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button 
          block 
          :loading="isLoding" 
          loading-text="登陆中..."
          type="info" 
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { login } from '@/api/user/user'

export default {
  name: 'Order',
  components: {
    NavBar
  },
  data() {
     return {
      username: '',
      password: '',
      hasIcon: false,
      isLoding: false
    }
  },
  methods: {
    async onSubmit() {
      this.isLoding = true
      const user = {
        username: this.username, 
        password: this.password
      }
      const res = await login(user)
      const data = res.data
      if (data.token && res.status === 200) {
        this.isLoding = false
        const token = data.token
        // 登陆成功获得 token 并存入 localStorage
        this.handleSaveTooken(token)
        this.$router.push('/mine')
      }
    },
    handleSaveTooken (token) {
      window.localStorage.setItem('token', token)
    }
  }
}
</script>
