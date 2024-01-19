<script setup>
import {ref} from "vue";
import {ArrowDown, ArrowUp} from "@element-plus/icons-vue";
import OrderDialogInfo from "@/components/common/order-dialog-info.vue";
import usrDescriptions from "@/components/common/_usr-cpt/usr-descriptions.vue";
import usrDescriptionsItem from "@/components/common/_usr-cpt/usr-descriptions-item.vue";

const queryForm = ref({
    serialNo: '',
    orderNo: '',
    contactPhone: '',
    dateRange: [],
    status: null
})

const loading = ref(false)
const orderList = ref([
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 1,
        goodsList: [
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
        ]
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 4,
        goodsList: []
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 1,
        goodsList: [
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
        ]
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 4,
        goodsList: []
    },{
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 1,
        goodsList: [
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
        ]
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 4,
        goodsList: []
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 1,
        goodsList: [
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
        ]
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 4,
        goodsList: []
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 1,
        goodsList: [
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
        ]
    },
    {
        serialNo: '167877165981809751000',
        orderNo: '202303141327975001',
        createTime: '2023-12-31',
        cycleStartTime: '2023-12-31',
        cycleEndTime: '2024-12-12',
        orderPrice: 99.99,
        status: 4,
        goodsList: []
    }
])

/**
 * 清空查询表单
 */
const clearQueryForm = () => {
    queryForm.value.serialNo = ''
    queryForm.value.orderNo = ''
    queryForm.value.contactPhone = ''
    queryForm.value.dateRange = []
}

/**
 * 日期选择器禁用日期范围
 */
const disabledDate = time => {
    // 设置范围为30天前至今天
    const now = new Date();
    now.setDate(now.getDate() - 30);
    const end = new Date();
    return time.getTime() < now.getTime() || time.getTime() > end.getTime();
}

// ---------------------------- 订单详情 ----------------------------
// 是否显示订单详情弹框
const isShowOrderInfoDialog = ref({show: false})

/**
 * 显示订单详情弹框
 */
