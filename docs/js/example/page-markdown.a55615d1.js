import{_ as p}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{r,i as l,ah as a,c as u,a as g,W as o,Q as h,o as v}from"../@vue/@vue.5ea14220.js";const _={class:"page"},s=`<h1 align="center">Markdown Editor built on Vue</h1>

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
`,k={__name:"page-markdown",setup(f){const e=r(null),n=r(400);l(()=>{n.value=i()});const i=()=>e.value.offsetHeight;return(w,t)=>{const d=a("v-md-editor"),m=a("el-card");return v(),u("div",_,[g("div",{ref_key:"usrCardEleRef",ref:e},[o(m,{shadow:"never",class:"usr_card_override"},{default:h(()=>[o(d,{modelValue:s,"onUpdate:modelValue":t[0]||(t[0]=c=>s=c),height:n.value+"px"},null,8,["height"])]),_:1})],512)])}}},E=p(k,[["__scopeId","data-v-a8384170"]]);export{E as default};
