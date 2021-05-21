<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'15px',minHeight:'calc(100vh - 152px)'}">
        <vel_md_editor content="

### 配置

路由的配置在 `router/index.js` 中，主要配置了3个静态的路由组件。

1. 欢迎页
2. 404 页面
3. 登陆页面

``` json
{
        path: GEN_ROUTER,                      // 根路由
        name: GEN_ROUTER_NAME,
        component: vel_main,
        redirect: WELCOME_ROUTER,              // 默认`/` 重定向到欢迎页面
        children: [                            // 动态配置的路由都将挂载到根路由(`/`)的 children 下
            {
                path: WELCOME_ROUTER,
                component: welcome
            },
            {
                path: NOT_FOUND_ROUTER,
                component: notfound            // 请求不属于用户菜单的路由时候，在二级路由视图展示 404 页面
            }
        ]
},
// 未登陆跳转页面
{path: LOGIN_ROUTER, component: vel_login}
```

### 路由拦截

路由拦截器的配置在 `router/common/intercept.js` 中，逻辑处理如下：

![router](/static/imgs/router.png)





"></vel_md_editor>

    </el-card>
</template>

<script>
import vel_md_editor from "@/components/common/vel_md_editor";

export default {
    name: "luyoushuomingView",
    components: {vel_md_editor}
}
</script>

<style scoped>
</style>
