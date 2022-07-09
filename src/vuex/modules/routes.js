import * as Constant from "../../config/constant";

// routes路由信息管理
// initial state
const state = () => ({
    // 菜单路由列表
    menus: [],
    // 系统所有路由<br>
    // 把菜单部分的所有子路由和其他零碎页面的路由组合成一个一维的数组，
    // 保存到Vuex中，便于在业务中使用，结构如下：
    // ```
    // [
    //   {label:'', path:'', breadcrumb:[]},
    //   {label:'', path:'', breadcrumb:[]}
    //   ...
    // ]
    // ```
    routes: []
})

// getters
const getters = {
    [Constant.ROUTES_MENUS_GET](state) {
        // 获取菜单路由列表
        return state.menus
    },
    [Constant.ROUTES_ROUTES_ARR_GET](state) {
        // 获取系统所有路由
        return state.routes
    }
}

// mutations
const mutations = {
    [Constant.ROUTES_MENUS_SET](state, menus) {
        // 保存菜单路由列表
        state.menus = menus
    },
    [Constant.ROUTES_ROUTES_ARR_SET](state, routes) {
        // 保存系统所有路由
        state.routes = routes
    }
}

export default {
    name: Constant.ROUTES, namespaced: true, state, getters, mutations
}