import{_ as C,I as b}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{r as I,ah as u,o as x,c as V,W as c,Q as t,a as e,u as _,bi as D,bg as H}from"../@vue/@vue.5ea14220.js";const o=s=>(D("data-v-c55a6bbe"),s=s(),H(),s),W={class:"vel_cpt_panel_dialog_img_cut"},y={class:"img_cut_panel"},k={class:"img_cut_tool_panel"},B=o(()=>e("span",null,"缩放",-1)),P=o(()=>e("span",null,"左转",-1)),R=o(()=>e("span",null,"右转",-1)),S=o(()=>e("span",null,"重置",-1)),z=o(()=>e("span",null,"左右",-1)),L=o(()=>e("span",null,"上下",-1)),N={class:"img_cut_preview_panel"},O=o(()=>e("p",null,"预览",-1)),U={__name:"image-cutter-dialog",props:["dialog","cutWidth","cutHeight"],emits:["onConfirm"],setup(s,{emit:r}){const l=s,g=r,i=l.dialog,n=I(""),m=a=>{n.value=a.dataURL},h=a=>{g("onConfirm",a),d()},d=()=>{i.show=!1,n.value=""};return(a,p)=>{const f=u("el-image"),v=u("el-dialog");return x(),V("div",W,[c(v,{modelValue:_(i).show,"onUpdate:modelValue":p[0]||(p[0]=w=>_(i).show=w),title:"图片裁剪","close-on-click-modal":!1,width:830},{default:t(()=>[e("div",y,[e("div",k,[c(_(b),{onCutDown:h,onOnPrintImg:m,onOnClearAll:d,isModal:!1,sizeChange:!1,"box-height":400,"box-width":480,cutWidth:l.cutWidth,cutHeight:l.cutHeight,tool:!1,accept:"image/jpeg ,image/png",fileType:"png"},{scaleReset:t(()=>[B]),turnLeft:t(()=>[P]),turnRight:t(()=>[R]),reset:t(()=>[S]),flipHorizontal:t(()=>[z]),flipVertically:t(()=>[L]),_:1},8,["cutWidth","cutHeight"])]),e("div",N,[c(f,{src:n.value},{error:t(()=>[O]),_:1},8,["src"])])])]),_:1},8,["modelValue"])])}}},E=C(U,[["__scopeId","data-v-c55a6bbe"]]);export{E as I};
