import {createStore} from 'vuex'

// 模块化管理Vue中的状态
let modules = {}

// 加载各个状态模块
// Webpack构建下，使用`require.context`
// let modulesFiles = require.context("./modules", true, /\.js$/)
// Vite构建工具下使用`import.meta.globEager`
let modulesFiles = import.meta.globEager('./modules/*.js')

// 遍历所有模块进行装配
for (let path in modulesFiles) {
    let module = modulesFiles[path].default
    modules[module.name] = module
}


/**
 * 创建一个Vuex实例
 * <br/>
 * Vuex文档地址：https://vuex.vuejs.org/zh/guide/composition-api.html
 */
const store = createStore({
    modules // 简写，相当于`modules:modules`
})


export default store

