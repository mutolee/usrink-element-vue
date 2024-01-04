<script setup>

</script>

<template>
    <div class="vel-descriptions-item">
        <div class="name">
            <slot name="name"></slot>
        </div>
        <div class="desc">
            <slot name="desc"></slot>
        </div>
    </div>
</template>

<style scoped>
.vel-descriptions-item{
    min-width: 33.333%;
    display: flex;
    flex-wrap: wrap;
    padding-right: 20px;
    box-sizing: border-box; /* 边框和内边距不会增加宽度 */
    align-items: flex-start;
}
.vel-descriptions-item .name{
    height: 20px;
    line-height: 20px;
    width: 120px;
    text-align: right;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /* 设置行数 */
}
.vel-descriptions-item .desc{
    flex: 1;
    line-height: 20px;
}
</style>