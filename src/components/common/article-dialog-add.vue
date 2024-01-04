<script setup>
import DateUtil from "@/utils/DateUtil.js";
import {ref} from "vue";
import PreviewArticle from "@/components/common/preview-article.vue";
import VelEditor from "@/components/common/_vel-cpt/vel-editor.vue";

const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 预览宽度
const preViewWidth = ref(400);
// 文章表单
const formRef = ref(null)

// 文章表单
const articleForm = ref({
    articleNo: '',
    articleTitle: '',
    status: '1',
    showTit: true,
    showSide: true,
    createTime: DateUtil.getCurrentDateTime(),
    articleDetail: {val: '<p></p>'}
})

/**
 * 表单验证规则
 */
const formRules = ref({
    articleTitle: [
        {required: true, message: '文章标题不能为空！', trigger: 'blur'},
        {min: 8, max: 40, message: '长度在 8 到 40 个字符', trigger: 'blur'}
    ],
    status: [
        {required: true, message: '请选择状态', trigger: 'change'}
    ]
});


/**
 * 保存表单
 */
const onConfirm = async () => {
    try {
        await formRef.value.validate();
        console.log("表单验证通过")
        emit('onConfirm', articleForm.value)
    } catch (error) {
        // 表单验证未通过，不执行提交操作
        console.log('表单验证未通过');
    }
}


</script>

<template>
    <div class="vel_cpt_panel_drawer_add_article">
        <el-drawer v-model="dialog.show" size="80%" direction="rtl" class="vel_drawer_override">
            <template #header>
                <h4>添加文章</h4>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="page_left" :style="{width:preViewWidth + 'px', minWidth:preViewWidth + 'px'}">
                            <div class="page_left_con">
                                <div class="preview">
                                    <preview-article :articleInfo="articleForm" :preViewWidth="preViewWidth"/>
                                    <div class="preview_publish">
                                        <el-button type="primary" size="large" @click="onConfirm">保存
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_right" style="flex: 1">
                            <div class="page_right_con">
                                <el-card shadow="never" class="vel_card_override">
                                    <div class="add_article_panel">
                                        <el-scrollbar>
                                            <el-form :model="articleForm" ref="formRef" :rules="formRules"
                                                     label-width="120px">
                                                <el-form-item label="标题" prop="articleTitle"
                                                              style="padding-top: 20px">
                                                    <el-input v-model="articleForm.articleTitle" clearable
                                                              style="width: 400px"/>
                                                </el-form-item>
                                                <el-form-item label="显示标题">
                                                    <el-switch v-model="articleForm.showTit"/>
                                                </el-form-item>
                                                <el-form-item label="内容边隙">
                                                    <el-switch v-model="articleForm.showSide"/>
                                                </el-form-item>
                                                <el-form-item label="状态" prop="status">
                                                    <el-select v-model="articleForm.status" clearable size="default"
                                                               placeholder="选择状态">
                                                        <el-option label="已上架" value="0"/>
                                                        <el-option label="待上架" value="1"/>
                                                        <el-option label="已下架" value="2"/>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="商品描述">
                                                    <vel-editor :content="articleForm.articleDetail"
                                                                editor_width=""
                                                                :editor_height="450"></vel-editor>
                                                </el-form-item>
                                            </el-form>
                                        </el-scrollbar>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>
.vel_cpt_panel_drawer_add_article :deep(.vel_drawer_override) .el-drawer__header {
    margin-bottom: 0;
}

.vel_cpt_panel_drawer_add_article :deep(.vel_drawer_override) .el-drawer__body {
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

.page_right {
}

.page_right_con {
    padding: 20px 20px 20px 0;
}

:deep(.vel_card_override) .el-card__body {
    padding: 0;
}

.add_article_panel {
    height: calc(100vh - 40px - 20px - 20px - 2px);
    overflow: hidden;
}

.add_article_panel .el-form-item {
    padding-right: 20px;
}
</style>