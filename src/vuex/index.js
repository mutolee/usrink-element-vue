import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Vuex 分模块管理
 * 参考：https://blog.csdn.net/fu983531588/article/details/89522446
 */
let modules = {}

let requireModules = require.context("./modules", true, /\.js$/)

requireModules.keys().forEach(key => {
    let module = requireModules(key).default
    if (module && module.name && module.namespaced) {
        modules[module.name] = module
    }
})

let vuex = new Vuex.Store({
    // (缩写) 相当于 modules: modules
    modules
})

export default vuex
