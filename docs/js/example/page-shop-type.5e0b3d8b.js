import{_ as r}from"../vue-img-cutter/vue-img-cutter.7a983898.js";import{ah as a,c as f,W as e,Q as t,o as _,U as c,P as u,T as b}from"../@vue/@vue.0dd910b9.js";const g={class:"page"},y={__name:"page-shop-type",setup(h){const p=[{id:1,name:"笔记本",icon:"https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png"},{id:2,name:"台式机",icon:"https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg"},{id:3,name:"电脑组件",icon:"https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg",children:[{id:31,name:"显示器",icon:"https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg"},{id:32,name:"主板",icon:"https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg"}]},{id:4,name:"外设产品",icon:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg"}];return(x,j)=>{const o=a("el-button"),l=a("el-row"),s=a("el-table-column"),i=a("el-image"),m=a("el-table"),d=a("el-card");return _(),f("div",g,[e(d,{shadow:"never",class:"vel_card_override"},{default:t(()=>[e(l,{style:{"margin-bottom":"10px"}},{default:t(()=>[e(o,{type:"primary",plain:""},{default:t(()=>[c("创建分类")]),_:1})]),_:1}),e(m,{data:p,style:{width:"100%","margin-bottom":"20px"},"row-key":"id","default-expand-all":""},{default:t(()=>[e(s,{prop:"name",label:"分类名称",width:"200"}),e(s,{prop:"icon",label:"图标"},{default:t(n=>[e(i,{src:n.row.icon,style:{width:"50px",height:"50px"}},null,8,["src"])]),_:1}),e(s,{label:"操作"},{default:t(n=>[e(l,null,{default:t(()=>[n.row.children?(_(),u(o,{key:0,type:"primary",plain:""},{default:t(()=>[c("添加子分类")]),_:1})):b("",!0),e(o,{type:"success",plain:""},{default:t(()=>[c("编辑")]),_:1}),e(o,{type:"danger",plain:""},{default:t(()=>[c("删除")]),_:1})]),_:2},1024)]),_:1})]),_:1})]),_:1})])}}},N=r(y,[["__scopeId","data-v-12635eb4"]]);export{N as default};
