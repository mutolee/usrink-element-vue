<template>
  <section
      class="vel_container"
      :style="{paddingLeft:containerPaddingLeft}"
  >
    <vel-container-header/>
    <vel-container-page/>
  </section>
</template>

<script setup>
import VelContainerHeader from "./vel-container-header.vue";
import VelContainerPage from "./vel-container-page.vue";
import {COLLAPSE_STATE_GET_KEY} from "../../../config/constant";
import {computed, getCurrentInstance} from "vue";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

// 菜单折叠状态
const collapseState = computed(() => globalCfg.$store.getters[COLLAPSE_STATE_GET_KEY])

// 根据菜单的折叠状态，计算容器padding-left的值
const containerPaddingLeft = computed(() => collapseState.value ? '64px' : '220px')

</script>

<style scoped>
.vel_container {
  height: 100vh;
  background-color: #f6f8f9;
  transition: padding-left .5s;
}
</style>