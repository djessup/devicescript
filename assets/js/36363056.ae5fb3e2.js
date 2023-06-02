"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8716],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(25773),a=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac DC Current Measurement service"},l="DcCurrentMeasurement",p={unversionedId:"api/clients/dccurrentmeasurement",id:"api/clients/dccurrentmeasurement",title:"DcCurrentMeasurement",description:"DeviceScript client for Jacdac DC Current Measurement service",source:"@site/docs/api/clients/dccurrentmeasurement.md",sourceDirName:"api/clients",slug:"/api/clients/dccurrentmeasurement",permalink:"/devicescript/api/clients/dccurrentmeasurement",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac DC Current Measurement service"},sidebar:"tutorialSidebar"},o={},u=[{value:"Registers",id:"registers",level:2},{value:"measurementName",id:"const:measurementName",level:3},{value:"reading",id:"ro:reading",level:3},{value:"readingError",id:"ro:readingError",level:3},{value:"minReading",id:"const:minReading",level:3},{value:"maxReading",id:"const:maxReading",level:3}],m={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dccurrentmeasurement"},"DcCurrentMeasurement"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,a.kt)("p",null,"A service that reports a current measurement."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/dccurrentmeasurement/"},"DC Current Measurement service")),(0,a.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n')),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"const:measurementName"},"measurementName"),(0,a.kt)("p",null,"A string containing the net name that is being measured e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"POWER_DUT")," or a reference e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"DIFF_DEV1_DEV2"),". These constants can be used to identify a measurement from client code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<string>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\nconst value = await dcCurrentMeasurement.measurementName.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:reading"},"reading"),(0,a.kt)("p",null,"The current measurement."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\nconst value = await dcCurrentMeasurement.reading.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\ndcCurrentMeasurement.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:readingError"},"readingError"),(0,a.kt)("p",null,"Absolute error on the reading value."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\nconst value = await dcCurrentMeasurement.readingError.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\ndcCurrentMeasurement.readingError.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:minReading"},"minReading"),(0,a.kt)("p",null,"Minimum measurable current"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\nconst value = await dcCurrentMeasurement.minReading.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:maxReading"},"maxReading"),(0,a.kt)("p",null,"Maximum measurable current"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DcCurrentMeasurement } from "@devicescript/core"\n\nconst dcCurrentMeasurement = new DcCurrentMeasurement()\n// ...\nconst value = await dcCurrentMeasurement.maxReading.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}s.isMDXComponent=!0}}]);