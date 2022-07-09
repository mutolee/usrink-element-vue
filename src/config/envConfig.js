import {BASE_URL, BASE_URL_DEV} from "./constant";

/**
 * 根据环境获取Http请求所需要的baseUrl
 * @returns {string}
 */
const baseUrl = ()=>{
    return process.env.NODE_ENV === 'production' ? BASE_URL : BASE_URL_DEV
}

export default {
    baseUrl
}