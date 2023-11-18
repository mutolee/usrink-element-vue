// Cookie 工具
// 文档地址：https://github.com/js-cookie/js-cookie
import jsCookie from "js-cookie"
import localforage from "localforage";
import {useRoutesStore} from "@/stores/data/routesStore";

/**
 * 验证用户是否已经授权成功,
 * <p>
 * 是否授权的标准是本地是否存有用户的Token信息
 */
const isAuthenticated = () => {
    return jsCookie.get('token')
}

/**
 * 用户退出登录，处理一些清理工作，路由跳转至登录页面
 */
const logout = async () => {

    // 清除用户Token
    jsCookie.remove("token")
    await localforage.removeItem("userInfo")
    await localforage.removeItem("routes")

    // 清空 Store 中菜单信息
    let routesStore = useRoutesStore()
    routesStore.menus = []
    routesStore.routes = []

    // 设置路由未授权状态
    routesStore.hasLoadRoutes = false
}

/**
 * 缓存用户信息
 * @param data 用户登录，服务器返回的用户信息
 */
const cacheUserInfo = async (data) => {
    // 缓存Token
    jsCookie.set("token", data.token, {expires: 1})
    // 缓存用户信息
    await localforage.setItem("userInfo", data)
}

export default {
    isAuthenticated,
    logout,
    cacheUserInfo
}