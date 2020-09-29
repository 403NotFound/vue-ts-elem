import $http from '@/utils/request'

// 获取推荐标签接口
export const recommendTag = () => {
  return $http({
    url: '/recommendTag',
    method: 'get'
  })
}
