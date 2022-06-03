<template>
    <div :class="{vel_editor_md_edit:config.editable, vel_editor_md_preview:!config.editable}">
        <mavon-editor @change="change" :style="{height:height}" ref="editor" v-model="valueTxt" placeholder="请开始你的表演！！！"
                      :toolbars="config.toolbar"
                      :editable="config.editable"
                      :toolbarsFlag="config.editable"
                      :subfield="config.editable"
                      :defaultOpen="config.defaultOpen">
        </mavon-editor>
    </div>
</template>

<script>

export default {
    name: "vel_md_editor",
    props: {
        type: {
            type: String,
            default: 'preview'
        },
        content: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: 'auto'
        }
    },
    data() {
        return {
            valueTxt: this.content,
            config: {
                editable: this.type === 'edit' ? true : false,
                defaultOpen: this.type === 'edit' ? null : this.type,
                toolbar: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    // readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    // save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    // navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                }
            }
        }
    },
    methods: {
        change(value, render) {
            this.$emit('change', value, render)
        }
    }
}
</script>

<style scoped>
.vel_editor_md_edit {
    border: 1px solid #edeeef;
    border-radius: 4px;
}

.v-note-wrapper {
    box-shadow: none !important;
}

</style>

<style>

.vel_editor_md_preview .v-show-content {
    padding: 0 !important;
    background-color: unset !important;
}

.v-note-wrapper .v-note-panel .v-note-show {
    transition: none !important;
}

.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper {
    padding: 15px !important;
}

.hljs {
    background-color: unset !important;
}
</style>
