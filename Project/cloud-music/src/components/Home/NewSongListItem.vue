<template>
  <el-carousel
    indicator-position="none"
    :autoplay="false"
    class="new-song-box"
    height="186px"
    arrow="always"
  >
    <el-carousel-item v-for="item in 2" :key="item" class="pages">
      <el-row justify="space-around" align="middle">
        <el-col :span="4" v-for="the in 5" :key="the" class="items">
          <el-image
            style="width: 100px; height: 100px"
            src="https://s3.bmp.ovh/imgs/2022/04/22/f2e07ea3bf3cfb6d.png"
            fit="cover"
            lazy
          ></el-image>
          <div>
            <el-link>WithWithWi</el-link>
          </div>
          <div>
            <el-link>With </el-link>
          </div>
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.new-song-box .pages {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.new-song-box .pages .items {
  width: 140px;
  /* border: 1px solid #000; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
}
.new-song-box .pages .items div el-link {
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
