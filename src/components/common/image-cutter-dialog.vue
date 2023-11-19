<script setup>
import ImgCutter from 'vue-img-cutter'
import {ref} from "vue";

// 定义传入参数
const props = defineProps(['dialog', 'cutWidth', 'cutHeight'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 是否显示弹框
// dialog 数据结构：{show:false}
const dialog = props.dialog

// 实时裁剪的图片地址
const imgCutterPreview = ref('')


/**
 * 裁剪的图片实时预览
 */
const cutPreview = (e) => {
    imgCutterPreview.value = e.dataURL
}

/**
 * 图片裁剪事件
 */
const confirmDialog = (e) => {
    // 触发事件
    emit('onConfirm', e)
    closeDialog()
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.show = false
    imgCutterPreview.value = ''
}
</script>

<template>
    <div class="vel_cpt_panel_dialog_img_cut">
        <el-dialog v-model="dialog.show"
                   title="图片裁剪"
                   :close-on-click-modal="false"
                   :width="830">
            <div class="img_cut_panel">
                <div class="img_cut_tool_panel">
                    <ImgCutter v-on:cutDown="confirmDialog"
                               v-on:onPrintImg="cutPreview"
                               v-on:onClearAll="closeDialog"
                               :isModal="false"
                               :sizeChange="false"
                               :box-height="400"
                               :box-width="480"
                               :cutWidth="props.cutWidth"
                               :cutHeight="props.cutHeight"
                               accept="image/jpeg ,image/png"
                               fileType="png">
                        <template #scaleReset>
                            <span>缩放</span>
                        </template>
                        <template #turnLeft>
                            <span>左转</span>
                        </template>
                        <template #turnRight>
                            <span>右转</span>
                        </template>
                        <template #reset>
                            <span>重置</span>
                        </template>
                        <template #flipHorizontal>
                            <span>左右</span>
                        </template>
                        <template #flipVertically>
                            <span>上下</span>
                        </template>
                    </ImgCutter>
                </div>
                <div class="img_cut_preview_panel">
                    <el-image :src="imgCutterPreview">
                        <template #error>
                            <p>预览</p>
                        </template>
                    </el-image>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style scoped>

.img_cut_panel{
    display: flex;
    gap: 20px;
}

:deep(.img_cut_tool_panel) .copyright {
    display: none !important;
}

:deep(.img_cut_tool_panel) .i-dialog-footer {
    height: auto !important;
    margin-bottom: 0px;
}

.img_cut_preview_panel{
    width: 100%;
    background-color: #f4f4f5;
    display: flex;
    justify-content:center;
    align-items: center;
}

.img_cut_preview_panel .el-image {
    color: #999999;
    font-size: 30px;
}

</style>