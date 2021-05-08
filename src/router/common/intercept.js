import NProgress from 'nprogress'
import {isLogin, isPathInMenus, isRouterLoaded, loadRouter} from "./permManager"
import {GEN_ROUTER, LOGIN_ROUTER, NOT_FOUND_ROUTER, STATIC_ROUTER} from '../../config/constant'


export default (router) => {

    /**
     * 全局路由拦截：
     * 1. 拦截登陆状态，如果未登陆，跳转登陆页面；
     * 2. 拦截请求地址，如果动态路由组件未添加到路由系统，先添加，然后再跳转；
     * 3. 请求不属于用户菜单的路由时候，在二级路由视图展示 404 页面。
     */
    router.beforeEach((to, from, next) => {

        NProgress.start();  // 页面 loading 进度条开始

        if (isLogin()) {
            if (to.path === LOGIN_ROUTER) {
                next(GEN_ROUTER)
                NProgress.done();  // 页面 loading 进度条结束
            } else {
                if (isRouterLoaded()) {
                    if (isPathInMenus(to.path) || STATIC_ROUTER.indexOf(to.path) !== -1) {
                        next()
                    } else {
                        next(NOT_FOUND_ROUTER)
                        NProgress.done();  // 页面 loading 进度条结束
                    }
                } else {
                    loadRouter().then(() => {
                        next(to.path);
                    })
                }
            }
        } else {
            if (to.path === LOGIN_ROUTER) {
                next()
            } else {
                next(LOGIN_ROUTER)
                NProgress.done();  // 页面 loading 进度条结束
            }
        }
    })


    router.afterEach(() => {
        NProgress.done();  // 页面 loading 进度条结束
    })
}
