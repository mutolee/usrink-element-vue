import VelFrameMain from '@/components/aframe/vel-frame-main.vue'
import VelFrameLogin from "@/components/aframe/vel-frame-login.vue"
import VelFrameWelcome from "@/components/aframe/vel-frame-welcome.vue"
import VelFrameNotfound from "@/components/aframe/vel-frame-notfound.vue"
import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import loginUtil from "@/utils/LoginUtil";
// 本地存储工具
// 文档地址：https://localforage.docschina.org/
import localforage from 'localforage'
import httpUtil from "@/utils/HttpUtil";
import {useRoutesStore} from "@/stores/data/routesStore";

// 定义路由
// 每个路由都需要映射到一个组件
const routes = [
    {
        name: 'gen',
        path: '/',
        component: VelFrameMain,
        redirect: '/welcome',
        children: [
            // 默认的两个静态页面，不需要动态添加
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
router.beforeEach(async (to) => {

    // 开启页面进度条
    NProgress.start()

    // 获取授权状态
    let isAuth = loginUtil.isAuthenticated()

    // 未授权，并且请求地址不是`/login`，那么跳转到`/login`
    if (!isAuth && to.path !== '/login') {
        return '/login'
    }
    // 已授权，但请求地址是`/login`，那么跳转到`/`
    if (isAuth && to.path === '/login') {
        return '/'
    }

    // 如果已经授过权，开始动态路由加载
    if (isAuth) {
        // 获取路由状态仓库
        let routesStore = useRoutesStore();
        // 验证动态路由是否添加完成，如果没有，需要先同步添加路由
        if (!routesStore.hasLoadRoutes) {
            // 动态添加路由
            let result = await dynaAddRoute()

            if (result) {
                // 这里需要解释一下，
                // 如果你决定在导航守卫内部添加或删除路由，你不应该调用 router.replace()，而是通过 to.fullPath 返回新的位置来触发重定向，
                // 文档地址：https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html#在导航守卫中添加路由
                return to.fullPath
            }

            // 返回false，中断当前请求
            return false
        }

        // 验证用户当前请求是否拥有路由的权限，如果没有，页面跳转到`/404`
        if (!isPermThisRoute(to)) {
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

/**
 * 动态添加路由
 *
 * @return true: 动态添加路由成功，false: 动态添加路由失败
 */
const dynaAddRoute = async () => {
    // 获取routes缓存信息
    let routes = await localforage.getItem("routes")
    if (routes == null) {
        await httpUtil.get('/data/routes.json').then(async res => {
            // 缓存routes信息，避免每次请求服务器
            routes = await localforage.setItem('routes', res.data.data)
        }).catch(err => {
            console.error(err)
        })
    }

    if (routes != null) {
        // 动态路由程序处理
        routesProcess(routes)
        return true;
    }

    return false;
}

/**
 * 整理routes信息，便于后续业务的使用
 * <p>
 * 构建的数据结构：<br>
 * <pre>
 * [
 *    {label:'', path:'', breadcrumb:[]},
 *    {label:'', path:'', breadcrumb:[]}
 *    ...
 * ]
 * </pre>
 * 构建的数据结构描述：
 * <p>
 * label: 用于在Tab上显示使用。<br>
 * path: 作为路由的标识，用于权限验证、定位Tab、定位左侧菜单选中。<br>
 * breadcrumb: 面包屑，通过遍历路由，由路由的`label`组成的数组。<br>
 *
 * @param routes 动态路由数据信息
 */
const routesProcess = (routes) => {
    // 系统所有路由
    let routesAll = []
    // 遍历菜单路由部分
    loopRoutes(routesAll, routes.menus)
    // 遍历其他零碎页面路由部分
    loopRoutes(routesAll, routes.pages)

    // 添加系统内置的静态路由部分到系统所有路由
    // Why? 为什么要添加静态页面部分，如果不添加，用户就没有权限访问/404,/welcome的权限
    routesAll.push({
        label: '404', path: '/404', breadcrumb: ['404页面']
    }, {
        label: 'Welcome', path: '/welcome', breadcrumb: ['欢迎页面']
    })

    // 获取路由状态仓库
    let routesStore = useRoutesStore();
    // 保存`系统所有路由`到Stores中
    routesStore.routes = routesAll
    // 保存`菜单部分路由`到Stores中
    routesStore.menus = routes.menus

    // 动态添加路由
    addRoute(routesAll)

    // 标记动态路由添加完成
    routesStore.hasLoadRoutes = true
}


/**
 * 递归遍历路由
 * <p>
 * 提取`系统所有路由`数据，及组装`breadcrumb`字段，
 * `breadcrumb`按照父类label、子类label、孙子类label构成。
 *
 * @param routesAll 系统所有路由
 * @param routes 路由数据集
 * @param breadcrumb 为路由新添加的面包屑字段
 */
const loopRoutes = (routesAll, routes, breadcrumb) => {
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
            loopRoutes(routesAll, routes[i].children, routes[i].breadcrumb)
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
                routesAll.push(routes[i])
            }
        }
    }
}


/**
 * 动态添加路由
 * <p>
 * router.addRoute() 挂载到路由系统中
 * <p>
 * 关于路由懒加载，文档地址：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
 * @param routesAll 系统所有路由
 */
const addRoute = (routesAll) => {
    // 读取所有路由视图组件
    let modules = import.meta.glob('@/views/**/*.vue')
    for (let i = 0; i < routesAll.length; i++) {
        let route = routesAll[i]
        // 过滤掉内置的静态路由
        if (route.path === '/404' || route.path === '/welcome') {
            continue
        }

        // 添加子路由，子路由挂载在`gen`路由下
        router.addRoute('gen', {
            path: route.path,
            // 路由懒加载
            component: modules['/src/views' + route.component + '.vue']
        });
    }
}

/**
 * 验证路由权限
 * @param to 将要请求的路由
 */
const isPermThisRoute = (to) => {
    // 获取路由状态仓库
    let routesStore = useRoutesStore();
    let routes = routesStore.routes;
    return routes.find((route) => route.path === to.path)
}


export default router

