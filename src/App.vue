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
    color: #409EFF;
    text-decoration: none;
}

li{
    list-style: none;
}


/** ------------------------ 美化系统滚动条 Start ------------------------ **/
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
/** ------------------------ 美化系统滚动条 End ------------------------ **/


/** ------------------------ NProgress 样式 Start ------------------------ **/
#nprogress .bar {
    background: #409EFF !important;
}
/** ------------------------ NProgress 样式 End ------------------------ **/


/** ------------------------ ElementUI 样式 Start ------------------------ **/
.el-date-table td.in-range .el-date-table-cell {
    background-color: #c6e2ff !important;
}
.el-date-table td.disabled .el-date-table-cell {
    background-color:#fff !important;
    color: #dedfe0 !important;
}
/** ------------------------ ElementUI 样式 End ------------------------ **/

</style>