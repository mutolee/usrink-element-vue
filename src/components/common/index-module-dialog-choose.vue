<script setup>
import {ref} from "vue";
import httpUtil from "@/utils/HttpUtil";

// 定义传入参数
const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onChoose'])

// 是否显示弹框
// dialog 数据结构：{show:false}
const dialog = props.dialog

// 首页模块类型
const dataArr = ref([
    // 轮番
    {
        type: 1,
        chooseEd: false
    },
    // 导航
    {
        type: 2,
        chooseEd: false
    },
    // 田字格
    {
        type: 3,
        chooseEd: false
    },
    // 上一下二
    {
        type: 4,
        chooseEd: false
    },
    // 上二下一
    {
        type: 5,
        chooseEd: true
    },
    // 左一右二
    {
        type: 6,
        chooseEd: false
    },
    // 左二右一
    {
        type: 7,
        chooseEd: false
    },
    // 三列
    {
        type: 8,
        chooseEd: false
    },
    // 一列
    {
        type: 9,
        chooseEd: false
    }
])

/**
 * 选择模块事件
 * @param e
 */
const chooseItem = (e) => {

    // 取消之前的选中
    let oldData = dataArr.value.find(data => data.chooseEd);
    oldData.chooseEd = false

    // 选中当前
    let newData = dataArr.value.find(data => data.type === e.type);
    newData.chooseEd = true
}

/**
 * 确定事件
 */
const confirmDialog = () => {
    closeDialog()

    // 获取选中
    let e = dataArr.value.find(data => data.chooseEd)

    // 触发事件
    emit('onChoose', e)
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.show = false
}
</script>

<template>
    <div class="vel_cpt_panel_drawer_choose_module">
        <el-drawer v-model="dialog.show" direction="rtl" class="vel_drawer_override">
            <template #header>
                <h4>选择模块</h4>
            </template>
            <template #default>
                <div class="dialog_con">
                    <el-scrollbar>
                        <div class="con_list">
                            <el-card v-for="data in dataArr" :key="data.type" :shadow="data.chooseEd ? 'always': 'hover'"
                                     class="vel_card_thumb_override">
                                <el-image @click="chooseItem(data)" class="img_thumb"
                                          :src="httpUtil.defaults.baseURL + '/res/imgs/index-module-thumb-' + data.type + '.jpg'"></el-image>
                            </el-card>
                        </div>
                    </el-scrollbar>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="closeDialog">取消</el-button>
                    <el-button type="primary" @click="confirmDialog">确定</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>

:deep(.vel_drawer_override){
    width: 360px !important;
}

:deep(.vel_drawer_override) .el-drawer__body{
    padding: 0;
}

:deep(.vel_drawer_override) .el-drawer__footer{
    padding: 20px;
}

.dialog_con{
    height: calc(100vh - 40px - 32px - 72px);
    overflow: hidden;
}

.dialog_con .con_list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
    padding: 0 15px;
}

.vel_card_thumb_override{
    border: 2px solid transparent;
}

.vel_card_thumb_override.is-always-shadow {
    border: 2px solid #409EFF;
}


:deep(.vel_card_thumb_override) .el-card__body {
    padding: 0;
    display: flex;
}

.vel_card_thumb_override .img_thumb {
    width: 150px;
    height: 75px;
}
</style>