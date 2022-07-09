import axios from 'axios'
import {isAuthenticated, logout} from "../router/modules/auth";
import envConfig from "./envConfig";
import {ElMessage} from "element-plus";
import {STATUS_CODE} from "./constant";

/**
 * 创建一个Axios实例，应用中的请求基于该实例配置
 * <br/>
 * 文档地址：https://axios-http.com/zh/docs/intro
 */
const service = axios.create({
    // 配置当前实例的BaseURL
    baseURL: envConfig.baseUrl(), // 配置当前实例的超时时间
    timeout: 10 * 1000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    if (config.url.indexOf("/static/res/login.json") === -1) {
        if (isAuthenticated()) {
            // 做点什么，比如在请求中加点额外的参数
        } else {
            logout()
        }
    }
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let res = response.data;
    if (res.statusCode === STATUS_CODE.NO_LOGIN) {
        // 服务器返回未登陆，跳转登录页面
        logout()
    } else if (res.statusCode === STATUS_CODE.NO_PERM) {
        ElMessage.error("没有权限，请联系管理员！");
    }
    return response;
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default service





