import http from "../utils/httpUtil";
import {BASE_URL, LOGIN_API} from "./constant";


/**
 * 用户登陆
 * @returns {Promise<unknown>}
 */
function userLogin(param) {
    return http.get({
        url: BASE_URL + LOGIN_API,
        data: {
            userName: param.userName,
            userPwd: param.userPwd,
            yzm: param.yzm
        }
    });
}


/**
 * 获取菜单列表
 * @returns {Promise<unknown>}
 */
function getLeftMenuList(param) {
    return http.get({
        url: BASE_URL + 'static/res/leftmenu.json',
        data: {
            ...param
        }
    });
}


export default {
    userLogin,
    getLeftMenuList
}


