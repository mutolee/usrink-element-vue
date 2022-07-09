<template>
  <div class="welcome_panel">
    <el-row>
      <el-col :span="24">
        <el-card shadow="never" class="vel_el_card_override vel_el_card_introduce">
          <div class="introduce_avatar">
            <el-avatar :size="60" :src="avatarUrl"/>
          </div>
          <div class="introduce_desc">
            <p class="tit">你好呀，{{ userNick }}，又是元气满满的一天！</p>
            <p class="tips">
              国际惯例，介绍一下，<a :href="githubUrl" target="_blank">Vel-admin-web</a>
              为我快速搭建后台管理系统而做的一套脚手架，不用每次有了新项目，搞重复的事情，你懂得。<br>
              你也看到了，这是一个极其简洁的项目，除了一些必要的功能，没有多余的东西，甚至没有一个可以供你直接使用的小组件。<br>
              <a :href="githubUrl" target="_blank">Vel-admin-web</a> 可以让你<span style="color: red">直接开始写页面</span>，而不用从0开始搞类似菜单、Tab导航、路由之类的与业务无关的东西。
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#409eff'">
            <Eleme/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#60941f'">
            <Headset/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#088f75'">
            <IceDrink/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#cb8c1d'">
            <IceTea/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#731f94'">
            <Files/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#17a997'">
            <Management/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#1d310e'">
            <Menu/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
          <el-icon :size="36" :color="'#b32eb6'">
            <Message/>
          </el-icon>
          <p>快捷式</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
        <el-card shadow="hover" class="vel_el_card_override">
          <template #header>
            <div class="card-header">
              <div class="vel_card_header_left">
                <el-icon :size="20">
                  <TrendCharts/>
                </el-icon>
                <span>访问量</span>
              </div>
              <div class="vel_card_header_right">
                <el-tag>日</el-tag>
              </div>
            </div>
          </template>
          <echarts-demo1></echarts-demo1>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
        <el-card shadow="hover" class="vel_el_card_override">
          <template #header>
            <div class="card-header">
              <div class="vel_card_header_left">
                <el-icon :size="20">
                  <Compass/>
                </el-icon>
                <span>浏览器</span>
              </div>
              <div class="vel_card_header_right">
                <el-tag type="success">年度</el-tag>
              </div>
            </div>
          </template>
          <echarts-demo2></echarts-demo2>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <el-card shadow="hover" class="vel_el_card_override">
          <template #header>
            <div class="card-header">
              <div class="vel_card_header_left">
                <el-icon :size="20">
                  <InfoFilled/>
                </el-icon>
                <span>软件信息</span>
              </div>
              <div class="vel_card_header_right">
                <el-tag type="info">V 2.0.0</el-tag>
              </div>
            </div>
          </template>
          <table-demo1></table-demo1>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover" class="vel_el_card_override">
          <template #header>
            <div class="card-header">
              <div class="vel_card_header_left">
                <el-icon :size="20">
                  <MapLocation/>
                </el-icon>
                <span>用户分布</span>
              </div>
              <div class="vel_card_header_right">
                <el-tag type="danger">不遗漏任何一个角落</el-tag>
              </div>
            </div>
          </template>
          <echarts-demo3></echarts-demo3>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover" class="vel_el_card_override">
          <template #header>
            <div class="card-header">
              <div class="vel_card_header_left">
                <el-icon :size="20">
                  <List/>
                </el-icon>
                <span>任务清单</span>
              </div>
              <div class="vel_card_header_right">
                <el-tag type="info">日</el-tag>
              </div>
            </div>
          </template>
          <progress-demo1></progress-demo1>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {computed, getCurrentInstance} from "vue";
import EchartsDemo1 from "../commons/welcome/echarts-demo-1.vue";
import EchartsDemo2 from "../commons/welcome/echarts-demo-2.vue";
import EchartsDemo3 from "../commons/welcome/echarts-demo-3.vue";
import TableDemo1 from "../commons/welcome/table-demo-1.vue";
import ProgressDemo1 from "../commons/welcome/progress-demo-1.vue";
import * as Constant from "../../config/constant";
import envConfig from "../../config/envConfig";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

const name = 'vel-frame-welcome'
const githubUrl = 'https://github.com/mutolee/vel-admin-web'
const avatarUrl = envConfig.baseUrl() + '/static/imgs/jimeng.webp'

// 用户名称
const userNick = computed(() => globalCfg.$store.getters[Constant.USERINFO_USER_NICK_GET_KEY])

</script>

<style scoped>

.welcome_panel {
  padding: 20px 0 0 20px;
}

:deep(.vel_el_card_introduce) .el-card__body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

:deep(.vel_el_card_override) .el-card__header {
  padding-top: 15px;
  padding-bottom: 15px;
}

.introduce_avatar .el-avatar {
  margin-right: 20px;
}

.introduce_desc {
  width: calc(100% - 80px);
  min-width: 200px;
}

.introduce_desc .tit {
  margin: 20px 0 15px 0;
  color: #141b1e;
  font-weight: 400;
  font-size: 20px;
}

.introduce_desc .tips {
  color: #808695;
}

.el-row .el-col {
  padding-bottom: 20px;
  padding-right: 20px;
}

.vel_el_card_override .card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vel_el_card_override .vel_card_header_left {
  display: flex;
  align-items: center;
}

.vel_el_card_override .vel_card_header_left .el-icon {
  margin-right: 5px;
}

:deep(.vel_el_card_button) .el-card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(.vel_el_card_button) .el-card__body p {
  padding-top: 15px;
}

</style>
