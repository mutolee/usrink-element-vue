<script setup>
import {ArrowRight, Share} from "@element-plus/icons-vue";
import {ref} from "vue";

// 定义传入参数
const props = defineProps(['shopInfo','preViewWidth'])

const preViewWidth = props.preViewWidth
const carouselHeight = (preViewWidth - 40) * 0.7;

// 商品单位
const units = ref([
    {
        label: '天',
        value: '0',
        disabled: false
    },
    {
        label: '月',
        value: '1',
        disabled: true
    },
    {
        label: '小时',
        value: '2',
        disabled: true
    },
])

</script>

<template>
    <div class="preview_con_shop">
        <el-scrollbar>
            <div class="minapp_header">
                <span>商品详情</span>
            </div>
            <div class="shop_carousel_list">
                <el-carousel :height="carouselHeight + 'px'">
                    <el-carousel-item v-for="img in shopInfo.thumbs" :key="img.id">
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
                                    shopInfo.skus[0].price
                                }}</el-text>
                            <el-text>/{{ units[0].label }}</el-text>
                        </span>
                        <el-text type="info" tag="del" size="small">￥{{
                                shopInfo.skus[0].delPrice
                            }}/{{ units[0].label }}
                        </el-text>
                    </div>
                    <div class="tit_item tit">
                        <el-text class="txt" tag="b">
                            {{ shopInfo.shopName }}
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
                    <div v-if="shopInfo.shopDesc !== ''" class="tit_item desc">
                        <el-text type="info" size="small">{{ shopInfo.shopDesc }}</el-text>
                    </div>
                    <div v-if="shopInfo.tags.length > 0" class="tit_item tags">
                        <el-tag v-for="tag in shopInfo.tags" :key="tag" type="danger"
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
                            {{ shopInfo.skus[0].name }}
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
                            <div v-html="shopInfo.shopDetail.val"></div>
                        </el-tab-pane>
                        <el-tab-pane label="租赁流程">Config</el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.preview_con_shop {
    background-color: #ffffff;
    height: calc(100vh - 40px - 20px - 20px - 60px);
    overflow: hidden;
    border-radius: 4px 4px 0 0;
}

.preview_con_shop .minapp_header {
    background: url("/res/imgs/minapp-header-bg.png") no-repeat 50%/cover;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.preview_con_shop .minapp_header span {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}

.preview_con_shop .shop_carousel_list .el-carousel {
    background-color: #f0f2f5;
}

.preview_con_shop :deep(.shop_carousel_list) .el-carousel__indicators--horizontal {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: none;
    left: 0;
}

.preview_con_shop .shop_info_panel {
    background-color: #f0f2f5;
}

.preview_con_shop .tit_panel,
.preview_con_shop .shop_info_panel .sku_panel,
.preview_con_shop .choose_time_panel,
.preview_con_shop .detail_panel {
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
}

.preview_con_shop .tit_item:not(:last-child) {
    padding-bottom: 10px;
}

.preview_con_shop .tit_item.tags {
    display: flex;
    flex-wrap: wrap;
}

.preview_con_shop .tit_item.tags .el-tag {
    margin-right: 5px;
    margin-bottom: 3px;
}

.preview_con_shop .price .price_real {
    padding-right: 7px;
}

.preview_con_shop .price .el-text {
    color: red;
}

.preview_con_shop .tit_panel .tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.preview_con_shop .tit .txt {
    flex-grow: 1;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.preview_con_shop .tit .share {
    min-width: 50px;
}

.preview_con_shop .tit .share_con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.preview_con_shop .tit_item.desc {
    display: flex;
}

.preview_con_shop .tit_item.desc .el-text {
    flex-grow: 1;
}

.preview_con_shop .sku_panel .sku_info {
    display: flex;
    justify-content: space-between;
}

.preview_con_shop .sku_info .sku_name {
    flex-grow: 1;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.sku_right {
    display: flex;
}

.sku_right .sku_num {
    width: 40px;
    text-align: center;
}

.sku_right .choose_more_arrow {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.choose_time_panel) .el-step:last-child {
    flex-basis: 0 !important;
}

.choose_time_panel .time_panel {
    display: flex;
}

.choose_time_panel .el-steps {
    flex-grow: 1;
}

.choose_time_panel .choose_more_arrow {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.detail_panel) .el-tab-pane img {
    width: 100% !important;
    height: auto !important;
    vertical-align: bottom;
}

:deep(.goods_detail) p {
    word-wrap: break-word;
    white-space: pre-wrap;
}

:deep(.goods_detail) table {
    border-collapse: collapse;
}

:deep(.goods_detail) table th {
    background-color: #f5f2f0;
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
}

:deep(.goods_detail) table td {
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
    text-align: center;
}
</style>