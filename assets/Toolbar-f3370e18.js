var y=Object.defineProperty,k=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var m=(e,o,n)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,v=(e,o)=>{for(var n in o||(o={}))I.call(o,n)&&m(e,n,o[n]);if(f)for(var n of f(o))J.call(o,n)&&m(e,n,o[n]);return e},g=(e,o)=>k(e,$(o));import{I as O,e as R}from"./index.js";import{d as T,r as w,e as B,G as D,a7 as l,Z as r,_ as C,$ as s,F as N,aa as A,a8 as F,a9 as c,l as a,a1 as b}from"./vue-ea98dac5.js";import{T as M,E as U}from"./antd-c2e94c83.js";const E=T({name:"OperatingArea",components:{Tooltip:M,Icon:O,Divider:U},setup(){const e=w({toolbarsConfigs:[{title:"预览-支持布局",type:"preview",event:"handlePreview",icon:"ant-design:chrome-filled"},{title:"预览-不支持布局",type:"preview",event:"handlePreview2",icon:"ant-design:chrome-filled"},{title:"导入JSON",type:"importJson",event:"handleOpenImportJsonModal",icon:"ant-design:import-outlined"},{title:"生成JSON",type:"exportJson",event:"handleOpenJsonModal",icon:"ant-design:export-outlined"},{title:"生成代码",type:"exportCode",event:"handleOpenCodeModal",icon:"ant-design:code-filled"},{title:"清空",type:"reset",event:"handleClearFormItems",icon:"ant-design:clear-outlined"}]}),o=B("historyReturn"),{undo:n,redo:p,canUndo:u,canRedo:_}=o;return g(v({},D(e)),{undo:n,redo:p,canUndo:u,canRedo:_})}});const P={class:"operating-area"},S={class:"left-btn-box"},V=["onClick"],j=["disabled"],z=["disabled"];function G(e,o,n,p,u,_){const i=l("Icon"),d=l("Tooltip"),h=l("Divider");return r(),C("div",P,[s("div",S,[(r(!0),C(N,null,A(e.toolbarsConfigs,t=>(r(),F(d,{title:t.title,key:t.icon},{default:c(()=>[s("a",{onClick:L=>e.$emit(t.event),class:"toolbar-text"},[a(i,{icon:t.icon},null,8,["icon"])],8,V)]),_:2},1032,["title"]))),128)),a(h,{type:"vertical"}),a(d,{title:"撤销"},{default:c(()=>[s("a",{class:b({disabled:!e.canUndo}),disabled:!e.canUndo,onClick:o[0]||(o[0]=(...t)=>e.undo&&e.undo(...t))},[a(i,{icon:"ant-design:undo-outlined"})],10,j)]),_:1}),a(d,{title:"重做"},{default:c(()=>[s("a",{class:b({disabled:!e.canRedo}),disabled:!e.canRedo,onClick:o[1]||(o[1]=(...t)=>e.redo&&e.redo(...t))},[a(i,{icon:"ant-design:redo-outlined"})],10,z)]),_:1})])])}const K=R(E,[["render",G],["__scopeId","data-v-c6411f06"]]);export{K as default};
