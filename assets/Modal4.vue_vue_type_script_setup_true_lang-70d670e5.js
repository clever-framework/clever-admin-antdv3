import{a as p,B as f}from"./index-05c55ef7.js";import{_ as m}from"./BasicForm.vue_vue_type_script_setup_true_lang-66deea92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-e2b9b3e8.js";import{u}from"./useForm-8838369c.js";import{d,f as _,Z as g,a8 as h,a9 as b,$ as x,l as B,u as o,ac as R,x as C}from"./vue-f962b0e4.js";const V={class:"pt-3px pr-3px"},w=d({__name:"Modal4",props:{userData:{type:Object}},setup(n){const a=n,r=[{field:"field1",component:"Input",label:"字段1",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:24}}],s=_({}),[i]=u({labelWidth:120,schemas:r,showActionButtonGroup:!1,actionColOptions:{span:24}}),[l]=p(e=>{e&&t(e)});function t(e){s.value={field2:e.data,field1:e.info}}function c(e){e&&a.userData&&C(()=>t(a.userData))}return(e,v)=>(g(),h(o(f),R(e.$attrs,{onRegister:o(l),title:"Modal Title",onVisibleChange:c}),{default:b(()=>[x("div",V,[B(o(m),{onRegister:o(i),model:s.value},null,8,["onRegister","model"])])]),_:1},16,["onRegister"]))}});export{w as _};
