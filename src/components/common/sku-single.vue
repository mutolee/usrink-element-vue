<script setup>

// 定义传入参数
const props = defineProps(['skus'])

// 规格数组，由父节点传进来
const skus = props.skus
// skus 数据结构：
// [{
//     name: '',
//     price: 0.01,
//     delPrice: 0.02,
//     count: 99
// }]

/**
 * 添加一行
 */
const addRow = () => {
    skus.push({
        name: '',
        price: 0.01,
        delPrice: 0.02,
        count: 99
    })
}

/**
 * 删除一行
 * @param index 数组元素下标
 */
const delRow = (index) => {
    // 删除指定下标的元素
    skus.splice(index, 1)
}

</script>

<template>
    <div class="vel_cpt_panel_drawer">
        <el-row :gutter="10">
            <el-col :span="8">
                <el-text>规格名称</el-text>
            </el-col>
            <el-col :span="4">
                <el-text>实际价格</el-text>
            </el-col>
            <el-col :span="4">
                <el-text>划线价格</el-text>
            </el-col>
            <el-col :span="4">
                <el-text>库存</el-text>
            </el-col>
            <el-col :span="4">
                <el-text>操作</el-text>
            </el-col>
        </el-row>
        <el-row :gutter="10" v-for="(item, index) in skus" :key="index">
            <el-col :span="8">
                <el-input type="text" v-model="item.name"/>
            </el-col>
            <el-col :span="4">
                <el-input type="number" v-model="item.price"/>
            </el-col>
            <el-col :span="4">
                <el-input type="number" v-model="item.delPrice"/>
            </el-col>
            <el-col :span="4">
                <el-input type="number" v-model="item.count"/>
            </el-col>
            <el-col :span="4">
                <el-button type="danger" icon="Delete" circle @click="delRow(index)" v-if="skus.length > 1"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" @click="addRow" plain>添加一行</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>

.vel_cpt_panel_drawer .el-row {
    margin-bottom: 10px;
}

</style>