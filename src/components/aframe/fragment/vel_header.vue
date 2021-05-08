<template>
    <header class="vel_header">
        <div class="header_left">
            <div class="header_item refresh" @click="refreshTab">
                <i class="el-icon-refresh-right"></i>
            </div>
            <div class="header_item header_el_breadcrumb">
                <el-breadcrumb>
                    <el-breadcrumb-item v-for="(crumb,index) of breadcrumb" :key="index">{{ crumb }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="header_right">
            <div class="header_item user_item">
                <el-menu mode="horizontal">
                    <el-submenu index="1">
                        <template slot="title">
                            <el-avatar shape="circle" :size="user.avatarSize" :src="user.avatar"/>
                            <el-badge is-dot><i/></el-badge>
                            <span class="username">{{ user.userName }}</span>
                        </template>
                        <el-menu-item index="1-1" @click="myUserInfo">
                            <i class="el-icon-user"/><span>个人中心</span>
                        </el-menu-item>
                        <el-menu-item index="1-2" @click="myMsg">
                            <i class="el-icon-bell"/>
                            <span>我的消息</span>
                            <el-tag effect="dark" :type="message.type" :size="message.size">new</el-tag>
                        </el-menu-item>
                        <div class="el-divider el-divider--horizontal"></div>
                        <el-menu-item index="1-3" @click="logout">
                            <i class="el-icon-switch-button"/>
                            <span>退出登陆</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="header_item full_screen" @click="fullScreen">
                <i class="el-icon-full-screen"></i>
            </div>
        </div>
    </header>
</template>

<script>
import cookieUtil from "../../../utils/cookieUtil";
import {MY_MSG_ROUTER, MY_USERINFO_ROUTER, USER_NAME} from "../../../config/constant";
import commonUtil from "../../../utils/commonUtil"
import {logout} from "../../../router/common/permManager";

export default {
    name: "vel_header",
    inject: ['reload'],
    data() {
        return {
            breadcrumb: [],
            user: {
                avatar: '/static/imgs/logo.png',
                avatarSize: 30
            },
            message: {
                type: 'danger',
                size: 'mini'
            }
        }
    },
    mounted() {
        this.user.userName = cookieUtil.get(USER_NAME)
    },
    methods: {
        refreshTab() {
            this.reload();
        },
        fullScreen() {
            commonUtil.fullScreen();
        },
        myUserInfo() {
            this.$router.push(MY_USERINFO_ROUTER)
        },
        myMsg() {
            this.$router.push(MY_MSG_ROUTER)
        },
        logout() {
            logout()
        }
    }
}
</script>

<style scoped>

.vel_header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid #f4f4f4;
}

.header_left, .header_right, .header_item {
    height: 50px;
    display: flex;
    align-items: center;
}

.header_item {
    padding: 0 10px;
}

.header_item:not(.header_el_breadcrumb,.user_item):hover {
    background-color: #F2F6FC;
    cursor: pointer;
}

.header_item.refresh i, .header_item.full_screen {
    font-size: 18px;
}

.header_item.user_item span.username,
.header_item.user_item i {
    margin-left: 5px;
}
</style>

<style>

/** 重写 element-ui 默认样式 **/

.vel_header .el-menu.el-menu--horizontal {
    border: none;
    background-color: transparent !important;
}

.vel_header .el-menu.el-menu--horizontal .el-submenu__title {
    height: 50px !important;
    line-height: 50px;
    border: none;
    color: #606266;
    padding: 0;
    background-color: transparent !important;
}

.vel_header .el-badge__content.is-dot {
    top: 15px;
    right: 12px;
}
</style>
