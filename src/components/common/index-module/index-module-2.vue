<script setup>

// 定义传入参数
const props = defineProps(['width'])

// 组件宽度
const width = props.width
const height = width / 4;

</script>

<template>
    <div class="vel_cpt_panel_index_module_2" :style="{width:width + 'px'}">
        <div class="item_con" v-for="item in [1,2,3,4,5,6,7,8]" :key="item" :style="{width:height + 'px',height:height + 'px'}">
            <el-avatar :size="height - height * 0.4" />
            <el-text>推荐模块</el-text>
        </div>
    </div>
</template>

<style scoped>
    .vel_cpt_panel_index_module_2{
        display: flex;
        flex-wrap:wrap;
        padding: 10px 0;
    }
    .vel_cpt_panel_index_module_2 .item_con{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
    }
</style>