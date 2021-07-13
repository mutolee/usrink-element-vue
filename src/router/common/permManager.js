import store from "../../vuex";
import cookieUtil from "../../utils/cookieUtil";
import commonUtil from "../../utils/commonUtil";
import api from "../../config/api";
import router from "../index";
import {
    GEN_ROUTER_NAME,
    LEFT_MENU_ARR,
    LEFT_MENU_IS_ROUTER_LOADED,
    LEFT_MENU_MENUS,
    LOGIN_ROUTER,
    NOT_FOUND_ROUTER,
    NOT_FOUND_TIT,
    TOKEN,
    USER_NAME,
    WELCOME_ROUTER,
    WELCOME_TIT
} from "../../config/constant";


/**
 * 登陆状态验证
 * @returns {""|null|string}
 */
export function isLogin() {
    return cookieUtil.get(USER_NAME) && cookieUtil.get(TOKEN)
}


/**
 * 退出登录，清空本地用户信息，路由跳转到登陆页面
 */
export function logout() {
    cookieUtil.del(USER_NAME)
    cookieUtil.del(TOKEN)
    router.push(LOGIN_ROUTER)
}

/**
 * 验证动态路由组件是否已经添加至路由系统
 * @returns {*}
 */
export function isRouterLoaded() {
    return store.getters[LEFT_MENU_IS_ROUTER_LOADED];
}

/**
 * 验证请求地址是否在用户菜单中
 * @param path
 * @returns {*}
 */
export function isPathInMenus(path) {
    return commonUtil.getMenuByPath(path)
}

/**
 * 动态加载用户菜单路由组件
 * 1. 请求用户菜单
 * 2. 保存用户菜单，更新菜单视图
 * 3. 动态装载菜单路由组件
 * 4. 标记动态菜单路由组件装载完成
 */
export function loadRouter() {
    return new Promise((resolve, reject) => {
        // 请求用户菜单
        api.getLeftMenuList().then((res) => {
            // 保存用户菜单
            buildUserMenuData(res.data)
            // 动态装载菜单路由组件
            createRouters()
            // 标记菜单路由组件装载完成
            store.commit(LEFT_MENU_IS_ROUTER_LOADED, true)
            resolve('SUCCESS')
        }).catch((err) => {
            reject(err)
        })
    })
}

/**
 * 动态装载菜单路由组件
 */
function createRouters() {
    let menuArr = store.getters[LEFT_MENU_ARR];
    menuArr.forEach((el) => {
        // 注册子路由，路由组件懒加载，当使用时候才去加载
        router.addRoute(GEN_ROUTER_NAME, {
            path: el.path,
            // Vue 异步组件
            // 参考：https://cn.vuejs.org/v2/guide/components-dynamic-async.html
            // 这里约定 @/components/views 为页面组件的根目录
            component: resolve => require([`@/components/views${el.component}.vue`], resolve)
        });
    })
}

/**
 * 构建用户菜单数据结构
 */
function buildUserMenuData(menus) {
    store.commit(LEFT_MENU_MENUS, menus)
    let loopVal = []
    loopMenus(loopVal, menus)
    addStaticMenu(loopVal)
    store.commit(LEFT_MENU_ARR, loopVal)
}

/**
 * 递归查询多级菜单，构建菜单一维数组
 *
 * @param loopVal 用于接收数据结果
 * @param menus
 * @param breadcrumb 面包屑，数组结构，按 [父类，子类，孙子类...] 排列
 * @returns {*}
 */
function loopMenus(loopVal, menus, breadcrumb) {
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].children && menus[i].children.length > 0) {
            menus[i]['breadcrumb'] = [];
            menus[i].breadcrumb.push(menus[i].label);
            loopMenus(loopVal, menus[i].children, menus[i].breadcrumb)
        } else {
            if (menus[i].path) {
                if (breadcrumb) {
                    menus[i]['breadcrumb'] = [].concat(breadcrumb)  // [].concat() 避免引用
                    menus[i].breadcrumb.push(menus[i].label);
                }
                loopVal.push(menus[i])
            }
        }
    }
}

/**
 *
 * 静态菜单添加到菜单列表一维数组中
 *
 * Why?
 * 因为菜单列表是按照用户的权限读取的，用户权限菜单中并没有我们框架中的静态页面，
 * 防止访问到静态页面时候，面包屑导航和 Navbar 无法适配。
 */
function addStaticMenu(loopVal) {
    loopVal.push({
        label: NOT_FOUND_TIT,
        path: NOT_FOUND_ROUTER,
        breadcrumb: [NOT_FOUND_TIT]
    }, {
        label: WELCOME_TIT,
        path: WELCOME_ROUTER,
        breadcrumb: [WELCOME_TIT]
    })
}


