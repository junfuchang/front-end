<template>
  <div>
    <el-card shadow="never" class="card-style">
      <template #header>
        <div class="card-header">
          <div>
            <span>新碟上架</span>
          </div>
          <el-button type="text">更多</el-button>
        </div>
      </template>
      <NewSongListItem />
    </el-card>
  </div>
</template>

<script setup>
import NewSongListItem from '@comp/Home/NewSongListItem.vue'
</script>
