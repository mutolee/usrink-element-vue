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
    moduleType: 5,
    status: "0"
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
const confirmDialog = async () => {
    try {
        await formRef.value.validate();
        // 触发事件
        emit('onConfirm', addModuleForm.value)
        closeDialog()
    } catch (error) {
        // 表单验证未通过，不执行提交操作
        console.log('表单验证未通过');
    }
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.show = false
    addModuleForm.value = addModuleFormDefault
}

const formRules = ref({
    moduleNo: [
        {required: true, message: '编号不能为空！', trigger: 'blur'}
    ],
    moduleTit: [
        {required: true, message: '模块名称不能为空！', trigger: 'blur'},
        {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
        // 其他验证规则
    ],
    status: [
        {required: true, message: '请选择状态', trigger: 'change'}
    ]
});

const formRef = ref(null)

</script>

<template>
    <div class="vel_cpt_panel_dialog_add_module">
        <el-dialog v-model="dialog.show" title="添加模块">
            <el-form :model="addModuleForm" ref="formRef" :rules="formRules" :label-width="labelWidth">
                <el-form-item label="编号" prop="moduleNo">
                    <el-input v-model="addModuleForm.moduleNo" clearable/>
                </el-form-item>
                <el-form-item label="标题" prop="moduleTit" class="vel_from_item_tit">
                    <el-input v-model="addModuleForm.moduleTit" clearable/>
                    <el-checkbox v-model="addModuleForm.isShowTit" label="显示标题" size="large"/>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-select v-model="addModuleForm.status" size="default" placeholder="选择状态">
                        <el-option label="正常" value="0"/>
                        <el-option label="停用" value="1"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="布局类型" class="el_form_item_choose_module">
                    <el-card class="vel_card_thumb_override">
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
                <el-button type="primary" @click="confirmDialog">确定</el-button>
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
    column-gap: 10px;
}

.vel_card_thumb_override {
    border: 1px solid transparent;
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