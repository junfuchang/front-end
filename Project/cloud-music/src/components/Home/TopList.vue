<template>
  <div>
    <el-card shadow="never" class="card-style">
      <template #header>
        <div class="card-header">
          <div>
            <span>榜单</span>
          </div>
          <el-button type="text">更多</el-button>
        </div>
      </template>
      <el-row>
        <el-col :span="8" v-for="item in 3">
          <TopListCard :type="item" :list="[]" url="" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import TopListCard from '@comp/Home/TopListCard.vue'
</script>
