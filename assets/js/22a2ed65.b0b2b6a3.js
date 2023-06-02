"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7024],{35318:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(27378);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,m=u["".concat(p,".").concat(d)]||u[d]||v[d]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47406:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(25773),i=(t(27378),t(35318));const a={},s="Drivers",o={unversionedId:"developer/servers/drivers",id:"developer/servers/drivers",title:"Drivers",description:"Drivers builtin package provides drivers for I2C peripherals",source:"@site/docs/developer/servers/drivers.mdx",sourceDirName:"developer/servers",slug:"/developer/servers/drivers",permalink:"/devicescript/developer/servers/drivers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Services",permalink:"/devicescript/developer/servers/custom-services"},next:{title:"Register",permalink:"/devicescript/developer/register"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"What about missing drivers?",id:"what-about-missing-drivers",level:2}],c={toc:l},u="wrapper";function v(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drivers"},"Drivers"),(0,i.kt)("p",null,"Drivers ",(0,i.kt)("a",{parentName:"p",href:"/developer/packages"},"builtin package")," provides drivers for ",(0,i.kt)("a",{parentName:"p",href:"./i2c"},"I2C peripherals"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"./digital-io"},"digital gpio"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { startSHTC3 } from "@devicescript/drivers"\n\nconst { temperature, humidity } = await startSHTC3()\n')),(0,i.kt)("h2",{id:"what-about-missing-drivers"},"What about missing drivers?"),(0,i.kt)("p",null,"So the driver you need isn't here? There are a few options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=devicescript"},"Search on npm")," where a community member may have already published a driver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/labels/driver%20request"},"Check if a request is already open")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title="},"Create a Driver Request")," to request a new driver. We can't guarantee that we'll have time to implement it, but we maybe someone in the community will!")))}v.isMDXComponent=!0}}]);