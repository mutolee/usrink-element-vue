import axios from "../../config/httpConfig";
import localforage from "localforage";
import store from '../../vuex'
import router from '../../router'
import * as Constant from '../../config/constant'

// 动态添加的路由的完成状态。<br>
// 在路由守卫前置拦截中，会根据该状态判断要不要动态添加路由，<br>
// 如果为true，就不需要再重复动态添加路由。<br>
export const AddRouteEdState = {value: false}


/**
 * 动态添加路由
 */
export const dynaAddRoute = async () => {
    // 获取routes缓存信息
    let routes = await localforage.getItem("routes")
    if (routes == null) {
        let res = await axios.get('/static/res/routes.json')
        // 缓存routes信息，避免每次请求服务器
        routes = await localforage.setItem('routes', res.data.data)
    }

    // 动态路由程序处理
    routesProcess(routes)

    // 标记动态路由添加完成
    AddRouteEdState.value = true
}


/**
 * 验证路由权限
 * @param to 将要请求的路由
 */
export const isPermThisRoute = (to) => {
    let routes = store.getters[Constant.ROUTES_ROUTES_ARR_GET_KEY];
    return routes.find((route) => route.path === to.path)
}


// 整理routes信息，便于后续业务的使用（空间换时间）<br>
// 服务器返回的routes信息分为两部分：
//
// 1. 左侧菜单对应的路由部分
// 2. 其他零碎页面的路由部分
//
// Part1: 系统所有路由部分，把菜单部分的所有子路由和其他零碎页面的路由组合成一个一维的数组,
// 保存到Vuex中，便于在业务中使用，基础结构如下：
// ```
// [
//   {label:'', path:'', breadcrumb:[]},
//   {label:'', path:'', breadcrumb:[]}
//   ...
// ]
// ```
// label: 用于在Tab上显示使用。<br>
// path: 作为路由的标识，用于权限验证、定位Tab、定位左侧菜单选中。<br>
// breadcrumb: 面包屑，通过遍历路由，由路由的`label`组成的数组。<br>
//
// Part2: 菜单路由部分，把菜单部分在Vuex中单独存一份，用于左侧菜单的显示。
let routesProcess = (routes) => {
    // 系统所有路由
    let routesArr = []
    // 遍历菜单路由部分
    loopRoutes(routesArr, routes.menus)
    // 遍历其他零碎页面路由部分
    loopRoutes(routesArr, routes.pages)
    // 添加系统内置的静态路由部分到权限管理中
    // Why? 为什么要添加静态页面部分，因为在路由守卫拦截权限验证的时候，
    // 如果没有系统内置的静态路由部分，将导致没有权限访问而被重定向到`/404`
    routesArr.push({
        label: '404', path: '/404', breadcrumb: ['404页面']
    }, {
        label: 'Welcome', path: '/welcome', breadcrumb: ['欢迎页面']
    })

    // 保存`系统所有路由`到Vuex中
    store.commit(Constant.ROUTES_ROUTES_ARR_SET_KEY, routesArr)
    // 保存`菜单部分路由`到Vuex中
    store.commit(Constant.ROUTES_MENUS_SET_KEY, routes.menus)

    // 动态添加路由
    addRoute(routesArr)
}


// 递归遍历路由<br>
// 提取`系统所有路由`数据，及组装`breadcrumb`字段<br>
// `breadcrumb`按照父类label、子类label、孙子类label构成。
//
// @param routesArr 系统所有路由<br>
// @param routes 路由数据集<br>
// @param breadcrumb 为路由新添加的面包屑字段<br>
let loopRoutes = (routesArr, routes, breadcrumb) => {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].children && routes[i].children.length > 0) {
            if (breadcrumb) {
                // [].concat(breadcrumb) 会返回一个新的数组
                // 避免了引用的存在
                routes[i]['breadcrumb'] = [].concat(breadcrumb);
            } else {
                routes[i]['breadcrumb'] = [];
            }
            routes[i].breadcrumb.push(routes[i].label);
            // 子节点集合递归继续遍历
            loopRoutes(routesArr, routes[i].children, routes[i].breadcrumb)
        } else {
            if (routes[i].path) {
                if (breadcrumb) {
                    // [].concat(breadcrumb) 会返回一个新的数组
                    // 避免了引用的存在
                    routes[i]['breadcrumb'] = [].concat(breadcrumb);
                } else {
                    routes[i]['breadcrumb'] = [];
                }
                routes[i].breadcrumb.push(routes[i].label);
                routesArr.push(routes[i])
            }
        }
    }
}


// 动态添加路由
// router.addRoute() 挂载到路由系统中
// 关于路由懒加载，文档地址：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
let addRoute = (routesArr) => {
    // 导入所有vue视图模块
    const modules = import.meta.globEager("../../components/views/**/*.vue")
    for (let i = 0; i < routesArr.length; i++) {
        let route = routesArr[i]
        // 过滤掉内置的静态路由
        if (route.path === '/404' || route.path === '/welcome') {
            continue
        }
        // 添加子路由，子路由挂载在`gen`路由下
        router.addRoute('gen', {
            path: route.path, // 路由懒加载
            component: modules[`../../components/views${route.component}.vue`].default
        });
    }

}


