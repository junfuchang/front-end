<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  navList: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <template v-for="nav in props.navList">
    <el-sub-menu v-if="'children' in nav" :index="nav.path">
      <template #title>{{ nav.name }}</template>
      <NavRecursion :navList="nav.children" :index="nav.path" />
    </el-sub-menu>
    <el-menu-item v-else :index="nav.path">{{ nav.name }}</el-menu-item>
  </template>
</template>
