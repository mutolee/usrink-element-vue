import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useRoutesStore = defineStore('routesStore', () => {

    // 系统所有路由<br>
    // 把菜单部分的所有子路由和其他零碎页面的路由组合成一个一维的数组，
    // 保存到Store中，便于在业务中使用，结构如下：
    // ```
    // [
    //   {label:'', path:'', breadcrumb:[]},
    //   {label:'', path:'', breadcrumb:[]}
    //   ...
    // ]
    // ```
    const routes = ref([])

    // 菜单部分路由
    const menus = ref([])

    // 是否已经加载过路由信息
    const hasLoadRoutes = ref(false)

    return {routes, menus, hasLoadRoutes}
})
