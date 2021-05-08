import store from "../vuex";
import {LEFT_MENU_ARR} from "../config/constant";
import CryptoJS from "crypto-js";

/**
 * 根据 path 查询菜单对象
 */
function getMenuByPath(path) {
    let menuArr = store.getters[LEFT_MENU_ARR];
    return menuArr.find((menu) => {
        return menu.path === path
    })
}

/**
 * 浏览器页面全屏
 * 参考：https://blog.csdn.net/u013240519/article/details/84035505
 */
function fullScreen() {
    let isFull = !!(document.webkitIsFullScreen || document.mozFullScreen ||
        document.msFullscreenElement || document.fullscreenElement
    ); // !document.webkitIsFullScreen都为true。因此用!!
    if (isFull === false) {
        let element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}


/**
 * 字符串 md5 加密
 * @param con
 * @returns {*}
 */
function md5(con) {
    return CryptoJS.MD5(con).toString();
}


/**
 * 生成从minNum到maxNum的随机数
 * @param minNum
 * @param maxNum
 * @returns {number}
 */
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}


export default {
    getMenuByPath,
    fullScreen,
    md5,
    randomNum
}
