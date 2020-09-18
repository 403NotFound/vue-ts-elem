import $http from '@/utils/request'

// test
export const login = () => {
  return $http({
    url: '/login',
    method: 'get'
  })
}

// list
export const list = () => {
  return $http({
    url: '/list',
    method: 'get'
  })
}
