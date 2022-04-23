<template>
  <el-card shadow="never" class="singer-card-style">
    <template #header>
      <div class="singer-card-header">
        <span>入驻歌手</span>
        <el-button type="text">查看全部</el-button>
      </div>
    </template>
    <el-row>
      <el-col :span="24" v-for="item in 5" class="singer-list-item">
        <el-image
          style="width: 62px; height: 62px"
          src="https://s3.bmp.ovh/imgs/2022/04/22/f2e07ea3bf3cfb6d.png"
          fit="cover"
          lazy
        ></el-image>
        <div>
          <strong>名字</strong>
          <span>描述</span>
        </div>
      </el-col>
      <el-col><el-button plain>申请成为网易音乐人</el-button></el-col>
    </el-row>
  </el-card>
</template>

<style>
.singer-card-style {
  border: none;
}
.singer-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
}

.singer-list-item {
  display: flex;
  justify-content: flex-start;
  border: 1px solid #e9e9e9;
  background-color: #fafafa;
  margin-bottom: 3px;
}
.singer-list-item > div {
  padding: 3px;
  display: flex;
  flex-flow: column;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.singer-list-item > div > span {
  margin-top: 8px;
  font-size: 12px;
}
</style>
