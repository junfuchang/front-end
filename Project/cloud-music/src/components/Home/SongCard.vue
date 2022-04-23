<script setup>
import { Pointer, Sugar } from '@element-plus/icons-vue'
</script>

<template>
  <el-card class="song-card" :body-style="{ padding: '0px' }" shadow="never">
    <div>
      <el-image
        style="width: 140px; height: 140px"
        src="https://s3.bmp.ovh/imgs/2022/04/22/f2e07ea3bf3cfb6d.png"
        fit="cover"
        lazy
      ></el-image>

      <div class="bar">
        <div>
          <el-icon><Sugar /></el-icon>
          <span>32万</span>
        </div>

        <el-button type="text" class="button"
          ><el-icon><Pointer /></el-icon
        ></el-button>
      </div>
    </div>

    <el-link class="song-text">With Underline</el-link>
  </el-card>
</template>

<style>
.song-card {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 10px;
}

.bar {
  width: 140px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.9);
  position: absolute;
  top: 113px;
}

.song-text {
  margin: 8px 0 3px;
  font-size: 14px;
}
</style>
