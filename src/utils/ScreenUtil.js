/**
 * 浏览器全屏模式
 * <p>
 * 参考文档：https://blog.csdn.net/weixin_43840289/article/details/124171403
 * @param isFull 是否全屏,true为全屏，false为非全屏
 * @param cb 回调函数
 */
const screenFull = (isFull, cb) => {
    let element = document.documentElement
    if (!isFull) {
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

    if (typeof cb === 'function') {
        cb(isFull);
    }
}

export default {screenFull}
