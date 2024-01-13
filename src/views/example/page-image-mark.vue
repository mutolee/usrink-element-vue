<script setup>

import {ref} from "vue";

const annotations = ref([]);

/**
 * 处理添加标注的逻辑
 * @param event
 */
const addAnnotation = (event) => {
    let element = event.target
    let rect = element.getBoundingClientRect()
    let x = event.clientX - rect.x;
    let y = event.clientY - rect.y;

    // x,y 实际位置需要便宜12个像素，因为鼠标指针的自定义图标是24x24的
    x += 12;
    y += 12;

    if(element.tagName.toLowerCase() === 'img'){
        // 弹出对话框让用户输入标注文本
        const annotationText = prompt('请输入楼号：');
        if (!annotationText) {
            return;
        }
        // 更新 annotations 数组
        annotations.value.push({ x, y, text: annotationText });
    }
};


</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <div id="imageContainer" ref="imageContainer" @click="addAnnotation">
                <img class="img_panel" src="/res/imgs/shanshui.png" alt="Annotated Image" />
                <div v-for="(annotation, index) in annotations" :key="index" class="annotation" :style="{ left: annotation.x + 'px', top: annotation.y + 'px' }">
                    {{ annotation.text }}
                </div>
            </div>
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

#imageContainer {
    position: relative;
}

.img_panel {
    display: block;
    width: 400px;
    height: auto;
}

.img_panel:hover {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" height="24" width="24" viewBox="0 0 24 24"><g transform="translate(0,0)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></g></svg>'), auto;
}

.annotation {
    position: absolute;
    background-color: #ff0000;
    color: #ffffff;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    transform: translate(-50%, -50%);
}
</style>