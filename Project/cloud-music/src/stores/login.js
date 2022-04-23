import { defineStore } from 'pinia'

export const useLogin = defineStore('userInfo', {
  state: () => ({
    loginDialogVisible: false,
  }),
  getters: {
    getLoginDialogVisible: (state) => state.loginDialogVisible,
  },
  actions: {
    // 设置登录弹框是否显示
    setLoginDialogVisible(value) {
      this.loginDialogVisible = value
    },
  },
})
