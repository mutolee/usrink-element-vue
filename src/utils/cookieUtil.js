/**
 * 添加 cookie
 * @param key
 * @param value
 * @param expiredays 有效天数
 */
function set(key, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = key + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

/**
 * 删除 cookie
 * @param key
 */
function del(key) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = get(key);
    if (cval != null) {
        document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

/**
 * 查询 cookie
 * @param key
 * @returns {string|null}
 */
function get(key) {
    var arr,
        reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return arr[2];
    } else {
        return null;
    }
}


export default {
    set, del, get
}
