// Cookie 工具
// 文档地址：https://github.com/js-cookie/js-cookie
import jsCookie from "js-cookie"
import localforage from "localforage";

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
const logout = () => {
    // 清除用户Token
    jsCookie.remove("token")
    localforage.removeItem("userInfo")
    localforage.removeItem("routes")
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