/**
 * 获取当前时间，返回时间格式：yyyy-MM-dd HH:mm:ss
 */
const getCurrentDateTime = ()=> {
    const now = new Date();

    // 获取年、月、日、时、分、秒
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 拼接成格式化的时间字符串
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default {
    getCurrentDateTime
}