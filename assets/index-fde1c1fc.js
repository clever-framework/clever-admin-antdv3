import{d as S,f as x,r as h,Z as a,a8 as p,a9 as l,$ as c,l as o,u as i,n,z as s,ab as u}from"./vue-f962b0e4.js";import N from"./Step1-897815f7.js";import{_ as b}from"./Step2.vue_vue_type_script_setup_true_lang-a5c39b82.js";import{_ as k}from"./Step3.vue_vue_type_script_setup_true_lang-d176861f.js";import{P}from"./index-1e1e3c34.js";import{aM as r}from"./antd-2f1e67c0.js";import{e as V}from"./index.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-66deea92.js";import"./FormItem.vue_vue_type_script_lang-b018f99a.js";import"./componentMap-e2b9b3e8.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./uniqBy-3d1a97d8.js";import"./useForm-8838369c.js";import"./data-6b084658.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";const g={class:"step-form-form"},y={class:"mt-5"},B=S({name:"FormStepPage",__name:"index",setup(C){const t=x(0),e=h({initStep2:!1,initStep3:!1});function _(m){t.value++,e.initStep2=!0}function f(){t.value--}function d(m){t.value++,e.initStep3=!0}function v(){t.value=0,e.initStep2=!1,e.initStep3=!1}return(m,w)=>(a(),p(i(P),{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:l(()=>[c("div",g,[o(i(r),{current:t.value},{default:l(()=>[o(i(r).Step,{title:"填写转账信息"}),o(i(r).Step,{title:"确认转账信息"}),o(i(r).Step,{title:"完成"})]),_:1},8,["current"])]),c("div",y,[n(o(N,{onNext:_},null,512),[[s,t.value===0]]),e.initStep2?n((a(),p(b,{key:0,onPrev:f,onNext:d},null,512)),[[s,t.value===1]]):u("",!0),e.initStep3?n((a(),p(k,{key:1,onRedo:v},null,512)),[[s,t.value===2]]):u("",!0)])]),_:1}))}});const mt=V(B,[["__scopeId","data-v-778b6ab2"]]);export{mt as default};
