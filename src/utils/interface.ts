import { Dispatch, Commit } from 'vuex'

// actions ctx 类型
export interface CTX {
  dispatch: Dispatch,
  commit: Commit,
  getters: object,
  state: object,
  rootGetters: object,
  rootState: object
}

// 路由参数接口
export interface RouteParams {
  params?: {
    [propName: string]: any;
  },
  query?: {
    [propName: string]: any;
  }
}
