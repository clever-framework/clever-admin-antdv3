var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&i(e,t,o[t]);if(a)for(var t of a(o))v.call(o,t)&&i(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import N from"./FormNodeOperate-b59a24e9.js";import{u as S}from"./useFormDesignState-4fbefc60.js";import k from"./index-a37823c6.js";import{d as b,r as y,G as V,a7 as c,Z as $,_ as O,$ as f,l,a0 as _,a1 as B,A as D}from"./vue-f962b0e4.js";import{e as w}from"./index.js";import"./index-a99c5411.js";import"./isNumber-f0336cfd.js";import"./formItemConfig-244c0b08.js";import"./componentMap-e2b9b3e8.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./antd-2f1e67c0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const M=b({name:"FormNode",components:{VFormItem:k,FormNodeOperate:N},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=S(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(n({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,A){var s;const d=c("VFormItem"),h=c("FormNodeOperate");return $(),O("div",{class:B(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[l(d,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,_(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),l(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const ce=w(M,[["render",z]]);export{ce as default};
