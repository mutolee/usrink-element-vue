<script setup>
// 定义传入参数
const props = defineProps(['articleInfo', 'preViewWidth'])


</script>

<template>
    <div class="preview_con_article">
        <el-scrollbar>
            <div class="minapp_header">
                <span>文章<el-text type="info">(预览)</el-text></span>
            </div>
            <div class="article_info_panel">
                <div class="tit_panel" v-if="articleInfo.showTit && articleInfo.articleTitle">
                    <el-text class="tit" tag="b" size="large">{{articleInfo.articleTitle}}</el-text>
                    <el-text class="time" type="info">时间：{{articleInfo.createTime}}</el-text>
                </div>
                <div class="content_panel" :class="articleInfo.showSide ? 'padding' : ''">
                    <div class="article_detail" v-html="articleInfo.articleDetail.val"></div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.preview_con_article {
    background-color: #ffffff;
    height: calc(100vh - 40px - 20px - 20px - 60px);
    overflow: hidden;
    border-radius: 4px 4px 0 0;
}

.preview_con_article .minapp_header {
    background: url("/res/imgs/minapp-header-bg.png") no-repeat 50%/cover;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid #f4f4f5;
}

.preview_con_article .minapp_header span {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}

.preview_con_article .article_info_panel {
    background-color: #ffffff;
}

.article_info_panel .tit_panel{
    padding: 20px 10px 10px 10px;
}

.article_info_panel .tit_panel .tit{
    flex-grow: 1;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.article_info_panel .tit_panel .time{
    display: block;
    margin-top: 10px;
}

.article_info_panel .content_panel.padding{
    padding: 10px;
}

:deep(.article_detail) img{
    width: 100% !important;
    height: auto !important;
    vertical-align: bottom;
}

:deep(.article_detail) p {
    word-wrap: break-word;
    white-space: pre-wrap;
}

:deep(.article_detail) table {
    border-collapse: collapse;
}

:deep(.article_detail) table th {
    background-color: #f5f2f0;
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
}

:deep(.article_detail) table td {
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
    text-align: center;
}

</style>