import $http from '@/utils/request'

// test
export const test = (page) => {
  return $http({
    url: '/test',
    method: 'get'
  })
}