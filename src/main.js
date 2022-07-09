import { createApp } from 'vue'
import store from "./vuex";
import router from './router'
import App from './App.vue'

import cpt from "./components";

const app = createApp(App)

// 组件管理
app.use(cpt)
// 状态管理
app.use(store)
// 路由管理
app.use(router)

app.mount('#app')

