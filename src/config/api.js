import http from "../utils/httpUtil";
import {LOGIN_API} from "./constant";


/**
 * 用户登陆
 * @returns {Promise<unknown>}
 */
function userLogin(param) {
    return http.get({
        url: LOGIN_API,
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
function getLeftMenuList() {
    return http.get({
        url: "static/res/leftmenu.json"
    });
}


export default {
    userLogin,
    getLeftMenuList
}


