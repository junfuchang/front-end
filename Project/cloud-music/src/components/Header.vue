<script setup>
import { Search } from '@element-plus/icons-vue'
import { useLogin } from '@store/login.js'
import { useUserInfo } from '@store/userInfo.js'
import { reactive, ref } from 'vue'

// 设置导航列表
const navList = reactive([
  {
    name: '发现音乐',
    path: '/',
    children: [
      {
        name: '推荐',
        path: '/discover',
      },
      {
        name: '排行榜',
        path: '/discover/toplist',
      },
      {
        name: '歌单',
        path: '/discover/playlist',
      },
      {
        name: '主播电台',
        path: '/discover/djradio',
      },
      {
        name: '歌手',
        path: '/discover/artist',
      },
      {
        name: '新碟上架',
        path: '/discover/album',
      },
    ],
  },
  {
    name: '我的音乐',
    path: '/my',
  },
  {
    name: '关注',
    path: '/friend',
  },
  {
    name: '商场',
    path: '/shop',
  },
  {
    name: '音乐人',
    path: '/music-man',
  },
  {
    name: '下载客户端',
    path: '/download',
  },
])
const activeIndex = ref('/discover')
// 搜索值
const searchValue = ref('')
// 获取用户信息
const userInfo = useUserInfo()
const loginStore = useLogin()
function handleLogin() {
  loginStore.setLoginDialogVisible(true)
  console.log(loginStore.loginDialogVisible)
}
</script>

<template>
  <el-row justify="center" align="middle" :gutter="20" tag="header">
    <el-col :span="17">
      <el-menu class="el-menu" :default-active="activeIndex" mode="horizontal" router>
        <NavRecursion :navList="navList" />
      </el-menu>
    </el-col>
    <el-col :span="6">
      <el-input
        v-model="searchValue"
        size="large"
        placeholder="音乐/视频/电台/用户"
        :prefix-icon="Search"
        :maxlength="50"
        :minlength="1"
        clearable
      />
    </el-col>
    <el-col :span="1">
      <el-avatar
        v-if="userInfo.getIsLogin"
        fit="cover"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-button plain v-else @click="handleLogin">登录</el-button>
    </el-col>
  </el-row>
</template>

<style>
.el-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
