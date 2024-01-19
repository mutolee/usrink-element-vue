<script setup>

</script>

<template>
    <div class="usr-descriptions-item">
        <div class="name">
            <slot name="name"></slot>
        </div>
        <div class="desc">
            <slot name="desc"></slot>
        </div>
    </div>
</template>

<style scoped>
.usr-descriptions-item{
    min-width: 33.333%;
    display: flex;
    flex-wrap: wrap;
    padding-right: 20px;
    box-sizing: border-box; /* 边框和内边距不会增加宽度 */
    align-items: flex-start;
}
.usr-descriptions-item .name{
    height: 20px;
    line-height: 20px;
    width: 120px;
    text-align: right;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /* 设置行数 */
}
.usr-descriptions-item .desc{
    flex: 1;
    line-height: 20px;
}
</style>