<template>
    <aside class="vel_leftmenu" :style="{width:width + 'px'}">
        <el-scrollbar style="height: 100%">
            <div class="logo" :style="{width:width + 'px'}">
                <el-avatar shape="square" :size="logo.size" :src="logo.src"></el-avatar>
                <span class="logo_tit">vel-admin-web</span>
            </div>
            <el-menu
                :style="{width:width + 'px'}"
                :unique-opened="true"
                :default-active="left_menu_active_index"
                :default-openeds="left_menu_openeds_index"
                :background-color="left_menu_background_color">
                <div v-for="item1 of menus" :key="item1.id">
                    <el-submenu :index="item1.id" v-if="item1.children">
                        <template slot="title">
                            <i :class="item1.icon"></i>
                            <span>{{ item1.label }}</span>
                        </template>
                        <div v-for="item2 of item1.children" :key="item2.id">
                            <el-submenu :index="item2.id" v-if="item2.children">
                                <template slot="title">
                                    <i :class="item2.icon"></i>
                                    <span>{{ item2.label }}</span>
                                </template>
                                <div v-for="item3 of item2.children" :key="item3.id">
                                    <el-submenu :index="item3.id" v-if="item3.children">
                                        <template slot="title">
                                            <i :class="item3.icon"></i>
                                            <span>{{ item3.label }}</span>
                                        </template>
                                    </el-submenu>
                                    <el-menu-item :index="item3.id" @click="goTo(item3.path)" v-else>
                                        <i :class="item3.icon"></i>
                                        <span>{{ item3.label }}</span>
                                    </el-menu-item>
                                </div>
                            </el-submenu>
                            <el-menu-item :index="item2.id" @click="goTo(item2.path)" v-else>
                                <i :class="item2.icon"></i>
                                <span>{{ item2.label }}</span>
                            </el-menu-item>
                        </div>
                    </el-submenu>
                    <el-menu-item :index="item1.id" @click="goTo(item1.path)" v-else>
                        <i :class="item1.icon"></i>
                        <span>{{ item1.label }}</span>
                    </el-menu-item>
                </div>
            </el-menu>
        </el-scrollbar>
    </aside>
</template>

<script>
import router from "../../../router"

export default {
    name: "vel_leftmenu",
    props: ['width'],
    data() {
        return {
            'left_menu_background_color': '#191a23',
            'left_menu_openeds_index': ['1'],     // 菜单列表展开的 index 组
            logo: {
                src: '/static/imgs/logo.png',
                size: 30
            },
            menus: [],            // 菜单数据集
            currMenu: {}          // 当前导航菜单
        }
    },
    computed: {
        left_menu_active_index() {                // 菜单当前激活选项的 index
            return this.currMenu.id;
        }
    },
    methods: {
        goTo(path) {
            router.push({path: path})
        }
    }
}
</script>

<style scoped>

.vel_leftmenu {
    padding-top: 60px;
    height: calc(100vh - 60px);
    background-color: #191a23;
    float: left;
}

.logo {
    height: 60px;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #101010;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

.logo .logo_tit {
    margin-left: 10px;
}
</style>

<style>

/** 重写 element-ui 默认样式 **/

.vel_leftmenu .el-avatar {
    background-color: #fff;
}

.vel_leftmenu .el-menu {
    border-right: none;
}

.vel_leftmenu .el-submenu .el-menu-item {
    height: 45px;
    line-height: 45px;
}

.vel_leftmenu .el-submenu__title > *,
.vel_leftmenu .el-menu-item > * {
    color: #d9d8d8 !important;
    transition: color .3s;
}

.vel_leftmenu .el-submenu__title:hover > *,
.vel_leftmenu .el-menu-item:hover > * {
    color: #fff !important;
}

.vel_leftmenu .el-submenu.is-active > .el-submenu__title > * {
    color: #fff !important;
}

.vel_leftmenu .el-menu-item.is-active > * {
    color: #fff !important;
}

.vel_leftmenu .el-menu-item.is-active {
    background-color: #409EFF !important;
}
</style>
