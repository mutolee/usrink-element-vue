<script setup>
// Vue3 Wangeditor 富文本编辑器
// 文档地址：https://www.wangeditor.com/v5/for-frame.html#安装-1
// 引入 css
import '@wangeditor/editor/dist/css/style.css'
import {onBeforeUnmount, ref, shallowRef} from 'vue'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import {ElMessage} from "element-plus";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')
// 工具栏配置
const toolbarConfig = {
    toolbarKeys: [
        'headerSelect',
        '|',
        'bold', 'italic', "through", 'underline', 'color', 'bgColor', 'fontSize', "blockquote","insertTable",
        '|',
        'uploadImage'
    ]
}
// 编辑区配置
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        uploadImage: {
            // 小于该值就插入 base64 格式（而不上传），默认为 0
            base64LimitSize: 5 * 1024, // 5kb
            async customUpload(file, insertFn) {
                // file 即选中的文件
                imgUpload(file,(src)=>{
                    // 自己实现上传，并得到图片 url alt href
                    // 最后插入图片
                    insertFn(src, '', 'javascript:(0);')
                })
            }
        }
    },
    hoverbarKeys: {
        'image': {
            // 清空 image 元素的 hoverbar
            menuKeys: [],
        }
    }
}


/**
 * 图片上传
 * @param file 选择的文件
 * @param cb 回调
 */
const imgUpload = (file, cb) => {
    // 文件大小限制，1M
    let maxFileSize = 1 * 1024 * 1024
    console.log(file)
    if (file.size > maxFileSize ) {
        ElMessage.error("单张图片不能大于1M！");
        return;
    }
    cb('https://www.wangeditor.com/image/logo.png');
}


/**
 * 记录 editor 实例，重要！
 * @param editor
 */
const handleCreated = (editor) => {
    editorRef.value = editor
}

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <Toolbar
                style="border-bottom: 1px solid #e0e0e0"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                mode="simple"
            />
            <Editor
                style="height: 500px; overflow-y: hidden;"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                mode="simple"
                @onCreated="handleCreated"
            />
        </el-card>
        <textarea>{{valueHtml}}</textarea>
    </div>
</template>


<style scoped>
.page {
    padding: 20px;
}

:deep(.vel_card_override) .el-card__body {
    padding: 0;
}


</style>