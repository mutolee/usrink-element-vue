import VelFrameMain from "../components/aframe/vel-frame-main.vue"
import VelFrameLogin from "../components/aframe/vel-frame-login.vue"
import VelFrameWelcome from "../components/aframe/vel-frame-welcome.vue"
import VelFrameNotfound from "../components/aframe/vel-frame-notfound.vue"
import {createRouter, createWebHashHistory} from 'vue-router'
import {isAuthenticated} from './modules/auth'
import * as Routes from './modules/routes'
import NProgress from "nprogress"


// 定义路由
// 每个路由都需要映射到一个组件
const routes = [
    {
        name: 'gen',
        path: '/',
        component: VelFrameMain,
        redirect: '/welcome',
        children: [
            {path: '/welcome', component: VelFrameWelcome},
            {path: '/404', component: VelFrameNotfound}
        ]
    },
    // login 页面
    {path: '/login', component: VelFrameLogin},
    // 404 Notfound
    // 理论上，这里应该永远匹配不到，因为路由守卫前置拦截会把将要访问的路由重定向的对应的路由上
    // 比如访问了`/aaa`一个不存在的路由，
    // 前置守卫会判断用户是否已经授权登录，如果没有会被重定向到`/login`
    // 如果已经授权登录了，但该路由不在用户的权限内，会被重定向到`/404`
    {path: '/:pathMatch(.*)*', component: VelFrameNotfound}
]


/**
 * 创建一个路由实例
 * <br/>
 * Router文档地址：https://router.vuejs.org/zh/guide/advanced/composition-api.html
 */
const router = createRouter({
    // 我们在这里使用 hash 模式，它在URL后面使用了一个哈希字符（#），#后面的数据不会发往服务器
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


// 配置Router实例全局拦截器
// 全局前置路由守卫，每一次路由跳转前都进入这个 beforeEach 函数
router.beforeEach(async (to, from) => {

    // 开启页面进度条
    NProgress.start()

    // 获取授权状态
    let isAuth = isAuthenticated()

    // 未授权，并且请求地址不是`/login`，那么跳转到`/login`
    if (!isAuth && to.path !== '/login') {
        return '/login'
    }
    // 已授权，但请求地址是`/login`，那么跳转到`/`
    if (isAuth && to.path === '/login') {
        return '/'
    }

    // 如果已经授过权，开始动态路由加载
    // 及页面权限验证
    if (isAuth) {
        // 验证动态路由是否添加完成，如果没有，需要先同步添加路由
        if (!Routes.AddRouteEdState.value) {
            // 动态添加路由
            await Routes.dynaAddRoute()

            // 这里需要解释一下，按照官方的说法，如果在路由守卫中动态添加的路由与`to`相匹配,
            // 实际上导致与我们试图访问的位置不同,
            // 通过返回新的位置来触发重定向
            // 文档地址：https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html#在导航守卫中添加路由
            return to.fullPath
        }

        // 验证用户当前请求是否拥有路由的权限，如果没有，页面跳转到`/404`
        if (!Routes.isPermThisRoute(to)) {
            return '/404'
        }
    }
})


// 配置Router实例全局拦截器
// 全局后置路由守卫，每一次路由跳转后都进入这个 afterEach 函数
router.afterEach(() => {

    // 页面 loading 进度条结束
    NProgress.done();
})


export default router

