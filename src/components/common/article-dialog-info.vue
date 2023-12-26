<script setup>
import PreviewArticle from "@/components/common/preview-article.vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import {computed, ref} from "vue";

const documentWHStore = useDocumentWHStore()
const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 预览宽度
const preViewWidth = ref(400);

// 文章信息
const articleInfo = ref({
    articleNo: '',
    articleTitle: '啊阿拉斯加都发了，阿里卡束带结发拉，拉克丝代发，阿斯蒂芬离开',
    status: '1',
    showTit: true,
    showSide: true,
    articleDetail: {val: '<p>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/></p>'}
})

</script>

<template>
    <div class="vel_cpt_panel_drawer_info_article">
        <el-drawer v-model="dialog.show" :size="preViewWidth" direction="rtl" class="vel_drawer_override">
            <template #header>
                <h4>文章详情</h4>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="page_left" :style="{width:preViewWidth + 'px', minWidth:preViewWidth + 'px'}">
                            <div class="page_left_con">
                                <div class="preview">
                                    <preview-article :articleInfo="articleInfo" :preViewWidth="preViewWidth"/>
                                    <div class="preview_publish">
                                        <el-button type="primary" size="large" @click="onConfirm">编辑
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>
.vel_cpt_panel_drawer_info_article :deep(.vel_drawer_override) .el-drawer__header {
    margin-bottom: 0;
}

.vel_cpt_panel_drawer_info_article :deep(.vel_drawer_override) .el-drawer__body {
    padding: 0;
}

:deep(.vel_drawer_override) {
    background-color: #f6f8f9;
}

.dialog_con {
    height: calc(100vh - 40px);
    display: flex;
}

.page_left {
}

.page_left_con {
    padding: 20px;
}

.page_left_con .preview_publish {
    padding: 20px 0 0 0;
    display: flex;
    align-items: center;
}

.page_left_con .preview_publish .el-button {
    width: 100%;
}
</style>