<script setup>

// 定义传入参数
const props = defineProps(['width'])

// 组件宽度
const width = props.width
const height = width / 2;

</script>

<template>
    <div class="vel_cpt_panel_index_module_1" :style="{width:width + 'px'}">
        <div class="item_con" :style="{width:width + 'px',height:height + 'px'}">
            <el-image>
                <template #error>
                    <el-text>图 1</el-text>
                </template>
            </el-image>
        </div>
    </div>
</template>

<style scoped>
    .vel_cpt_panel_index_module_1 .item_con{
        background-color: #f0f2f5;
    }

    .item_con .el-image{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>