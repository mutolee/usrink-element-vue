<script setup>

// 定义传入参数
const props = defineProps(['width'])

// 组件宽度
const width = props.width
const height = width / 2;

</script>

<template>
    <div class="vel_cpt_panel_index_module_5" >
        <div class="panel_tit" :style="{paddingLeft: width * 0.025 + 'px'}">
            <div class="panel_tit_con">
                <el-text tag="b" size="large">限时抢购</el-text>
            </div>
        </div>
        <div class="panel_con" :style="{width:width + 'px',height:height + 'px'}">
            <div class="item_con" :style="{width:width - width * 0.025 * 2 + 'px',height:height - width * 0.025 * 2 + 'px'}">
                <div class="item" :style="{width:height - width * 0.025 * 1.5 + 'px',height:height/2 - width * 0.025 * 1.5 + 'px'}">
                    <el-image>
                        <template #error>
                            <el-text>图 1</el-text>
                        </template>
                    </el-image>
                </div>
                <div class="item" :style="{width:height - width * 0.025 * 1.5 + 'px',height:height/2 - width * 0.025 * 1.5 + 'px'}">
                    <el-image>
                        <template #error>
                            <el-text>图 2</el-text>
                        </template>
                    </el-image>
                </div>
                <div class="item" :style="{width:width - width * 0.025 * 2 + 'px',height:height/2 - width * 0.025 * 1.5 + 'px'}">
                    <el-image>
                        <template #error>
                            <el-text>图 3</el-text>
                        </template>
                    </el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.panel_tit_con{
    border-left: 5px solid #79bbff;
    padding: 5px;
}

.panel_con{
    display: flex;
    align-items: center;
    justify-content: center;
}

.panel_con .item_con{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-content: space-between;
}

.item_con .item{
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>