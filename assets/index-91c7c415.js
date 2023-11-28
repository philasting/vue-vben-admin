var fe=Object.defineProperty,de=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var U=(r,n,t)=>n in r?fe(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,y=(r,n)=>{for(var t in n||(n={}))we.call(n,t)&&U(r,t,n[t]);if(M)for(var t of M(n))he.call(n,t)&&U(r,t,n[t]);return r},L=(r,n)=>de(r,ge(n));var Y=(r,n,t)=>new Promise((i,l)=>{var u=c=>{try{e(t.next(c))}catch(p){l(p)}},o=c=>{try{e(t.throw(c))}catch(p){l(p)}},e=c=>c.done?i(c.value):Promise.resolve(c.value).then(u,o);e((t=t.apply(r,n)).next())});import{i as W,h as V,p as R,ac as ye,y as me,d as Z,ab as De,n as X,r as ke,t as ee,B as ve,Y as te,w as Be}from"./index.js";import{d as q,c as w,a7 as $e,Z as d,_ as b,F as Ce,N as g,a8 as T,a9 as h,E as j,a0 as O,ac as S,ab as P,a1 as D,u as a,af as oe,$ as G,l as E,f as m,g as F,H as _,w as J,q as _e,ad as K,n as be,aa as Pe,ai as Te,aj as Oe,x as se,r as ae,h as Se}from"./vue-ea98dac5.js";import{az as Fe,s as He}from"./antd-c2e94c83.js";import{i as Ne}from"./isNumber-f0336cfd.js";const{t:Q}=W(),ne={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Q("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Q("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=y({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},open:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},ne),Re=q({name:"BasicDrawerFooter",__name:"DrawerFooter",props:L(y({},ne),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(r,{emit:n}){const t=r,{prefixCls:i}=V("basic-drawer-footer"),l=w(()=>{const e=`${t.height}`;return{height:e,lineHeight:`calc(${e} - 1px)`}});function u(){n("ok")}function o(){n("close")}return(e,c)=>{const p=$e("a-button");return e.showFooter||e.$slots.footer?(d(),b("div",{key:0,class:D(a(i)),style:oe(l.value)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(d(),b(Ce,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(d(),T(p,S({key:0},e.cancelButtonProps,{onClick:o,class:"mr-2"}),{default:h(()=>[j(O(e.cancelText),1)]),_:1},16)):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(d(),T(p,S({key:1,type:e.okType,onClick:u},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[j(O(e.okText),1)]),_:1},16,["type","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}}});const je={key:1},Ee=q({name:"BasicDrawerHeader",__name:"DrawerHeader",props:{isDetail:R.bool,showDetailBack:R.bool,title:R.string},emits:["close"],setup(r,{emit:n}){const{prefixCls:t}=V("basic-drawer-header");function i(){n("close")}return(l,u)=>r.isDetail?(d(),b("div",{key:1,class:D([a(t),`${a(t)}--detail`])},[G("span",{class:D(`${a(t)}__twrap`)},[r.showDetailBack?(d(),b("span",{key:0,onClick:i},[E(a(Fe),{class:D(`${a(t)}__back`)},null,8,["class"])])):P("",!0),r.title?(d(),b("span",je,O(r.title),1)):P("",!0)],2),G("span",{class:D(`${a(t)}__toolbar`)},[g(l.$slots,"titleToolbar")],2)],2)):(d(),T(a(ye),{key:0,class:D(a(t))},{default:h(()=>[g(l.$slots,"title"),j(" "+O(l.$slots.title?"":r.title),1)]),_:3},8,["class"]))}});const Ie=q({inheritAttrs:!1,__name:"BasicDrawer",props:Le,emits:["open-change","ok","close","register"],setup(r,{emit:n}){const t=r,i=m(!1),l=me(),u=m(null),{t:o}=W(),{prefixVar:e,prefixCls:c}=V("basic-drawer"),p={setDrawerProps:ce,emitOpen:void 0},v=F();v&&n("register",p,v.uid);const z=w(()=>Z(_(t),a(u))),B=w(()=>{const s=L(y(y({placement:"right"},a(l)),a(z)),{open:a(i)});s.title=void 0;const{isDetail:f,width:$,wrapClassName:C,getContainer:N}=s;if(f){$||(s.width="100%");const A=`${c}__detail`;s.rootClassName=C?`${C} ${A}`:A,N||(s.getContainer=`.${e}-layout-content`)}return s}),re=w(()=>y(y({},l),a(B))),x=w(()=>{const{footerHeight:s,showFooter:f}=a(B);return f&&s?Ne(s)?`${s}px`:`${s.replace("px","")}px`:"0px"}),le=w(()=>({position:"relative",height:`calc(100% - ${a(x)})`})),ie=w(()=>{var s;return!!((s=a(B))!=null&&s.loading)});J(()=>t.open,(s,f)=>{s!==f&&(i.value=s)},{deep:!0}),J(()=>i.value,s=>{se(()=>{n("open-change",s)})});function H(s){return Y(this,null,function*(){const{closeFunc:f}=a(B);if(n("close",s),f&&X(f)){const $=yield f();i.value=!$;return}i.value=!1})}function ce(s){u.value=Z(a(u)||{},s),Reflect.has(s,"open")&&(i.value=!!s.open)}function ue(){n("ok")}const pe=z;return(s,f)=>{const $=_e("loading");return d(),T(a(He),S(re.value,{class:a(c),onClose:H}),K({default:h(()=>[be((d(),T(a(De),{style:oe(le.value),"loading-tip":s.loadingText||a(o)("common.loadingText")},{default:h(()=>[g(s.$slots,"default")]),_:3},8,["style","loading-tip"])),[[$,ie.value]]),E(Re,S(B.value,{onClose:H,onOk:ue,height:x.value}),K({_:2},[Pe(Object.keys(s.$slots),C=>({name:C,fn:h(N=>[g(s.$slots,C,Te(Oe(N||{})))])}))]),1040,["height"])]),_:2},[s.$slots.title?{name:"title",fn:h(()=>[g(s.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[E(Ee,{title:a(pe).title,isDetail:s.isDetail,showDetailBack:s.showDetailBack,onClose:H},{titleToolbar:h(()=>[g(s.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack"])]),key:"0"}]),1040,["class"])}}});const k=ae({}),I=ae({});function Me(){if(!F())throw new Error("useDrawer() can only be used inside setup() or functional components!");const r=m(null),n=m(!1),t=m(0);function i(o,e){ee(()=>{r.value=null,n.value=null,k[a(t)]=null}),!(a(n)&&ve()&&o===a(r))&&(t.value=e,r.value=o,n.value=!0,o.emitOpen=(c,p)=>{I[p]=c})}const l=()=>{const o=a(r);return o||te("useDrawer instance is undefined!"),o},u={setDrawerProps:o=>{var e;(e=l())==null||e.setDrawerProps(o)},getOpen:w(()=>I[~~a(t)]),openDrawer:(o=!0,e,c=!0)=>{var v;if((v=l())==null||v.setDrawerProps({open:o}),!e)return;if(c){k[a(t)]=null,k[a(t)]=_(e);return}ke(_(k[a(t)]),_(e))||(k[a(t)]=_(e))},closeDrawer:()=>{var o;(o=l())==null||o.setDrawerProps({open:!1})}};return[i,u]}const Ue=r=>{const n=m(null),t=F(),i=m(0);if(!F())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const o=a(n);if(!o){te("useDrawerInner instance is undefined!");return}return o},u=(o,e)=>{ee(()=>{n.value=null}),i.value=e,n.value=o,t==null||t.emit("register",o,e)};return Se(()=>{const o=k[a(i)];o&&(!r||!X(r)||se(()=>{r(o)}))}),[u,{changeLoading:(o=!0)=>{var e;(e=l())==null||e.setDrawerProps({loading:o})},changeOkLoading:(o=!0)=>{var e;(e=l())==null||e.setDrawerProps({confirmLoading:o})},getOpen:w(()=>I[~~a(i)]),closeDrawer:()=>{var o;(o=l())==null||o.setDrawerProps({open:!1})},setDrawerProps:o=>{var e;(e=l())==null||e.setDrawerProps(o)}}]},Ye=Be(Ie);export{Ye as B,Ue as a,Me as u};
