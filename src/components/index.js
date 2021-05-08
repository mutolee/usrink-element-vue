// element-ui 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 顶部进度条插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// MD 编辑器组件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 自定义组件
import vel_leftmenu from "./aframe/fragment/vel_leftmenu";
import vel_header from "./aframe/fragment/vel_header";
import vel_navbar from "./aframe/fragment/vel_navbar";
import vel_page from "./aframe/fragment/vel_page";


/**
 * 通用组件管理
 * @param vue 当外界使用 Vue.use() 会传入 `vue` 这个参数
 */
export default (vue) => {

    // 配置页面 loading 进度条
    NProgress.configure({showSpinner: false})

    // element-ui 注册配置
    vue.use(ElementUI, {size: 'medium'})

    // md 编辑器配置
    vue.use(mavonEditor)


    /**
     * 全局通用组件注册
     * 全局注册的组件，在使用时候不需要单独引入，可直接使用
     */
    vue.component("vel-leftmenu", vel_leftmenu);
    vue.component("vel-header", vel_header);
    vue.component("vel-navbar", vel_navbar);
    vue.component("vel-page", vel_page);

}
