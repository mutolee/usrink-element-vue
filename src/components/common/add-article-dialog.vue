<script setup>

import {ArrowRight, Share} from "@element-plus/icons-vue";
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import {computed, ref} from "vue";

const documentWHStore = useDocumentWHStore()
const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

const drawerWidth = computed(() => documentWHStore.wh.w - 260)

const form = ref({
    articleNo: '',
    articleTitle: '',
    status: '1'
})



</script>

<template>
    <div class="vel_cpt_panel_drawer_add_article">
        <el-drawer v-model="dialog.show" :size="drawerWidth" direction="rtl" class="vel_drawer_override">
            <template #header>
                <h4>添加商品</h4>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="page_left" :style="{width:preViewWidth + 'px', minWidth:preViewWidth + 'px'}">
                            <div class="page_left_con">
                                <div class="preview">
                                    <div class="preview_con">
                                        <el-scrollbar>
                                            <div class="minapp_header">
                                                <span>商品详情</span>
                                            </div>
                                            <div class="shop_carousel_list">
                                                <el-carousel :height="carouselHeight + 'px'">
                                                    <el-carousel-item v-for="img in form.thumbs" :key="img.id">
                                                        <el-image :src="img.src" fit="fill" style="width: 100%"/>
                                                    </el-carousel-item>
                                                </el-carousel>
                                            </div>
                                            <div class="shop_info_panel">
                                                <div class="tit_panel">
                                                    <div class="tit_item price">
                                                    <span class="price_real">
                                                        <el-text>￥</el-text>
                                                        <el-text style="font-size: 22px" tag="b">{{
                                                                skus[0].price
                                                            }}</el-text>
                                                        <el-text>/{{ units[0].label }}</el-text>
                                                    </span>
                                                        <el-text type="info" tag="del" size="small">￥{{
                                                                skus[0].delPrice
                                                            }}/{{ units[0].label }}
                                                        </el-text>
                                                    </div>
                                                    <div class="tit_item tit">
                                                        <el-text class="txt" tag="b">
                                                            {{ form.shopName }}
                                                        </el-text>
                                                        <div class="share">
                                                            <div class="share_con">
                                                                <el-icon>
                                                                    <Share/>
                                                                </el-icon>
                                                                <el-text size="small">分享</el-text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="form.desc !== ''" class="tit_item desc">
                                                        <el-text type="info" size="small">{{ form.desc }}</el-text>
                                                    </div>
                                                    <div v-if="dynamicTags.length > 0" class="tit_item tags">
                                                        <el-tag v-for="tag in dynamicTags" :key="tag" type="danger"
                                                                size="small"
                                                                effect="plain">{{ tag }}
                                                        </el-tag>
                                                    </div>
                                                </div>
                                                <div class="sku_panel">
                                                    <div style="padding-bottom: 10px">
                                                        <el-text tag="b">规格</el-text>
                                                    </div>
                                                    <div class="sku_info">
                                                        <el-text class="sku_name" type="info"
                                                                 size="small">
                                                            {{ skus[0].name }}
                                                        </el-text>
                                                        <div class="sku_right">
                                                            <el-text class="sku_num" type="info">x1</el-text>
                                                            <div class="choose_more_arrow">
                                                                <el-icon>
                                                                    <ArrowRight/>
                                                                </el-icon>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="choose_time_panel">
                                                    <div style="padding-bottom: 10px">
                                                        <el-text tag="b">租赁周期</el-text>
                                                    </div>
                                                    <div class="time_panel">
                                                        <el-steps direction="vertical" :active="1" :space="40">
                                                            <el-step status="wait">
                                                                <template #description>
                                                                    开始时间 : 2023-11-26
                                                                </template>
                                                            </el-step>
                                                            <el-step status="wait">
                                                                <template #description>
                                                                    结束时间 : 2023-11-26
                                                                </template>
                                                            </el-step>
                                                        </el-steps>
                                                        <div class="choose_more_arrow">
                                                            <el-icon>
                                                                <ArrowRight/>
                                                            </el-icon>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="detail_panel">
                                                    <el-tabs :model="0">
                                                        <el-tab-pane label="商品详情" class="goods_detail">
                                                            <div v-html="valueHtml"></div>
                                                        </el-tab-pane>
                                                        <el-tab-pane label="租赁流程">Config</el-tab-pane>
                                                    </el-tabs>
                                                </div>
                                            </div>
                                        </el-scrollbar>
                                    </div>
                                    <div class="preview_publish">
                                        <el-button type="primary" size="large" @click="onConfirm">保存
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_right" :style="{width:drawerWidth - preViewWidth + 'px'}">
                            <div class="page_right_con">
                                <el-card shadow="never" class="vel_card_override">
                                    <div class="add_article_panel">
                                        <el-scrollbar>
                                            <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
                                                <el-form-item label="标题" prop="articleTitle">
                                                    <el-input v-model="form.articleTitle" clearable style="width: 400px"/>
                                                </el-form-item>
                                                <el-form-item label="状态" prop="status">
                                                    <el-select v-model="form.status" clearable size="default"
                                                               placeholder="选择状态">
                                                        <el-option label="已上架" value="0"/>
                                                        <el-option label="待上架" value="1"/>
                                                        <el-option label="已下架" value="2"/>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="商品描述">
                                                    <div class="article_editor"
                                                         :style="{maxWidth:drawerWidth - preViewWidth - 200 + 'px'}">
                                                        <Toolbar
                                                            style="border-bottom: 1px solid #e0e0e0"
                                                            :editor="editorRef"
                                                            :defaultConfig="toolbarConfig"
                                                            mode="simple"
                                                        />
                                                        <Editor
                                                            style="min-height:400px;overflow-y: hidden;"
                                                            v-model="valueHtml"
                                                            :defaultConfig="editorConfig"
                                                            mode="simple"
                                                            @onCreated="handleCreated"
                                                        />
                                                    </div>
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

</style>