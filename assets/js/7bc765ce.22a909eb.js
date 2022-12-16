"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[990],{6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8427),a=(n(2784),n(876));const o={sidebar_position:5},i="Storage",s={unversionedId:"ssi-snap/storage",id:"ssi-snap/storage",title:"Storage",description:"SSI Snap utilizes MetaMask's state to store data. SSI Snap modifies the SSISnapState object.",source:"@site/docs/ssi-snap/storage.md",sourceDirName:"ssi-snap",slug:"/ssi-snap/storage",permalink:"/ssi-snap-docs/docs/ssi-snap/storage",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/ssi-snap/storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/ssi-snap-docs/docs/ssi-snap/architecture"},next:{title:"What is Supported?",permalink:"/ssi-snap-docs/docs/ssi-snap/supported"}},p={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage"},"Storage"),(0,a.kt)("p",null,"SSI Snap utilizes MetaMask's state to store data. SSI Snap modifies the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SSISnapState"))," object."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"SSISnapState")," object, data for every MetaMask account is stored in property, named after the said MetaMask account. Inside this property DIDs, VCs, Snap & Account Configuration are stored."),(0,a.kt)("p",null,"There is also global configuration object in the SSISnapState object"),(0,a.kt)("p",null,"Data-store plugins, used by Veramo Client and Manager plugins, modify the state."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DIDManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DataManager"))),(0,a.kt)("admonition",{title:"Private Keys",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important to note that MetaMask Account private keys are ",(0,a.kt)("strong",{parentName:"p"},"NEVER")," exported from MetaMask! They are only used during RPC calls and are deleted from memory after the RPC method is done!")),(0,a.kt)("p",null,"Structure of the state stored in MetaMask:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  SSISnapState:\n    {\n      SSISnapConfig:\n      {\n        snap: {\n          infuraToken: string;\n          acceptedTerms: boolean;\n          ...\n        };\n        dApp: {\n          disablePopups: boolean;\n          ...\n        };\n      }\n      0xBea807A8...e59D:\n        {\n          identifiers: Record<string, IIdentifier>,\n          vcs: Record<string, VerifiableCredential>\n          publicKey: string;\n          accountConfig: {\n            ssi:\n              {\n                didMethod: "did:ethr",\n                vcStore: {\n                  snap: true,\n                  ceramic: true\n                }\n              }\n          }\n        },\n      0x8Db2a08D...caD7:\n        {\n          identifiers: Record<string, IIdentifier>,\n          vcs: Record<string, VerifiableCredential>\n          publicKey: string;\n          accountConfig: {\n            ssi:\n              {\n                didMethod: "did:key",\n                vcStore: vcStore: {\n                  snap: true,\n                  ceramic: false\n                }\n              }\n          }\n        },\n      ...,\n    },\n}\n')))}d.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);