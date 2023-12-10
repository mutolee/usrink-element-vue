/**
 * 浏览器全屏模式
 * @param cb 回调函数，返回当前是否为全屏状态
 */
const screenFull = (cb) => {
    let isFull = document.fullscreenElement
        || document.mozFullScreenElement
        || document.webkitFullscreenElement
        || document.msFullscreenElement;
    let element = document.documentElement
    if (isFull) {
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
