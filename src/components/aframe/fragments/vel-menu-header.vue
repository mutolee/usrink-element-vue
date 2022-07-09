<template>
  <section
      class="vel_menu_header"
      :style="{height:height}"
  >
    <el-icon
        :size="logoSize"
        color="#FFFFFF"
        :style="{marginBottom:marginBottom}"
    >
      <ElementPlus/>
    </el-icon>
    <div
        class="vel_menu_header_txt"
        :style="{height:fontHeight}"
    >
      <span v-show="showLogoName">Vel-admin-web</span>
    </div>
  </section>
</template>

<script setup>
import {COLLAPSE_STATE_GET_KEY} from "../../../config/constant";
import {computed, getCurrentInstance, ref, watch} from "vue";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

// 菜单折叠状态
const collapseState = computed(() => globalCfg.$store.getters[COLLAPSE_STATE_GET_KEY])
// Logo 高度
const height = computed(() => collapseState.value ? '60px' : '135px')
// Logo size
const logoSize = computed(() => collapseState.value ? 30 : 44)
// Logo MarginBottom
const marginBottom = computed(() => collapseState.value ? '0px' : '10px')
// Logo font 高度
const fontHeight = computed(() => collapseState.value ? '0px' : '24px')

// 默认显示Logo名称
const showLogoName = ref(true)

// 监听菜单折叠状态
watch(collapseState, (newVal) => {
  if (!newVal) {
    // 菜单折叠状态为`开启`，延迟显示Logo名称
    setTimeout(() => {
      showLogoName.value = true
    }, 200);
  } else {
    // 菜单折叠状态为`关闭`，立即隐藏Logo名称
    showLogoName.value = false
  }
})

</script>

<style scoped>
.vel_menu_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: height .5s;
  background: linear-gradient(90deg, #409eff 90%, #00537E 120%);
}

.vel_menu_header .el-icon {
  transition: font-size .5s, margin-bottom .5s;
}

.vel_menu_header_txt {
  color: #ffffff;
  font-size: 20px;
  transition: height .5s;
}
</style>