<script setup>
import {ref} from "vue";
import httpUtil from "@/utils/HttpUtil";
import ChooseIndexModuleDialog from "@/components/common/choose-index-module-dialog.vue";

// 定义传入参数
const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 是否显示弹框
// dialog 数据结构：{show:false}
const dialog = props.dialog

const labelWidth = '100px'

// 默认表单数据
const addModuleFormDefault = {
    moduleNo: '',
    moduleTit: '',
    isShowTit: false,
    moduleType: 5
}

// 添加模块数据表单
const addModuleForm = ref({
    ...addModuleFormDefault
})

// 是否显示选择首页模块弹框
const isShowChooseIndexModuleDialog = ref({show: false})

/**
 * 显示模块选择弹框
 */
const showChooseIndexModuleDialog = () => {
    isShowChooseIndexModuleDialog.value.show = true
}

/**
 * 模块选择回调
 * @param e
 */
const chooseIndexModuleCallback = (e) => {
    addModuleForm.value.moduleType = e.type
}

/**
 * 确定事件
 */
const confirmDialog = () => {
    // 触发事件
    emit('onConfirm', addModuleForm.value)
    closeDialog()
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.show = false
    addModuleForm.value = addModuleFormDefault
}
</script>

<template>
    <div class="vel_cpt_panel_dialog_add_module">
        <el-dialog v-model="dialog.show" title="添加模块">
            <el-form v-model="addModuleForm">
                <el-form-item label="编号" :label-width="labelWidth">
                    <el-input v-model="addModuleForm.moduleNo"/>
                </el-form-item>
                <el-form-item label="标题" :label-width="labelWidth" class="vel_from_item_tit">
                    <el-input v-model="addModuleForm.moduleTit"/>
                    <el-checkbox v-model="addModuleForm.isShowTit" label="显示标题" size="large"/>
                </el-form-item>
                <el-form-item label="布局类型" :label-width="labelWidth" class="el_form_item_choose_module">
                    <el-card shadow="never" class="vel_card_thumb_override">
                        <el-image
                            :src="httpUtil.defaults.baseURL + '/res/imgs/index-module-thumb-' + addModuleForm.moduleType + '.jpg'"
                            class="img_thumb"></el-image>
                    </el-card>
                    <el-button @click="showChooseIndexModuleDialog">选择模块类型</el-button>
                </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="closeDialog">取消</el-button>
                <el-button type="primary" @click="confirmDialog()">确定</el-button>
            </span>
            </template>
        </el-dialog>

        <!-- 选择模块类型 -->
        <choose-index-module-dialog :dialog="isShowChooseIndexModuleDialog"
                             @onChoose="chooseIndexModuleCallback"></choose-index-module-dialog>
    </div>
</template>

<style scoped>

.vel_cpt_panel_dialog_add_module .el-input {
    width: 300px;
}

.vel_cpt_panel_dialog_add_module .img_thumb {
    width: 150px;
    height: 75px;
}

:deep(.vel_from_item_tit) .el-form-item__content {
    gap: 10px;
}

:deep(.vel_card_thumb_override) .el-card__body {
    padding: 0;
    display: flex;
}

:deep(.el_form_item_choose_module) .el-form-item__content {
    align-items: self-end;
    gap: 10px;
}

</style>