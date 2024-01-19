import{u as O}from"../../assets/index-8c41d22a.js";import{u as P}from"../usr-image-cutter-dialog/usr-image-cutter-dialog.b5325ade.js";import{_ as H}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{r as u,i as z,ah as o,o as p,c as B,W as e,Q as t,a as W,U as n,V as N,u as q,bi as j,bg as E,j as L,ar as M,R as Q,P as y,F as G,T as F}from"../@vue/@vue.5ea14220.js";import{c as J}from"../CacheUtil/CacheUtil.c6ebddbe.js";import"../pinia/pinia.fb187a93.js";import"../vue-router/vue-router.6ed6991e.js";import"../localforage/localforage.9e9e3b2b.js";import"../@kangc/@kangc.f59435d2.js";import"../vue/vue.1c0a12e0.js";import"../js-cookie/js-cookie.edb2da2a.js";import"../axios/axios.47b9d439.js";import"../element-plus/element-plus.b000c8d0.js";import"../lodash-es/lodash-es.21c98b27.js";import"../@vueuse/@vueuse.71e72d96.js";import"../@element-plus/@element-plus.b73e6964.js";import"../@popperjs/@popperjs.c75af06c.js";import"../@ctrl/@ctrl.f8748455.js";import"../dayjs/dayjs.10495895.js";import"../async-validator/async-validator.dee29e8b.js";import"../memoize-one/memoize-one.297ddbcb.js";import"../escape-html/escape-html.66262ebd.js";import"../normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../@floating-ui/@floating-ui.72671fae.js";import"../echarts/echarts.3025caf6.js";import"../tslib/tslib.54e39b60.js";import"../zrender/zrender.7e5d4d80.js";import"../vue-echarts/vue-echarts.8b3ad32f.js";import"../resize-detector/resize-detector.a5205554.js";import"../nprogress/nprogress.d255c298.js";import"../highlight.js/highlight.js.1b3e8c39.js";const K=m=>(j("data-v-a8fff632"),m=m(),E(),m),X={class:"usr_cpt_panel_dialog_add_shop_type"},Y=K(()=>W("p",null,"预览",-1)),Z={class:"dialog-footer"},ee="100px",te={__name:"shop-type-dialog-add",props:["dialog","paramData"],emits:["onConfirm"],setup(m,{emit:C}){const _=m,b=C,f=_.dialog,D=_.paramData,d=u({show:!1}),a=u({parent:{id:0,name:"无"},status:"0",sort:1,name:"",icon:""}),w=u(null);z(()=>{a.value=D});const x=()=>{d.value.show=!0},k=v=>{a.value.icon=v.dataURL},r=async()=>{try{await w.value.validate(),b("onConfirm",a.value),T()}catch{console.log("表单验证未通过")}},T=()=>{f.show=!1,a.value.parent.id=0,a.value.parent.name="无",a.value.name="",a.value.icon="",a.value.status="0",a.value.sort=1},g=u({name:[{required:!0,message:"分类名称不能为空！",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"blur"}]});return(v,i)=>{const V=o("el-text"),s=o("el-form-item"),S=o("el-input"),h=o("el-option"),I=o("el-select"),U=o("el-input-number"),R=o("el-image"),l=o("el-button"),$=o("el-form"),A=o("el-dialog");return p(),B("div",X,[e(A,{modelValue:q(f).show,"onUpdate:modelValue":i[3]||(i[3]=c=>q(f).show=c),title:a.value.parent.id===0?"创建分类":"添加子分类"},{footer:t(()=>[W("span",Z,[e(l,{onClick:T},{default:t(()=>[n("取消")]),_:1}),e(l,{type:"primary",onClick:r},{default:t(()=>[n("确定")]),_:1})])]),default:t(()=>[e($,{model:a.value,ref_key:"formRef",ref:w,rules:g.value,"label-width":ee},{default:t(()=>[e(s,{label:"父级分类"},{default:t(()=>[e(V,{tag:"b"},{default:t(()=>[n(N(a.value.parent.name),1)]),_:1})]),_:1}),e(s,{label:"分类名称",prop:"name"},{default:t(()=>[e(S,{modelValue:a.value.name,"onUpdate:modelValue":i[0]||(i[0]=c=>a.value.name=c),clearable:""},null,8,["modelValue"])]),_:1}),e(s,{label:"状态",prop:"status"},{default:t(()=>[e(I,{modelValue:a.value.status,"onUpdate:modelValue":i[1]||(i[1]=c=>a.value.status=c),size:"default",placeholder:"选择状态"},{default:t(()=>[e(h,{label:"正常",value:"0"}),e(h,{label:"停用",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"排序",prop:"sort"},{default:t(()=>[e(U,{modelValue:a.value.sort,"onUpdate:modelValue":i[2]||(i[2]=c=>a.value.sort=c),size:"default","controls-position":"right"},null,8,["modelValue"])]),_:1}),e(s,{label:"图标",class:"el_form_item_cut_img"},{default:t(()=>[e(R,{class:"type_icon",src:a.value.icon},{error:t(()=>[Y]),_:1},8,["src"]),e(l,{onClick:x},{default:t(()=>[n("选择图片")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(P,{dialog:d.value,onOnConfirm:k,"cut-width":100,"cut-height":100},null,8,["dialog"])])}}},ae=H(te,[["__scopeId","data-v-a8fff632"]]);const oe={class:"page"},le={class:"table_col_action"},ne={__name:"page-shop-type",setup(m){const C=O(),_=u(!0),b=u([]),f=L(()=>C.wh.h-90-40-42-42);z(()=>{D()});const D=()=>{_.value=!0,J.getShopType().then(r=>{b.value=r}).catch(r=>{console.error(r)}).finally(()=>{_.value=!1})},d=u({show:!1}),a=u({parent:{id:0,name:"无"},name:"",status:"0",sort:1,icon:""}),w=()=>{a.value.parent.id=0,a.value.parent.name="无",d.value.show=!0},x=r=>{a.value.parent.id=r.id,a.value.parent.name=r.name,d.value.show=!0},k=r=>{console.log("创建分类：--> "+r)};return(r,T)=>{const g=o("el-button"),v=o("el-row"),i=o("el-empty"),V=o("el-text"),s=o("el-table-column"),S=o("el-image"),h=o("el-tag"),I=o("el-table"),U=o("el-card"),R=M("loading");return p(),B("div",oe,[Q((p(),y(U,{shadow:"never",class:"usr_card_override"},{default:t(()=>[e(v,{style:{"margin-bottom":"10px"}},{default:t(()=>[e(g,{type:"primary",onClick:w},{default:t(()=>[n("创建分类")]),_:1})]),_:1}),e(I,{data:b.value,height:f.value,"row-key":"id","default-expand-all":""},{empty:t(()=>[e(i,{description:"暂无数据"})]),default:t(()=>[e(s,{label:"分类名称",width:"200"},{default:t(l=>[l.row.parent?(p(),y(V,{key:0,tag:"b"},{default:t(()=>[n(N(l.row.name),1)]),_:2},1024)):(p(),B(G,{key:1},[n(N(l.row.name),1)],64))]),_:1}),e(s,{label:"图标",align:"center"},{default:t(l=>[e(S,{src:l.row.icon,style:{width:"50px",height:"50px"}},null,8,["src"])]),_:1}),e(s,{prop:"sort",label:"排序",align:"center"}),e(s,{label:"状态",align:"center"},{default:t(l=>[l.row.status===0?(p(),y(h,{key:0},{default:t(()=>[n("正常")]),_:1})):l.row.status===-1?(p(),y(h,{key:1,type:"info"},{default:t(()=>[n("停用")]),_:1})):F("",!0)]),_:1}),e(s,{label:"操作",fixed:"right","min-width":"200"},{default:t(l=>[W("div",le,[l.row.children?(p(),y(g,{key:0,type:"primary",plain:"",onClick:$=>x(l.row)},{default:t(()=>[n("添加子分类 ")]),_:2},1032,["onClick"])):F("",!0),e(g,{type:"success",plain:""},{default:t(()=>[n("编辑")]),_:1}),e(g,{type:"danger",plain:""},{default:t(()=>[n("删除")]),_:1})])]),_:1})]),_:1},8,["data","height"])]),_:1})),[[R,_.value]]),e(ae,{paramData:a.value,dialog:d.value,onOnConfirm:k},null,8,["paramData","dialog"])])}}},Fe=H(ne,[["__scopeId","data-v-788c8ad6"]]);export{Fe as default};
