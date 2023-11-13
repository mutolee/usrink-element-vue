<script setup>
const tableData = [
    {
        id: 1,
        name: '笔记本',
        icon: 'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
    },
    {
        id: 2,
        name: '台式机',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg',
    },
    {
        id: 3,
        name: '电脑组件',
        icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
        children: [
            {
                id: 31,
                name: '显示器',
                icon: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
            },
            {
                id: 32,
                name: '主板',
                icon: 'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
            },
        ],
    },
    {
        id: 4,
        name: '外设产品',
        icon: 'https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg',
    },
]
</script>

<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <el-row style="margin-bottom: 10px">
                <el-button type="primary" plain>创建分类</el-button>
            </el-row>
            <el-table
                :data="tableData"
                style="width: 100%; margin-bottom: 20px"
                row-key="id"
                default-expand-all>
                <el-table-column prop="name" label="分类名称" width="200"/>
                <el-table-column prop="icon" label="图标">
                    <template #default="scope">
                        <el-image :src="scope.row.icon" style="width: 50px; height: 50px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-row>
                            <template v-if="scope.row.children">
                                <el-button type="primary" plain>添加子分类</el-button>
                            </template>
                            <el-button type="success" plain>编辑</el-button>
                            <el-button type="danger" plain>删除</el-button>
                        </el-row>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {
    /*height: calc(100vh - 90px - 20px - 20px - 2px);*/
}
</style>