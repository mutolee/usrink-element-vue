import {COLLAPSE, COLLAPSE_STATE_GET, COLLAPSE_STATE_SET} from "../../config/constant";

// 左侧大菜单的折叠状态管理模块
// initial state
const state = () => ({
    // 默认不折叠
    collapseState: false
})

// getters
const getters = {
    // 获取折叠状态
    [COLLAPSE_STATE_GET](state) {
        return state.collapseState
    }
}

// mutations
const mutations = {
    // 设置折叠状态
    [COLLAPSE_STATE_SET](state, collapse) {
        state.collapseState = collapse
    }
}

export default {
    name: COLLAPSE,
    namespaced: true,
    state,
    getters,
    mutations
}