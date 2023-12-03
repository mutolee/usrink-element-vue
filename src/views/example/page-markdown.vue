<script setup>
import {ref, onMounted} from "vue";

// 获取元素，变量名需要和元素上的ref属性的值一致
const velCardEleRef = ref(null)
const velCardEleHeight = ref(400)

onMounted(()=>{
    velCardEleHeight.value = getVelCardEleHeight()
})

/**
 * 获取元素高度
 * @return {number}
 */
const getVelCardEleHeight = () => {
    return velCardEleRef.value.offsetHeight
}


const text = '<h1 align="center">Markdown Editor built on Vue</h1>\n' +
    '\n' +
    '<p align="center">\n' +
    '  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n' +
    '  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n' +
    '  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n' +
    '</p>\n' +
    '\n' +
    '## Links\n' +
    '\n' +
    '- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)\n' +
    '- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n' +
    '- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n' +
    '\n' +
    '## Install\n' +
    '\n' +
    '```bash\n' +
    '# use npm\n' +
    'npm i @kangc/v-md-editor -S\n' +
    '\n' +
    '# use yarn\n' +
    'yarn add @kangc/v-md-editor\n' +
    '```\n' +
    '\n' +
    '## Quick Start\n' +
    '\n' +
    '```js\n' +
    'import Vue from \'vue\';\n' +
    'import VueMarkdownEditor from \'@kangc/v-md-editor\';\n' +
    'import \'@kangc/v-md-editor/lib/style/base-editor.css\';\n' +
    'import vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n' +
    '\n' +
    'VueMarkdownEditor.use(vuepressTheme);\n' +
    '\n' +
    'Vue.use(VueMarkdownEditor);\n' +
    '```\n' +
    '\n' +
    '## Usage\n' +
    '\n' +
    '```html\n' +
    '<template>\n' +
    '  <v-md-editor v-model="text" height="400px"></v-md-editor>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '  export default {\n' +
    '    data() {\n' +
    '      return {\n' +
    '        text: \'\',\n' +
    '      };\n' +
    '    },\n' +
    '  };\n' +
    '<\/script>\n' +
    '```\n' +
    '\n' +
    '## Refrence\n' +
    '\n' +
    '- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)\n' +
    '- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)\n'
</script>

<template>
    <div class="page">
        <div ref="velCardEleRef">
            <el-card shadow="never" class="vel_card_override">
                <v-md-editor v-model="text" :height="velCardEleHeight + 'px'"></v-md-editor>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.page {
    padding: 20px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}

:deep(.vel_card_override) .el-card__body{
    padding: 0;
}

</style>