<script setup>
import VelTimeline from "@/components/common/_vel-cpt/vel-timeline.vue";
import {ref} from "vue";
import VelDescriptions from "@/components/common/_vel-cpt/vel-descriptions.vue";
import VelDescriptionsItem from "@/components/common/_vel-cpt/vel-descriptions-item.vue";

const props = defineProps(['dialog'])

// 备注列表
const descList = ref([
    {
        id: "1",
        data: '2021-03-12 12:12:12',
        title: '商家通过【代客下单】创建订单,管理员账号：test'
    },
    {
        id: "2",
        isActive: true,
        time: '2021-03-12 12:12:12',
        desc: '商家通过【代客下单】创建订单,管理员账号：test'
    }
])

// 商品列表
const goodsList = ref([
    {
        shopNo: "#9",
        shopName: "神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",
        thumb: "https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",
        goodsCount: 2,
        goodsPrice: 45.99,
        status: "0"
    },
    {
        shopNo: "#9",
        shopName: "神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",
        thumb: "https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",
        goodsCount: 2,
        goodsPrice: 45.99,
        status: "-1"
    }
])

// 订单变动记录
const orderChangeList = ref([
    {
        id: "1",
        isActive: true,
        time: '2021-03-12 12:12:12',
        title: '商家通过【代客下单】创建订单,管理员账号：test',
        desc: '订单状态：待支付'
    },
    {
        id: "2",
        data: '2021-03-12',
        time: '12:12:12',
        title: '商家通过【代客下单】创建订单,管理员账号：test',
        desc: '订单状态：待支付'
    }
])

// 物流信息
const wlData = ref([
    {
        id: "1",
        shopNo: "#9",
        shopName: "神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",
        thumb: "https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",
        goodsCount: 2,
        status: "0"
    }
])

</script>

<template>
    <div class="vel_cpt_panel_order_info_article">
        <el-drawer v-model="dialog.show" size="80%" direction="rtl" class="vel_drawer_override">
            <template #header>
                <div class="order-info-header">
                    <el-button type="warning" plain>订单发货</el-button>
                    <el-button type="info" plain>关闭订单</el-button>
                    <el-divider direction="vertical"/>
                    <el-button type="primary" plain>打印订单</el-button>
                </div>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="order-info-con">
                            <div class="order-info-item">
                                <el-descriptions title="订单信息">
                                </el-descriptions>
                                <vel-descriptions>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">交易流水号：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>167877165981809751000</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">订单编号：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>202303141327975001</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">创建时间：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>2024-12-12 12:12:12</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">订单金额：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>￥99.99</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">订单状态：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-tag size="small" type="warning">待支付</el-tag>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">租赁周期：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>2023-12-12 到 2024-12-12</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                </vel-descriptions>
                            </div>
                            <div class="order-info-item">
                                <el-descriptions title="收货信息">
                                </el-descriptions>
                                <vel-descriptions>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">收件人：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>杨林恩</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">联系电话：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>18721272099</el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="info">收货地址：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>
                                                北京市-北京市-东城区-123北京市-北京市-东城区-123北京市-北京市-东城区-123北京市-北京市-东城区-123
                                            </el-text>
                                        </template>
                                    </vel-descriptions-item>
                                    <vel-descriptions-item>
                                        <template #name>
                                            <el-text type="danger">买家备注：</el-text>
                                        </template>
                                        <template #desc>
                                            <el-text>阿基拉第三方，久啊老师的放假啦，阿基拉打扫房间阿里，久啊离开时代峰峻拉，
                                                啊记录卡束带结发了，辣椒水都发了，阿斯蒂芬。
                                            </el-text>
                                        </template>
                                    </vel-descriptions-item>
                                </vel-descriptions>
                            </div>
                            <div class="order-info-item">
                                <el-descriptions title="备注信息">
                                </el-descriptions>
                                <vel-timeline :timelines="descList"/>
                                <el-form label-width="100px" style="margin-top: 20px">
                                    <el-form-item label="添加备注：">
                                        <el-input type="textarea" :rows="2"
                                                  placeholder="添加订单的记录信息，如：商品xxx损坏..."/>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary">添加备注</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="order-info-item">
                                <div class="order-info-item-wl-top">
                                    <el-descriptions title="物流信息">
                                    </el-descriptions>
                                    <div class="order-wl-header">
                                        <el-button type="primary">创建包裹</el-button>
                                    </div>
                                </div>
                                <div class="order-info-item-wl-con">
                                    <div class="order_wl_table_header">
                                        <div class="order_wl_table_header_left">
                                            <el-text tag="b" size="large">包裹1</el-text>
                                            <el-text style="margin-left: 20px"><el-text type="info">物流公司：</el-text>顺丰物流</el-text>
                                            <el-text style="margin-left: 30px"><el-text type="info">运单号：</el-text>1231313123123123123</el-text>
                                        </div>
                                        <div class="order_wl_table_header_right">
                                            <el-button type="success" plain size="small">编辑</el-button>
                                            <el-button type="danger" plain size="small">删除</el-button>
                                        </div>
                                    </div>
                                    <el-table class="order_info_wl_table" :data="wlData" border style="width: 100%">
                                        <el-table-column label="商品编号" prop="shopNo" width="100"></el-table-column>
                                        <el-table-column label="缩略图" width="150">
                                            <template #default="item">
                                                <el-image class="goods_thumb" :src="item.row.thumb"></el-image>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="商品名称" min-width="300">
                                            <template #default="item">
                                                <div class="shop_name">
                                                    <el-text>{{ item.row.shopName }}</el-text>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="数量" prop="goodsCount"></el-table-column>
                                        <el-table-column label="状态" width="90">
                                            <template #default="item">
                                                <el-text v-if="item.row.status === '0'">正常</el-text>
                                                <el-text v-else-if="item.row.status === '-1'" type="danger">已取消</el-text>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="操作" fixed="right" width="120">
                                            <template #default>
                                                <div class="shop_action">
                                                    <el-button type="danger" plain size="small">删除</el-button>
                                                </div>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                <div class="order-info-item-wl-con">
                                    <div class="order_wl_table_header">
                                        <div class="order_wl_table_header_left">
                                            <el-text tag="b" size="large">包裹2</el-text>
                                            <el-text style="margin-left: 20px"><el-text type="info">物流公司：</el-text>顺丰物流</el-text>
                                            <el-text style="margin-left: 30px"><el-text type="info">运单号：</el-text>1231313123123123123</el-text>
                                        </div>
                                        <div class="order_wl_table_header_right">
                                            <el-button type="success" plain size="small">编辑</el-button>
                                            <el-button type="danger" plain size="small">删除</el-button>
                                        </div>
                                    </div>
                                    <el-table class="order_info_wl_table" :data="wlData" border style="width: 100%">
                                        <el-table-column label="商品编号" prop="shopNo" width="100"></el-table-column>
                                        <el-table-column label="缩略图" width="150">
                                            <template #default="item">
                                                <el-image class="goods_thumb" :src="item.row.thumb"></el-image>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="商品名称" min-width="300">
                                            <template #default="item">
                                                <div class="shop_name">
                                                    <el-text>{{ item.row.shopName }}</el-text>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="数量" prop="goodsCount"></el-table-column>
                                        <el-table-column label="状态" width="90">
                                            <template #default="item">
                                                <el-text v-if="item.row.status === '0'">正常</el-text>
                                                <el-text v-else-if="item.row.status === '-1'" type="danger">已取消</el-text>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="操作" fixed="right" width="120">
                                            <template #default>
                                                <div class="shop_action">
                                                    <el-button type="danger" plain size="small">删除</el-button>
                                                </div>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            <div class="order-info-item">
                                <el-descriptions title="商品信息">
                                </el-descriptions>
                                <el-table class="order_info_shop_table" :data="goodsList" border show-summary
                                          style="width: 100%">
                                    <el-table-column label="商品编号" prop="shopNo" width="100"></el-table-column>
                                    <el-table-column label="缩略图" width="150">
                                        <template #default="item">
                                            <el-image class="goods_thumb" :src="item.row.thumb"></el-image>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="商品名称" min-width="300">
                                        <template #default="item">
                                            <div class="shop_name">
                                                <el-text>{{ item.row.shopName }}</el-text>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="数量" prop="goodsCount" width="100"></el-table-column>
                                    <el-table-column label="价格" prop="goodsPrice" width="100"></el-table-column>
                                    <el-table-column label="状态" width="90">
                                        <template #default="item">
                                            <el-text v-if="item.row.status === '0'">正常</el-text>
                                            <el-text v-else-if="item.row.status === '-1'" type="danger">已取消</el-text>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作" fixed="right" width="120">
                                        <template #default="item">
                                            <div class="shop_action">
                                                <el-button type="primary" size="small" plain v-if="item.row.status === '0'">取消
                                                </el-button>
                                                <el-button type="warning" size="small" plain v-else-if="item.row.status === '-1'">
                                                    恢复
                                                </el-button>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="order-info-item">
                                <el-descriptions title="订单状态流转记录">
                                </el-descriptions>
                                <vel-timeline :timelines="orderChangeList"/>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>
