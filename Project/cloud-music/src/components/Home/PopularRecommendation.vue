<script setup>
import SongCard from '@comp/Home/SongCard.vue'
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'

const { proxy } = getCurrentInstance()
const recommendList = reactive([])
let loading = ref(false)
// 热门推荐歌单
const playlistInfo = reactive({
  playlistTags: [],
  playlistList: [],
  playlistIndex: 0,
  playlistParams: { limit: 8, offset: 0 },
  playlistCount: 8,
  playlistLoading: true,
})

// 获取热门推荐歌单标签
const getHotTags = async () => {
  const { data: res } = await proxy.$http.hotList()
  if (res.code !== 200) {
    return proxy.$msg.error('热门推荐歌单标签数据请求失败')
  }
  playlistInfo['playlistTags'] = res.tags.splice(0, 8)
}
// 获取推荐列表
const getRecommend = async () => {
  try {
    const { data: res } = await proxy.$http.getBanner()
    if (res.code !== 200) {
      return proxy.$msg.error(res.msg)
    }
    recommendList.value = res.banners
    loading.value = true
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getHotTags()
  getRecommend()
  console.log('recommendList', recommendList)
})
</script>

<template>
  <div>
    <el-card shadow="never" class="card-style">
      <template #header>
        <div class="card-header">
          <div>
            <span>热门推荐</span>
          </div>
          <el-button type="text">更多</el-button>
        </div>
      </template>
      <el-row>
        <el-col :span="6" v-for="item in 8">
          <SongCard />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
