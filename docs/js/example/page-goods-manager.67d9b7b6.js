import{r as p,ah as t,o as _,c as f,W as e,Q as l,a as o,F as G,a9 as L,P as w,U as s,V as y,u as q,T as P,bi as Y,bg as Z,j as de,i as ee,L as J,aa as re,n as _e,ar as pe,R as ce}from"../@vue/@vue.5ea14220.js";import{u as me,i as he}from"../../assets/index-8de0b793.js";import{V as fe}from"../vel-sku-single/vel-sku-single.1f9e9ab5.js";import{R as ve,n as X,S as ge,P as be,B as ye}from"../@element-plus/@element-plus.b73e6964.js";import{V as we}from"../vel-image-cutter-dialog/vel-image-cutter-dialog.a7432ebf.js";import{c as le}from"../CacheUtil/CacheUtil.4072d4d9.js";import{V as Ve}from"../vel-editor/vel-editor.6ed3ba54.js";import{_ as O}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import"../pinia/pinia.fb187a93.js";import"../vue-router/vue-router.6ed6991e.js";import"../localforage/localforage.9e9e3b2b.js";import"../@kangc/@kangc.f59435d2.js";import"../vue/vue.1c0a12e0.js";import"../js-cookie/js-cookie.edb2da2a.js";import"../axios/axios.47b9d439.js";import"../element-plus/element-plus.4f4b1701.js";import"../lodash-es/lodash-es.21c98b27.js";import"../@vueuse/@vueuse.71e72d96.js";import"../@popperjs/@popperjs.c75af06c.js";import"../@ctrl/@ctrl.f8748455.js";import"../dayjs/dayjs.10495895.js";import"../async-validator/async-validator.dee29e8b.js";import"../memoize-one/memoize-one.297ddbcb.js";import"../escape-html/escape-html.66262ebd.js";import"../normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../@floating-ui/@floating-ui.72671fae.js";import"../echarts/echarts.3025caf6.js";import"../tslib/tslib.54e39b60.js";import"../zrender/zrender.7e5d4d80.js";import"../vue-echarts/vue-echarts.8b3ad32f.js";import"../resize-detector/resize-detector.a5205554.js";import"../nprogress/nprogress.d255c298.js";import"../highlight.js/highlight.js.1b3e8c39.js";import"../@wangeditor/@wangeditor.654f9dc1.js";const ke=r=>(Y("data-v-f80c6475"),r=r(),Z(),r),xe={class:"preview_con_shop"},Ie=ke(()=>o("div",{class:"minapp_header"},[o("span",null,"商品详情")],-1)),Ce={class:"shop_carousel_list"},Te={class:"shop_info_panel"},De={class:"tit_panel"},Ne={class:"tit_item price"},Se={class:"price_real"},ze={class:"tit_item tit"},$e={class:"share"},Ue={class:"share_con"},Re={key:0,class:"tit_item desc"},We={key:1,class:"tit_item tags"},qe={class:"sku_panel"},Be={style:{"padding-bottom":"10px"}},Ee={class:"sku_info"},Ge={class:"sku_right"},Le={class:"choose_more_arrow"},Pe={class:"choose_time_panel"},Fe={style:{"padding-bottom":"10px"}},He={class:"time_panel"},Me={class:"choose_more_arrow"},Ae={class:"detail_panel"},Oe=["innerHTML"],Ke={__name:"preview-shop",props:["shopInfo","preViewWidth"],setup(r){const R=(r.preViewWidth-40)*.7,x=p([{label:"天",value:"0",disabled:!1},{label:"月",value:"1",disabled:!0},{label:"小时",value:"2",disabled:!0}]);return(D,N)=>{const a=t("el-image"),B=t("el-carousel-item"),c=t("el-carousel"),u=t("el-text"),v=t("el-icon"),g=t("el-tag"),C=t("el-step"),S=t("el-steps"),z=t("el-tab-pane"),I=t("el-tabs"),W=t("el-scrollbar");return _(),f("div",xe,[e(W,null,{default:l(()=>[Ie,o("div",Ce,[e(c,{height:R+"px"},{default:l(()=>[(_(!0),f(G,null,L(r.shopInfo.thumbs,b=>(_(),w(B,{key:b.id},{default:l(()=>[e(a,{src:b.src,fit:"fill",style:{width:"100%"}},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["height"])]),o("div",Te,[o("div",De,[o("div",Ne,[o("span",Se,[e(u,null,{default:l(()=>[s("￥")]),_:1}),e(u,{style:{"font-size":"22px"},tag:"b"},{default:l(()=>[s(y(r.shopInfo.skus[0].price),1)]),_:1}),e(u,null,{default:l(()=>[s("/"+y(x.value[0].label),1)]),_:1})]),e(u,{type:"info",tag:"del",size:"small"},{default:l(()=>[s("￥"+y(r.shopInfo.skus[0].delPrice)+"/"+y(x.value[0].label),1)]),_:1})]),o("div",ze,[e(u,{class:"txt",tag:"b"},{default:l(()=>[s(y(r.shopInfo.shopName),1)]),_:1}),o("div",$e,[o("div",Ue,[e(v,null,{default:l(()=>[e(q(ve))]),_:1}),e(u,{size:"small"},{default:l(()=>[s("分享")]),_:1})])])]),r.shopInfo.shopDesc!==""?(_(),f("div",Re,[e(u,{type:"info",size:"small"},{default:l(()=>[s(y(r.shopInfo.shopDesc),1)]),_:1})])):P("",!0),r.shopInfo.tags.length>0?(_(),f("div",We,[(_(!0),f(G,null,L(r.shopInfo.tags,b=>(_(),w(g,{key:b,type:"danger",size:"small",effect:"plain"},{default:l(()=>[s(y(b),1)]),_:2},1024))),128))])):P("",!0)]),o("div",qe,[o("div",Be,[e(u,{tag:"b"},{default:l(()=>[s("规格")]),_:1})]),o("div",Ee,[e(u,{class:"sku_name",type:"info",size:"small"},{default:l(()=>[s(y(r.shopInfo.skus[0].name),1)]),_:1}),o("div",Ge,[e(u,{class:"sku_num",type:"info"},{default:l(()=>[s("x1")]),_:1}),o("div",Le,[e(v,null,{default:l(()=>[e(q(X))]),_:1})])])])]),o("div",Pe,[o("div",Fe,[e(u,{tag:"b"},{default:l(()=>[s("租赁周期")]),_:1})]),o("div",He,[e(S,{direction:"vertical",active:1,space:40},{default:l(()=>[e(C,{status:"wait"},{description:l(()=>[s(" 开始时间 : 2023-11-26 ")]),_:1}),e(C,{status:"wait"},{description:l(()=>[s(" 结束时间 : 2023-11-26 ")]),_:1})]),_:1}),o("div",Me,[e(v,null,{default:l(()=>[e(q(X))]),_:1})])])]),o("div",Ae,[e(I,{model:0},{default:l(()=>[e(z,{label:"商品详情",class:"goods_detail"},{default:l(()=>[o("div",{innerHTML:r.shopInfo.shopDetail.val},null,8,Oe)]),_:1}),e(z,{label:"租赁流程"},{default:l(()=>[s("Config")]),_:1})]),_:1})])])]),_:1})])}}},je=O(Ke,[["__scopeId","data-v-f80c6475"]]);const Qe=r=>(Y("data-v-a082e4cc"),r=r(),Z(),r),Je={class:"vel_cpt_panel_drawer_add_goods"},Xe=Qe(()=>o("h4",null,"添加商品",-1)),Ye={class:"dialog_con"},Ze={class:"page_left_con"},el={class:"preview"},ll={class:"preview_publish"},tl={class:"page_right_con"},ol={class:"add_goods_panel"},al={class:"shop_thumbs"},sl={class:"mask"},nl={__name:"goods-dialog-add",props:["dialog"],emits:["onConfirm"],setup(r,{emit:m}){const U=me(),R=m,x=de(()=>U.wh.w-260),D=p(400),N=p(null),a=p({shopNo:"",shopName:"",shopDesc:"",tags:[],shopType:[],thumbs:[],unit:"0",skus:[{name:"",price:null,delPrice:null,count:null}],status:"1",shopDetail:{val:"<p></p>"}}),B=p([{label:"天",value:"0",disabled:!1},{label:"月",value:"1",disabled:!0},{label:"小时",value:"2",disabled:!0}]);ee(()=>{u()});const c=p([]),u=()=>{le.getShopTypeExcludeDisabled().then(h=>{c.value.push(...h)}).catch(h=>{console.error(h)})},v=p(""),g=p(!1),C=p(null),S=h=>{a.value.tags.splice(a.value.tags.indexOf(h),1)},z=()=>{a.value.tags&&a.value.tags.push(v.value),g.value=!1,v.value=""},I=()=>{g.value=!0,_e(()=>{C.value&&C.value.focus()})},W=p({show:!1});let b=0;const M=h=>{b++,a.value.thumbs.push({id:b,src:h.dataURL}),N.value.validateField("thumbs")},T=()=>{W.value.show=!0},F=()=>{N.value.validateField("skus")},E=p({shopNo:[{required:!0,message:"编号不能为空！",trigger:"blur"}],shopName:[{required:!0,message:"商品名称不能为空！",trigger:"blur"},{min:8,max:40,message:"长度在 8 到 40 个字符",trigger:"blur"}],thumbs:[{required:!0,message:"商品图不能为空，请选择商品图！",trigger:"change"}],shopType:[{required:!0,message:"请选择商品分类",trigger:"change"}],unit:[{required:!0,message:"请选择价格单位",trigger:"change"}],skus:[{required:!0,validator:(h,d,$)=>{let n=!0;if(d.length===0)n=!1;else for(let V=0;V<d.length;V++)if(d[V].name===""||d[V].price===null||d[V].delPrice===null||d[V].count===null){n=!1;break}n?(console.log("规格验证通过"),$()):$(new Error("请完善规格信息！"))},trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]}),A=async()=>{try{await N.value.validate(),console.log("表单验证通过"),R("onConfirm",a.value)}catch{console.log("表单验证未通过")}};return(h,d)=>{const $=t("el-button"),n=t("el-input"),V=t("el-icon"),te=t("el-tooltip"),k=t("el-form-item"),oe=t("el-image"),ae=t("el-tag"),se=t("el-cascader"),H=t("el-option"),j=t("el-select"),ne=t("el-form"),Q=t("el-scrollbar"),ie=t("el-card"),ue=t("el-drawer");return _(),f("div",Je,[e(ue,{modelValue:r.dialog.show,"onUpdate:modelValue":d[7]||(d[7]=i=>r.dialog.show=i),size:x.value,direction:"rtl",class:"vel_drawer_override"},{header:l(()=>[Xe]),default:l(()=>[e(Q,null,{default:l(()=>[o("div",Ye,[o("div",{class:"page_left",style:J({width:D.value+"px",minWidth:D.value+"px"})},[o("div",Ze,[o("div",el,[e(je,{"pre-view-width":400,"shop-info":a.value},null,8,["shop-info"]),o("div",ll,[e($,{type:"primary",size:"large",onClick:A},{default:l(()=>[s("保存 ")]),_:1})])])])],4),o("div",{class:"page_right",style:J({width:x.value-D.value+"px"})},[o("div",tl,[e(ie,{shadow:"never",class:"vel_card_override"},{default:l(()=>[o("div",ol,[e(Q,null,{default:l(()=>[e(ne,{model:a.value,ref_key:"formRef",ref:N,rules:E.value,"label-width":"120px"},{default:l(()=>[e(k,{label:"商品编号",prop:"shopNo",style:{"padding-top":"20px"},class:"shop_no"},{default:l(()=>[e(n,{modelValue:a.value.shopNo,"onUpdate:modelValue":d[0]||(d[0]=i=>a.value.shopNo=i),placeholder:"如：#123456",clearable:"",style:{width:"150px"}},null,8,["modelValue"]),e(te,{content:"商品编号为商品唯一标识，和其他商品不能重复！"},{default:l(()=>[e(V,{size:18,color:"#b1b3b8"},{default:l(()=>[e(q(ge))]),_:1})]),_:1})]),_:1}),e(k,{label:"商品名称",prop:"shopName"},{default:l(()=>[e(n,{modelValue:a.value.shopName,"onUpdate:modelValue":d[1]||(d[1]=i=>a.value.shopName=i),clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),_:1}),e(k,{label:"促销信息"},{default:l(()=>[e(n,{modelValue:a.value.shopDesc,"onUpdate:modelValue":d[2]||(d[2]=i=>a.value.shopDesc=i),autosize:{minRows:2,maxRows:4},type:"textarea",maxlength:"100","show-word-limit":"",placeholder:"请输入简短的描述信息，100个字符以内！"},null,8,["modelValue"])]),_:1}),e(k,{label:"商品图",prop:"thumbs",class:"shop_images"},{default:l(()=>[o("div",al,[(_(!0),f(G,null,L(a.value.thumbs,i=>(_(),f("div",{class:"shop_img_list",key:i.id},[e(oe,{class:"shop_img",src:i.src,fit:"fill"},null,8,["src"]),o("span",sl,[e(V,null,{default:l(()=>[e(q(be))]),_:1})])]))),128)),a.value.thumbs.length<7?(_(),f("div",{key:0,class:"el-upload--picture-card",onClick:T},[e(V,null,{default:l(()=>[e(q(ye))]),_:1})])):P("",!0)])]),_:1}),e(k,{class:"shop_tags",label:"商品标签"},{default:l(()=>[(_(!0),f(G,null,L(a.value.tags,i=>(_(),w(ae,{key:i,size:"large",closable:"","disable-transitions":!1,onClose:cl=>S(i)},{default:l(()=>[s(y(i),1)]),_:2},1032,["onClose"]))),128)),g.value?(_(),w(n,{key:0,modelValue:v.value,"onUpdate:modelValue":d[3]||(d[3]=i=>v.value=i),size:"default",ref_key:"tagInputRef",ref:C,onKeyup:re(z,["enter"]),onBlur:z,style:{width:"100px"}},null,8,["modelValue","onKeyup"])):(_(),w($,{key:1,size:"default",onClick:I},{default:l(()=>[s(" + 添加标签 ")]),_:1}))]),_:1}),e(k,{label:"商品分类",prop:"shopType"},{default:l(()=>[e(se,{props:{expandTrigger:"hover",value:"id",label:"name"},options:c.value,size:"default",modelValue:a.value.shopType,"onUpdate:modelValue":d[4]||(d[4]=i=>a.value.shopType=i),clearable:"",placeholder:"选择分类"},null,8,["options","modelValue"])]),_:1}),e(k,{label:"规格",prop:"skus",class:"sku_panel"},{default:l(()=>[e(fe,{skus:a.value.skus,onOnDelSkuRow:F},null,8,["skus"])]),_:1}),e(k,{label:"价格单位",prop:"unit"},{default:l(()=>[e(j,{modelValue:a.value.unit,"onUpdate:modelValue":d[5]||(d[5]=i=>a.value.unit=i),size:"default",clearable:"",placeholder:"选择单位"},{default:l(()=>[(_(!0),f(G,null,L(B.value,i=>(_(),w(H,{key:i.value,label:i.label,value:i.value,disabled:i.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(k,{label:"状态",prop:"status"},{default:l(()=>[e(j,{modelValue:a.value.status,"onUpdate:modelValue":d[6]||(d[6]=i=>a.value.status=i),clearable:"",size:"default",placeholder:"选择状态"},{default:l(()=>[e(H,{label:"已上架",value:"0"}),e(H,{label:"待上架",value:"1"}),e(H,{label:"已下架",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(k,{label:"商品描述"},{default:l(()=>[e(Ve,{content:a.value.shopDetail,editor_width:x.value-D.value-200},null,8,["content","editor_width"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])]),_:1})])],4),e(we,{dialog:W.value,onOnConfirm:M,"cut-width":300,"cut-height":210},null,8,["dialog"])])]),_:1})]),_:1},8,["modelValue","size"])])}}},il=O(nl,[["__scopeId","data-v-a082e4cc"]]);const ul={class:"page"},dl={class:"shop_name"},rl={class:"shop_type"},_l={class:"action_btn"},pl={__name:"page-goods-manager",setup(r){const m=p({shopNo:"",shopName:"",shopType:[],status:""}),U=p(!0),R=p([]),x=p([]);ee(()=>{D(),N()});const D=()=>{le.getShopTypeExcludeDisabled().then(c=>{x.value.push(...c)}).catch(c=>{console.error(c)})},N=()=>{U.value=!0,he.get("data/goods.json").then(c=>{R.value=c.data.data}).catch(c=>{console.error(c)}).finally(()=>{U.value=!1})},a=p({show:!1}),B=()=>{a.value.show=!0};return(c,u)=>{const v=t("el-input"),g=t("el-form-item"),C=t("el-cascader"),S=t("el-option"),z=t("el-select"),I=t("el-button"),W=t("el-form"),b=t("el-card"),M=t("el-row"),T=t("el-table-column"),F=t("el-text"),K=t("el-image"),E=t("el-tag"),A=t("el-empty"),h=t("el-table"),d=t("el-pagination"),$=pe("loading");return _(),f("div",ul,[e(b,{shadow:"never",class:"vel_card_override top"},{default:l(()=>[e(W,{inline:!0,model:m.value},{default:l(()=>[e(g,{label:"编号"},{default:l(()=>[e(v,{modelValue:m.value.shopNo,"onUpdate:modelValue":u[0]||(u[0]=n=>m.value.shopNo=n),placeholder:"商品编号",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),e(g,{label:"名称"},{default:l(()=>[e(v,{modelValue:m.value.shopName,"onUpdate:modelValue":u[1]||(u[1]=n=>m.value.shopName=n),placeholder:"商品名称",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),e(g,{label:"分类"},{default:l(()=>[e(C,{props:{expandTrigger:"hover",value:"id",label:"name"},options:x.value,size:"default",modelValue:m.value.shopType,"onUpdate:modelValue":u[2]||(u[2]=n=>m.value.shopType=n),clearable:"",placeholder:"选择分类"},null,8,["options","modelValue"])]),_:1}),e(g,{label:"状态"},{default:l(()=>[e(z,{modelValue:m.value.status,"onUpdate:modelValue":u[3]||(u[3]=n=>m.value.status=n),size:"default",placeholder:"选择状态",clearable:""},{default:l(()=>[e(S,{label:"已上架",value:"0"}),e(S,{label:"待上架",value:"1"}),e(S,{label:"已下架",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[e(I,{type:"primary",plain:"",onClick:u[4]||(u[4]=()=>{})},{default:l(()=>[s("搜索")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(M,{class:"top_btn_panel"},{default:l(()=>[e(I,{type:"primary",onClick:B},{default:l(()=>[s("添加商品")]),_:1})]),_:1}),ce((_(),w(b,{shadow:"never",class:"vel_card_override content"},{default:l(()=>[e(h,{class:"shop_table",data:R.value},{empty:l(()=>[e(A,{description:"暂无数据"})]),default:l(()=>[e(T,{prop:"shopNo",label:"编号",sortable:"",width:"100"}),e(T,{label:"商品名称","min-width":"250"},{default:l(n=>[o("div",dl,[e(F,null,{default:l(()=>[s(y(n.row.shopName),1)]),_:2},1024)])]),_:1}),e(T,{prop:"thumb",label:"缩略图","min-width":"150"},{default:l(n=>[e(K,{class:"goods_thumb",src:n.row.thumb},null,8,["src"])]),_:1}),e(T,{label:"分类",width:"180"},{default:l(n=>[o("div",rl,[e(F,null,{default:l(()=>[s(y(n.row.shopTypeName),1)]),_:2},1024)])]),_:1}),e(T,{prop:"status",label:"状态",sortable:"",width:"120"},{default:l(n=>[n.row.status==="0"?(_(),w(E,{key:0},{default:l(()=>[s("已上架")]),_:1})):n.row.status==="1"?(_(),w(E,{key:1,type:"warning"},{default:l(()=>[s("待上架")]),_:1})):n.row.status==="2"?(_(),w(E,{key:2,type:"info"},{default:l(()=>[s("已下架")]),_:1})):P("",!0)]),_:1}),e(T,{fixed:"right",label:"操作",width:"230"},{default:l(n=>[o("div",_l,[e(I,{type:"success",plain:""},{default:l(()=>[s("编辑")]),_:1}),e(I,{type:"primary",plain:""},{default:l(()=>[s("详情")]),_:1}),e(I,{type:"danger",plain:""},{default:l(()=>[s("删除")]),_:1})])]),_:1})]),_:1},8,["data"]),e(d,{background:"",layout:"prev, pager, next",total:1e3})]),_:1})),[[$,U.value]]),a.value.show?(_(),w(il,{key:0,dialog:a.value,onOnConfirm:u[5]||(u[5]=()=>{})},null,8,["dialog"])):P("",!0)])}}},jl=O(pl,[["__scopeId","data-v-caee4622"]]);export{jl as default};