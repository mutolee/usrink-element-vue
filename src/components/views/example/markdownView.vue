<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'15px',height:'calc(100vh - 152px)'}">
        <el-form>
            <el-form-item>
                <el-button type="success" icon="el-icon-edit" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
        <vel_md_editor
            @change="change"
            type="edit"
            height="calc(100vh - 212px)"
            content='
### vel_md_editor
mavon-editor 编辑器，这里简单进行了封装，屏蔽了工具栏的配置，修改了些样式，提供 edit 和 preview 两种模式和一个 change 事件。图片上传要自己搞，这个组件可以拿来即用。

### 展示

前面的文档都是在这里编辑的，然后复制了 makdown 文本，再粘贴到 preview 模式下的。

![](/static/imgs/logo.png)

**粗体**

*斜体*

++下划线++

~~中划线~~

==标记==

<font color=red>颜色，这个是html了</font>

文本^上角标^

文本~下角标~

::: hljs-left
居左
:::

::: hljs-center
居中
:::

::: hljs-right
居右
:::

> 段落引用

1. 啦啦啦啦
2. 啦啦啦啦啦啦
3. 啦啦啦啦啦

- 啦啦啦啦啦啦啦啦
- 啦啦啦啦啦啦啦啦啦啦啦啦啦
- 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦


``` js
function fun(){
    alert("123")
}
```

|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
|content1|content2|content3|
|content1|content2|content3|


$$Cos(X,Y) = \dfrac{X \bullet Y}{\Vert X \Vert^2 \Vert Y \Vert^2}$$


# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

'></vel_md_editor>
    </el-card>
</template>

<script>
import vel_md_editor from "@/components/common/vel_md_editor";

export default {
    name: "markdownView",
    components: {vel_md_editor},
    data() {
        return {
            value: '',
            render: ''
        }
    },
    methods: {
        change(value, render) {
            this.value = value
            this.render = render
        },
        save() {
            this.$message.warning("内容获取，请打开控制台查看！")
            console.log("%cMarkdown文本内容：", "color:blue;font-weight:700;font-size:14px", "\r" + this.value)
            console.log("%cHtml文本内容：", "color:blue;font-weight:700;font-size:14px", "\n" + this.render)
        }
    }
}
</script>

<style scoped>

</style>
