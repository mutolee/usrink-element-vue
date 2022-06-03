import Vue from 'vue';
import VueRouter from 'vue-router';
import vel_main from "../components/aframe/vel_main";
import vel_login from "../components/aframe/vel_login";
import welcome from "../components/aframe/vel_welcome";
import notfound from "../components/aframe/vel_notfound";
import intercept from "./common/intercept"
import {GEN_ROUTER, GEN_ROUTER_NAME, LOGIN_ROUTER, NOT_FOUND_ROUTER, WELCOME_ROUTER} from "@/config/constant"

Vue.use(VueRouter)

/**
 * 解决路由重复访问问题
 * 参考：https://www.cnblogs.com/zwd666/p/13411336.html
 */
// 1. 获取原型对象上的push函数
let prototypePush = VueRouter.prototype.push
// 2. 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return prototypePush.call(this, location).catch(err => err)
}


// 1. 定义路由，每个路由应该映射一个组件
let routes = [
    {
        path: GEN_ROUTER,                      // 根路由
        name: GEN_ROUTER_NAME,
        component: vel_main,
        redirect: WELCOME_ROUTER,              // 默认`/` 重定向到欢迎页面
        children: [                            // 动态配置的路由都将挂载到根路由(`/`)的 children 下
            {
                path: WELCOME_ROUTER,
                component: welcome
            },
            {
                path: NOT_FOUND_ROUTER,
                component: notfound            // 请求不属于用户菜单的路由时候，在二级路由视图展示 404 页面
            }
        ]
    },
    // 未登陆跳转页面
    {path: LOGIN_ROUTER, component: vel_login},
    // 匹配不到任何路由组件时候，在一级路由视图展示 404 页面
    {path: '*', component: notfound}
]


// 2. 创建 router 实例，然后传 `routes` 配置
let router = new VueRouter({
    // (缩写) 相当于 routes: routes
    routes
})


// 路由拦截器
intercept(router)


export default router
