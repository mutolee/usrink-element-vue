import{k as A,j as Q}from"../@element-plus/@element-plus.b73e6964.js";import{_ as D}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{o as i,c as R,F as J,a9 as K,K as W,a as s,V as b,bi as Z,bg as ee,J as V,r as N,ah as n,W as t,Q as e,U as l,P as _,T as S,ar as te,R as le,u as H}from"../@vue/@vue.5ea14220.js";const ae=m=>(Z("data-v-36a2ab5a"),m=m(),ee(),m),oe={class:"usr_timeline"},se={class:"usr_timeline_item_left"},de=ae(()=>s("div",{class:"usr_timeline_item_mid"},[s("span")],-1)),ie={class:"usr_timeline_item_right"},ne={class:"usr_timeline_item_tit"},_e={class:"usr_timeline_item_desc"},re={__name:"usr-timeline",props:["timelines"],setup(m){return(c,P)=>(i(),R("ul",oe,[(i(!0),R(J,null,K(m.timelines,(w,X)=>(i(),R("li",{class:W(["usr_timeline_item",w.isActive?"is-active":""]),key:w.id},[s("div",se,[s("p",null,b(w.data),1),s("p",null,b(w.time),1)]),de,s("div",ie,[s("div",ne,b(w.title),1),s("div",_e,b(w.desc),1)])],2))),128))]))}},E=D(re,[["__scopeId","data-v-36a2ab5a"]]);const ue={},ce={class:"usr-descriptions"};function fe(m,c){return i(),R("div",ce,[V(m.$slots,"default",{},void 0,!0)])}const F=D(ue,[["render",fe],["__scopeId","data-v-42dabfce"]]);const pe={},me={class:"usr-descriptions-item"},ge={class:"name"},he={class:"desc"};function be(m,c){return i(),R("div",me,[s("div",ge,[V(m.$slots,"name",{},void 0,!0)]),s("div",he,[V(m.$slots,"desc",{},void 0,!0)])])}const f=D(pe,[["render",be],["__scopeId","data-v-3cc53669"]]);const ye={class:"usr_cpt_panel_order_info_article"},we={class:"order-info-header"},ve={class:"dialog_con"},Te={class:"order-info-con"},Ne={class:"order-info-item"},Se={class:"order-info-item"},Re={class:"order-info-item"},Be={class:"order-info-item"},je={class:"order-info-item-wl-top"},Xe={class:"order-wl-header"},ke={class:"order-info-item-wl-con"},xe={class:"order_wl_table_header"},De={class:"order_wl_table_header_left"},Pe={class:"order_wl_table_header_right"},$e={class:"shop_name"},Ge={class:"shop_action"},Ce={class:"order-info-item-wl-con"},ze={class:"order_wl_table_header"},Ve={class:"order_wl_table_header_left"},Fe={class:"order_wl_table_header_right"},Le={class:"shop_name"},qe={class:"shop_action"},Ie={class:"order-info-item"},He={class:"shop_name"},Ee={class:"shop_action"},Ue={class:"order-info-item"},Oe={__name:"order-dialog-info",props:["dialog"],setup(m){const c=N([{id:"1",data:"2021-03-12 12:12:12",title:"商家通过【代客下单】创建订单,管理员账号：test"},{id:"2",isActive:!0,time:"2021-03-12 12:12:12",desc:"商家通过【代客下单】创建订单,管理员账号：test"}]),P=N([{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]),w=N([{id:"1",isActive:!0,time:"2021-03-12 12:12:12",title:"商家通过【代客下单】创建订单,管理员账号：test",desc:"订单状态：待支付"},{id:"2",data:"2021-03-12",time:"12:12:12",title:"商家通过【代客下单】创建订单,管理员账号：test",desc:"订单状态：待支付"}]),X=N([{id:"1",shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,status:"0"}]);return(L,B)=>{const p=n("el-button"),k=n("el-divider"),r=n("el-descriptions"),o=n("el-text"),v=n("el-tag"),G=n("el-input"),T=n("el-form-item"),C=n("el-form"),u=n("el-table-column"),y=n("el-image"),x=n("el-table"),z=n("el-scrollbar"),$=n("el-drawer");return i(),R("div",ye,[t($,{modelValue:m.dialog.show,"onUpdate:modelValue":B[0]||(B[0]=a=>m.dialog.show=a),size:"80%",direction:"rtl",class:"usr_drawer_override"},{header:e(()=>[s("div",we,[t(p,{type:"warning",plain:""},{default:e(()=>[l("订单发货")]),_:1}),t(p,{type:"info",plain:""},{default:e(()=>[l("关闭订单")]),_:1}),t(k,{direction:"vertical"}),t(p,{type:"primary",plain:""},{default:e(()=>[l("打印订单")]),_:1})])]),default:e(()=>[t(z,null,{default:e(()=>[s("div",ve,[s("div",Te,[s("div",Ne,[t(r,{title:"订单信息"}),t(F,null,{default:e(()=>[t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("交易流水号：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("167877165981809751000")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("订单编号：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("202303141327975001")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("创建时间：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("2024-12-12 12:12:12")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("订单金额：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("￥99.99")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("订单状态：")]),_:1})]),desc:e(()=>[t(v,{size:"small",type:"warning"},{default:e(()=>[l("待支付")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("租赁周期：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("2023-12-12 到 2024-12-12")]),_:1})]),_:1})]),_:1})]),s("div",Se,[t(r,{title:"收货信息"}),t(F,null,{default:e(()=>[t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("收件人：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("杨林恩")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("联系电话：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("18721272099")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"info"},{default:e(()=>[l("收货地址：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l(" 北京市-北京市-东城区-123北京市-北京市-东城区-123北京市-北京市-东城区-123北京市-北京市-东城区-123 ")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(o,{type:"danger"},{default:e(()=>[l("买家备注：")]),_:1})]),desc:e(()=>[t(o,null,{default:e(()=>[l("阿基拉第三方，久啊老师的放假啦，阿基拉打扫房间阿里，久啊离开时代峰峻拉， 啊记录卡束带结发了，辣椒水都发了，阿斯蒂芬。 ")]),_:1})]),_:1})]),_:1})]),s("div",Re,[t(r,{title:"备注信息"}),t(E,{timelines:c.value},null,8,["timelines"]),t(C,{"label-width":"100px",style:{"margin-top":"20px"}},{default:e(()=>[t(T,{label:"添加备注："},{default:e(()=>[t(G,{type:"textarea",rows:2,placeholder:"添加订单的记录信息，如：商品xxx损坏..."})]),_:1}),t(T,null,{default:e(()=>[t(p,{type:"primary"},{default:e(()=>[l("添加备注")]),_:1})]),_:1})]),_:1})]),s("div",Be,[s("div",je,[t(r,{title:"物流信息"}),s("div",Xe,[t(p,{type:"primary"},{default:e(()=>[l("创建包裹")]),_:1})])]),s("div",ke,[s("div",xe,[s("div",De,[t(o,{tag:"b",size:"large"},{default:e(()=>[l("包裹1")]),_:1}),t(o,{style:{"margin-left":"20px"}},{default:e(()=>[t(o,{type:"info"},{default:e(()=>[l("物流公司：")]),_:1}),l("顺丰物流")]),_:1}),t(o,{style:{"margin-left":"30px"}},{default:e(()=>[t(o,{type:"info"},{default:e(()=>[l("运单号：")]),_:1}),l("1231313123123123123")]),_:1})]),s("div",Pe,[t(p,{type:"success",plain:"",size:"small"},{default:e(()=>[l("编辑")]),_:1}),t(p,{type:"danger",plain:"",size:"small"},{default:e(()=>[l("删除")]),_:1})])]),t(x,{class:"order_info_wl_table",data:X.value,border:"",style:{width:"100%"}},{default:e(()=>[t(u,{label:"商品编号",prop:"shopNo",width:"100"}),t(u,{label:"缩略图",width:"150"},{default:e(a=>[t(y,{class:"goods_thumb",src:a.row.thumb},null,8,["src"])]),_:1}),t(u,{label:"商品名称","min-width":"300"},{default:e(a=>[s("div",$e,[t(o,null,{default:e(()=>[l(b(a.row.shopName),1)]),_:2},1024)])]),_:1}),t(u,{label:"数量",prop:"goodsCount"}),t(u,{label:"状态",width:"90"},{default:e(a=>[a.row.status==="0"?(i(),_(o,{key:0},{default:e(()=>[l("正常")]),_:1})):a.row.status==="-1"?(i(),_(o,{key:1,type:"danger"},{default:e(()=>[l("已取消")]),_:1})):S("",!0)]),_:1}),t(u,{label:"操作",fixed:"right",width:"120"},{default:e(()=>[s("div",Ge,[t(p,{type:"danger",plain:"",size:"small"},{default:e(()=>[l("删除")]),_:1})])]),_:1})]),_:1},8,["data"])]),s("div",Ce,[s("div",ze,[s("div",Ve,[t(o,{tag:"b",size:"large"},{default:e(()=>[l("包裹2")]),_:1}),t(o,{style:{"margin-left":"20px"}},{default:e(()=>[t(o,{type:"info"},{default:e(()=>[l("物流公司：")]),_:1}),l("顺丰物流")]),_:1}),t(o,{style:{"margin-left":"30px"}},{default:e(()=>[t(o,{type:"info"},{default:e(()=>[l("运单号：")]),_:1}),l("1231313123123123123")]),_:1})]),s("div",Fe,[t(p,{type:"success",plain:"",size:"small"},{default:e(()=>[l("编辑")]),_:1}),t(p,{type:"danger",plain:"",size:"small"},{default:e(()=>[l("删除")]),_:1})])]),t(x,{class:"order_info_wl_table",data:X.value,border:"",style:{width:"100%"}},{default:e(()=>[t(u,{label:"商品编号",prop:"shopNo",width:"100"}),t(u,{label:"缩略图",width:"150"},{default:e(a=>[t(y,{class:"goods_thumb",src:a.row.thumb},null,8,["src"])]),_:1}),t(u,{label:"商品名称","min-width":"300"},{default:e(a=>[s("div",Le,[t(o,null,{default:e(()=>[l(b(a.row.shopName),1)]),_:2},1024)])]),_:1}),t(u,{label:"数量",prop:"goodsCount"}),t(u,{label:"状态",width:"90"},{default:e(a=>[a.row.status==="0"?(i(),_(o,{key:0},{default:e(()=>[l("正常")]),_:1})):a.row.status==="-1"?(i(),_(o,{key:1,type:"danger"},{default:e(()=>[l("已取消")]),_:1})):S("",!0)]),_:1}),t(u,{label:"操作",fixed:"right",width:"120"},{default:e(()=>[s("div",qe,[t(p,{type:"danger",plain:"",size:"small"},{default:e(()=>[l("删除")]),_:1})])]),_:1})]),_:1},8,["data"])])]),s("div",Ie,[t(r,{title:"商品信息"}),t(x,{class:"order_info_shop_table",data:P.value,border:"","show-summary":"",style:{width:"100%"}},{default:e(()=>[t(u,{label:"商品编号",prop:"shopNo",width:"100"}),t(u,{label:"缩略图",width:"150"},{default:e(a=>[t(y,{class:"goods_thumb",src:a.row.thumb},null,8,["src"])]),_:1}),t(u,{label:"商品名称","min-width":"300"},{default:e(a=>[s("div",He,[t(o,null,{default:e(()=>[l(b(a.row.shopName),1)]),_:2},1024)])]),_:1}),t(u,{label:"数量",prop:"goodsCount",width:"100"}),t(u,{label:"价格",prop:"goodsPrice",width:"100"}),t(u,{label:"状态",width:"90"},{default:e(a=>[a.row.status==="0"?(i(),_(o,{key:0},{default:e(()=>[l("正常")]),_:1})):a.row.status==="-1"?(i(),_(o,{key:1,type:"danger"},{default:e(()=>[l("已取消")]),_:1})):S("",!0)]),_:1}),t(u,{label:"操作",fixed:"right",width:"120"},{default:e(a=>[s("div",Ee,[a.row.status==="0"?(i(),_(p,{key:0,type:"primary",size:"small",plain:""},{default:e(()=>[l("取消 ")]),_:1})):a.row.status==="-1"?(i(),_(p,{key:1,type:"warning",size:"small",plain:""},{default:e(()=>[l(" 恢复 ")]),_:1})):S("",!0)])]),_:1})]),_:1},8,["data"])]),s("div",Ue,[t(r,{title:"订单状态流转记录"}),t(E,{timelines:w.value},null,8,["timelines"])])])])]),_:1})]),_:1},8,["modelValue"])])}}},Me=D(Oe,[["__scopeId","data-v-cd64b2e9"]]);const Ye={class:"page"},Ae={class:"table_column_expand"},Qe={class:"order-detail"},Je={class:"order-detail"},Ke={class:"shop_name"},We={class:"order_no_panel"},Ze={class:"order_createTime"},et={class:"order_cycle_panel"},tt={class:"action_btn"},lt={__name:"page-order-manager",setup(m){const c=N({serialNo:"",orderNo:"",contactPhone:"",dateRange:[],status:null}),P=N(!1),w=N([{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:1,goodsList:[{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:4,goodsList:[]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:1,goodsList:[{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:4,goodsList:[]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:1,goodsList:[{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:4,goodsList:[]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:1,goodsList:[{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:4,goodsList:[]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:1,goodsList:[{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"0"},{shopNo:"#9",shopName:"神舟战神X15S-RTX3080 15.6英寸游戏笔记本电脑 R7-5800H 16GB 1TB SSD RTX 3080 16GB",thumb:"https://img1.360buyimg.com/da/jfs/t1/206354/38/39088/64192/6577c7adFfe90680e/5fad216f3b2bf8d3.jpg!q70.jpg",goodsCount:2,goodsPrice:45.99,status:"-1"}]},{serialNo:"167877165981809751000",orderNo:"202303141327975001",createTime:"2023-12-31",cycleStartTime:"2023-12-31",cycleEndTime:"2024-12-12",orderPrice:99.99,status:4,goodsList:[]}]),X=()=>{c.value.serialNo="",c.value.orderNo="",c.value.contactPhone="",c.value.dateRange=[]},L=k=>{const r=new Date;r.setDate(r.getDate()-30);const o=new Date;return k.getTime()<r.getTime()||k.getTime()>o.getTime()},B=N({show:!1}),p=()=>{B.value.show=!0};return(k,r)=>{const o=n("el-input"),v=n("el-form-item"),G=n("el-date-picker"),T=n("el-button"),C=n("el-form"),u=n("el-card"),y=n("el-radio-button"),x=n("el-radio-group"),z=n("el-row"),$=n("el-descriptions"),a=n("el-text"),g=n("el-tag"),h=n("el-table-column"),U=n("el-image"),q=n("el-table"),I=n("el-icon"),O=n("el-empty"),M=n("el-pagination"),Y=te("loading");return i(),R("div",Ye,[t(u,{shadow:"never",class:"usr_card_override top"},{default:e(()=>[t(C,{inline:!0,model:c.value},{default:e(()=>[t(v,{label:"流水号"},{default:e(()=>[t(o,{modelValue:c.value.serialNo,"onUpdate:modelValue":r[0]||(r[0]=d=>c.value.serialNo=d),placeholder:"支付流水号",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),t(v,{label:"订单号"},{default:e(()=>[t(o,{modelValue:c.value.orderNo,"onUpdate:modelValue":r[1]||(r[1]=d=>c.value.orderNo=d),placeholder:"订单号",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),t(v,{label:"收件人电话"},{default:e(()=>[t(o,{modelValue:c.value.contactPhone,"onUpdate:modelValue":r[2]||(r[2]=d=>c.value.contactPhone=d),placeholder:"收件人电话",clearable:"",style:{width:"180px"}},null,8,["modelValue"])]),_:1}),t(v,{label:"下单时间"},{default:e(()=>[t(G,{modelValue:c.value.dateRange,"onUpdate:modelValue":r[3]||(r[3]=d=>c.value.dateRange=d),type:"daterange",editable:!1,"start-placeholder":"开始时间","end-placeholder":"结束时间",size:"default","value-format":"YYYY-MM-DD","disabled-date":L},null,8,["modelValue"])]),_:1}),t(v,null,{default:e(()=>[t(T,{type:"primary",plain:"",onClick:r[4]||(r[4]=()=>{})},{default:e(()=>[l("搜索")]),_:1})]),_:1}),t(v,null,{default:e(()=>[t(T,{type:"warning",plain:"",onClick:X},{default:e(()=>[l("清空")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(z,{class:"top_btn_panel"},{default:e(()=>[t(x,{modelValue:c.value.status,"onUpdate:modelValue":r[5]||(r[5]=d=>c.value.status=d),size:"large"},{default:e(()=>[t(y,{label:"null"},{default:e(()=>[l("全部")]),_:1}),t(y,{label:"0"},{default:e(()=>[l("待支付")]),_:1}),t(y,{label:"1"},{default:e(()=>[l("待发货")]),_:1}),t(y,{label:"2"},{default:e(()=>[l("已发货")]),_:1}),t(y,{label:"3"},{default:e(()=>[l("已收货")]),_:1}),t(y,{label:"4"},{default:e(()=>[l("已完成")]),_:1}),t(y,{label:"5"},{default:e(()=>[l("已关闭")]),_:1}),t(y,{label:"-1"},{default:e(()=>[l("退款中")]),_:1})]),_:1},8,["modelValue"])]),_:1}),le((i(),_(u,{shadow:"never",class:"usr_card_override content"},{default:e(()=>[t(q,{class:"order_table",data:w.value},{empty:e(()=>[t(O,{description:"暂无数据"})]),default:e(()=>[t(h,{type:"expand"},{default:e(d=>[s("div",Ae,[s("div",Qe,[t($,{title:"订单信息"}),t(F,null,{default:e(()=>[t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("交易流水号：")]),_:1})]),desc:e(()=>[t(a,null,{default:e(()=>[l("167877165981809751000")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("订单编号：")]),_:1})]),desc:e(()=>[t(a,null,{default:e(()=>[l("202303141327975001")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("创建时间：")]),_:1})]),desc:e(()=>[t(a,null,{default:e(()=>[l("2024-12-12 12:12:12")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("订单金额：")]),_:1})]),desc:e(()=>[t(a,null,{default:e(()=>[l("￥99.99")]),_:1})]),_:1}),t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("订单状态：")]),_:1})]),desc:e(()=>[d.row.status===0?(i(),_(g,{key:0,size:"small",type:"warning"},{default:e(()=>[l("待支付 ")]),_:1})):d.row.status===1?(i(),_(g,{key:1,size:"small",type:"danger"},{default:e(()=>[l("待发货 ")]),_:1})):d.row.status===2?(i(),_(g,{key:2,size:"small"},{default:e(()=>[l("已发货")]),_:1})):d.row.status===3?(i(),_(g,{key:3,size:"small"},{default:e(()=>[l("已收货")]),_:1})):d.row.status===4?(i(),_(g,{key:4,size:"small",type:"success"},{default:e(()=>[l("已完成 ")]),_:1})):d.row.status===5?(i(),_(g,{key:5,size:"small",type:"info"},{default:e(()=>[l("已关闭 ")]),_:1})):d.row.status===-1?(i(),_(g,{key:6,size:"small",type:"danger"},{default:e(()=>[l("退款中 ")]),_:1})):S("",!0)]),_:2},1024),t(f,null,{name:e(()=>[t(a,{type:"info"},{default:e(()=>[l("租赁周期：")]),_:1})]),desc:e(()=>[t(a,null,{default:e(()=>[l("2023-12-12 到 2024-12-12")]),_:1})]),_:1})]),_:2},1024)]),s("div",Je,[t($,{title:"商品信息"}),t(q,{class:"order_shop_table",data:d.row.goodsList,border:"","show-summary":"",style:{width:"100%"}},{default:e(()=>[t(h,{label:"商品编号",prop:"shopNo",width:"100"}),t(h,{label:"缩略图",width:"150"},{default:e(j=>[t(U,{class:"goods_thumb",src:j.row.thumb},null,8,["src"])]),_:1}),t(h,{label:"商品名称","min-width":"300"},{default:e(j=>[s("div",Ke,[t(a,null,{default:e(()=>[l(b(j.row.shopName),1)]),_:2},1024)])]),_:1}),t(h,{label:"数量",prop:"goodsCount",width:"100"}),t(h,{label:"价格",prop:"goodsPrice",width:"100"}),t(h,{label:"状态"},{default:e(j=>[j.row.status==="0"?(i(),_(a,{key:0},{default:e(()=>[l("正常")]),_:1})):j.row.status==="-1"?(i(),_(a,{key:1,type:"danger"},{default:e(()=>[l("已取消")]),_:1})):S("",!0)]),_:1})]),_:2},1032,["data"])])])]),_:1}),t(h,{label:"订单号",sortable:"",width:"280"},{default:e(d=>[s("div",We,[t(a,null,{default:e(()=>[t(a,{type:"info"},{default:e(()=>[l("订单号：")]),_:1}),l(" "+b(d.row.orderNo),1)]),_:2},1024)])]),_:1}),t(h,{label:"下单时间",sortable:"",width:"150"},{default:e(d=>[s("div",Ze,[t(a,null,{default:e(()=>[l(b(d.row.createTime),1)]),_:2},1024)])]),_:1}),t(h,{label:"租赁周期",width:"150"},{default:e(d=>[s("div",et,[t(a,null,{default:e(()=>[t(I,{size:"16"},{default:e(()=>[t(H(A))]),_:1}),l(" "+b(d.row.cycleStartTime),1)]),_:2},1024),t(a,null,{default:e(()=>[t(I,{size:"16"},{default:e(()=>[t(H(Q))]),_:1}),l(" "+b(d.row.cycleEndTime),1)]),_:2},1024)])]),_:1}),t(h,{label:"商品数量",width:"100",align:"center"},{default:e(d=>[t(a,null,{default:e(()=>[l(b(d.row.goodsList.length),1)]),_:2},1024)]),_:1}),t(h,{label:"订单金额",sortable:"",width:"120",align:"center"},{default:e(d=>[t(a,null,{default:e(()=>[l("￥"+b(d.row.orderPrice),1)]),_:2},1024)]),_:1}),t(h,{label:"状态",sortable:"",width:"120"},{default:e(d=>[d.row.status===0?(i(),_(g,{key:0,type:"warning"},{default:e(()=>[l("待支付")]),_:1})):d.row.status===1?(i(),_(g,{key:1,type:"danger"},{default:e(()=>[l("待发货")]),_:1})):d.row.status===2?(i(),_(g,{key:2},{default:e(()=>[l("已发货")]),_:1})):d.row.status===3?(i(),_(g,{key:3},{default:e(()=>[l("已收货")]),_:1})):d.row.status===4?(i(),_(g,{key:4,type:"success"},{default:e(()=>[l("已完成")]),_:1})):d.row.status===5?(i(),_(g,{key:5,type:"info"},{default:e(()=>[l("已关闭")]),_:1})):d.row.status===-1?(i(),_(g,{key:6,type:"danger"},{default:e(()=>[l("退款中")]),_:1})):S("",!0)]),_:1}),t(h,{fixed:"right",label:"操作","min-width":"230"},{default:e(d=>[s("div",tt,[t(T,{type:"success",plain:""},{default:e(()=>[l("编辑")]),_:1}),t(T,{type:"primary",plain:"",onClick:p},{default:e(()=>[l("详情")]),_:1}),t(T,{type:"danger",plain:""},{default:e(()=>[l("删除")]),_:1})])]),_:1})]),_:1},8,["data"]),t(M,{background:"",layout:"prev, pager, next",total:1e3})]),_:1})),[[Y,P.value]]),B.value.show?(i(),_(Me,{key:0,dialog:B.value},null,8,["dialog"])):S("",!0)])}}},dt=D(lt,[["__scopeId","data-v-f566ebd2"]]);export{dt as default};
