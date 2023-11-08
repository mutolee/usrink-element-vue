import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useNavStore = defineStore('navStore', () => {

    // 当前导航的路由信息，
    // 从`系统所有路由`中获取的当前导航的路由信息
    const routeInfo = ref({})

    // 设置当前导航的路由信息
    const setRouteInfo = val => routeInfo.value = val

    // 可以被缓存的页面的名称
    const includes = ref([])

    return {routeInfo, setRouteInfo, includes}
})