<script setup>
import {computed, ref} from "vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import ImageCutter from "@/components/common/image-cutter.vue";

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

// ---------------------------- 创建一级分类 ----------------------------
// 是否显示创建一级分类弹框
const isShowCreateTypeDialog = ref(false)

// 是否显示创建一级分类中的图片裁剪弹框
const isShowCreateTypeCutImgDialog = ref({val: false})

/**
 * 打卡创建一级分类弹框
 */
const showCreateTypeDialog = () => {
    isShowCreateTypeDialog.value = true
    createTypeForm.value = {}
}

/**
 * 打开创建分类中的图片裁剪弹框
 */
const showCreateTypeCutImgDialog = () => {
    isShowCreateTypeCutImgDialog.value.val = true
}

/**
 * 一级分类图片裁剪事件
 */
const createTypeCutImgCallback = (e) => {
    createTypeForm.value.icon = e.dataURL
}

// 一级分类表单
const createTypeForm = ref({})
// ---------------------------- 创建一级分类 ----------------------------


// ---------------------------- 创建二级分类 ----------------------------
// 是否显示创建二级分类弹框
const isShowCreateTypeSecondDialog = ref(false)

// 是否显示创建二级分类中的图片裁剪弹框
const isShowCreateTypeSecondCutImgDialog = ref({val: false})

/**
 * 打卡创建二级分类弹框
 */
const showCreateTypeSecondDialog = (title) => {
    isShowCreateTypeSecondDialog.value = true
    createTypeSecondForm.value = {
        dialogTit : title
    }
}

/**
 * 打开创建二级分类中的图片裁剪弹框
 */
const showCreateTypeSecondCutImgDialog = () => {
    isShowCreateTypeSecondCutImgDialog.value.val = true
}

/**
 * 二级分类图片裁剪事件
 */
const createTypeSecondCutImgCallback = (e) => {
    createTypeSecondForm.value.icon = e.dataURL
}

// 一级分类表单
const createTypeSecondForm = ref({})
// ---------------------------- 创建二级分类 ----------------------------

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <el-row style="margin-bottom: 10px">
                <el-button type="primary" plain @click="showCreateTypeDialog">创建分类</el-button>
                <el-dialog v-model="isShowCreateTypeDialog" title="创建分类">
                    <el-form v-model="createTypeForm">
                        <el-form-item label="分类名称" :label-width="labelWidth">
                            <el-input v-model="createTypeForm.name"/>
                        </el-form-item>
                        <el-form-item label="图标" :label-width="labelWidth" class="el-form-item-cutImg">
                            <el-image :src="createTypeForm.icon"
                                      style="width: 70px; height: 70px;background-color: #f0f2f5; display: flex;justify-content: center;align-items: center;">
                                <template #error>
                                    <p>预览</p>
                                </template>
                            </el-image>
                            <el-button style="margin-left: 10px" @click="showCreateTypeCutImgDialog">选择图片</el-button>
                            <image-cutter :dialog="isShowCreateTypeCutImgDialog" @cutDown="createTypeCutImgCallback"
                                          :cut-width="100"
                                          :cut-height="100"></image-cutter>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="isShowCreateTypeDialog = false">取消</el-button>
                            <el-button type="primary" @click="isShowCreateTypeDialog = false">确定</el-button>
                        </span>
                    </template>
                </el-dialog>
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
                        <template v-if="scope.row.children">
                            <el-button type="primary" plain @click="showCreateTypeSecondDialog(scope.row.name)">添加子分类</el-button>
                        </template>
                        <el-button type="success" plain>编辑</el-button>
                        <el-button type="danger" plain>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog v-model="isShowCreateTypeSecondDialog" title="添加子分类">
                <el-form v-model="createTypeSecondForm">
                    <el-form-item label="一级分类" :label-width="labelWidth">
                        <el-text style="font-weight: 700">{{createTypeSecondForm.dialogTit}}</el-text>
                    </el-form-item>
                    <el-form-item label="二级分类" :label-width="labelWidth">
                        <el-input v-model="createTypeSecondForm.name"/>
                    </el-form-item>
                    <el-form-item label="图标" :label-width="labelWidth" class="el-form-item-cutImg">
                        <el-image :src="createTypeSecondForm.icon"
                                  style="width: 70px; height: 70px;background-color: #f0f2f5; display: flex;justify-content: center;align-items: center;">
                            <template #error>
                                <p>预览</p>
                            </template>
                        </el-image>
                        <el-button style="margin-left: 10px" @click="showCreateTypeSecondCutImgDialog">选择图片</el-button>
                        <image-cutter :dialog="isShowCreateTypeSecondCutImgDialog"
                                      @cutDown="createTypeSecondCutImgCallback" :cut-width="100"
                                      :cut-height="100"></image-cutter>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="isShowCreateTypeSecondDialog = false">取消</el-button>
                        <el-button type="primary" @click="isShowCreateTypeSecondDialog = false">确定</el-button>
                    </span>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}

.el-input {
    width: 300px;
}

:deep(.el-form-item-cutImg) .el-form-item__content {
    align-items: self-end;
}
</style>