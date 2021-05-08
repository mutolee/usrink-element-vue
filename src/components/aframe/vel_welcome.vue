<template>
    <el-card class="box-card" shadow="never" :body-style="{padding:'15px',minHeight:'calc(100vh - 152px)'}">
        <vel_md_editor content="

### <font color=red>恭喜</font>，你已经成功的运行了 vel-admin-web 脚手架。
> 你也看到了，这是一个极其简洁的项目，除了一些必要的功能，没有多余的东西，甚至没有一个可以供你直接使用的小组件。


### vel-admin-web 的意义

> vel-admin-web 可以让你<font color=red>直接开始写页面</font>，而不用从0开始搞类似菜单、Tab导航、路由之类的与业务无关的东西。


### vel-admin-web 做了哪些东西
> vel-admin-web 全部使用 ElementUI 来组装页面。<br>
    1. 如你所见，我做了一个还算好看的登陆页面，\^_\^。
    2. 完成了一个后台管理通用的基本骨架，包括操作菜单、Tab导航、面包屑、内容页。
    3. 动态路由、路由拦截、路由刷新、前端404拦截。
    4. API请求与响应的全局处理。
    5. 为了写文档，还集成了一个 markdown 编辑器，这个你们或许也能用上。
    6. ......就这些了。

### 我的联系方式

> 微信：Super_mutolee
  Mail：mutolee#qq.com


"></vel_md_editor>

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