const showOrderInfoDialog = () => {
    isShowOrderInfoDialog.value.show = true
}
// ---------------------------- 订单详情 ----------------------------

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="usr_card_override top">
            <el-form :inline="true" :model="queryForm">
                <el-form-item label="流水号">
                    <el-input v-model="queryForm.serialNo" placeholder="支付流水号" clearable style="width: 180px"/>
                </el-form-item>
                <el-form-item label="订单号">
                    <el-input v-model="queryForm.orderNo" placeholder="订单号" clearable style="width: 180px"/>
                </el-form-item>
                <el-form-item label="收件人电话">
                    <el-input v-model="queryForm.contactPhone" placeholder="收件人电话" clearable style="width: 180px"/>
                </el-form-item>
                <el-form-item label="下单时间">
                    <el-date-picker
                        v-model="queryForm.dateRange"
                        type="daterange"
                        :editable="false"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        size="default"
                        value-format="YYYY-MM-DD"
                        :disabled-date="disabledDate"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="">搜索</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" plain @click="clearQueryForm">清空</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-row class="top_btn_panel">
            <el-radio-group v-model="queryForm.status" size="large">
                <el-radio-button label="null">全部</el-radio-button>
                <el-radio-button label="0">待支付</el-radio-button>
                <el-radio-button label="1">待发货</el-radio-button>
                <el-radio-button label="2">已发货</el-radio-button>
                <el-radio-button label="3">已收货</el-radio-button>
                <el-radio-button label="4">已完成</el-radio-button>
                <el-radio-button label="5">已关闭</el-radio-button>
                <el-radio-button label="-1">退款中</el-radio-button>
            </el-radio-group>
        </el-row>
        <el-card v-loading="loading" shadow="never" class="usr_card_override content">
            <el-table
                class="order_table"
                :data="orderList">
                <el-table-column type="expand">
                    <template #default="scope">
                        <div class="table_column_expand">
                            <div class="order-detail">
                                <el-descriptions title="订单信息">
                                </el-descriptions>
                                <usr-descriptions>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">交易流水号：</el-text></template>
                                        <template #desc><el-text>167877165981809751000</el-text></template>
                                    </usr-descriptions-item>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">订单编号：</el-text></template>
                                        <template #desc><el-text>202303141327975001</el-text></template>
                                    </usr-descriptions-item>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">创建时间：</el-text></template>
                                        <template #desc><el-text>2024-12-12 12:12:12</el-text></template>
                                    </usr-descriptions-item>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">订单金额：</el-text></template>
                                        <template #desc><el-text>￥99.99</el-text></template>
                                    </usr-descriptions-item>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">订单状态：</el-text></template>
                                        <template #desc>
                                            <el-tag v-if="scope.row.status === 0" size="small" type="warning">待支付
                                            </el-tag>
                                            <el-tag v-else-if="scope.row.status === 1" size="small" type="danger">待发货
                                            </el-tag>
                                            <el-tag v-else-if="scope.row.status === 2" size="small">已发货</el-tag>
                                            <el-tag v-else-if="scope.row.status === 3" size="small">已收货</el-tag>
                                            <el-tag v-else-if="scope.row.status === 4" size="small" type="success">已完成
                                            </el-tag>
                                            <el-tag v-else-if="scope.row.status === 5" size="small" type="info">已关闭
                                            </el-tag>
                                            <el-tag v-else-if="scope.row.status === -1" size="small" type="danger">退款中
                                            </el-tag>
                                        </template>
                                    </usr-descriptions-item>
                                    <usr-descriptions-item>
                                        <template #name><el-text type="info">租赁周期：</el-text></template>
                                        <template #desc><el-text>2023-12-12 到 2024-12-12</el-text></template>
                                    </usr-descriptions-item>
                                </usr-descriptions>
                            </div>
                            <div class="order-detail">
                                <el-descriptions title="商品信息" />
                                <el-table class="order_shop_table" :data="scope.row.goodsList" border show-summary style="width: 100%">
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
                                    <el-table-column label="状态">
                                        <template #default="item">
                                            <el-text v-if="item.row.status === '0'">正常</el-text>
                                            <el-text v-else-if="item.row.status === '-1'" type="danger">已取消</el-text>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="订单号" sortable width="280">
                    <template #default="scope">
                        <div class="order_no_panel">
                            <el-text>
                                <el-text type="info">订单号：</el-text>
                                {{ scope.row.orderNo }}
                            </el-text>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="下单时间" sortable width="150">
                    <template #default="scope">
                        <div class="order_createTime">
                            <el-text>{{ scope.row.createTime }}</el-text>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="租赁周期" width="150">
                    <template #default="scope">
                        <div class="order_cycle_panel">
                            <el-text>
                                <el-icon size="16"><ArrowDown /></el-icon>
                                {{ scope.row.cycleStartTime }}
                            </el-text>
                            <el-text>
                                <el-icon size="16"><ArrowUp /></el-icon>
                                {{ scope.row.cycleEndTime }}
                            </el-text>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="商品数量" width="100" align="center">
                    <template #default="scope">
                        <el-text>{{ scope.row.goodsList.length }}</el-text>
                    </template>
                </el-table-column>
                <el-table-column label="订单金额" sortable width="120" align="center">
                    <template #default="scope">
                        <el-text>￥{{ scope.row.orderPrice }}</el-text>
                    </template>
                </el-table-column>
                <el-table-column label="状态" sortable width="120">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 0" type="warning">待支付</el-tag>
                        <el-tag v-else-if="scope.row.status === 1" type="danger">待发货</el-tag>
                        <el-tag v-else-if="scope.row.status === 2">已发货</el-tag>
                        <el-tag v-else-if="scope.row.status === 3">已收货</el-tag>
                        <el-tag v-else-if="scope.row.status === 4" type="success">已完成</el-tag>
                        <el-tag v-else-if="scope.row.status === 5" type="info">已关闭</el-tag>
                        <el-tag v-else-if="scope.row.status === -1" type="danger">退款中</el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" min-width="230">
                    <template #default="scope">
                        <div class="action_btn">
                            <el-button type="success" plain>编辑</el-button>
                            <el-button type="primary" plain @click="showOrderInfoDialog">详情</el-button>
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
        <order-dialog-info v-if="isShowOrderInfoDialog.show" :dialog="isShowOrderInfoDialog"></order-dialog-info>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.usr_card_override.top .el-form {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 15px;
}

.usr_card_override.top .el-form .el-form-item {
    margin-bottom: 0;
    margin-right: 0;
}

.top_btn_panel {
    margin: 15px 0 15px 0;
}

.usr_card_override.content .el-table {
    margin-bottom: 20px;
}

.order_table .order_no_panel,
.order_table .order_cycle_panel {
    display: flex;
    flex-direction: column;
}

.order_table .order_no_panel .el-text,
.order_table .order_cycle_panel .el-text {
    align-self: normal;
}

.order_table .table_column_expand {
    padding: 20px;
    background-color: #f6f8f9;
}

:deep(.usr_card_override) .el-table .el-table__cell.el-table__expanded-cell {
    padding: 0;
}

.order_table .order-detail {
    background-color: #ffffff;
    padding: 20px;
}

:deep(.order_table .order-detail) .el-descriptions__title {
    padding-left: 10px;
    border-left: 5px solid #409EFF;
}

:deep(.order_table .order-detail) .el-table {
    margin-bottom: 0 !important;
}

:deep(.order_table .order_shop_table) .goods_thumb {
    width: 100px;
    height: 70px;
    border: 1px solid #eaeaea;
}

:deep(.order_table .order_shop_table) .shop_name{
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}


</style>