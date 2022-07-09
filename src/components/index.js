// ElementPlus 组件
// 文档地址：https://element-plus.gitee.io/zh-CN/guide/installation.html
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ElementPlus Icon
// 文档地址：https://element-plus.gitee.io/zh-CN/component/icon.html
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 本地存储工具
// 文档地址：https://localforage.docschina.org/
import localforage from 'localforage'

// Http Config
// 文档地址：https://axios-http.com/zh/docs/intro
import axios from "../config/httpConfig"

// Cookie 工具
// 文档地址：https://github.com/js-cookie/js-cookie
import jsCookie from "js-cookie"

// 页面顶部进度条工具
// 文档地址：https://github.com/rstacruz/nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Echarts
// 文档地址：https://echarts.apache.org/handbook/zh/get-started/
import * as echarts from 'echarts';

/**
 * 组件管理，主要用于配置第三方组件
 * @param vue 当外界使用 vue.use() 会传入 `vue` 这个参数
 */
const cpt = (vue) => {

    // ElementPlus 注册配置
    vue.use(ElementPlus, {size: 'medium', zIndex: 3000})

    // ElementPlus Icon 注册配置
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        vue.component(key, component)
    }

    // Vue全局配置，配置本地存储工具 localforage，避免在每个组件中单独引用
    vue.config.globalProperties.$local = localforage

    // Vue全局配置，配置Http工具，避免在每个组件中单独引用
    vue.config.globalProperties.$http = axios

    // Vue全局配置，配置Cookie工具，避免在每个组件中单独引用
    vue.config.globalProperties.$cookie = jsCookie

    // Vue全局配置，配置echarts
    vue.config.globalProperties.$echarts = echarts

    // Nprogress工具配置
    // 不显示右上角的那个转圈进度
    NProgress.configure({showSpinner: false, speed: 600});

}


export default cpt