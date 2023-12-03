<script setup>
</script>

<template>
    <router-view/>
</template>

<!-- 全局样式，都写在这里 -->
<style>
* {
    margin: 0;
    padding: 0;
}

html, body, #app {
    color: #303133;
    height: 100vh;
    font-size: 14px;
    background-color: #fff;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

html body a {
    color: #1890ff;
    text-decoration: none;
}

.el-popper.is-light{
    border: none !important;
}

/** 美化系统滚动条 Start **/
::-webkit-scrollbar {
    width: 6px
}

::-webkit-scrollbar:horizontal {
    height: 6px
}

::-webkit-scrollbar-track {
    border-radius: 10px
}

::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all .2s ease-in-out
}

::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: #0000004d
}
/** 美化系统滚动条 End **/

</style>