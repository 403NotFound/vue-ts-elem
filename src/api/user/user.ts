import $http from '@/utils/request'

interface UserInfo {
  username: string,
  password: string
}
// 登录接口
export const login = (userInfo: UserInfo) => {
  const { password, username } = userInfo
  return $http({
    url: '/login',
    method: 'post',
    data: {
      password,
      username
    }
  })
}
