import{_ as S}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{ah as t,o as _,c as V,W as e,Q as l,U as s,F as b,a9 as P,P as k,K as d,u as g,T as z}from"../@vue/@vue.5ea14220.js";const R={class:"vel_cpt_panel_add_sku"},B={__name:"vel-sku-single",props:["skus"],emits:["onDelSkuRow"],setup(h,{emit:v}){const U=h,x=v,c=U.skus,w=()=>{c.push({name:"",price:null,delPrice:null,count:null})},C=i=>{c.splice(i,1),x("onDelSkuRow")};return(i,D)=>{const u=t("el-text"),a=t("el-col"),r=t("el-row"),y=t("el-input"),p=t("el-input-number"),m=t("el-button");return _(),V("div",R,[e(r,{class:"tit"},{default:l(()=>[e(a,{span:8},{default:l(()=>[e(u,{tag:"i"},{default:l(()=>[s("规格名称")]),_:1})]),_:1}),e(a,{span:4},{default:l(()=>[e(u,{tag:"i"},{default:l(()=>[s("实际价格")]),_:1})]),_:1}),e(a,{span:4},{default:l(()=>[e(u,{tag:"i"},{default:l(()=>[s("划线价格")]),_:1})]),_:1}),e(a,{span:4},{default:l(()=>[e(u,{tag:"i"},{default:l(()=>[s("库存")]),_:1})]),_:1}),e(a,{span:4},{default:l(()=>[e(u,{tag:"i"},{default:l(()=>[s("操作")]),_:1})]),_:1})]),_:1}),(_(!0),V(b,null,P(g(c),(o,f)=>(_(),k(r,{key:f},{default:l(()=>[e(a,{span:8},{default:l(()=>[e(y,{type:"text",modelValue:o.name,"onUpdate:modelValue":n=>o.name=n,class:d(o.name!==""?"no_error":""),clearable:""},null,8,["modelValue","onUpdate:modelValue","class"])]),_:2},1024),e(a,{span:4},{default:l(()=>[e(p,{modelValue:o.price,"onUpdate:modelValue":n=>o.price=n,size:"default",class:d(o.price!==null?"no_error":""),"controls-position":"right"},null,8,["modelValue","onUpdate:modelValue","class"])]),_:2},1024),e(a,{span:4},{default:l(()=>[e(p,{modelValue:o.delPrice,"onUpdate:modelValue":n=>o.delPrice=n,size:"default",class:d(o.delPrice!==null?"no_error":""),"controls-position":"right"},null,8,["modelValue","onUpdate:modelValue","class"])]),_:2},1024),e(a,{span:4},{default:l(()=>[e(p,{modelValue:o.count,"onUpdate:modelValue":n=>o.count=n,size:"default",class:d(o.count!==null?"no_error":""),"controls-position":"right"},null,8,["modelValue","onUpdate:modelValue","class"])]),_:2},1024),e(a,{span:4},{default:l(()=>[g(c).length>1?(_(),k(m,{key:0,type:"danger",icon:"Delete",circle:"",onClick:n=>C(f)},null,8,["onClick"])):z("",!0)]),_:2},1024)]),_:2},1024))),128)),e(r,null,{default:l(()=>[e(a,{span:24},{default:l(()=>[e(m,{onClick:w,plain:""},{default:l(()=>[s("添加一行")]),_:1})]),_:1})]),_:1})])}}},T=S(B,[["__scopeId","data-v-44ce9c09"]]);export{T as V};