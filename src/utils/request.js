import axios from 'axios'

const BASE_URL = '/api'

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 5000 // request timeout
})

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 对请求错误做些什么
})

export default $http