.vel_cpt_panel_order_info_article :deep(.vel_drawer_override) .el-drawer__header {
    margin-bottom: 20px;
}

.vel_cpt_panel_order_info_article :deep(.vel_drawer_override) .el-drawer__body {
    padding: 0;
}

:deep(.vel_drawer_override) {
    background-color: #f6f8f9;
}

.order-info-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.order-info-header .el-button {
    margin-left: 0;
}

.dialog_con {
    height: calc(100vh - 60px);
}

.order-info-con {
    padding: 0 20px 20px 20px;
}

.order-info-item {
    padding: 20px;
    background-color: #ffffff;
    margin-bottom: 20px;
}

.order-info-item:last-child {
    margin-bottom: 0;
}

:deep(.order-info-item) .el-descriptions__title {
    padding-left: 10px;
    border-left: 5px solid #409EFF;
}

:deep(.order-info-item) .el-table {
    margin-bottom: 0 !important;
}

:deep(.order-info-item .order_info_shop_table) .goods_thumb {
    width: 100px;
    height: 70px;
    border: 1px solid #eaeaea;
}

:deep(.order-info-item .order_info_shop_table) .shop_name {
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.order-info-item-wl-con{
    margin-bottom: 20px;
}

.order-info-item-wl-con:last-child{
    margin-bottom: 0;
}

.order-info-item-wl-con .order_wl_table_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.order_wl_table_header_left{
    display: flex;
    flex: 1;
}

.order_wl_table_header_right{
    display: flex;
    column-gap: 15px;
}

.order_wl_table_header_right .el-button{
    margin-left: 0;
}

:deep(.order-info-item .order_info_wl_table) .goods_thumb {
    width: 100px;
    height: 70px;
    border: 1px solid #eaeaea;
}

:deep(.order-info-item .order_info_wl_table) .shop_name {
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

:deep(.order-info-item .order_info_wl_table) .goods_thumb {
    width: 100px;
    height: 70px;
    border: 1px solid #eaeaea;
}

.order_wl_table_header {
    border: 1px solid #eaeaea;
    padding: 10px;
}

.order-info-item-wl-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}



</style>