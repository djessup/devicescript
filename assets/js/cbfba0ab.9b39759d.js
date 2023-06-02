"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7684],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(25773),n=(r(27378),r(35318));const a={sidebar_position:2},o="Simulation",s={unversionedId:"getting-started/vscode/simulation",id:"getting-started/vscode/simulation",title:"Simulation",description:"DeviceScript provides a rich support for simulating devices and peripherals.",source:"@site/docs/getting-started/vscode/simulation.mdx",sourceDirName:"getting-started/vscode",slug:"/getting-started/vscode/simulation",permalink:"/devicescript/getting-started/vscode/simulation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Visual Studio Code Extension",permalink:"/devicescript/getting-started/vscode/"},next:{title:"User Interface",permalink:"/devicescript/getting-started/vscode/user-interface"}},c={},l=[{value:"DeviceScript simulator",id:"devicescript-simulator",level:2},{value:"Peripherals dashboard",id:"peripherals-dashboard",level:2},{value:"Custom servers",id:"custom-servers",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"simulation"},"Simulation"),(0,n.kt)("p",null,"DeviceScript provides a rich support for simulating devices and peripherals.\nThe Visual Studio Code extension makes it easy to start and stop simulators."),(0,n.kt)("h2",{id:"devicescript-simulator"},"DeviceScript simulator"),(0,n.kt)("p",null,"The first simulator you use is a DeviceScript Manager device, a device capable of running the DeviceScript bytecode.\nIt runs the DeviceScript C firmware compiled into WebAssembly.\nThis WASM simulator will be launched by the debugger or by clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"plug")," icon in the DeviceScript pane."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Connect button in DeviceScript pane",src:r(57332).Z,width:"784",height:"510"})),(0,n.kt)("p",null,"Once started the simulator will appear in the device tree and you can explore its services and status."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"simulator tree",src:r(11696).Z,width:"788",height:"804"})),(0,n.kt)("h2",{id:"peripherals-dashboard"},"Peripherals dashboard"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard")," icon starts a peripheral dashboard view (the Jacdac dashboard).\nIt allows to visualize any connected device and also launch simulator peripherals.\nThe simulator peripheral are typically interactive and allow to change the values using UI controls."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dashboard",src:r(3994).Z,width:"1380",height:"528"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The dashboard loads the Jacdac simulator from ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs"},"https://microsoft.github.io/jacdac-docs")," and requires internet access.")),(0,n.kt)("h2",{id:"custom-servers"},"Custom servers"),(0,n.kt)("p",null,'It is also possible to create peripheral simulators in "node.js TypeScript" (running in a node.js process).\nThis technique is documented in the ',(0,n.kt)("a",{parentName:"p",href:"/developer/simulation"},"developer documentation"),"."))}u.isMDXComponent=!0},57332:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/connect-button-0bd8798d45dcd18bfee97226549aad59.png"},11696:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/simulator-tree-5c38631c760a21ce4214ecd94b51a123.png"},3994:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/start-simulator-dashboard-a83a4c119a01656342c3f934001bba98.png"}}]);