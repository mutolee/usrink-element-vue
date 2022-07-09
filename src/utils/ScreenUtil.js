// 全屏状态
// 默认false，表示不全屏
const screenFullState = {
    value: false
}

/**
 * 浏览器全屏模式，
 * 参考文档：https://blog.csdn.net/weixin_43840289/article/details/124171403
 */
export default () => {
    let element = document.documentElement
    if (screenFullState.value) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
    }

    // 标记浏览器当前的全屏状态
    screenFullState.value = !screenFullState.value
}
