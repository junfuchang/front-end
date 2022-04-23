<script setup>
import { Pointer } from '@element-plus/icons-vue'

const props = defineProps(['type', 'list', 'url'])
</script>

<template>
  <el-card class="top-list-card" :body-style="{ padding: '0px' }" shadow="never">
    <div class="header">
      <div class="pic">
        {{ props.type }}
      </div>

      <div class="title">
        <div>{{ props.type }}</div>
        <div>
          <el-button type="text"
            ><el-icon><Pointer /></el-icon
          ></el-button>
          <el-button type="text"
            ><el-icon><Pointer /></el-icon
          ></el-button>
        </div>
      </div>
    </div>

    <ul class="list">
      <li v-for="item in 10">
        {{ item }}
        <span>
          {{ 'www' }}
        </span>
      </li>
      <li>查看全部</li>
    </ul>
  </el-card>
</template>

<style>
.top-list-card {
  border-radius: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #666;

  /* border: none; */
}

.top-list-card .header {
  width: 100%;
  padding: 20px 20px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-list-card .header .pic {
  width: 80px;
  height: 80px;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-list-card .header .title {
  padding: 15px;
  font-size: 14px;
}

.top-list-card .list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.top-list-card .list li {
  position: relative;
  font-size: 16px;
  padding: 7px 25px 7px 25px;
}
.top-list-card .list li:first-of-type,
li:nth-of-type(2),
li:nth-of-type(3) {
  color: #c10d0c;
}
.top-list-card .list span {
  color: black;
  position: absolute;
  left: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-family: Arial, Helvetica, sans-serif;
}

/* .top-list-card .list li:nth-child(2n) {
  background-color: #f4f4f4;
} */

.top-list-card .list li:nth-child(2n + 1) {
  background-color: #e8e8e8;
}
.top-list-card .list li:last-of-type {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>
