import jsCookie from "js-cookie";
import localforage from "localforage";
import {AddRouteEdState} from "./routes";
import router from '../../router'


/**
 * 缓存用户信息
 * @param data 用户登录，服务器返回的用户信息
 */
export const cacheUserInfo = async (data) => {
    // 缓存Token
    jsCookie.set("token", data.token, {expires: 1})
    // 缓存用户信息
    await localforage.setItem("userInfo", data)
}


/**
 * 验证用户是否已经授权成功
 * 是否授权的标准是本地是否存有用户的Token信息
 * @returns {*}
 */
export const isAuthenticated = () => {
    return jsCookie.get('token')
}


/**
 * 用户退出登录，处理一些清理工作，路由跳转至登录页面
 */
export const logout = () => {
    // 清除用户Token
    jsCookie.remove("token")
    // 清除本地所有用户信息
    localforage.clear()
    // 清除动态添加的路由的完成状态
    AddRouteEdState.value = false
    // 跳转登录页
    router.push("/login")
}

