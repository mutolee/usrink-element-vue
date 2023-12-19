<script setup>
import {onMounted, ref, watch} from "vue"
// 可拖拽组件
// 文档地址：https://alfred-skyblue.github.io/vue-draggable-plus/demo/basic/
import {VueDraggable} from 'vue-draggable-plus'
import httpUtil from "@/utils/HttpUtil";
import AddIndexModuleDialog from "@/components/common/add-index-module-dialog.vue";
import IndexModule1 from "@/components/common/index-module/index-module-1.vue";
import IndexModule2 from "@/components/common/index-module/index-module-2.vue";
import IndexModule3 from "@/components/common/index-module/index-module-3.vue";
import IndexModule4 from "@/components/common/index-module/index-module-4.vue";
import IndexModule5 from "@/components/common/index-module/index-module-5.vue";
import IndexModule6 from "@/components/common/index-module/index-module-6.vue";
import IndexModule7 from "@/components/common/index-module/index-module-7.vue";
import IndexModule8 from "@/components/common/index-module/index-module-8.vue";
import IndexModule9 from "@/components/common/index-module/index-module-9.vue";


const labelWidth = '100px'

// ---------------------------- 添加模块 ----------------------------
// 是否显示添加模块弹框
const isShowAddModuleDialog = ref({show: false})

/**
 * 显示模块添加弹框
 */
const showAddModuleDialog = () => {
    isShowAddModuleDialog.value.show = true
}

/**
 * 模块添加回调
 * @param e
 */
const addModuleDialogCallback = (e) => {
    console.log("添加首页模块：--> " + e)
}
// ---------------------------- 添加模块 ----------------------------

const loading = ref(true)
const list = ref([])
const publishBtnIsDisable = ref(true)

onMounted(() => {
    // 初始化首页模块数据
    initData()
})

/**
 * 获取首页模块列表
 */
const initData = ()=>{
    httpUtil.get('/data/indexModule.json').then( async res => {
        // 模拟请求耗时
        await new Promise(resolve => setTimeout(resolve, 1000))
        list.value = res.data.data
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        loading.value = false
    })
}

// 监听数据是否修改，如果修改了则发布按钮可用
watch(() => list.value, newVal => {
    publishBtnIsDisable.value = false
})

</script>

<template>
    <div class="page">
        <div class="page_left">
            <div class="preview">
                <div class="preview_con">
                    <el-scrollbar>
                        <template v-for="item in list" :key="item">
                            <index-module1 :width="360" v-if="item.id === 1"/>
                            <index-module2 :width="360" v-else-if="item.id === 2"/>
                            <index-module3 :width="360" v-else-if="item.id === 3"/>
                            <index-module4 :width="360" v-else-if="item.id === 4"/>
                            <index-module5 :width="360" v-else-if="item.id === 5"/>
                            <index-module6 :width="360" v-else-if="item.id === 6"/>
                            <index-module7 :width="360" v-else-if="item.id === 7"/>
                            <index-module8 :width="360" v-else-if="item.id === 8"/>
                            <index-module9 :width="360" v-else-if="item.id === 9"/>
                        </template>
                    </el-scrollbar>
                </div>
            </div>
            <div class="publish">
                <el-button type="primary" :disabled="publishBtnIsDisable" size="large" style="width: 100%">立即发布
                </el-button>
            </div>
        </div>
        <div class="page_right">
            <el-card shadow="never" class="vel_card_override" v-loading="loading">
                <div class="right_header">
                    <el-button type="primary" @click="showAddModuleDialog">添加模块</el-button>
                </div>
                <div class="right_content">
                    <el-scrollbar>
                        <VueDraggable class="right_content_panel"
                                      v-model="list"
                                      target=".sort-target"
                                      ghostClass="ghost"
                                      animation="150">
                            <table>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>布局类型</th>
                                    <th>编号</th>
                                    <th>标题</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody class="sort-target">
                                <tr v-for="item in list" :key="item">
                                    <td class="cursor-move">
                                        <el-icon>
                                            <Switch />
                                        </el-icon>
                                    </td>
                                    <td>
                                        <el-image class="module_item_img"
                                                  :src="httpUtil.defaults.baseURL + '/res/imgs/index-module-thumb-' + item.id + '.jpg'"></el-image>
                                    </td>
                                    <td>
                                        <el-text>{{item.no}}</el-text>
                                    </td>
                                    <td>
                                        <div class="item_title">
                                            <el-text>{{item.title}}</el-text>
                                        </div>
                                    </td>
                                    <td>
                                        <el-tag v-if="item.status === 0">正常</el-tag>
                                        <el-tag v-else-if="item.status === -1" type="info">停用</el-tag>
                                    </td>
                                    <td class="module_item_action">
                                        <div class="action_btn">
                                            <el-button type="success" plain>编辑</el-button>
                                            <el-button type="primary" plain>数据</el-button>
                                            <el-button type="danger" plain>删除</el-button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </VueDraggable>
                        <div class="no_content" v-if="list.length === 0">
                            <el-empty description="暂无数据" />
                        </div>
                    </el-scrollbar>
                </div>
            </el-card>
        </div>
        <add-index-module-dialog :dialog="isShowAddModuleDialog"
                                 @onConfirm="addModuleDialogCallback"></add-index-module-dialog>
    </div>
</template>

<style scoped>
.page {
    height: calc(100vh - 90px);
    display: flex;
}

.page_left {
    min-width: 400px;
    display: flex;
    flex-direction: column;
}

.page_right {
    width: 100%;
    padding: 20px 20px 15px 0;
}

.page_left .preview {
    padding: 20px 20px 0 20px;
}

.page_left .preview_con {
    background-color: #ffffff;
    height: calc(100vh - 90px - 20px - 70px);
    overflow: hidden;
    border-radius: 4px 4px 0 0;
}

.page_left .publish {
    height: 70px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

:deep(.vel_card_override) .el-card__body {
    padding: 0;
}

.right_header {
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f4f4f4;
    box-sizing: border-box;
}

.right_header .el-button {
    margin-left: 20px;
}

.right_content {
    height: calc(100vh - 90px - 20px - 15px - 2px - 60px);
    overflow: hidden;
}

.right_content_panel {
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
}

.no_content{
    padding: 0 20px 20px 20px;
}

.right_content_panel table {
    width: 100%;
    border-collapse: collapse;
}

.right_content_panel table th {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #e9e9eb;
    color: #909399;
}

.right_content_panel table .ghost {
    opacity: 0.3;
}

.right_content_panel tbody {
    background: rgba(200, 235, 251, 0.99);
}

.right_content_panel tbody tr td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #e9e9eb;
    background-color: #fff;
}

.right_content_panel .cursor-move {
    cursor: move;
}

.right_content_panel .module_item_img {
    width: 70px;
    height: 35px;
}

.right_content_panel .item_title {
    width: 100px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.right_content_panel .module_item_action .action_btn{
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}

.module_item_action .action_btn .el-button+.el-button{
    margin-left: 0;
}

</style>