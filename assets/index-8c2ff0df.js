var m=(t,o,e)=>new Promise((n,u)=>{var r=s=>{try{a(e.next(s))}catch(i){u(i)}},l=s=>{try{a(e.throw(s))}catch(i){u(i)}},a=s=>s.done?n(s.value):Promise.resolve(s.value).then(r,l);a((e=e.apply(t,o)).next())});import{t as b,i as I,n as h,h as z,w as v}from"./index.js";import{f,u as c,d as C,c as F,h as B,Z as y,a8 as w,a9 as p,E as x,a0 as A,ac as S,a7 as N,ad as $,aa as k,N as T,ai as j,aj as D,l as O}from"./vue-ea98dac5.js";import{B as P}from"./antd-c2e94c83.js";import{u as E}from"./useFormItem-1ece48e0.js";function R(t){const o=f(t),e=f(!1);let n;function u(){n&&window.clearInterval(n)}function r(){e.value=!1,u(),n=null}function l(){c(e)||n||(e.value=!0,n=setInterval(()=>{c(o)===1?(r(),o.value=t):o.value-=1},1e3))}function a(){o.value=t,r()}function s(){a(),l()}return b(()=>{a()}),{start:l,reset:a,restart:s,clear:u,stop:r,currentCount:o,isStart:e}}const g=C({name:"CountButton",__name:"CountButton",props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const o=t,{t:e}=I(),n=f(!1),{currentCount:u,isStart:r,start:l,reset:a}=R(o.count),s=F(()=>c(r)?e("component.countdown.sendText",[c(u)]):e("component.countdown.normalText"));B(()=>{o.value===void 0&&a()});function i(){return m(this,null,function*(){const{beforeStartFunc:d}=o;if(d&&h(d)){n.value=!0;try{(yield d())&&l()}finally{n.value=!1}}else l()})}return(d,_)=>(y(),w(c(P),S(d.$attrs,{disabled:c(r),onClick:i,loading:n.value}),{default:p(()=>[x(A(s.value),1)]),_:1},16,["disabled","loading"]))}}),V=C({name:"CountDownInput",inheritAttrs:!1,__name:"CountdownInput",props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const o=t,{prefixCls:e}=z("countdown-input"),[n]=E(o);return(u,r)=>{const l=N("a-input");return y(),w(l,S(u.$attrs,{class:c(e),size:t.size,value:c(n)}),$({addonAfter:p(()=>[O(g,{size:t.size,count:t.count,value:c(n),beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[k(Object.keys(u.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:p(s=>[T(u.$slots,a,j(D(s||{})))])}))]),1040,["class","size","value"])}}});const H=v(V);v(g);export{H as C};
