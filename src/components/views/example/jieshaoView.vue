<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'15px',minHeight:'calc(100vh - 152px)'}">
        <vel_md_editor content="
### 说明

我是基于 vue-cli 来搭建的项目，目录怎么建，凭自己喜好，结合项目实际情况来，不用和我一样。

### 工程目录
```
┌vel-admin-web
├┈┈pbulic
├┈┈┈┈static
├┈┈┈┈┈┈editor.md
├┈┈┈┈┈┈imgs
├┈┈┈┈┈┈res
├┈┈┈┈favicon.ico
├┈┈┈┈index.html
├┈┈src
├┈┈┈┈components
├┈┈┈┈┈┈aframe
├┈┈┈┈┈┈┈┈fragment
├┈┈┈┈┈┈common
├┈┈┈┈┈┈views
├┈┈┈┈┈┈index.js
├┈┈┈┈config
├┈┈┈┈┈┈api.js
├┈┈┈┈┈┈constant.js
├┈┈┈┈router
├┈┈┈┈┈┈common
├┈┈┈┈┈┈index.js
├┈┈┈┈utils
├┈┈┈┈vuex
├┈┈┈┈┈┈modules
├┈┈┈┈┈┈index.js
└┈┈package.json
```

### 目录说明及约定

#### pbulic
目录下面主要放一些静态文件，如图片、css、js、还有一些第三方的包，文件夹最好分门别类。
模拟的 api 数据在 res 目录下。

#### src
目录放我们的项目源代码，主要是 .js 和 .vue 的代码。

#### components
我们写的 vue 组件，全部放在这个文件夹中，根据功能划分，创建各个功能的子文件夹。
在 components 目录下，我创建了 aframe、common、views 三个文件夹。
脚手架用到的组件，我都放在了 aframe 中。
common 准备放一些通用的组件，如 vel_md_editor。
views 放我们的页面组件，比如你现在看到的 ’项目结构介绍‘ 页面，就在 views 中。

#### config
主要放一些配置的东西，如常量、接口配置。

#### router
vue-router 的配置都在该目录下，包括路由的拦截、页面的权限、未登陆的处理、顶部进度条、404等等。

#### utils
主要是放一些工具函数。

#### vuex
该目录放 vue 的一些状态，所有的状态均放在该目录下的 modules 中。

#### main.js
程序的主入口，vue 的实例在这里创建。

#### App.vue
vue 渲染的根节点 `<div id='app'></div>` 在这个文件中，路由出口也在这里。


"></vel_md_editor>

    </el-card>
</template>

<script>
import vel_md_editor from "@/components/common/vel_md_editor";

export default {
    name: "jieshaoView",
    components: {vel_md_editor}
}
</script>

<style scoped>
</style>
