var C=(g,d,n)=>new Promise((y,u)=>{var m=a=>{try{i(n.next(a))}catch(s){u(s)}},_=a=>{try{i(n.throw(a))}catch(s){u(s)}},i=a=>a.done?y(a.value):Promise.resolve(a.value).then(m,_);i((n=n.apply(g,d)).next())});import{_ as P}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-8318effc.js";import{a2 as S,bz as h,bd as A,m as w,by as D,e as E}from"./index.js";import{A as k}from"./index-84e317bc.js";import{P as N}from"./index-1e1e3c34.js";import{d as T,c as V,a7 as $,q as M,Z as c,a8 as l,a9 as e,l as t,$ as b,E as o,a0 as F,u as r,_ as I,ab as f,n as x,F as U}from"./vue-f962b0e4.js";import{E as p,x as j}from"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const q=T({__name:"Btn",setup(g){const{hasPermission:d}=S(),n=h(),y=A(),u=w(),m=V(()=>y.getProjectConfig.permissionMode===D.BACK);function _(i){return C(this,null,function*(){const a="fakeToken"+i;u.setToken(a),u.getUserInfoAction(),n.changePermissionCode()})}return(i,a)=>{const s=$("a-button"),v=M("auth");return c(),l(r(N),{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:e(()=>[t(P),b("p",null,[o(" 当前拥有的code列表: "),b("a",null,F(r(n).getPermCodeList),1)]),t(r(p)),t(r(j),{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),t(r(p)),t(s,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=B=>_(2)),disabled:!m.value},{default:e(()=>[o(" 点击切换按钮权限(用户id为2) ")]),_:1},8,["disabled"]),t(s,{type:"primary",onClick:a[1]||(a[1]=B=>_(1)),disabled:!m.value},{default:e(()=>[o(" 点击切换按钮权限(用户id为1,默认) ")]),_:1},8,["disabled"]),m.value?(c(),I(U,{key:0},[t(r(p),null,{default:e(()=>[o("组件方式判断权限")]),_:1}),t(r(k),{value:"1000"},{default:e(()=>[t(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})]),_:1}),t(r(k),{value:"2000"},{default:e(()=>[t(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})]),_:1}),t(r(k),{value:["1000","2000"]},{default:e(()=>[t(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})]),_:1}),t(r(p),null,{default:e(()=>[o("函数方式方式判断权限")]),_:1}),r(d)("1000")?(c(),l(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})):f("",!0),r(d)("2000")?(c(),l(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})):f("",!0),r(d)(["1000","2000"])?(c(),l(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})):f("",!0),t(r(p),null,{default:e(()=>[o("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),x((c(),l(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})),[[v,"1000"]]),x((c(),l(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})),[[v,"2000"]]),x((c(),l(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})),[[v,["1000","2000"]]])],64)):f("",!0)]),_:1})}}});const X=E(q,[["__scopeId","data-v-4a1c2300"]]);export{X as default};
