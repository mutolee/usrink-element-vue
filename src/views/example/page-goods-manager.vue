<script setup>

import {onMounted, ref} from "vue";
import GoodsDialogAdd from "@/components/common/goods-dialog-add.vue";
import cacheUtil from "@/utils/CacheUtil";
import httpUtil from "@/utils/HttpUtil";

const queryForm = ref({
    shopNo: '',
    shopName: '',
    shopType: [],
    status: ''
})

const loading = ref(true)
const goodsList = ref([])
const shopType = ref([])

onMounted(() => {
    // 初始化商品分类
    initShopType()
    // 初始化商品数据
    initGoodsData()
})

const initShopType = () => {
    cacheUtil.getShopTypeExcludeDisabled().then(res => {
        shopType.value.push(...res)
    }).catch(err => {
        console.error(err)
    })
}

const initGoodsData = () => {
    loading.value = true
    httpUtil.get("data/goods.json").then(res => {
        goodsList.value = res.data.data
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        loading.value = false
    })
}


const isShowAddGoodsDialog = ref({show: false})

const showAddGoodsDialog = () => {
    isShowAddGoodsDialog.value.show = true
}


</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override top">
            <el-form :inline="true" :model="queryForm">
                <el-form-item label="编号">
                    <el-input v-model="queryForm.shopNo" placeholder="商品编号" clearable style="width: 180px"/>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="queryForm.shopName" placeholder="商品名称" clearable style="width: 180px"/>
                </el-form-item>
                <el-form-item label="分类">
                    <el-cascader
                        :props="{expandTrigger:'hover',value:'id',label:'name'}"
                        :options="shopType"
                        size="default"
                        v-model="queryForm.shopType" clearable placeholder="选择分类"/>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="queryForm.status" size="default" placeholder="选择状态" clearable>
                        <el-option label="已上架" value="0"/>
                        <el-option label="待上架" value="1"/>
                        <el-option label="已下架" value="2"/>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-row class="top_btn_panel">
            <el-button type="primary" @click="showAddGoodsDialog">添加商品</el-button>
        </el-row>
        <el-card v-loading="loading" shadow="never" class="vel_card_override content">
            <el-table
                class="shop_table"
                :data="goodsList">
                <el-table-column prop="shopNo" label="编号" sortable width="100"/>
                <el-table-column label="商品名称" min-width="250">
                    <template #default="scope">
                        <div class="shop_name">
                            <el-text>{{ scope.row.shopName }}</el-text>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="thumb" label="缩略图" min-width="150">
                    <template #default="scope">
                        <el-image class="goods_thumb" :src="scope.row.thumb"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="分类" width="180">
                    <template #default="scope">
                        <div class="shop_type">
                            <el-text>{{ scope.row.shopTypeName }}</el-text>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" sortable width="120">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === '0'">已上架</el-tag>
                        <el-tag v-else-if="scope.row.status === '1'" type="warning">待上架</el-tag>
                        <el-tag v-else-if="scope.row.status === '2'" type="info">已下架</el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="230">
                    <template #default="scope">
                        <div class="action_btn">
                            <el-button type="success" plain>编辑</el-button>
                            <el-button type="primary" plain>详情</el-button>
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </template>
                </el-table-column>
                <template #empty>
                    <el-empty description="暂无数据"/>
                </template>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000"/>
        </el-card>
        <goods-dialog-add v-if="isShowAddGoodsDialog.show" :dialog="isShowAddGoodsDialog" @onConfirm=""/>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override.top .el-form {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 15px;
}

.vel_card_override.top .el-form .el-form-item {
    margin-bottom: 0;
    margin-right: 0;
}

.top_btn_panel {
    margin: 15px 0 15px 0;
}

.vel_card_override.content .el-table {
    margin-bottom: 20px;
}

:deep(.shop_table) .shop_name{
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

:deep(.shop_table) .shop_type{
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /* 设置行数 */
}

:deep(.shop_table) .goods_thumb {
    width: 100px;
    height: 70px;
    border: 1px solid #eaeaea;
}

:deep(.shop_table) .action_btn{
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}

:deep(.shop_table) .action_btn .el-button+.el-button{
    margin-left: 0;
}


</style>