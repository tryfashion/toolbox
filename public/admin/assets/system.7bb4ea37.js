var D=Object.defineProperty,v=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var d=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))$.call(t,n)&&d(e,n,t[n]);return e},y=(e,t)=>v(e,T(t));import A from"./BasicSetting.65135938.js";import N from"./OauthSetting.1ade14e1.js";import O from"./CloudSetting.32ca8461.js";import w from"./CdnSetting.40ced82e.js";import{_ as z,d as L,s as V,a7 as j,a0 as c,e as s,f as g,h as u,w as a,F as I,m as R,x as p,au as i,n as q,aS as x,aT as G,j as C,t as f,a9 as H,b5 as J}from"./index.b843bef0.js";import"./column.945a3d40.js";const K=[{name:"\u57FA\u672C\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u5E38\u89C4\u8BBE\u7F6E",key:1},{name:"OAuth",desc:"OAuth\u767B\u5F55\u8BA4\u8BC1\u914D\u7F6E",key:2},{name:"\u63D2\u4EF6\u4E2D\u5FC3",desc:"\u63D2\u4EF6\u4E2D\u5FC3\u914D\u7F6E",key:3},{name:"CDN\u914D\u7F6E",desc:"npm\u3001cdnjs\u7B49\u9759\u6001\u8D44\u6E90CDN\u914D\u7F6E",key:4}],M=L({name:"SettingSystem",components:{BasicSetting:A,OauthSetting:N,CloudSetting:O,CdnSetting:w},setup(){const e=V({type:1,typeTitle:"\u57FA\u672C\u8BBE\u7F6E"});function t(n){e.type=n.key,e.typeTitle=n.name}return y(m({},j(e)),{switchType:t,typeTabList:K})}});function P(e,t,n,Q,U,W){const E=J,r=q,_=x,F=c("BasicSetting"),k=c("OauthSetting"),B=c("CloudSetting"),S=c("CdnSetting"),h=G;return s(),g("div",null,[u(h,{"x-gap":24},{default:a(()=>[u(_,{span:"6"},{default:a(()=>[u(r,{bordered:!1,size:"small",class:"proCard"},{default:a(()=>[(s(!0),g(I,null,R(e.typeTabList,o=>(s(),p(E,{class:H(["thing-cell",{"thing-cell-on":e.type===o.key}]),key:o.key,onClick:X=>e.switchType(o)},{header:a(()=>[C(f(o.name),1)]),description:a(()=>[C(f(o.desc),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1}),u(_,{span:"18"},{default:a(()=>[u(r,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:a(()=>[e.type===1?(s(),p(F,{key:0})):i("",!0),e.type===2?(s(),p(k,{key:1})):i("",!0),e.type===3?(s(),p(B,{key:2})):i("",!0),e.type===4?(s(),p(S,{key:3})):i("",!0)]),_:1},8,["title"])]),_:1})]),_:1})])}var oe=z(M,[["render",P],["__scopeId","data-v-ad4663b8"]]);export{oe as default};
