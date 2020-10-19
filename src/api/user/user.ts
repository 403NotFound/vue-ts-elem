import $http from '@/utils/request'

interface UserInfo {
  username: string,
  password: string
}
// 登录接口
export const login = (userInfo: UserInfo) => {
  const { password, username } = userInfo
  return $http({
    url: '/users/login',
    method: 'post',
    data: {
      password,
      username
    }
  })
}

// 获取用户详情接口
export const userInfo = () => {
  return $http({
    url: '/users/userInfo',
    method: 'get'
  })
}
