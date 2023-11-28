import{p as S,_ as u,h as U,m as V,i as P,s as B}from"./index.js";import{D as T}from"./siteSetting-efd6ab5b.js";import{c as d,u as F}from"./index-aec49948.js";import{b as k}from"./index-4b210e61.js";import{h as z}from"./header-55b09394.js";import{d as y,D as H}from"./antd-c2e94c83.js";import{d as W,c as Z,Z as t,_ as j,l as a,a9 as m,u as e,a8 as i,ab as l,$ as c,a1 as p,a0 as q,F as G}from"./vue-ea98dac5.js";import"./uniq-e2f49495.js";import"./isBoolean-9388e2d6.js";import"./index-8eca3b28.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./uniqBy-3d1a97d8.js";import"./get-3d19de2f.js";import"./useSortable-f230544c.js";import"./index-91c7c415.js";import"./isNumber-f0336cfd.js";import"./lock-20c67b64.js";const J=["src"],_e=W({name:"UserDropdown",__name:"index",props:{theme:S.oneOf(["dark","light"])},setup(x){const n=d(()=>u(()=>import("./DropMenuItem-a4eb562b.js"),["assets/DropMenuItem-a4eb562b.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-62a30fff.css"])),v=d(()=>u(()=>import("./LockModal-9c18e992.js"),["assets/LockModal-9c18e992.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-62a30fff.css","assets/index-4b210e61.js","assets/useWindowSizeFn-844b46eb.js","assets/index-5e2c95f6.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-57ffd037.js","assets/FormItem.vue_vue_type_script_lang-1946c202.js","assets/componentMap-60b4a45b.js","assets/useFormItem-1ece48e0.js","assets/get-3d19de2f.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js","assets/isBoolean-9388e2d6.js","assets/uuid-31b8b5a4.js","assets/useSortable-f230544c.js","assets/download-4dc1f19b.js","assets/base64Conver-39fc0d26.js","assets/index-8518e10f.js","assets/index-74456602.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-6c13fa25.js","assets/copyTextToClipboard-7819541c.js","assets/index-8c2ff0df.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/helper-1d3a8892.js","assets/isNumber-f0336cfd.js","assets/BasicForm.vue_vue_type_style_index_0_lang-c9b7c50c.js","assets/BasicForm-a35f51a7.css","assets/uniqBy-3d1a97d8.js","assets/useForm-3492eae0.js","assets/lock-20c67b64.js","assets/header-55b09394.js","assets/LockModal-ca58db68.css"])),w=d(()=>u(()=>import("./index-f04ac7e3.js"),["assets/index-f04ac7e3.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-62a30fff.css","assets/index-4b210e61.js","assets/useWindowSizeFn-844b46eb.js","assets/index-5e2c95f6.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-57ffd037.js","assets/FormItem.vue_vue_type_script_lang-1946c202.js","assets/componentMap-60b4a45b.js","assets/useFormItem-1ece48e0.js","assets/get-3d19de2f.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js","assets/isBoolean-9388e2d6.js","assets/uuid-31b8b5a4.js","assets/useSortable-f230544c.js","assets/download-4dc1f19b.js","assets/base64Conver-39fc0d26.js","assets/index-8518e10f.js","assets/index-74456602.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-6c13fa25.js","assets/copyTextToClipboard-7819541c.js","assets/index-8c2ff0df.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/helper-1d3a8892.js","assets/isNumber-f0336cfd.js","assets/BasicForm.vue_vue_type_style_index_0_lang-c9b7c50c.js","assets/BasicForm-a35f51a7.css","assets/uniqBy-3d1a97d8.js","assets/useForm-3492eae0.js"])),{prefixCls:o}=U("header-user-dropdown"),{t:r}=P(),{getShowDoc:_,getUseLockPage:D,getShowApi:C}=F(),g=V(),f=Z(()=>{const{realName:s="",avatar:h,desc:$}=g.getUserInfo||{};return{realName:s,avatar:h||z,desc:$}}),[L,{openModal:A}]=k(),[I,{openModal:b}]=k();function O(){A(!0)}function R(){b(!0,{})}function E(){g.confirmLoginOut()}function M(){B(T)}function N(s){switch(s.key){case"logout":E();break;case"doc":M();break;case"lock":O();break;case"api":R();break}}return(s,h)=>(t(),j(G,null,[a(e(H),{placement:"bottomLeft",overlayClassName:`${e(o)}-dropdown-overlay`},{overlay:m(()=>[a(e(y),{onClick:N},{default:m(()=>[e(_)?(t(),i(e(n),{key:"doc",text:e(r)("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):l("",!0),e(_)?(t(),i(e(y).Divider,{key:1})):l("",!0),e(C)?(t(),i(e(n),{key:"api",text:e(r)("layout.header.dropdownChangeApi"),icon:"ant-design:swap-outlined"},null,8,["text"])):l("",!0),e(D)?(t(),i(e(n),{key:"lock",text:e(r)("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):l("",!0),a(e(n),{key:"logout",text:e(r)("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1})]),default:m(()=>[c("span",{class:p([[e(o),`${e(o)}--${x.theme}`],"flex"])},[c("img",{class:p(`${e(o)}__header`),src:f.value.avatar},null,10,J),c("span",{class:p(`${e(o)}__info hidden md:block`)},[c("span",{class:p([`${e(o)}__name`,"truncate"])},q(f.value.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(e(v),{onRegister:e(L)},null,8,["onRegister"]),a(e(w),{onRegister:e(I)},null,8,["onRegister"])],64))}});export{_e as default};
