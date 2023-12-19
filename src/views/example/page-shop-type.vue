<script setup>
import {computed, onMounted, ref} from "vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import AddShopTypeDialog from "@/components/common/add-shop-type-dialog.vue";
import httpUtil from "@/utils/HttpUtil";

const documentWHStore = useDocumentWHStore()
const loading = ref(true)
const tableData = ref([])

// 自动表格高度
const tableHeight = computed(() => documentWHStore.wh.h - 90 - 40 - 42 - 42)

const labelWidth = '100px'

onMounted(() => {
    // 初始化表格数据
    initTableData()
})

/**
 * 初始化表格数据
 */
const initTableData = () => {
    loading.value = true
    httpUtil.get('data/shopType.json').then(async res => {
        // 模拟请求耗时
        await new Promise(resolve => setTimeout(resolve, 1000))
        tableData.value = res.data.data
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        loading.value = false
    })
}

// ---------------------------- 创建分类 ----------------------------
// 是否显示创建分类弹框
const isShowCreateTypeDialog = ref({show: false})

// 打开创建分类弹框所需的参数
const createTypeDialogParam = ref({
    parent: {
        id: 0,
        name: '无',
    },
    name: '',
    status: "0",
    sort: 1,
    icon: ''
})

/**
 * 打开创建分类弹框
 */
const showCreateTypeDialog = () => {
    // 初始化参数
    createTypeDialogParam.value.parent.id = 0
    createTypeDialogParam.value.parent.name = "无"

    // 打开弹框
    isShowCreateTypeDialog.value.show = true
}

/**
 * 打开创建二级分类弹框
 */
const showCreateTypeSecondDialog = (e) => {
    // 初始化参数
    createTypeDialogParam.value.parent.id = e.id
    createTypeDialogParam.value.parent.name = e.name

    // 打开弹框
    isShowCreateTypeDialog.value.show = true
}

/**
 * 创建分类回调
 * @param e
 */
const createTypeDialogCallback = (e) => {
    console.log("创建分类：--> " + e)
}
// ---------------------------- 创建分类 ----------------------------

</script>

<template>
    <div class="page">
        <el-card shadow="never" v-loading="loading" class="vel_card_override">
            <el-row style="margin-bottom: 10px">
                <el-button type="primary" @click="showCreateTypeDialog">创建分类</el-button>
            </el-row>
            <el-table
                :data="tableData"
                :height="tableHeight"
                row-key="id"
                default-expand-all>
                <template #empty>
                    <el-empty description="暂无数据"/>
                </template>
                <el-table-column prop="name" label="分类名称" width="200">
                    <template #default="scope">
                        <template v-if="scope.row.parent">
                            <el-text tag="b">{{ scope.row.name }}</el-text>
                        </template>
                        <template v-else>
                            {{ scope.row.name }}
                        </template>
                    </template>
                </el-table-column>
                <el-table-column prop="icon" label="图标" align="center">
                    <template #default="scope">
                        <el-image :src="scope.row.icon" style="width: 50px; height: 50px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" align="center"></el-table-column>
                <el-table-column label="状态" align="center">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 0">正常</el-tag>
                        <el-tag v-else-if="scope.row.status === -1" type="info">停用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" min-width="200">
                    <template #default="scope">
                        <div class="table_col_action">
                            <template v-if="scope.row.children">
                                <el-button type="primary" plain @click="showCreateTypeSecondDialog(scope.row)">添加子分类
                                </el-button>
                            </template>
                            <el-button type="success" plain>编辑</el-button>
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <add-shop-type-dialog
            :paramData="createTypeDialogParam"
            :dialog="isShowCreateTypeDialog"
            @onConfirm="createTypeDialogCallback"></add-shop-type-dialog>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {

}

.table_col_action {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}

.table_col_action .el-button + .el-button {
    margin-left: 0;
}

:deep(.vel_card_override) .el-table__inner-wrapper::before {
    background-color: transparent !important;
}

</style>