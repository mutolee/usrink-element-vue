<template>
    <section class="vel_main">
        <vel-leftmenu ref="leftmenu" :width="left_menu_width"></vel-leftmenu>
        <section class="vel_container" :style="{paddingLeft:left_menu_width + 'px'}">
            <section class="vel_container_head">
                <vel-header ref="header"/>
                <vel-navbar ref="navbar"/>
            </section>
            <vel-page ref="page" :height="page_height"/>
        </section>
    </section>
</template>

<script>
import {LEFT_MENU_MENUS} from '../../config/constant'
import commonUtil from "../../utils/commonUtil";

export default {
    name: "vel_main",
    provide() {
        return {
            reload: this.refreshPage
        }
    },
    data() {
        return {
            'left_menu_width': 220
        }
    },
    computed: {
        page_height: function () {
            return 'calc(100vh - 90px)';
        }
    },
    mounted() {
        // 初始化菜单
        this.initMenus()
        // 路由变化控制
        this.routeChange()
    },
    watch: {
        $route() {
            // 路由变化控制
            this.routeChange()
        }
    },
    methods: {
        initMenus() {
            this.$refs.leftmenu.menus = this.$store.getters[LEFT_MENU_MENUS];
        },
        routeChange() {
            // 当前导航菜单
            let currMenu = commonUtil.getMenuByPath(this.$route.path);
            // 修改面包屑导航
            this.$refs.header.breadcrumb = currMenu.breadcrumb
            // 修改左侧菜单选中
            this.$refs.leftmenu.currMenu = currMenu;
            // 更改 Tabs 选项
            this.$refs.navbar.changeTab(currMenu)
        },
        refreshPage() {
            this.$refs.page.reload()
        }
    }
}
</script>

<style scoped>

.vel_container {
    background-color: #f0f2f5;
}

.vel_container .vel_container_head {
    position: relative;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.08);
}
</style>

<style>

/** 全局通用样式 **/

.el-table .vel_table_col_operation .el-link {
    margin-right: 10px;
}

.el-table .vel_table_col_operation .el-link:before {
    margin-right: 3px;
}

.el-table .vel_table_col_operation .el-link span {
    font-weight: 700;
}

.el-input-number--medium {
    width: auto !important;
}

/** 全局 重写 element-ui 默认样式 **/

.el-menu--horizontal .el-menu--popup {
    min-width: 160px;
}

.el-menu--horizontal .el-menu--popup.el-menu .el-menu-item,
.el-menu--horizontal .el-menu--popup.el-menu .el-submenu__title {
    height: 40px;
    line-height: 40px;
    color: #7c7c7c;
    padding: 0 15px;
    margin: 0
}

.el-menu--horizontal .el-menu--popup.el-menu .el-menu-item:hover,
.el-menu--horizontal .el-menu--popup.el-menu .el-submenu__title:hover {
    background-color: #F2F6FC;
    color: #606266;
}

.el-menu--popup.el-menu .el-tag {
    margin-left: 5px;
    border-radius: 15px;
}

.el-divider {
    margin: 0 !important;
}

.el-divider.el-divider--horizontal {
    background-color: #EBEEF5;
}

.el-card {
    border: 1px solid #ededed;
}

.el-table th {
    background-color: #f0f2f5 !important;
    height: 50px;
}

.el-table td {
    height: 45px;
}

.el-table th > .cell {
    color: #666;
    font-weight: 700;
}

.el-pagination {
    margin-left: -10px;
}

.el-dialog {
    border-radius: 4px !important;
    min-width: 500px;
}

.el-dialog__header {
    border-bottom: 1px solid #ededed;
    padding: 14px 20px 10px !important;
}

.el-dialog__title {
    font-size: 16px !important;
}

.el-dialog__body .el-row .el-col {
    padding-right: 10px;
}

.el-dialog__footer {
    padding-bottom: 12px !important;
    border-top: 1px solid #f4f4f4;
}

.el-scrollbar .el-scrollbar__wrap:not(.el-select-dropdown__wrap) {
    overflow-x: auto;
}

::-webkit-scrollbar {
    width: 7px; /*滚动条宽度*/
    height: 7px; /*滚动条高度*/
    background-color: white;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
    background-color: #e2e2e2; /*滚动条的背景颜色*/
}

.el-drawer{
    overflow-y: scroll !important;
}


</style>
