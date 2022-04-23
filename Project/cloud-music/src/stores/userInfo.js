import { defineStore } from 'pinia'

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    isLogin: false,
    userInfo: {},
  }),
  getters: {
    getIsLogin: (state) => state.isLogin,
  },
  actions: {
    // 设置是否登录
    setIsLogin(value = false) {
      this.isLogin = value
    },
    // 设置用户信息
    setUserInfo(value = {}) {
      this.userInfo = value
    },
  },
})
