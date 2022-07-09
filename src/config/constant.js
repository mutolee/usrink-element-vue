// Vuex 常量配置，菜单折叠状态
export const COLLAPSE = "collapse"
export const COLLAPSE_STATE_GET = "getCollapseState"
export const COLLAPSE_STATE_SET = "setCollapseState"
export const COLLAPSE_STATE_GET_KEY = COLLAPSE + "/" + COLLAPSE_STATE_GET
export const COLLAPSE_STATE_SET_KEY = COLLAPSE + "/" + COLLAPSE_STATE_SET
// Vuex 常量配置，用户信息
export const USERINFO = "userInfo"
export const USERINFO_USER_NICK_GET = "getUserNick"
export const USERINFO_USER_NICK_SET = "setUserNick"
export const USERINFO_USER_NICK_GET_KEY = USERINFO + "/" + USERINFO_USER_NICK_GET
export const USERINFO_USER_NICK_SET_KEY = USERINFO + "/" + USERINFO_USER_NICK_SET
// Vuex 常量配置，菜单路由信息
export const ROUTES = "routes"
export const ROUTES_MENUS_GET = "getRoutesMenus"
export const ROUTES_MENUS_SET = "setRoutesMenus"
export const ROUTES_MENUS_GET_KEY = ROUTES + "/" + ROUTES_MENUS_GET
export const ROUTES_MENUS_SET_KEY = ROUTES + "/" + ROUTES_MENUS_SET
// Vuex 常量配置，Routes信息
export const ROUTES_ROUTES_ARR_GET = "getRoutesArr"
export const ROUTES_ROUTES_ARR_SET = "setRoutesArr"
export const ROUTES_ROUTES_ARR_GET_KEY = ROUTES + "/" + ROUTES_ROUTES_ARR_GET
export const ROUTES_ROUTES_ARR_SET_KEY = ROUTES + "/" + ROUTES_ROUTES_ARR_SET
// Vuex 常量配置，Nav路由信息
export const NAV = "nav"
export const NAV_NAV_INFO_GET = "getNavInfo"
export const NAV_NAV_INFO_SET = "setNavInfo"
export const NAV_NAV_INFO_GET_KEY = NAV + "/" + NAV_NAV_INFO_GET
export const NAV_NAV_INFO_SET_KEY = NAV + "/" + NAV_NAV_INFO_SET
// Vuex 常量配置，includes，可以被缓存的页面的名称
export const NAV_INCLUDES_GET = 'getIncludes'
export const NAV_INCLUDES_SET = 'setIncludes'
export const NAV_INCLUDES_GET_KEY = NAV + "/" + NAV_INCLUDES_GET
export const NAV_INCLUDES_SET_KEY = NAV + "/" + NAV_INCLUDES_SET


// Http API 常量配置
export const BASE_URL = "https://mutolee.github.io/vel-admin-web"
export const BASE_URL_DEV = "http://localhost:3000"

// Http 接口状态
export const STATUS_CODE = {
    SUCCESS: 200,
    WARNING: 201,
    NO_MORE: 205,
    ERROR: 300,
    NO_LOGIN: 301,
    NO_PERM: 302
}

