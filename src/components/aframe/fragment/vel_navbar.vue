<template>
    <nav class="vel_navbar">
        <div class="vel_navbar_content">
            <el-tabs v-model="tabActiveValue" @tab-remove="removeTab" @tab-click="clickTab">
                <el-tab-pane v-for="tab in tabs" :closable="closable(tab)" :key="tab.value" :label="tab.label"
                             :name="tab.value">
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="vel_navbar_operation">
            <el-dropdown @command="dropdown">
                <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="closeOther">
                        <i class="el-icon-close"></i><span>关闭其他</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="closeLeft">
                        <i class="el-icon-back"></i><span>关闭左侧</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="closeRight">
                        <i class="el-icon-right"></i><span>关闭右侧</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="closeAll">
                        <i class="el-icon-circle-close"></i><span>关闭全部</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </nav>
</template>

<script>
import {WELCOME_ROUTER} from "../../../config/constant";

export default {
    name: "vel_navbar",
    data() {
        return {
            tabActiveValue: WELCOME_ROUTER,                  // 激活的选项卡的 name
            tabs: []
        }
    },
    methods: {
        closable(tab) {
            if (tab.value === WELCOME_ROUTER) {
                return false;
            }
            return true;
        },
        clickTab(tab) {
            this.$router.push(tab.name)
        },
        dropdown(command) {
            let mapDrive = new Map();
            mapDrive.set("closeOther", this.closeOther);
            mapDrive.set("closeLeft", this.closeLeft);
            mapDrive.set("closeRight", this.closeRight);
            mapDrive.set("closeAll", this.closeAll);
            mapDrive.get(command)();
        },
        closeOther() {
            let tabActiveValue = this.tabActiveValue;
            this.tabs = this.tabs.filter(tab => tab.value === tabActiveValue);
        },
        closeLeft() {
            let tabActiveValueIndex = findIndexInTabs(this.tabs, this.tabActiveValue);
            this.tabs.splice(0, tabActiveValueIndex)
        },
        closeRight() {
            let tabActiveValueIndex = findIndexInTabs(this.tabs, this.tabActiveValue);
            this.tabs.splice(tabActiveValueIndex + 1, this.tabs.length)
        },
        closeAll() {
            if (this.tabActiveValue !== WELCOME_ROUTER) {
                this.tabs = [];
                this.$router.push(WELCOME_ROUTER)
            } else {
                this.tabs = this.tabs.filter(tab => tab.value === this.tabActiveValue);
            }
        },
        removeTab(value) {
            let that = this;
            let tabs = this.tabs;
            let tabActiveValue = this.tabActiveValue;
            if (tabActiveValue === value) {
                tabs.forEach((tab, index) => {
                    if (tab.value === value) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            tabActiveValue = nextTab.value;
                            that.$router.push(tabActiveValue)
                        }
                    }
                });
            }
            this.tabActiveValue = tabActiveValue;
            this.tabs = tabs.filter(tab => tab.value !== value);

            // tabs 被删完了的话，重新进入欢迎页
            if (this.tabs.length === 0) {
                this.$router.push(WELCOME_ROUTER)
            }
            // 销毁页面组件
            this.$rkm.destroy(value)
        },
        changeTab(currMenu) {
            let currPath = currMenu.path
            let findTab = this.tabs.find((tab) => {
                return tab.value === currPath;
            })
            if (findTab) {
                this.tabActiveValue = findTab.value
            } else {
                this.tabs.push({
                    label: currMenu.label,
                    value: currMenu.path
                })
                this.tabActiveValue = currMenu.path
            }
        }
    }
}

/**
 * 查询当前选中的 tab 在 tabs 中的索引
 * @param tabs
 * @param value
 */
function findIndexInTabs(tabs, value) {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].value === value) {
            return i;
        }
    }
    return false;
}

</script>

<style scoped>

.vel_navbar {
    position: relative;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F6FC;
}

.vel_navbar .vel_navbar_content {
    padding-right: 40px;
}

.vel_navbar .vel_navbar_operation {
    position: absolute;
    top: 0;
    right: 0;
    border-left: 1px solid #f4f4f4;
    transition: background-color .2s;
}

.vel_navbar .vel_navbar_operation:hover {
    background-color: #F2F6FC;
}
</style>

<style>

/** 重写 element-ui 默认样式 **/

.vel_navbar .el-tabs__header {
    margin: 0 !important;
}

.vel_navbar .el-tabs__nav-wrap {
    padding: 0 40px;
}

.vel_navbar .el-tabs__nav-wrap:after,
.vel_navbar .el-tabs__nav-wrap:before {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #8c8c8c;
    transition: background-color .2s;
    position: absolute;
    top: 0;
    font-family: element-icons !important;
    background-color: transparent;
    cursor: not-allowed;
}

.vel_navbar .el-tabs__nav-wrap:after {
    content: "\e6e0";
    left: auto !important;
    right: 0;
    border-left: 1px solid #f4f4f4;
}

.vel_navbar .el-tabs__nav-wrap:before {
    content: "\e6de";
    left: 0;
    border-right: 1px solid #f4f4f4;
}

.vel_navbar .el-tabs__nav-next,
.vel_navbar .el-tabs__nav-prev {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
    color: #8c8c8c;
    transition: background-color .2s;
    z-index: 99;
}

.vel_navbar .el-tabs__nav-next:hover,
.vel_navbar .el-tabs__nav-prev:hover {
    background-color: #F2F6FC;
}

.vel_navbar .el-tabs__item {
    border-right: 1px solid #f4f4f4;
    color: #8c8c8c;
    padding: 0 15px !important;
    transition: background-color .3s, color .3s;
}

.vel_navbar .el-tabs__item.is-active {
    color: #409eff;
    background-color: rgba(64, 158, 255, 0.1);
    border-bottom: 2px solid #409eff;
}

.vel_navbar .el-tabs__item:not(.is-active):hover {
    background-color: rgba(64, 158, 255, 0.05);
    color: #303133;
}

.vel_navbar .el-tabs__item .el-icon-close {
    margin-left: 8px;
    color: #C0C4CC;
}

.vel_navbar .el-tabs__item .el-icon-close:hover {
    background-color: #ff0000;
    color: #fff;
}

.vel_navbar .el-dropdown-link > .el-icon-arrow-down {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #8c8c8c;
}

.vel_navbar .el-tabs__active-bar, .vel_navbar .el-tabs__content {
    display: none;
}
</style>
