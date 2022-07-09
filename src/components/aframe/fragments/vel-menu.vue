<template>
  <section
      class="vel_menu"
      :style="{width:width}"
  >
    <vel-menu-header/>
    <div
        class="vel_menu_panel"
        :style="{height:'calc(100vh - ' + height + ')'}"
    >
      <el-scrollbar>
        <el-menu
            class="el_menu_override"
            :default-active="activeIndex"
            :default-openeds="['1']"
            :collapse="collapseState"
            background-color="#191a23"
            text-color="#d9d8d8"
        >
          <template
              v-for="menu in menus"
              :key="menu.id"
          >
            <el-sub-menu
                v-if="menu.children"
                :index="menu.id"
            >
              <template #title>
                <el-icon>
                  <component :is="menu.icon"/>
                </el-icon>
                <span>{{ menu.label }}</span>
              </template>
              <div
                  v-for="son in menu.children"
                  :key="son.id"
              >
                <el-sub-menu
                    v-if="son.children"
                    :index="son.id"
                >
                  <template #title>
                    <el-icon>
                      <component :is="son.icon"/>
                    </el-icon>
                    <span>{{ son.label }}</span>
                  </template>
                  <el-menu-item
                      v-for="sun in son.children"
                      @click="goTo(sun.path)"
                      :index="sun.id"
                      :key="sun.id"
                  >
                    <el-icon>
                      <component :is="sun.icon"/>
                    </el-icon>
                    <template #title>
                      {{ sun.label }}
                    </template>
                  </el-menu-item>
                </el-sub-menu>
                <el-menu-item
                    @click="goTo(son.path)"
                    :index="son.id"
                    v-else
                >
                  <el-icon>
                    <component :is="son.icon"/>
                  </el-icon>
                  <template #title>
                    {{ son.label }}
                  </template>
                </el-menu-item>
              </div>
            </el-sub-menu>
            <el-menu-item
                @click="goTo(menu.path)"
                :index="menu.id"
                v-else
            >
              <el-icon>
                <component :is="menu.icon"/>
              </el-icon>
              <template #title>
                {{ menu.label }}
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </section>
</template>

<script setup>
import VelMenuHeader from "./vel-menu-header.vue";
import * as Constant from "../../../config/constant";
import {computed, getCurrentInstance} from "vue";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

// 菜单折叠状态
const collapseState = computed(() => globalCfg.$store.getters[Constant.COLLAPSE_STATE_GET_KEY])
// 根据菜单折叠状态计算菜单的宽度
const width = computed(() => collapseState.value ? '64px' : '220px')
// Menu Height
const height = computed(() => collapseState.value ? '60px' : '135px')

// Menu菜单列表
const menus = computed(() => globalCfg.$store.getters[Constant.ROUTES_MENUS_GET_KEY])
// 菜单当前激活项
const activeIndex = computed(() => globalCfg.$store.getters[Constant.NAV_NAV_INFO_GET_KEY].id)

// 菜单路由跳转
const goTo = (path) => globalCfg.$router.push(path)

</script>

<style scoped>
.vel_menu {
  height: 100vh;
  float: left;
  transition: width .5s;
}

.vel_menu_panel {
  background-color: #191a23;
  transition: height .5s;
}

.el_menu_override {
  border-right: solid 1px #191a23;
}
</style>