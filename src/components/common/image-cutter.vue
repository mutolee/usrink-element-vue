<script setup>
import ImgCutter from 'vue-img-cutter'
import {ref} from "vue";

// 定义传入参数
const props = defineProps(['dialog', 'cutWidth', 'cutHeight'])
// 定义抛出事件
const emit = defineEmits(['cutDown'])

// 是否显示弹框
const dialog = props.dialog
// dialog 数据结构：
// {val:false}

// 实时裁剪的图片地址
const imgCutterPreview = ref('')

/**
 * 图片裁剪事件
 */
const cutDown = (e) => {
    dialog.val = false;
    // 触发事件
    emit('cutDown', e)
}

/**
 * 裁剪的图片实时预览
 */
const cutPreview = (e) => {
    imgCutterPreview.value = e.dataURL
}

/**
 * 关闭弹框
 */
const closeDialog = () => {
    dialog.val = false
    imgCutterPreview.value = ''
}
</script>

<template>
    <div class="vel_div_override">
        <el-dialog v-model="dialog.val"
                   title="图片裁剪"
                   :close-on-click-modal="false"
                   :width="900">
            <el-row class="vel_row_override">
                <el-col :span="15">
                    <ImgCutter v-on:cutDown="cutDown"
                               v-on:onPrintImg="cutPreview"
                               v-on:onClearAll="closeDialog"
                               :isModal="false"
                               :sizeChange="false"
                               :box-height="400"
                               :box-width="515"
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
                </el-col>
                <el-col :span="9">
                    <div class="image-cutter-preview">
                        <el-image :src="imgCutterPreview">
                            <template #error>
                                <p>预览</p>
                            </template>
                        </el-image>
                    </div>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<style scoped>

:deep(.vel_row_override) .copyright {
    display: none !important;
}

.image-cutter-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}

:deep(.vel_row_override) .i-dialog-footer {
    height: auto !important;
    margin-bottom: 0px;
}
</style>