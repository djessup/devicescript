"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1431],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Switch service"},o="Switch",l={unversionedId:"api/clients/switch",id:"api/clients/switch",title:"Switch",description:"DeviceScript client for Jacdac Switch service",source:"@site/docs/api/clients/switch.md",sourceDirName:"api/clients",slug:"/api/clients/switch",permalink:"/devicescript/api/clients/switch",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Switch service"},sidebar:"tutorialSidebar"},c={},p=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"variant",id:"const:variant",level:3},{value:"Events",id:"events",level:2},{value:"on",id:"on",level:3},{value:"off",id:"off",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"switch"},"Switch"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,i.kt)("p",null,"A switch, which keeps its position."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client for ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/switch/"},"Switch service")),(0,i.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Switch } from "@devicescript/core"\n\nconst sw = new Switch()\n')),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,"Indicates whether the switch is currently active (on)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Switch } from "@devicescript/core"\n\nconst sw = new Switch()\n// ...\nconst value = await sw.reading.read()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Switch } from "@devicescript/core"\n\nconst sw = new Switch()\n// ...\nsw.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:variant"},"variant"),(0,i.kt)("p",null,"Describes the type of switch used."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Switch } from "@devicescript/core"\n\nconst sw = new Switch()\n// ...\nconst value = await sw.variant.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"on"},"on"),(0,i.kt)("p",null,"Emitted when switch goes from ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"sw.on.subscribe(() => {\n\n})\n")),(0,i.kt)("h3",{id:"off"},"off"),(0,i.kt)("p",null,"Emitted when switch goes from ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"off"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"sw.off.subscribe(() => {\n\n})\n")),(0,i.kt)("p",null))}m.isMDXComponent=!0}}]);