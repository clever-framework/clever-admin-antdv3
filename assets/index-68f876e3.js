var f=(_,i,o)=>new Promise((p,n)=>{var d=e=>{try{r(o.next(e))}catch(s){n(s)}},l=e=>{try{r(o.throw(e))}catch(s){n(s)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(d,l);r((o=o.apply(_,i)).next())});import{bd as V,i as b}from"./index.js";import{a as k,B as G}from"./index-05c55ef7.js";import{_ as I}from"./BasicForm.vue_vue_type_script_setup_true_lang-66deea92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-e2b9b3e8.js";import{u as M}from"./useForm-8838369c.js";import{V as v}from"./antd-2f1e67c0.js";import{d as D,f as y,Z as h,a8 as A,a9 as m,l as x,u as a,_ as E,aa as N,af as P,E as U,a0 as B,F as $,ac as q}from"./vue-f962b0e4.js";import"./useWindowSizeFn-844b46eb.js";import"./FormItem.vue_vue_type_script_lang-b018f99a.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const he=D({__name:"index",setup(_){const i=V(),o=v.Group,{t:p}=b(),[n,{closeModal:d}]=k(()=>f(this,null,function*(){S()})),l=y({development:"http://www.a.com",test:"http://www.b.com",prod:"http://www.c.com"}),r=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:s,setFieldsValue:C}]=M({showActionButtonGroup:!1,schemas:[{field:"api",label:p("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"production",required:!0,component:"Input",slot:"api"}]}),F=()=>f(this,null,function*(){const t=yield s();i.setApiAddress({key:t.api,val:l.value[t.api]}),location.reload()}),R=()=>{d()},S=()=>{const{key:t=""}=i.getApiAddress;t&&C({api:t})};return(t,z)=>(h(),A(a(G),q({title:a(p)("layout.header.dropdownChangeApi")},t.$attrs,{onRegister:a(n),onOk:F,onCancel:R}),{default:m(()=>[x(a(I),{onRegister:a(e)},{api:m(({model:g,field:w})=>[x(a(o),{value:g[w],"onUpdate:value":c=>g[w]=c},{default:m(()=>[(h(!0),E($,null,N(l.value,(c,u)=>(h(),A(a(v),{style:P(r.value),value:u,key:u},{default:m(()=>[U(B(u)+": "+B(c),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{he as default};
