"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9294],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac I2C service"},s="I2C",o={unversionedId:"api/clients/i2c",id:"api/clients/i2c",title:"I2C",description:"DeviceScript client for Jacdac I2C service",source:"@site/docs/api/clients/i2c.md",sourceDirName:"api/clients",slug:"/api/clients/i2c",permalink:"/devicescript/api/clients/i2c",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac I2C service"},sidebar:"tutorialSidebar"},l={},c=[{value:"Commands",id:"commands",level:2},{value:"transaction",id:"transaction",level:3},{value:"Registers",id:"registers",level:2},{value:"ok",id:"ro:ok",level:3},{value:"Usage",id:"usage",level:2},{value:"Read-write register byte",id:"read-write-register-byte",level:3},{value:"Read-write register buffer",id:"read-write-register-buffer",level:3},{value:"Read-write raw buffer",id:"read-write-raw-buffer",level:3},{value:"Errors",id:"errors",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"i2c"},"I2C"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"Inter-Integrated Circuit (I2C, I\xb2C, IIC) serial communication bus lets you communicate with\nmany sensors and actuators."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client for ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/i2c/"},"I2C service")),(0,i.kt)("li",{parentName:"ul"},"inherits Role")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { I2C } from "@devicescript/core"\n\nconst I2C = new I2C()\n')),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"transaction"},"transaction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"address")," is 7-bit.\n",(0,i.kt)("inlineCode",{parentName:"p"},"num_read")," can be 0 if nothing needs to be read.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"write_buf")," includes the register address if required (first one or two bytes)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"I2C.transaction(address: number, num_read: number, write_buf: Buffer): Promise<void>\n")),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"ro:ok"},"ok"),(0,i.kt)("p",null,"Indicates whether the I2C is working."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { I2C } from "@devicescript/core"\n\nconst I2C = new I2C()\n// ...\nconst value = await I2C.ok.read()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { I2C } from "@devicescript/core"\n\nconst I2C = new I2C()\n// ...\nI2C.ok.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"read-write-register-byte"},"Read-write register byte"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { i2c } from "@devicescript/i2c"\n\nconst address = 0x..\nconst register = 0x..\nconst value = 0x..\n\n// highlight-next-line\nawait i2c.writeReg(address, register, value)\n\n// highlight-next-line\nconst readValue = await i2c.readReg(address, register)\n')),(0,i.kt)("h3",{id:"read-write-register-buffer"},"Read-write register buffer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { i2c } from "@devicescript/i2c"\n\nconst address = 0x..\nconst register = 0x..\nconst size = 0x..\n\n// highlight-next-line\nawait i2c.writeRegBuf(address, register, hex`...`)\n\n// highlight-next-line\nconst readBuf = await i2c.readRegBuf(address, register, size)\n')),(0,i.kt)("h3",{id:"read-write-raw-buffer"},"Read-write raw buffer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { i2c } from "@devicescript/i2c"\n\nconst address = 0x..\nconst size = 0x..\n\n// highlight-next-line\nawait i2c.writeBuf(address, hex`...`)\n\n// highlight-next-line\nconst readBuf = await i2c.readBuf(address, size)\n')),(0,i.kt)("h3",{id:"errors"},"Errors"),(0,i.kt)("p",null,"I2C functions may throw a ",(0,i.kt)("inlineCode",{parentName:"p"},"I2CError"),"\nerror if the operation fails."))}d.isMDXComponent=!0}}]);