"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4886],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Braille display service"},l="BrailleDisplay",p={unversionedId:"api/clients/brailledisplay",id:"api/clients/brailledisplay",title:"BrailleDisplay",description:"DeviceScript client for Jacdac Braille display service",source:"@site/docs/api/clients/brailledisplay.md",sourceDirName:"api/clients",slug:"/api/clients/brailledisplay",permalink:"/devicescript/api/clients/brailledisplay",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Braille display service"},sidebar:"tutorialSidebar"},o={},s=[{value:"Registers",id:"registers",level:2},{value:"enabled",id:"rw:enabled",level:3},{value:"length",id:"const:length",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brailledisplay"},"BrailleDisplay"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,r.kt)("p",null,"A Braille pattern display module. This module display ",(0,r.kt)("a",{parentName:"p",href:"https://www.unicode.org/charts/PDF/U2800.pdf"},"unicode braille patterns"),", country specific encoding have to be implemented by the clients."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/brailledisplay/"},"Braille display service")),(0,r.kt)("li",{parentName:"ul"},"inherits Role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { BrailleDisplay } from "@devicescript/core"\n\nconst brailleDisplay = new BrailleDisplay()\n')),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("h3",{id:"rw:enabled"},"enabled"),(0,r.kt)("p",null,"Determines if the braille display is active."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { BrailleDisplay } from "@devicescript/core"\n\nconst brailleDisplay = new BrailleDisplay()\n// ...\nconst value = await brailleDisplay.enabled.read()\nawait brailleDisplay.enabled.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { BrailleDisplay } from "@devicescript/core"\n\nconst brailleDisplay = new BrailleDisplay()\n// ...\nbrailleDisplay.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:length"},"length"),(0,r.kt)("p",null,"Gets the number of patterns that can be displayed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { BrailleDisplay } from "@devicescript/core"\n\nconst brailleDisplay = new BrailleDisplay()\n// ...\nconst value = await brailleDisplay.length.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("p",null))}d.isMDXComponent=!0}}]);