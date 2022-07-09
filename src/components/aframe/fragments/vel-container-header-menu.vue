<template>
  <section class="vel_container_header_menu">
    <div class="vel_container_header_menu_left">
      <div
          @click="collapseClick"
          class="vel_header_item vel_container_header_menu_left_collapse"
      >
        <el-icon :size="18">
          <component :is="collapseState ? 'Expand' : 'Fold'"/>
        </el-icon>
      </div>
      <div class="vel_header_item vel_container_header_menu_left_breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
              v-for="(crumb, index) of breadcrumb"
              :key="index"
          >
            {{ crumb }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="vel_container_header_menu_right">
      <div class="vel_header_item vel_container_header_menu_right_nick">
        <el-dropdown class="el_dropdown_override">
          <span>
            <el-badge
                class="el_badge_override"
                is-dot
            >
              <el-avatar
                  class="el_avatar_override"
                  :size="30"
              >
                <el-icon :size="24"><ElementPlus/></el-icon>
              </el-avatar>
            </el-badge>
            <span>{{ userNick }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu class="el_dropdown_menu_override">
              <el-dropdown-item @click="userInfoClick">
                <el-icon :size="18">
                  <User/>
                </el-icon>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item @click="userMessageClick">
                <el-icon :size="18">
                  <Bell/>
                </el-icon>
                我的消息
                <el-badge value="new"/>
              </el-dropdown-item>
              <el-dropdown-item
                  @click="logout"
                  divided
              >
                <el-icon :size="18">
                  <SwitchButton/>
                </el-icon>
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div
          @click="screenFull"
          class="vel_header_item vel_container_header_menu_right_fullscreen"
      >
        <el-icon :size="18">
          <FullScreen/>
        </el-icon>
      </div>
    </div>
  </section>
</template>

<script setup>
import * as Constant from "../../../config/constant";
import {computed, onMounted, getCurrentInstance} from "vue";
import screenFull from "../../../utils/ScreenUtil";
import {logout} from "../../../router/modules/auth";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

onMounted(() => {
  // 获取用户昵称
  globalCfg.$local.getItem("userInfo").then((val) => {
    globalCfg.$store.commit(Constant.USERINFO_USER_NICK_SET_KEY, val.userNick)
  })
})

// 面包屑
const breadcrumb = computed(() => {
  let navInfo = globalCfg.$store.getters[Constant.NAV_NAV_INFO_GET_KEY]
  return navInfo.breadcrumb
})

// 用户名称
const userNick = computed(() => globalCfg.$store.getters[Constant.USERINFO_USER_NICK_GET_KEY])

// 菜单折叠状态
const collapseState = computed(() => globalCfg.$store.getters[Constant.COLLAPSE_STATE_GET_KEY])

// 菜单折叠按钮点击事件
const collapseClick = () => {
  if (collapseState.value) {
    globalCfg.$store.commit(Constant.COLLAPSE_STATE_SET_KEY, false)
  } else {
    globalCfg.$store.commit(Constant.COLLAPSE_STATE_SET_KEY, true)
  }
}

// 个人中心
const userInfoClick = () => {
  globalCfg.$router.push("/user/userInfo")
}

// 消息中心
const userMessageClick = () => {
  globalCfg.$router.push("/user/message")
}

</script>

<style scoped>
.vel_container_header_menu {
  height: 50px;
  border-bottom: 1px solid #f4f4f4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vel_container_header_menu_left, .vel_container_header_menu_right {
  display: flex;
  align-items: center;
}

.vel_header_item {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  transition: background-color .2s;
}

.vel_header_item:not(.vel_container_header_menu_left_breadcrumb,.vel_container_header_menu_right_nick):hover {
  background-color: #F2F6FC;
  cursor: pointer;
}

:deep(.el_badge_override) sup.is-dot {
  right: 8px;
  top: 4px
}

.el_badge_override {
  margin-right: 5px;
}

.el_avatar_override {
  background-color: #409eff;
}

:deep(li).el-dropdown-menu__item {
  padding: 10px 15px;
  min-width: 120px;
  color: #7c7c7c;
}

:deep(li).el-dropdown-menu__item:focus {
  color: #303133;
  background-color: #F2F6FC;
}

:deep(li).el-dropdown-menu__item .el-badge {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
</style>