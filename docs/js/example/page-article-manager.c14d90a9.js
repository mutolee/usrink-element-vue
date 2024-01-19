import{u as E,i as P}from"../../assets/index-8c41d22a.js";import{_ as A}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{ah as l,o as m,c as $,W as e,Q as t,a,U as n,V as k,T as C,K as j,r as f,L as N,bi as M,bg as B,i as K,ar as O,R as Q,P as x}from"../@vue/@vue.5ea14220.js";import{u as Y}from"../usr-editor/usr-editor.e40bdb86.js";import"../pinia/pinia.fb187a93.js";import"../vue-router/vue-router.6ed6991e.js";import"../localforage/localforage.9e9e3b2b.js";import"../@kangc/@kangc.f59435d2.js";import"../vue/vue.1c0a12e0.js";import"../js-cookie/js-cookie.edb2da2a.js";import"../axios/axios.47b9d439.js";import"../element-plus/element-plus.b000c8d0.js";import"../lodash-es/lodash-es.21c98b27.js";import"../@vueuse/@vueuse.71e72d96.js";import"../@element-plus/@element-plus.b73e6964.js";import"../@popperjs/@popperjs.c75af06c.js";import"../@ctrl/@ctrl.f8748455.js";import"../dayjs/dayjs.10495895.js";import"../async-validator/async-validator.dee29e8b.js";import"../memoize-one/memoize-one.297ddbcb.js";import"../escape-html/escape-html.66262ebd.js";import"../normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../@floating-ui/@floating-ui.72671fae.js";import"../echarts/echarts.3025caf6.js";import"../tslib/tslib.54e39b60.js";import"../zrender/zrender.7e5d4d80.js";import"../vue-echarts/vue-echarts.8b3ad32f.js";import"../resize-detector/resize-detector.a5205554.js";import"../nprogress/nprogress.d255c298.js";import"../highlight.js/highlight.js.1b3e8c39.js";import"../@wangeditor/@wangeditor.654f9dc1.js";const G=()=>{const o=new Date,d=o.getFullYear(),_=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0"),v=String(o.getHours()).padStart(2,"0"),i=String(o.getMinutes()).padStart(2,"0"),b=String(o.getSeconds()).padStart(2,"0");return`${d}-${_}-${s} ${v}:${i}:${b}`},J={getCurrentDateTime:G};const X={class:"preview_con_article"},Z={class:"minapp_header"},ee={class:"article_info_panel"},te={key:0,class:"tit_panel"},le=["innerHTML"],oe={__name:"preview-article",props:["articleInfo","preViewWidth"],setup(o){return(d,_)=>{const s=l("el-text"),v=l("el-scrollbar");return m(),$("div",X,[e(v,null,{default:t(()=>[a("div",Z,[a("span",null,[n("文章"),e(s,{type:"info"},{default:t(()=>[n("(预览)")]),_:1})])]),a("div",ee,[o.articleInfo.showTit&&o.articleInfo.articleTitle?(m(),$("div",te,[e(s,{class:"tit",tag:"b",size:"large"},{default:t(()=>[n(k(o.articleInfo.articleTitle),1)]),_:1}),e(s,{class:"time",type:"info"},{default:t(()=>[n("时间："+k(o.articleInfo.createTime),1)]),_:1})])):C("",!0),a("div",{class:j(["content_panel",o.articleInfo.showSide?"padding":""])},[a("div",{class:"article_detail",innerHTML:o.articleInfo.articleDetail.val},null,8,le)],2)])]),_:1})])}}},H=A(oe,[["__scopeId","data-v-b25ab133"]]);const ae=o=>(M("data-v-c8803944"),o=o(),B(),o),ie={class:"usr_cpt_panel_drawer_add_article"},re=ae(()=>a("h4",null,"添加文章",-1)),ne={class:"dialog_con"},se={class:"page_left_con"},ce={class:"preview"},de={class:"preview_publish"},_e={class:"page_right",style:{flex:"1"}},ue={class:"page_right_con"},pe={class:"add_article_panel"},me={__name:"article-dialog-add",props:["dialog"],emits:["onConfirm"],setup(o,{emit:d}){const _=d,s=f(400),v=f(null),i=f({articleNo:"",articleTitle:"",status:"1",showTit:!0,showSide:!0,createTime:J.getCurrentDateTime(),articleDetail:{val:"<p></p>"}}),b=f({articleTitle:[{required:!0,message:"文章标题不能为空！",trigger:"blur"},{min:8,max:40,message:"长度在 8 到 40 个字符",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]}),h=async()=>{try{await v.value.validate(),console.log("表单验证通过"),_("onConfirm",i.value)}catch{console.log("表单验证未通过")}};return(T,r)=>{const u=l("el-button"),D=l("el-input"),g=l("el-form-item"),V=l("el-switch"),S=l("el-option"),w=l("el-select"),U=l("el-form"),I=l("el-scrollbar"),W=l("el-card"),y=l("el-drawer");return m(),$("div",ie,[e(y,{modelValue:o.dialog.show,"onUpdate:modelValue":r[4]||(r[4]=p=>o.dialog.show=p),size:"80%",direction:"rtl",class:"usr_drawer_override"},{header:t(()=>[re]),default:t(()=>[e(I,null,{default:t(()=>[a("div",ne,[a("div",{class:"page_left",style:N({width:s.value+"px",minWidth:s.value+"px"})},[a("div",se,[a("div",ce,[e(H,{articleInfo:i.value,preViewWidth:s.value},null,8,["articleInfo","preViewWidth"]),a("div",de,[e(u,{type:"primary",size:"large",onClick:h},{default:t(()=>[n("保存 ")]),_:1})])])])],4),a("div",_e,[a("div",ue,[e(W,{shadow:"never",class:"usr_card_override"},{default:t(()=>[a("div",pe,[e(I,null,{default:t(()=>[e(U,{model:i.value,ref_key:"formRef",ref:v,rules:b.value,"label-width":"120px"},{default:t(()=>[e(g,{label:"标题",prop:"articleTitle",style:{"padding-top":"20px"}},{default:t(()=>[e(D,{modelValue:i.value.articleTitle,"onUpdate:modelValue":r[0]||(r[0]=p=>i.value.articleTitle=p),clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),_:1}),e(g,{label:"显示标题"},{default:t(()=>[e(V,{modelValue:i.value.showTit,"onUpdate:modelValue":r[1]||(r[1]=p=>i.value.showTit=p)},null,8,["modelValue"])]),_:1}),e(g,{label:"内容边隙"},{default:t(()=>[e(V,{modelValue:i.value.showSide,"onUpdate:modelValue":r[2]||(r[2]=p=>i.value.showSide=p)},null,8,["modelValue"])]),_:1}),e(g,{label:"状态",prop:"status"},{default:t(()=>[e(w,{modelValue:i.value.status,"onUpdate:modelValue":r[3]||(r[3]=p=>i.value.status=p),clearable:"",size:"default",placeholder:"选择状态"},{default:t(()=>[e(S,{label:"已上架",value:"0"}),e(S,{label:"待上架",value:"1"}),e(S,{label:"已下架",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"商品描述"},{default:t(()=>[e(Y,{content:i.value.articleDetail,editor_width:"",editor_height:450},null,8,["content"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])]),_:1})])])])]),_:1})]),_:1},8,["modelValue"])])}}},fe=A(me,[["__scopeId","data-v-c8803944"]]);const ve=o=>(M("data-v-30c25d2c"),o=o(),B(),o),ge={class:"usr_cpt_panel_drawer_info_article"},be=ve(()=>a("h4",null,"文章详情",-1)),he={class:"dialog_con"},we={class:"page_left_con"},ye={class:"preview"},Ve={class:"preview_publish"},xe={__name:"article-dialog-info",props:["dialog"],emits:["onConfirm"],setup(o,{emit:d}){E();const _=f(400),s=f({articleNo:"",articleTitle:"啊阿拉斯加都发了，阿里卡束带结发拉，拉克丝代发，阿斯蒂芬离开",status:"1",showTit:!0,showSide:!0,articleDetail:{val:"<p>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/>文章内容<br/></p>"}});return(v,i)=>{const b=l("el-button"),h=l("el-scrollbar"),T=l("el-drawer");return m(),$("div",ge,[e(T,{modelValue:o.dialog.show,"onUpdate:modelValue":i[0]||(i[0]=r=>o.dialog.show=r),size:_.value,direction:"rtl",class:"usr_drawer_override"},{header:t(()=>[be]),default:t(()=>[e(h,null,{default:t(()=>[a("div",he,[a("div",{class:"page_left",style:N({width:_.value+"px",minWidth:_.value+"px"})},[a("div",we,[a("div",ye,[e(H,{articleInfo:s.value,preViewWidth:_.value},null,8,["articleInfo","preViewWidth"]),a("div",Ve,[e(b,{type:"primary",size:"large",onClick:v.onConfirm},{default:t(()=>[n("编辑 ")]),_:1},8,["onClick"])])])])],4)])]),_:1})]),_:1},8,["modelValue","size"])])}}},Te=A(xe,[["__scopeId","data-v-30c25d2c"]]);const Se={class:"page"},Ie={class:"article_title"},$e={class:"action_btn"},De={__name:"page-article-manager",setup(o){const d=f({articleNo:"",articleTitle:"",status:""}),_=f(!0),s=f([]);K(()=>{v()});const v=()=>{P.get("data/articles.json").then(r=>{s.value=r.data.data}).catch(r=>{console.error(r)}).finally(()=>{_.value=!1})},i=f({show:!1}),b=()=>{i.value.show=!0},h=f({show:!1}),T=()=>{h.value.show=!0};return(r,u)=>{const D=l("el-input"),g=l("el-form-item"),V=l("el-option"),S=l("el-select"),w=l("el-button"),U=l("el-form"),I=l("el-card"),W=l("el-row"),y=l("el-table-column"),p=l("el-text"),z=l("el-tag"),L=l("el-empty"),R=l("el-table"),q=l("el-pagination"),F=O("loading");return m(),$("div",Se,[e(I,{shadow:"never",class:"usr_card_override top"},{default:t(()=>[e(U,{inline:!0,model:d.value},{default:t(()=>[e(g,{label:"编号"},{default:t(()=>[e(D,{modelValue:d.value.articleNo,"onUpdate:modelValue":u[0]||(u[0]=c=>d.value.articleNo=c),placeholder:"编号",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),e(g,{label:"标题"},{default:t(()=>[e(D,{modelValue:d.value.articleTitle,"onUpdate:modelValue":u[1]||(u[1]=c=>d.value.articleTitle=c),placeholder:"标题",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),e(g,{label:"状态"},{default:t(()=>[e(S,{modelValue:d.value.status,"onUpdate:modelValue":u[2]||(u[2]=c=>d.value.status=c),size:"default",placeholder:"选择状态",clearable:""},{default:t(()=>[e(V,{label:"已上架",value:"0"}),e(V,{label:"待上架",value:"1"}),e(V,{label:"已下架",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:t(()=>[e(w,{type:"primary",plain:"",onClick:u[3]||(u[3]=()=>{})},{default:t(()=>[n("搜索")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(W,{class:"top_btn_panel"},{default:t(()=>[e(w,{type:"primary",onClick:b},{default:t(()=>[n("添加文章")]),_:1})]),_:1}),Q((m(),x(I,{shadow:"never",class:"usr_card_override content"},{default:t(()=>[e(R,{class:"article_table",data:s.value},{empty:t(()=>[e(L,{description:"暂无数据"})]),default:t(()=>[e(y,{prop:"articleNo",label:"编号",sortable:"",width:"100"}),e(y,{label:"文章标题","min-width":"250"},{default:t(c=>[a("div",Ie,[e(p,null,{default:t(()=>[n(k(c.row.articleTitle),1)]),_:2},1024)])]),_:1}),e(y,{label:"时间"},{default:t(c=>[e(p,{type:"info"},{default:t(()=>[n(k(c.row.createTime),1)]),_:2},1024)]),_:1}),e(y,{label:"状态",sortable:"",width:"120"},{default:t(c=>[c.row.status==="0"?(m(),x(z,{key:0},{default:t(()=>[n("已上架")]),_:1})):c.row.status==="1"?(m(),x(z,{key:1,type:"warning"},{default:t(()=>[n("待上架")]),_:1})):c.row.status==="2"?(m(),x(z,{key:2,type:"info"},{default:t(()=>[n("已下架")]),_:1})):C("",!0)]),_:1}),e(y,{fixed:"right",label:"操作",width:"230"},{default:t(c=>[a("div",$e,[e(w,{type:"success",plain:""},{default:t(()=>[n("编辑")]),_:1}),e(w,{type:"primary",plain:"",onClick:T},{default:t(()=>[n("详情")]),_:1}),e(w,{type:"danger",plain:""},{default:t(()=>[n("删除")]),_:1})])]),_:1})]),_:1},8,["data"]),e(q,{background:"",layout:"prev, pager, next",total:1e3})]),_:1})),[[F,_.value]]),i.value.show?(m(),x(fe,{key:0,dialog:i.value,onOnConfirm:u[4]||(u[4]=()=>{})},null,8,["dialog"])):C("",!0),h.value.show?(m(),x(Te,{key:1,dialog:h.value},null,8,["dialog"])):C("",!0)])}}},rt=A(De,[["__scopeId","data-v-54cafd74"]]);export{rt as default};
