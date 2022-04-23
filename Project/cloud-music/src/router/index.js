import Home from '@view/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/discover',
      component: Home,
      children: [
        {
          // 歌单
          path: 'playlist',
          name: 'playlist',
          component: () => import('@view/Song.vue'),
        },
      ],
    },
    {
      path: '/song',
      name: 'song',
      component: () => import('@view/Song.vue'),
    },
  ],
})

export default router
