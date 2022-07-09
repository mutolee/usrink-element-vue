<template>
  <section class="vel_container_page">
    <el-scrollbar>
      <!--
        使用keep-alive缓存路由映射的组件
        文档地址：https://router.vuejs.org/zh/api/#router-view-的-v-slot
      -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="includes">
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </el-scrollbar>
  </section>
</template>

<script setup>
import {getCurrentInstance, computed} from 'vue'
import * as Constant from "../../../config/constant";

const globalCfg = getCurrentInstance().appContext.config.globalProperties


// 获取可被缓存的路由映射的组件的名称<br>
// 当页面组件需要缓存，那么加入到该集合中，比如新打开页面的时候<br>
// 当页面不需要缓存的时候，从该集合中删除，比如关闭Tab的时候
const includes = computed(() => {
  let includes_cache = globalCfg.$store.getters[Constant.NAV_INCLUDES_GET_KEY]
  let result = []
  includes_cache.forEach((item) => {
    result.push(item.cptName)
  })
  return result
})


</script>

<style scoped>
.vel_container_page {
  height: calc(100vh - 90px);
}
</style>
