import { createApp } from 'vue'

import App from './App.vue'
import store from "./stores";
import router from './router'
import thirdPlugin from "@/plugins/3rdPlugin";
import globalCptRegPlugin from "@/plugins/globalCptRegPlugin";

const app = createApp(App)

// 第三方管理插件，所有的第三方的配置都在这里管理，不限于第三方的注册、配置等
app.use(thirdPlugin)
// 全局组件注册管理插件，所有的全局组件都应该在此注册
app.use(globalCptRegPlugin)
// 状态管理
app.use(store)
// 路由管理
app.use(router)

app.mount('#app')
