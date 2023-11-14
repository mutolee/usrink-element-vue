<script setup>
import VelMenu from "@/components/aframe/fragments/vel-menu.vue";
import VelContainer from "@/components/aframe/fragments/vel-container.vue";
import {onMounted, watch} from "vue";
import {useRoutesStore} from "@/stores/data/routesStore";
import {useNavStore} from '@/stores/data/navStore'
import {useRoute} from 'vue-router'
import {useDocumentWHStore} from "@/stores/data/documentWHStore";

const routesStore = useRoutesStore()
const navStore = useNavStore()
const documentWHStore = useDocumentWHStore()
const route = useRoute()

onMounted(() => {
    // 记录当前访问的 route
    routeRecord(route.path)

    // 记录浏览器宽高
    documentWHRecord();

    // 添加窗口大小变化时的事件监听器，以实时更新 document 高度
    window.addEventListener('resize', () => {
        // 记录浏览器宽高
        documentWHRecord();
    });
})

// 监听当前路由`path`的变化
watch(() => route.path, (path) => {
    if (path === '/login') return
    // 记录当前访问的 route
    routeRecord(path)
})

/**
 * 记录当前路由信息到Store中，实时响应页面各部分的适配，
 * 比如左侧菜单的选中状态、面包屑、Tabs
 * @param path 当前请求的route
 */
const routeRecord = (path) => {
    // 从`系统所有路由`中获取当前访问的路由
    let route = routesStore.routes.find((item) => item.path === path)
    // 缓存当前访问的路由
    navStore.setRouteInfo(route)
    // 缓存打开的页面的组件的名称
    pageCache()
}

/**
 * 把router映射的组件名称缓存起来，给`<keep-alive>`的include使用
 * 当页面不需要缓存的时候，删除缓存的组件名称
 */
const pageCache = () => {
    // 路由匹配到组件集合
    let components = route.matched
    // 获取路由匹配到最后一个组件，也就是我们的页面组件
    let lastCpt = components[components.length - 1]
    // 获取路由匹配到的组件的名称
    // 在控制台打印`lastCpt`对象，发现名称藏在`components.default.__name`里
    let lastCptName = lastCpt.components.default.__name

    // 获取可以被缓存的页面的名称
    let includes = navStore.includes
    // 如果已经缓存过了，无需重复缓存
    if (!includes.find(item => item.cptName === lastCptName)) {
        includes.push({
            path: lastCpt.path,
            cptName: lastCptName
        })
    }
}

/**
 * 记录浏览器宽高
 */
const documentWHRecord = () => {
    documentWHStore.wh.w = document.documentElement.clientWidth
    documentWHStore.wh.h = document.documentElement.clientHeight
}

</script>

<template>
    <section class="vel_frame_main">
        <vel-menu/>
        <vel-container/>
    </section>
</template>

<style scoped>
.vel_frame_main {
    height: 100vh;
}
</style>
