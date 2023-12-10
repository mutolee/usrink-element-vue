<script setup>
import {onMounted, ref} from "vue";
import ImageCutterDialog from "@/components/common/image-cutter-dialog.vue";

// 定义传入参数
const props = defineProps(['dialog', 'paramData'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 是否显示弹框
// dialog 数据结构：{show:false}
const dialog = props.dialog

// 打开弹框的参数
const paramData = props.paramData

const labelWidth = '100px'

// 是否显示创建分类中的图片裁剪弹框
const isShowCreateTypeCutImgDialog = ref({show: false})

// 分类表单
const createTypeForm = ref({
    parent: {
        id: 0,
        name: '无',
    },
    name: '',
    icon: ''
})

onMounted(() => {
    // 初始化表单数据，把打开弹框的参数和表单数据进行绑定
    createTypeForm.value = paramData
})

/**
 * 打开创建分类中的图片裁剪弹框
 */
const showCreateTypeCutImgDialog = () => {
    isShowCreateTypeCutImgDialog.value.show = true
}

/**
 * 分类图片裁剪事件回调
 */
const createTypeCutImgCallback = (e) => {
    createTypeForm.value.icon = e.dataURL
}

/**
 * 确定事件
 */
const confirmDialog = () => {
    // 触发事件
    emit('onConfirm', createTypeForm.value)
    closeDialog()
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.show = false

    // 重置表单
    createTypeForm.value.parent.id = 0
    createTypeForm.value.parent.name = '无'
    createTypeForm.value.name = ''
    createTypeForm.value.icon = ''
}
</script>

<template>
    <div class="vel_cpt_panel_dialog_add_shop_type">
        <el-dialog v-model="dialog.show"
                   :title="createTypeForm.parent.id === 0 ? '创建分类' : '添加子分类'">
            <el-form v-model="createTypeForm" :label-width="labelWidth">
                <el-form-item label="父级分类">
                    <el-text style="font-weight: 700">{{ createTypeForm.parent.name }}</el-text>
                </el-form-item>
                <el-form-item label="分类名称">
                    <el-input v-model="createTypeForm.name"/>
                </el-form-item>
                <el-form-item label="图标" class="el_form_item_cut_img">
                    <el-image :src="createTypeForm.icon"
                              style="width: 70px; height: 70px;background-color: #f0f2f5; display: flex;justify-content: center;align-items: center;">
                        <template #error>
                            <p>预览</p>
                        </template>
                    </el-image>
                    <el-button @click="showCreateTypeCutImgDialog">选择图片</el-button>
                </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="closeDialog">取消</el-button>
                <el-button type="primary" @click="confirmDialog">确定</el-button>
            </span>
            </template>
        </el-dialog>
        <image-cutter-dialog :dialog="isShowCreateTypeCutImgDialog" @onConfirm="createTypeCutImgCallback"
                             :cut-width="100"
                             :cut-height="100"></image-cutter-dialog>
    </div>
</template>

<style scoped>

.vel_cpt_panel_dialog_add_shop_type .el-input {
    width: 300px;
}

:deep(.el_form_item_cut_img) .el-form-item__content {
    align-items: self-end;
    gap: 10px;
}
</style>