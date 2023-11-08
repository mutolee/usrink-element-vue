// webstorm.webpack.config.js (这个文件仅用于WebStorm的配置)
// 配置步骤：
// 1. 打开你的项目设置：File > Settings (Windows/Linux) 或 WebStorm > Preferences (macOS)。
// 2. 在设置中，去到 Languages & Frameworks > JavaScript > Webpack。
// 3. 指定Webpack的配置文件：点击...按钮，然后找到并选择你的 webstorm.webpack.config.js 配置文件。
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            // 识别@别名并且正确地解析这样的路径，不再报警告。
            '@': path.resolve(__dirname, 'src')
        }
    }
};