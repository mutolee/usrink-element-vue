<script setup>
import {onMounted, ref, watch} from "vue"
import {useNavStore} from "@/stores/data/navStore"
import {useRouter} from "vue-router"

const router = useRouter()
const navStore = useNavStore()

// Tabs 列表
// 数据结构：{label: '欢迎页', path: '/welcome', closable: false}
const tabs = ref([])
// 当前激活的Tab的name，也就是当前路由的path
const activeTab = ref('')

// 获取当前路由访问的route
onMounted(() => {
    // 组件重新加载后(开发时候热更新)，`watch`无法监听到 useNavStore 的变化，所以这里主动调用一下
    let routeInfo = navStore.routeInfo
    tabsChange(routeInfo)
})

// 监听当前导航`routeInfo`的变化
// 当前路由会实时保存到Store的`routeInfo`中
watch(() => navStore.routeInfo, (routeInfo) => {
    tabsChange(routeInfo)
})

/**
 * tabs change 事件
 * 如果Tabs中已经存在当前导航，那么设置高亮
 * 如果不存在，添加当前导航到Tabs中，并设置其高亮
 * @param routeInfo 当前访问的路由信息
 */
const tabsChange = (routeInfo) => {
    if (Object.keys(routeInfo).length === 0) {
        // routeInfo不为{}时候，才更改Tab信息
        return
    }

    let findTab = tabs.value.find((tab) => tab.path === routeInfo.path)
    if (findTab) {
        activeTab.value = findTab.path
    } else {
        tabs.value.push({
            label: routeInfo.label,
            path: routeInfo.path,
            closable: routeInfo.path !== '/welcome'
        })
        activeTab.value = routeInfo.path
    }
}

/**
 * Tab 点击事件
 * @param tab 当前点击的tab
 */
const tabClick = (tab) => {
    router.push(tab.props.name)
}

/**
 * Tab 关闭事件
 * @param tabName 当前关闭的tab的name，也就是页面访问的path
 */
const tabClose = (tabName) => {
    // 如果删除的是当前激活的Tab
    // 那么路由跳转到下一个Tab，如果不存在下一个Tab，那么跳上一个Tab
    if (activeTab.value === tabName) {
        tabs.value.forEach((tab, index) => {
            if (tab.path === tabName) {
                let nextTab = tabs.value[index + 1] || tabs.value[index - 1]
                if (nextTab) {
                    // 跳转到下一个Tab
                    router.push(nextTab.path)
                }
            }
        })
    }

    // 删除Tab的选项及页面的缓存
    removeTab(tabName)

    // Tabs 被删完了的话，重新进入欢迎页
    if (tabs.value.length === 0) {
        router.push('/welcome')
    }
}

/**
 * 删除Tab的选项及页面的缓存
 * @param tabName tab的name，也就是页面访问的path
 */
const removeTab = (tabName) => {

    // 过滤没有被删的Tab
    tabs.value = tabs.value.filter(tab => tab.path !== tabName);

    // 销毁被删页面组件的缓存
    navStore.includes = navStore.includes.filter(item => item.path !== tabName)
}

/**
 * 关闭除当前Tab的所有导航
 */
const closeOther = () => {
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

/**
 * 关闭当前Tab左边的所有导航
 */
const closeLeft = () => {
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

/**
 * 关闭当前Tab右边的所有导航
 */
const closeRight = () => {
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

/**
 * 关闭所有导航
 */
let closeAll = () => {
    let waitCloseTabs = []
    for (let i = 0; i < tabs.value.length; i++) {
        let path = tabs.value[i].path
        if(path !== '/welcome'){
            waitCloseTabs.push(path)
        }
    }
    waitCloseTabs.forEach((tabName) => {
        removeTab(tabName)
    })
}

// Tab 下拉列表事件驱动表
const mapDrive = new Map();
mapDrive.set("closeOther", closeOther);
mapDrive.set("closeLeft", closeLeft);
mapDrive.set("closeRight", closeRight);
mapDrive.set("closeAll", closeAll);

/**
 * Tab 操作事件
 * @param command 下拉列表的选项名称
 */
const dropdownEvent = (command) => {
    mapDrive.get(command)();

    // Tabs 被删完了的话，重新进入欢迎页
    if (tabs.value.length === 0) {
        router.push('/welcome')
    }
}
</script>

<template>
    <section class="vel_container_header_navbar">
        <div class="vel_navbar_panel">
            <el-tabs
                v-model="activeTab"
                @tab-click="tabClick"
                @tab-remove="tabClose"
                class="vel_el_tabs_override">
                <el-tab-pane
                    v-for="tab in tabs"
                    :name="tab.path"
                    :closable="tab.closable"
                    :key="tab.path">
                    <template #label>
                        <el-icon class="vel_el_icon_home" :size="16" v-if="tab.path === '/welcome'">
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
