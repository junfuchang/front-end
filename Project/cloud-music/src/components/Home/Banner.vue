<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'

const { proxy } = getCurrentInstance()
const bannerList = reactive([])
let loading = ref(false)

onMounted(() => {
  getBanner()
  console.log('bannerList', bannerList)
})

// 获取轮播图
const getBanner = async () => {
  try {
    const { data: res } = await proxy.$http.getBanner()
    if (res.code !== 200) {
      return proxy.$msg.error('轮播图数据请求失败')
    }
    bannerList.value = res.banners
    loading.value = true
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <el-carousel height="300px" v-if="loading">
      <el-carousel-item v-for="item in bannerList.value" :key="item.encodeId">
        <router-link :to="`/song?id=${item.encodeId}`">
          <el-image
            style="width: 100%; height: 300px; cursor: pointer"
            :src="item.imageUrl"
            fit="cover"
          ></el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
