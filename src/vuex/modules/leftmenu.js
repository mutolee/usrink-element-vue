import {ARR, IS_ROUTER_LOADED, MENUS} from '../../config/constant'

/**
 * 左侧菜单状态管理
 */
export default {
    name: "leftmenu",
    namespaced: true,
    state: {
        isRouterLoaded: false,      // 菜单路由是否加载完成
        menus: [],                  // 菜单列表，带子菜单的数据结构
        arr: []                     // 菜单列表，由 menus 转换的一维数组，便于查找
    },
    getters: {
        [IS_ROUTER_LOADED](state) {
            return state.isRouterLoaded
        },
        [MENUS](state) {
            return state.menus
        },
        [ARR](state) {
            return state.arr
        }
    },
    mutations: {
        [IS_ROUTER_LOADED](state, flag) {
            state.isRouterLoaded = flag
        },
        [MENUS](state, obj) {
            state.menus = obj
        },
        [ARR](state, arr) {
            state.arr = arr
        }
    }
}
