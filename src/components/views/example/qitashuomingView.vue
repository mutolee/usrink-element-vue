<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'15px',minHeight:'calc(100vh - 152px)'}">
        <vel_md_editor content='
### 其他

vel-admin-web 争取能少用一些 UI 组件，目前只用到了 Vue2、ElementUI2，这样我们也不用去学习各种各种的框架，我们要接活嘛，哪有那个空学习那些五花八门的东西 <font size=5>😒</font>

### 更新迭代

开源，是为了获得更多资源，因为我也不知道有没有人用这个脚手架，后面根据使用情况，搞个群，再结合实际业务，封装一些常用组件，算是升级迭代了，当然，不排除会改改UI，修修Bug之类的。

就先这样吧。
'></vel_md_editor>

    </el-card>
</template>

<script>
import vel_md_editor from "@/components/common/vel_md_editor";

export default {
    name: "qitashuomingView",
    components: {vel_md_editor}
}
</script>

<style scoped>
</style>
