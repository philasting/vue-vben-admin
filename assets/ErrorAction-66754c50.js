import{bn as c,I as i,i as l,br as m}from"./index.js";import{d as f,S as p,c as _,Z as E,a8 as d,a9 as e,l as r,u as o}from"./vue-ea98dac5.js";import{as as g,T as L}from"./antd-c2e94c83.js";const A=f({name:"ErrorAction",__name:"ErrorAction",setup(C){const{t:n}=l(),{push:a}=p(),t=c(),s=_(()=>t.getErrorLogListCount);function u(){a(m.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return(h,b)=>(E(),d(o(L),{title:o(n)("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:u},{default:e(()=>[r(o(g),{count:s.value,offset:[0,10],overflowCount:99},{default:e(()=>[r(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title"]))}});export{A as default};
