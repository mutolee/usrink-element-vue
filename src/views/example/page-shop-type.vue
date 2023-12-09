<script setup>
import {computed, ref} from "vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import AddShopTypeDialog from "@/components/common/add-shop-type-dialog.vue";

const documentWHStore = useDocumentWHStore()

const tableData = [
    {
        id: 1,
        parent: true,
        name: '笔记本',
        icon: 'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
    },
    {
        id: 2,
        parent: true,
        name: '台式机',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg',
    },
    {
        id: 3,
        parent: true,
        name: '电脑组件',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
        children: [
            {
                id: 31,
                name: '显示器',
                icon: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
            },
            {
                id: 32,
                name: '主板',
                icon: 'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
            },
        ],
    },
    {
        id: 4,
        parent: true,
        name: '外设产品',
        icon: 'https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg',
    },
    {
        id: 5,
        parent: true,
        name: '电脑组件-2',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
        children: [
            {
                id: 51,
                name: '显示器-2-1',
                icon: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
            },
            {
                id: 52,
                name: '主板-2-2',
                icon: 'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
            },
        ],
    },
    {
        id: 6,
        parent: true,
        name: '电脑组件-3',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
        children: [
            {
                id: 61,
                name: '显示器-3-1',
                icon: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
            },
            {
                id: 62,
                name: '主板-3-2',
                icon: 'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
            },
        ],
    },
]

// 自动表格高度
const tableHeight = computed(() => documentWHStore.wh.h - 90 - 40 - 42 - 40)

const labelWidth = '100px'

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
        <el-card shadow="never" class="vel_card_override">
            <el-row style="margin-bottom: 10px">
                <el-button type="primary" @click="showCreateTypeDialog">创建分类</el-button>
            </el-row>
            <el-table
                :data="tableData"
                :height="tableHeight"
                style="width: 100%; margin-bottom: 20px"
                row-key="id"
                default-expand-all>
                <el-table-column prop="name" label="分类名称" width="200">
                    <template #default="scope">
                        <template v-if="scope.row.parent">
                            <el-text style="font-weight: 700">{{ scope.row.name }}</el-text>
                        </template>
                        <template v-else>
                            {{ scope.row.name }}
                        </template>
                    </template>
                </el-table-column>
                <el-table-column prop="icon" label="图标">
                    <template #default="scope">
                        <el-image :src="scope.row.icon" style="width: 50px; height: 50px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
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
    height: calc(100vh - 90px - 20px - 20px - 2px);
}

.table_col_action{
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}

.table_col_action .el-button+.el-button{
    margin-left: 0px;
}

:deep(.vel_card_override) .el-table__inner-wrapper::before{
    background-color: transparent !important;
}

</style>