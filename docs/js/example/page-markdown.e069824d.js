import{_ as l}from"../../assets/index-af4c22d6.js";import{r as o,i as c,ah as r,c as u,a as g,V as i,P as h,o as v}from"../@vue/@vue.86d5ef23.js";import"../pinia/pinia.8c9ce303.js";import"../vue-router/vue-router.c8d340a3.js";import"../localforage/localforage.098cf130.js";import"../@kangc/@kangc.2189818a.js";import"../vue/vue.912fe428.js";import"../js-cookie/js-cookie.edb2da2a.js";import"../axios/axios.47b9d439.js";import"../element-plus/element-plus.702f4262.js";import"../lodash-es/lodash-es.21c98b27.js";import"../@vueuse/@vueuse.113119b4.js";import"../@element-plus/@element-plus.3740eb95.js";import"../@popperjs/@popperjs.c75af06c.js";import"../@ctrl/@ctrl.f8748455.js";import"../dayjs/dayjs.975bbb5e.js";import"../async-validator/async-validator.dee29e8b.js";import"../memoize-one/memoize-one.297ddbcb.js";import"../escape-html/escape-html.9acd3622.js";import"../normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../@floating-ui/@floating-ui.72671fae.js";import"../echarts/echarts.3025caf6.js";import"../tslib/tslib.54e39b60.js";import"../zrender/zrender.7e5d4d80.js";import"../vue-echarts/vue-echarts.5395c392.js";import"../resize-detector/resize-detector.a5205554.js";import"../nprogress/nprogress.10c64f87.js";import"../highlight.js/highlight.js.903bf23b.js";const _={class:"page"},a=`<h1 align="center">Markdown Editor built on Vue</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>
</p>

## Links

- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)
- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)
- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)

## Install

\`\`\`bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`

## Quick Start

\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`

## Usage

\`\`\`html
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
<\/script>
\`\`\`

## Refrence

- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)
- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)
`,k={__name:"page-markdown",setup(f){const e=o(null),t=o(400);c(()=>{t.value=m()});const m=()=>e.value.offsetHeight;return(w,n)=>{const s=r("v-md-editor"),p=r("el-card");return v(),u("div",_,[g("div",{ref_key:"velCardEle",ref:e},[i(p,{shadow:"never",class:"vel_card_override"},{default:h(()=>[i(s,{modelValue:a,"onUpdate:modelValue":n[0]||(n[0]=d=>a=d),height:t.value+"px"},null,8,["height"])]),_:1})],512)])}}},W=l(k,[["__scopeId","data-v-4b61ee62"]]);export{W as default};
