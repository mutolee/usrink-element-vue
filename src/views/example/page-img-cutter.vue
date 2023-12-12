<script setup>
import ImageCutterDialog from "@/components/common/image-cutter-dialog.vue";
import {ref} from "vue";

const cutterImgUrl = ref('')
const dialog = ref({show: false})

const cutDown = (e) => {
    cutterImgUrl.value = e.dataURL
}

const openDialog = () => {
    dialog.value.show = true
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
            <el-button @click="openDialog">选择图片</el-button>
        </el-card>
    </div>
    <image-cutter-dialog :dialog="dialog" @onConfirm="cutDown" :cut-width="300" :cut-height="150"></image-cutter-dialog>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}

</style>