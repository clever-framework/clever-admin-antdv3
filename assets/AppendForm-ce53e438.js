var $=(C,c,t)=>new Promise((s,i)=>{var f=o=>{try{l(t.next(o))}catch(n){i(n)}},e=o=>{try{l(t.throw(o))}catch(n){i(n)}},l=o=>o.done?s(o.value):Promise.resolve(o.value).then(f,e);l((t=t.apply(C,c)).next())});import{_ as k}from"./BasicForm.vue_vue_type_script_setup_true_lang-66deea92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-e2b9b3e8.js";import{u as I}from"./useForm-8838369c.js";import{C as y}from"./index.js";import{P as q}from"./index-1e1e3c34.js";import{d as N,f as g,a7 as x,Z as m,a8 as u,a9 as r,l as h,u as d,E as _,ab as v}from"./vue-f962b0e4.js";import"./FormItem.vue_vue_type_script_lang-b018f99a.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./antd-2f1e67c0.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";const le=N({__name:"AppendForm",setup(C){const[c,{appendSchemaByField:t,removeSchemaByField:s,validate:i}]=I({schemas:[{field:"field0a",component:"Input",label:"字段0",required:!0},{field:"field0b",component:"Input",label:"字段0",required:!0},{field:"0",component:"Input",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function f(){return $(this,null,function*(){try{const a=yield i()}catch(a){}})}const e=g(1);function l(){t({field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},""),t({field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},""),t({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function o(){t([{field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function n(a){s([`field${a}a`,`field${a}b`,`${a}`]),e.value--}return(a,B)=>{const b=x("a-button");return m(),u(d(q),{title:"表单增删示例"},{default:r(()=>[h(d(y),{title:"表单增删"},{default:r(()=>[h(d(k),{onRegister:d(c),onSubmit:f},{add:r(({field:p})=>[Number(p)===0?(m(),u(b,{key:0,onClick:l},{default:r(()=>[_("+")]),_:1})):v("",!0),Number(p)===0?(m(),u(b,{key:1,class:"ml-2",onClick:o},{default:r(()=>[_(" 批量添加表单配置 ")]),_:1})):v("",!0),Number(p)>0?(m(),u(b,{key:2,onClick:()=>n(p)},{default:r(()=>[_("-")]),_:2},1032,["onClick"])):v("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1})}}});export{le as default};
