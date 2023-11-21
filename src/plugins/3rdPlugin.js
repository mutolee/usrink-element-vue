// ElementPlus 组件
// 文档地址：https://element-plus.gitee.io/zh-CN/guide/installation.html
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ElementPlus Icon
// 文档地址：https://element-plus.gitee.io/zh-CN/component/icon.html
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 页面顶部进度条工具
// 文档地址：https://github.com/rstacruz/nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// VMdEditor
// 文档地址：http://ckang1229.gitee.io/vue-markdown-editor/zh/examples/base-editor.html
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';



/**
 * 第三方管理插件，所有的第三方的配置都在这里管理，不限于第三方的注册、配置等
 * @param app 根实例对象
 */
const thirdPlugin = (app) => {
    // ElementPlus 插件配置
    app.use(ElementPlus, {size: 'medium', zIndex: 3000})

    // ElementPlus Icon 组件注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }

    // Nprogress工具配置
    // 配置不显示右上角的那个转圈进度
    NProgress.configure({showSpinner: false, speed: 600});

    // 配置 VMdEditor
    VMdEditor.use(githubTheme, {
        Hljs: hljs,
    });

    // 配置 VMdEditor 插件
    app.use(VMdEditor)


}

export default thirdPlugin