import * as getApi from '@api/http'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties['$http'] = getApi
app.config.globalProperties['$msg'] = ElMessage

app.use(createPinia())
app.use(router)

app.mount('#app')
