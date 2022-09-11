var Y=Object.defineProperty,Z=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var D=(i,t,u)=>t in i?Y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[t]=u,C=(i,t)=>{for(var u in t||(t={}))ee.call(t,u)&&D(i,u,t[u]);if(E)for(var u of E(t))te.call(t,u)&&D(i,u,t[u]);return i},R=(i,t)=>Z(i,j(t));var w=(i,t,u)=>new Promise((d,c)=>{var f=a=>{try{o(u.next(a))}catch(g){c(g)}},_=a=>{try{o(u.throw(a))}catch(g){c(g)}},o=a=>a.done?d(a.value):Promise.resolve(a.value).then(f,_);o((u=u.apply(i,t)).next())});import{D as ue,T as oe,B as ne}from"./TableAction.a64d01c1.js";import{u as le,B as ae}from"./useForm.4e5e4198.js";import{d as se,g as ie,u as T,c as re}from"./list.724f521a.js";import{P as ce}from"./PlusOutlined.93c4109a.js";import{d as de,u as _e,r as h,s as y,v as pe,e as me,x as fe,w as n,h as l,i as F,j as v,y as ge,z as he,l as Fe,A as Be,B as Ce,C as ve,D as we,E as ye,n as be}from"./index.b843bef0.js";import"./sortable.esm.b60566ef.js";import"./useDesignSetting.baf1e743.js";import"./index.esm.39384bc5.js";import"./DownOutlined.a65bfecb.js";const ke=[{type:"selection",key:"selection"},{title:"id",key:"id",width:100,sorter:!0},{title:"\u5206\u7C7B\u6807\u9898",key:"title",width:200,editComponent:"NInput",editRule:!0,edit:!0,sorter:!0},{title:"\u6743\u91CD",key:"weight",width:160,editComponent:"NInputNumber",editRule:!0,edit:!0,sorter:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"create_time",width:160,sorter:!0},{title:"\u4FEE\u6539\u65F6\u95F4",key:"update_time",width:160,sorter:!0}],Ee=v(" \u65B0\u589E "),De=v("\u5237\u65B0\u6570\u636E"),Re=v("\u53D6\u6D88"),Te=v("\u786E\u5B9A"),xe={name:"CategoryList"},$e=de(R(C({},xe),{setup(i){const t=_e(),u=h(),d=h(),c=h(!1),f=h(!1),_=h(!0),o=y({id:0,title:"",weight:100}),a=y({pageSize:10,title:"",column:"",order:""}),g={title:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u6807\u9898"},weight:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6743\u91CD"}},x=[{field:"title",labelMessage:"\u8BF7\u8F93\u5165\u9700\u8981\u641C\u7D22\u7684\u5206\u7C7B\u6807\u9898",component:"NInput",label:"\u5206\u7C7B\u6807\u9898",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u6807\u9898",onInput:e=>{a.title=e,console.log(e)}}},{field:"id",label:"id"}],U=y({width:220,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(e){return pe(oe,{style:"button",actions:[{label:"\u7F16\u8F91",onClick:M.bind(null,e)},{label:"\u5220\u9664",icon:ue,onClick:O.bind(null,e)}]})}}),[N]=le({gridProps:{cols:1},collapsedRows:1,labelWidth:120,schemas:x,showAdvancedButton:!1});function A(){c.value=!0,_.value=!0}const I=e=>w(this,null,function*(){return yield ie(C(C({},a),e))});function P({column:e,value:s,record:m}){console.log(e,s,m)}function S({record:e,key:s,value:m}){T({id:e.id,[s]:m}).then(()=>{t.success("\u66F4\u65B0\u6210\u529F"),p()})}function q(e){console.log(e)}function p(){console.log(d.value),d.value.reload()}function L(e){e.preventDefault(),f.value=!0,u==null||u.value.validate(s=>w(this,null,function*(){s?t.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):(_.value?(yield re(o),t.success("\u6DFB\u52A0\u6210\u529F")):(yield T(o),t.success("\u66F4\u65B0\u6210\u529F")),c.value=!1,[o.title,o.weight]=["",100],p()),f.value=!1}))}function M(e){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",e),_.value=!1,c.value=!0,[o.id,o.title,o.weight]=[e.id,e.title,e.weight]}function O(e){console.log("\u70B9\u51FB\u4E86\u5220\u9664",e),se({id:e.id}).then(()=>{t.success("\u5220\u9664\u6210\u529F"),p()})}function $(e){console.log(e),d.value.updatePage(1),console.log(e),p()}function z(e){console.log(e),a.title=""}function K(e){console.log(e),e.order?[a.column,a.order]=[e.columnKey,e.order.slice(0,e.order.lastIndexOf("end"))]:[a.column,a.order]=["",""],p()}return(e,s)=>{const m=ge,V=he,B=Fe,b=Be,W=Ce,G=ve,H=we,J=ye,Q=be;return me(),fe(Q,{bordered:!1},{default:n(()=>[l(F(ae),{onRegister:F(N),onSubmit:$,onReset:z},{statusSlot:n(({model:r,field:k})=>[l(m,{value:r[k],"onUpdate:value":X=>r[k]=X},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"]),l(F(ne),{columns:F(ke),request:I,"row-key":r=>r.id,ref_key:"actionRef",ref:d,actionColumn:U,"onUpdate:checkedRowKeys":q,"scroll-x":1090,onEditEnd:S,onEditChange:P,"onUpdate:sorter":K},{tableTitle:n(()=>[l(B,{type:"primary",onClick:A},{icon:n(()=>[l(V,null,{default:n(()=>[l(F(ce))]),_:1})]),default:n(()=>[Ee]),_:1})]),toolbar:n(()=>[l(B,{type:"primary",onClick:p},{default:n(()=>[De]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),l(J,{show:c.value,"onUpdate:show":s[3]||(s[3]=r=>c.value=r),"show-icon":!1,preset:"dialog",title:_.value?"\u65B0\u589E":"\u7F16\u8F91"},{action:n(()=>[l(H,null,{default:n(()=>[l(B,{onClick:s[2]||(s[2]=r=>c.value=!1)},{default:n(()=>[Re]),_:1}),l(B,{type:"info",loading:f.value,onClick:L},{default:n(()=>[Te]),_:1},8,["loading"])]),_:1})]),default:n(()=>[l(G,{model:o,rules:g,ref_key:"formRef",ref:u,"label-placement":"left","label-width":80,class:"py-4"},{default:n(()=>[l(b,{label:"\u5206\u7C7B\u6807\u9898",path:"title"},{default:n(()=>[l(m,{placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u6807\u9898",value:o.title,"onUpdate:value":s[0]||(s[0]=r=>o.title=r)},null,8,["value"])]),_:1}),l(b,{label:"\u6743\u91CD",path:"weight"},{default:n(()=>[l(W,{placeholder:"\u8BF7\u8F93\u5165\u6743\u91CD",value:o.weight,"onUpdate:value":s[1]||(s[1]=r=>o.weight=r)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"])]),_:1})}}}));export{$e as default};
