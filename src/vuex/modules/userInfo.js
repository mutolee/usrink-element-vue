import {USERINFO, USERINFO_USER_NICK_GET,USERINFO_USER_NICK_SET} from "../../config/constant";

// 用户信息管理模块
// initial state
const state = () => ({
    userNick: ''
})

// getters
const getters = {
    // 获取用户昵称
    [USERINFO_USER_NICK_GET] (state) {
        return state.userNick
    }
}

// mutations
const mutations = {
    // 修改用户昵称
    [USERINFO_USER_NICK_SET] (state, userNick) {
        state.userNick = userNick
    }
}

export default {
    name: USERINFO,
    namespaced: true,
    state,
    getters,
    mutations
}