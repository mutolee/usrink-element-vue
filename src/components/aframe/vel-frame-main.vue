<template>
  <section class="vel_frame_main">
    <vel-menu/>
    <vel-container/>
  </section>
</template>

<script setup>
import VelMenu from "./fragments/vel-menu.vue";
import VelContainer from "./fragments/vel-container.vue";
import {getCurrentInstance, watch, onMounted} from "vue";
import * as Constant from '../../config/constant'
import {NAV_INCLUDES_GET} from "../../config/constant";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

onMounted(() => {
  // 当直接打开页面，`watch`无法监听到路由的变化，所以这里主动调一下
  routeChange(globalCfg.$route.path)
})

// 监听当前路由`path`的变化
watch(() => globalCfg.$route.path, (currPath) => {
  if (currPath === '/login') return
  routeChange(currPath)
})

// 记录当前路由信息到Vuex中，实时响应页面各部分的适配
// 比如左侧菜单的选中状态、面包屑、Tabs
const routeChange = (currPath) => {
  let routes = globalCfg.$store.getters[Constant.ROUTES_ROUTES_ARR_GET_KEY];
  // 从`系统所有路由`中获取当前访问的路由
  let route = routes.find((item) => item.path === currPath)
  globalCfg.$store.commit(Constant.NAV_NAV_INFO_SET_KEY, route)
  // 缓存打开的页面的组件的名称
  pageCache()
}

// 把router映射的组件名称缓存起来，给`<keep-alive>`的include使用
// 当页面不需要缓存的时候，删除缓存的组件名称
const pageCache = () => {
  // 路由匹配到组件集合
  let components = globalCfg.$route.matched;
  // 获取路由匹配到最后一个组件，也就是我们的页面组件
  let lastCpt = components[components.length - 1]

  // 获取路由匹配到的组件的名称
  // 在控制台打印`lastCpt`对象，发现名称藏在`components.default.__name`里
  let lastCptName = lastCpt.components.default.__name

  // 获取可以被缓存的页面的名称
  let includes = globalCfg.$store.getters[Constant.NAV_INCLUDES_GET_KEY];
  // 如果已经缓存过了，无需重复缓存
  if (!includes.find((item) => item.cptName === lastCptName)) {
    includes.push({
      path: lastCpt.path,
      cptName: lastCptName
    })
    globalCfg.$store.commit(Constant.NAV_INCLUDES_SET_KEY, includes)
  }
}


</script>

<style scoped>
.vel_frame_main {
  height: 100vh;
}
</style>
