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


    /**
     * 全局混入，将用于每个新创建的 vue 实例
     */
    vue.mixin({

        // 混入到每个组件中
        data() {
            return {
                refresh: true // 刷新信号标识
            }
        },

        // 当组件在 <keep-alive> 内被切换，
        // 它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
        activated() {
            // 对keep-alive 缓存的组件进行管理
            if (this.$vnode.data.keepAlive) {
                this.$rkm.add(this.$route.path, this)
            }
        }
    })

    // Vue 原型上配置一个 （路由与 keep-alive） 缓存的映射对象
    vue.prototype.$rkm = new RouterKeepAliveMapping()

}

/**
 * （路由与 keep-alive） 缓存的映射对象
 *  提供添加映射及销毁缓存的组件
 */
class RouterKeepAliveMapping {
    constructor() {
        this.cacheMap = {}
    }

    add(routePath, vm) {
        this.cacheMap[routePath] = vm
    }

    destroy(routePath) {
        if (this.cacheMap[routePath]) {
            this.cacheMap[routePath].$destroy()
        }
    }
}
