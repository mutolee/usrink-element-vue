<script setup>
import ImgCutter from 'vue-img-cutter'
import {ref} from "vue";

// 是否显示弹框
const dialog = ref(false)
// 实时裁剪的图片地址
const imgCutterPreview = ref('')

const cutterImgUrl = ref('')

/**
 * 图片裁剪事件
 */
const cutDown = (e) => {
    dialog.value = false;
    cutterImgUrl.value = e.dataURL
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
    dialog.value = false
    imgCutterPreview.value = ''
}

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <el-image :src="cutterImgUrl"
                      style="width: 300px; height: 150px; background-color: #f0f2f5; display: flex;justify-content: center;align-items: center;">
                <template #error>
                    <p>预览</p>
                </template>
            </el-image>
            <br>
            <el-button @click="dialog = true">选择图片</el-button>
            <el-dialog v-model="dialog"
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
                                   :cutWidth="300"
                                   :cutHeight="150"
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

:deep(.vel_card_override) .copyright {
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

:deep(.vel_card_override) .i-dialog-footer {
    height: auto !important;
    margin-bottom: 0px;
}


</style>