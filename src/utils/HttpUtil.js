import axios from 'axios'
import loginUtil from '@/utils/LoginUtil'
import {ElMessage} from "element-plus";

const HTTP_BASE_URL = "https://mutolee.github.io/usrink-element-vue"
const HTTP_BASE_URL_DEV = "http://localhost:5173"

// Http 接口状态
const RES_STATUS_CODE = {
    SUCCESS: 200,
    WARNING: 201,
    NO_MORE: 202,
    ERROR: 300,
    NO_LOGIN: 301,
    NO_PERM: 302
}

/**
 * 创建一个Axios实例，应用中的请求基于该实例配置
 * <p>
 * 文档地址：https://axios-http.com/zh/docs/intro
 */
const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? HTTP_BASE_URL : HTTP_BASE_URL_DEV,
    // 请求超时时间
    timeout: 10 * 1000
})

// 添加请求拦截器
instance.interceptors.request.use((request) => {
    // 在发送请求之前做些什么
    if (request.url.indexOf("/data/login.json") === -1) {
        let token = loginUtil.isAuthenticated();
        if (token) {
            // 做点什么，比如在请求中加点额外的参数
            request.headers['Authorization'] = `Bearer ${token}`;
        } else {
            loginUtil.logout()
        }
    }
    return request;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let res = response.data;
    if (res.statusCode === RES_STATUS_CODE.NO_LOGIN) {
        // 服务器返回未登陆，跳转登录页面
        loginUtil.logout()
    } else if (res.statusCode === RES_STATUS_CODE.NO_PERM) {
        ElMessage.error("没有权限，请联系管理员！");
    }
    return response;
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage.error("操作失败，请刷新浏览器再次尝试，或联系管理员！");
    return Promise.reject(error);
});

export default instance