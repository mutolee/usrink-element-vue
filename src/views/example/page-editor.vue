<script setup>
// Vue3 富文本编辑器
// 文档地址：https://vueup.github.io/vue-quill/guide/usage.html
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {ref, watch} from "vue";

// 编辑器内容
const htmlContent = ref('<p>123</p>')
// 编辑器工具栏
const toolbar = [
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    ['image']
]

// 监听编辑器内容变化
watch(() => htmlContent.value, newVal => {
    console.log(newVal)
})

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <QuillEditor theme="snow" contentType="html"
                         v-model:content="htmlContent"
                         :toolbar="toolbar"/>
        </el-card>
    </div>
</template>


<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {
    /*height: calc(100vh - 90px - 20px - 20px - 2px);*/
}

</style>