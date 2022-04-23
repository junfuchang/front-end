<script setup>
import Header from '@comp/Header.vue'
import Login from '@comp/Login.vue'
import { useLogin } from '@store/login.js'
import { computed } from 'vue'
import { RouterView } from 'vue-router'

const loginStore = useLogin()
const loginDialogVisible = computed(() => loginStore.getLoginDialogVisible)
</script>

<template>
  <div>
    <Login v-if="loginDialogVisible" />
    <el-container class="app">
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main"><RouterView /></el-main>
    </el-container>
  </div>
</template>

<style>
.app {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
.main {
  width: 100vw;
  max-width: 1200px;
}
</style>
