<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'15px',minHeight:'calc(100vh - 152px)'}">
        <vel_md_editor content='
### 说明

http 请求使用 axios 进行的封装，详细配置在 `utils/httpUtil.js` 中，只做了 get、post 的封装，可自行拓展。

### 拦截器

##### 在请求前进行拦截，主要做的功能是前端验证登陆状态及携带 Token 参数。

``` js
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.url.indexOf(LOGIN_API) == -1) {
        // 如果不是登录请求，需要验证登录是否过期
        if (isLogin()) {
            // 请求携带 Token 参数
            let token = cookieUtil.get(TOKEN)
            if (config.method.toLowerCase() === "get") {
                if (!config.params) {
                    config.params = {}
                }
                config.params.token = token
            } else {
                if (!config.data) {
                    config.data = {}
                } else {
                    config.data = qs.parse(config.data)
                }
                config.data.token = token
                config.data = qs.stringify(config.data)
            }
        } else {
            logout()
        }
    }
    return config;
}
```

##### 对全局响应的拦截，主要根据返回的状态码，如服务端登陆失效、权限不足的业务处理。

``` js
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let res = response.data;
    if (res.statusCode === STATUS_CODE.NO_LOGIN) {
        // 服务器返回未登陆，跳转登录页面
        logout()
    } else if (res.statusCode === STATUS_CODE.NO_PERM) {
        Message.warning("没有权限，请联系管理员！")
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
```

### API 配置

api 接口的配置，我放在了 `config/api.js` 中，因为脚手架是模拟的请求，所以请按实际业务进行配置。

### 响应数据的规范

拿登陆成功的例子来讲，json 数据结构应如下：

``` json
{
    "statusCode": 200,
    "message": "登陆成功",
    "data": {
        "userName": "Yanglinen",
        "token": "qwertyuiopasdfghjklzxcvbnm"
    }
}
```

可参考 `public/static/res/` 文件夹下的 json 文件。

|字段|类型|必须|备注|
|-|-|-|-|
|statusCode|整形|是|api 结果状态码|
|message|字符串|否|api 结果描述，可返回一些提示信息|
|data|JSONObject|否|api 业务数据包，根据实际业务进行返回|


'></vel_md_editor>
    </el-card>
</template>

<script>
import vel_md_editor from "../../common/vel_md_editor";

export default {
    name: "apiguifanView",
    components: {vel_md_editor}
}
</script>

<style scoped>

</style>
