import $http from '@/utils/request'

// test
export const login = (page) => {
  return $http({
    url: '/login',
    method: 'get'
  })
}