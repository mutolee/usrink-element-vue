import * as Constant from "../../config/constant";
import {NAV_INCLUDES_GET} from "../../config/constant";

// 页面跳转，导航状态
// 记录当前导航的路由信息
// initial state
const state = () => ({
    // 当前导航的路由信息，
    // 从`系统所有路由`中获取的当前导航的路由信息
    navInfo: {},
    // 可以被缓存的页面的名称
    includes: []
})

// getters
const getters = {
    // 获取当前导航的路由信息
    [Constant.NAV_NAV_INFO_GET](state) {
        return state.navInfo
    },
    // 获取可以被缓存的页面的名称
    [Constant.NAV_INCLUDES_GET](state) {
        return state.includes
    }
}

// mutations
const mutations = {
    // 设置当前导航的路由信息
    [Constant.NAV_NAV_INFO_SET](state, navInfo) {
        state.navInfo = navInfo
    },
    // 设置可以被缓存的页面的名称
    [Constant.NAV_INCLUDES_SET](state, includes) {
        state.includes = includes
    }
}

export default {
    name: Constant.NAV,
    namespaced: true,
    state,
    getters,
    mutations
}
