<template>
  <section class="vel_container_header_navbar">
    <div class="vel_navbar_panel">
      <el-tabs
          v-model="activeTab"
          @tab-click="tabClick"
          @tab-remove="tabClose"
          class="vel_el_tabs_override"
      >
        <el-tab-pane
            v-for="tab in tabs"
            :name="tab.path"
            :closable="tab.closable"
            :key="tab.path"
        >
          <template #label>
            <el-icon class="vel_el_icon_home" :size="16" v-if="tab.path == '/welcome'">
              <HomeFilled/>
            </el-icon>
            <span>{{ tab.label }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="vel_navbar_operation">
      <el-dropdown @command="dropdownEvent">
        <span>
          <el-icon class="vel_navbar_operation_icon"><ArrowDown/></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="closeOther">
              <el-icon>
                <Close/>
              </el-icon>
              关闭其他
            </el-dropdown-item>
            <el-dropdown-item command="closeLeft">
              <el-icon>
                <ArrowLeft/>
              </el-icon>
              关闭左边
            </el-dropdown-item>
            <el-dropdown-item command="closeRight">
              <el-icon>
                <ArrowRight/>
              </el-icon>
              关闭右边
            </el-dropdown-item>
            <el-dropdown-item command="closeAll">
              <el-icon>
                <CircleClose/>
              </el-icon>
              关闭全部
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </section>
</template>

<script setup>
import {ref, watch, getCurrentInstance, onMounted} from "vue";
import * as Constant from "../../../config/constant";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

// Tabs 列表
// 数据结构：{label: '欢迎页', path: '/welcome', closable: false}
const tabs = ref([])
// 当前激活的Tab
const activeTab = ref('')

onMounted(() => {
  // 组件重新加载后(开发时候热更新)，`watch`无法监听到`NAV_NAV_INFO_GET_KEY`的变化，所以这里主动调用一下
  let navInfo = globalCfg.$store.getters[Constant.NAV_NAV_INFO_GET_KEY];
  tabsChange(navInfo)
})

// 监听当前导航`navInfo`的变化
// 当前路由会实时保存到Vuex的`navInfo`中
watch(() => globalCfg.$store.getters[Constant.NAV_NAV_INFO_GET_KEY], (navInfo) => {
  tabsChange(navInfo)
})

// tabs change
// 如果Tabs中已经存在当前导航，那么设置高亮
// 如果不存在，添加当前导航到Tabs中，并设置其高亮
const tabsChange = (navInfo) => {
  if (Object.keys(navInfo).length == 0) {
    // navInfo不为{}时候，才更改Tab信息
    return
  }
  let currPath = navInfo.path
  let findTab = tabs.value.find((tab) => tab.path === currPath)
  if (findTab) {
    activeTab.value = findTab.path
  } else {
    tabs.value.push({
      label: navInfo.label,
      path: navInfo.path,
      closable: navInfo.path !== '/welcome'
    })
    activeTab.value = navInfo.path
  }
}

// Tab 点击事件
const tabClick = (tab) => {
  globalCfg.$router.push(tab.props.name)
}

// Tab 关闭事件
const tabClose = (tabName) => {
  // 如果删除的是当前激活的Tab
  // 那么路由跳转到下一个Tab，如果不存在下一个Tab，那么跳上一个Tab
  if (activeTab.value === tabName) {
    tabs.value.forEach((tab, index) => {
      if (tab.path === tabName) {
        let nextTab = tabs.value[index + 1] || tabs.value[index - 1]
        if (nextTab) {
          // 跳转到下一个Tab
          globalCfg.$router.push(nextTab.path)
        }
      }
    })
  }

  // 删除Tab的选项及页面的缓存
  removeTab(tabName)

  // Tabs 被删完了的话，重新进入欢迎页
  if (tabs.value.length === 0) {
    globalCfg.$router.push('/welcome')
  }
}

// 关闭除当前Tab的所有导航
let closeOther = () => {
  let waitCloseTabs = []
  tabs.value.forEach((tab) => {
    if (tab.path !== activeTab.value) {
      waitCloseTabs.push(tab.path)
    }
  })
  waitCloseTabs.forEach((tabName) => {
    removeTab(tabName)
  })
}

// 关闭当前Tab左边的所有导航
let closeLeft = () => {
  let waitCloseTabs = []
  for (let i = 0; i < tabs.value.length; i++) {
    let path = tabs.value[i].path
    if (path !== activeTab.value) {
      waitCloseTabs.push(path)
    } else {
      break
    }
  }
  waitCloseTabs.forEach((tabName) => {
    removeTab(tabName)
  })
}

// 关闭当前Tab右边的所有导航
let closeRight = () => {
  let waitCloseTabs = []
  for (let i = tabs.value.length - 1; i >= 0; i--) {
    let path = tabs.value[i].path
    if (path !== activeTab.value) {
      waitCloseTabs.push(path)
    } else {
      break
    }
  }
  waitCloseTabs.forEach((tabName) => {
    removeTab(tabName)
  })
}

// 关闭所有导航
let closeAll = () => {
  let waitCloseTabs = []
  for (let i = 0; i < tabs.value.length; i++) {
    let path = tabs.value[i].path
    waitCloseTabs.push(path)
  }
  waitCloseTabs.forEach((tabName) => {
    removeTab(tabName)
  })
}

// 删除Tab的选项及页面的缓存
let removeTab = (tabName) => {

  // 过滤没有被删的Tab
  tabs.value = tabs.value.filter(tab => tab.path !== tabName);

  // 销毁被删页面组件的缓存
  let includes = globalCfg.$store.getters[Constant.NAV_INCLUDES_GET_KEY];
  includes = includes.filter((item) => item.path !== tabName)
  globalCfg.$store.commit(Constant.NAV_INCLUDES_SET_KEY, includes)
}

// Tab 下拉列表事件驱动表
const mapDrive = new Map();
mapDrive.set("closeOther", closeOther);
mapDrive.set("closeLeft", closeLeft);
mapDrive.set("closeRight", closeRight);
mapDrive.set("closeAll", closeAll);

// Tab 操作事件
// command 下拉列表的选项名称
const dropdownEvent = (command) => {
  mapDrive.get(command)();

  // Tabs 被删完了的话，重新进入欢迎页
  if (tabs.value.length === 0) {
    globalCfg.$router.push('/welcome')
  }
}

</script>

<style scoped>
.vel_container_header_navbar {
  height: 40px;
  position: relative;
}

.vel_navbar_panel {
  padding-right: 40px;
}

:deep(.vel_el_tabs_override) .el-tabs__header {
  margin: 0;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-wrap.is-scrollable {
  padding: 0 40px;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-wrap:after {
  height: 0px;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-prev, :deep(.vel_el_tabs_override) .el-tabs__nav-next {
  width: 40px;
  height: 40px;
  text-align: center;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-prev {
  border-right: 1px solid #f4f4f4;
  transition: background-color .2s;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-next {
  border-left: 1px solid #f4f4f4;
  transition: background-color .2s;
}

:deep(.vel_el_tabs_override) .el-tabs__nav-prev:hover, :deep(.vel_el_tabs_override) .el-tabs__nav-next:hover {
  background-color: #F2F6FC;
}

:deep(.vel_el_tabs_override) .el-tabs__active-bar {
  display: none;
}

:deep(.vel_el_tabs_override) .el-tabs__item {
  color: #646464;
  transition: background-color .3s, color .3s;
  border-right: 1px solid #f4f4f4;
  font-weight: normal;
}

:deep(.vel_el_tabs_override) .el-tabs__item .el-icon {
  margin-left: 8px;
  color: #a7a9af;
  top: 2px;
}

:deep(.vel_el_tabs_override) .el-tabs__item .vel_el_icon_home {
  margin-left: 0px;
  margin-right: 5px;
}

:deep(.vel_el_tabs_override) .el-tabs__item .el-icon:not(.vel_el_icon_home):hover {
  color: #ffffff;
  background-color: #ff0000;
}

:deep(.vel_el_tabs_override) .el-tabs__item:not(.is-active):hover {
  background-color: rgba(64, 158, 255, 0.05);
  color: #303133;
}

:deep(.vel_el_tabs_override) .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}

:deep(.vel_el_tabs_override) .el-tabs__item.is-top:last-child {
  padding-right: 20px;
}

:deep(.vel_el_tabs_override) .el-tabs__item.is-active {
  border-bottom: 2px solid #409eff;
  color: #409eff;
  background-color: rgba(64, 158, 255, 0.1);
}

:deep(.vel_el_tabs_override) .el-tabs__item.is-active .vel_el_icon_home {
  color: #409eff;
}

.vel_navbar_operation {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid #f4f4f4;
  transition: background-color .2s;
}

.vel_navbar_operation:hover {
  background-color: #F2F6FC;
}

.vel_navbar_operation_icon {
  width: 40px;
  height: 40px;
}
</style>
