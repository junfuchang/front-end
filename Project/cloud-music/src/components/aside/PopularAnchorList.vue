<template>
  <el-card shadow="never" class="popular-card-style">
    <template #header>
      <div class="popular-card-header">
        <span>热门主播</span>
        <el-button type="text">查看全部</el-button>
      </div>
    </template>
    <el-row>
      <el-col :span="24" v-for="item in 5" class="popular-list-item">
        <el-image
          style="width: 40px; height: 40px"
          src="https://s3.bmp.ovh/imgs/2022/04/22/f2e07ea3bf3cfb6d.png"
          fit="cover"
          lazy
        ></el-image>
        <div>
          <span>名字</span>
          <span>描述</span>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style>
.popular-card-style {
  border: none;
}
.popular-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
}

.popular-list-item {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3px;
}
.popular-list-item > div {
  padding: 3px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.popular-list-item > div > span {
  margin-top: 2px;
  font-size: 12px;
}
.popular-list-item > div > span:last-of-type {
  color: #666;
}
</style>
