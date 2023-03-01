"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[224],{4993:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(2983);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=s,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},l),{},{components:a})):n.createElement(h,r({ref:t},l))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7364),s=(a(2983),a(4993));const o={sidebar_position:7},r="About MetaMask Snaps",i={unversionedId:"ssi-snap/snaps",id:"ssi-snap/snaps",title:"About MetaMask Snaps",description:"The most popular web3 snap, MetaMask, introduced Snaps, which introduced building and adding new functionalities to the snap in the form of extensions. MetaMask is a crypto snap and gateway to blockchain apps, providing a simple interface for users to interact with EVM-based blockchains, sign and send transactions, etc. Snaps thus make a wide specter of new applications possible. They can enable support for previously unsupported chains like Polkadot, Solana, Bitcoin, etc. They also provide additional local storage for dApps to store and retrieve data and allow access to the web with the possibility to leverage practically any API and much more. The creativity of developers only limits new functionality. Here is a list of already developed Snaps!",source:"@site/docs/ssi-snap/snaps.md",sourceDirName:"ssi-snap",slug:"/ssi-snap/snaps",permalink:"/ssi-snap-docs/docs/ssi-snap/snaps",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap/edit/develop/packages/docs/docs/ssi-snap/snaps.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"What is Supported?",permalink:"/ssi-snap-docs/docs/ssi-snap/supported"},next:{title:"Use SSI Snap",permalink:"/ssi-snap-docs/docs/category/use-ssi-snap"}},p={},c=[],l={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-metamask-snaps"},"About MetaMask Snaps"),(0,s.kt)("p",null,"The most popular web3 snap, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"MetaMask")),", introduced ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://metamask.io/snaps/"},"Snaps")),", which introduced building and adding new functionalities to the snap in the form of extensions. MetaMask is a crypto snap and gateway to blockchain apps, providing a simple interface for users to interact with EVM-based blockchains, sign and send transactions, etc. Snaps thus make a wide specter of new applications possible. They can enable support for previously unsupported chains like Polkadot, Solana, Bitcoin, etc. They also provide additional local storage for dApps to store and retrieve data and allow access to the web with the possibility to leverage practically any API and much more. The creativity of developers only limits new functionality. Here is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/piotr-roslaniec/awesome-metamask-snaps"},"list")," of already developed Snaps!"),(0,s.kt)("p",null,"Technically speaking, MetaMask Snaps is a system that allows anyone to expand the capabilities of MetaMask safely. It is a JavaScript program that runs in an isolated, sandboxed environment inside the MetaMask. In addition to the existing MetaMask RPC methods, Snaps can create new RPC methods for websites to call. Currently, this is the only way to interact with the Snaps, but it will be possible in the future through modified MetaMask UI components."),(0,s.kt)("p",null,"Snaps are currently only supported in the ",(0,s.kt)("a",{parentName:"p",href:"https://metamask.io/flask/"},"MetaMask Flask"),", a separate desktop browser extension for developers. But it is expected that the MetaMask team will integrate the Snaps system into the main MetaMask sometime in 2023. For more information about Snaps, check their ",(0,s.kt)("a",{parentName:"p",href:"https://docs.metamask.io/guide/snaps.html"},"documentation"),"."),(0,s.kt)("center",null,(0,s.kt)("img",{src:"https://metamask.zendesk.com/hc/article_attachments/6974707389467/mceclip1.png",alt:"VC",width:"250"}),(0,s.kt)("br",null),"MetaMask Flask logo (",(0,s.kt)("a",{href:"https://metamask.zendesk.com/hc/article_attachments/6974707389467/mceclip1.png"},"image source"),")."))}d.isMDXComponent=!0}}]);