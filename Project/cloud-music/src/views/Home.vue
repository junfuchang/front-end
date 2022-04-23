<script setup>
import PopularAnchorList from '@comp/Aside/PopularAnchorList.vue'
import SingerList from '@comp/Aside/SingerList.vue'
import Banner from '@comp/Home/Banner.vue'
import NewSongList from '@comp/Home/NewSongList.vue'
import PopularRecommendation from '@comp/Home/PopularRecommendation.vue'
</script>

<template>
  <!-- 轮播图 -->
  <Banner />

  <el-container>
    <!-- 主内容区域 -->
    <el-main>
      <!-- 热门推荐 -->
      <PopularRecommendation />
      <!-- 新碟上架 -->
      <NewSongList />
      <!-- 榜单 -->
      <NewSongList />
    </el-main>

    <!-- 侧边栏 -->
    <el-aside width="200px">
      <!-- 入驻歌手 -->
      <SingerList />
      <!-- 热门主播 -->
      <PopularAnchorList />
    </el-aside>
  </el-container>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header > div > span {
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}

.card-style {
  border: none;
}
.el-card__header {
  height: 33px;
  padding: 0 10px 0 34px;
}
</style>
