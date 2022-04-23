<script setup>
import { useLogin } from '@store/login.js'
import { useUserInfo } from '@store/userInfo.js'
import { getCurrentInstance, reactive, ref } from 'vue'

const isVisible = ref(true)
const loginStore = useLogin()
const userInfoStore = useUserInfo()
const { proxy } = getCurrentInstance()

// 表单信息
const formInfo = reactive({
  formData: {
    phone: '',
    password: '',
  },
  formRule: {
    phone: [
      {
        required: true,
        message: '请输入正确的手机号码',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
  },
})
// 关闭事件
function handleClose() {
  loginStore.setLoginDialogVisible(false)
  console.log(loginStore.loginDialogVisible)
}
// 表单提交时间
const onSubmit = () =>
  proxy.$refs.formRef.validate(async (valid) => {
    if (valid) {
      const { data: res } = await proxy.$http.login(formInfo.formData)
      if (res.code !== 200) {
        proxy.$msg.error(res.msg)
      } else {
        getUserInfo(res.profile.userId)
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('cookie', res.cookie)
        handleClose()
      }
    }
  })
// 获取用户信息
const getUserInfo = async (userId) => {
  const { data: res } = await proxy.$http.getUserInfo({ uid: userId })

  if (res.code !== 200) {
    proxy.$msg.error(res.msg)
  } else {
    window.localStorage.setItem('isLogin', true)
    window.localStorage.setItem('userInfo', JSON.stringify(res.profile))
    // store存储用户信息
    userInfoStore.setIsLogin(true)
    userInfoStore.setUserInfo(res.profile)
  }
}
</script>

<template>
  <div>
    <el-dialog
      v-model="isVisible"
      @close="handleClose"
      width="500px"
      :close-on-click-modal="false"
      custom-class="login-dialog"
    >
      <template #title class="login-title"> 登录 </template>

      <el-form
        ref="formRef"
        :model="formInfo.formData"
        :rules="formInfo.formRule"
        label-position="right"
        label-width="100px"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formInfo.formData.phone" placeholder="输入手机号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formInfo.formData.password" placeholder="输入密码" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button @click="onSubmit">其他登录方式</el-button>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.login-dialog {
  background-color: aquamarine;
}
.login-title {
  background-color: bisque;
}
</style>
