"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[436],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(8427),r=(n(2784),n(876));const i={sidebar_position:5},s="JSON-RPC API",o={unversionedId:"tutorial/rpc-methods",id:"tutorial/rpc-methods",title:"JSON-RPC API",description:"VC Methods",source:"@site/docs/tutorial/rpc-methods.md",sourceDirName:"tutorial",slug:"/tutorial/rpc-methods",permalink:"/ssi-snap-docs/docs/tutorial/rpc-methods",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/tutorial/rpc-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How To Implement It?",permalink:"/ssi-snap-docs/docs/tutorial/implementation"},next:{title:"Live Demo",permalink:"/ssi-snap-docs/docs/tutorial/demo"}},l={},p=[{value:"VC Methods",id:"vc-methods",level:2},{value:"saveVC",id:"savevc",level:3},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getVCs",id:"getvcs",level:3},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getVP",id:"getvp",level:3},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"DID Methods",id:"did-methods",level:2},{value:"getDID",id:"getdid",level:3},{value:"Description",id:"description-3",level:4},{value:"getMethod",id:"getmethod",level:3},{value:"Description",id:"description-4",level:4},{value:"switchMethod",id:"switchmethod",level:3},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"getAvailableMethods",id:"getavailablemethods",level:3},{value:"Description",id:"description-6",level:4},{value:"VC Store Methods",id:"vc-store-methods",level:2},{value:"getVCStore",id:"getvcstore",level:3},{value:"Description",id:"description-7",level:4},{value:"setVCStore",id:"setvcstore",level:3},{value:"Description",id:"description-8",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getAvailableVCStores",id:"getavailablevcstores",level:3},{value:"Description",id:"description-9",level:4},{value:"Snap Methods",id:"snap-methods",level:2},{value:"init",id:"init",level:3},{value:"Description",id:"description-10",level:4},{value:"togglePopups",id:"togglepopups",level:3},{value:"Description",id:"description-11",level:4},{value:"changeInfuraToken",id:"changeinfuratoken",level:3},{value:"Description",id:"description-12",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-rpc-api"},"JSON-RPC API"),(0,r.kt)("h2",{id:"vc-methods"},"VC Methods"),(0,r.kt)("h3",{id:"savevc"},"saveVC"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to store the VC in SSI Snap, using currently selected VC Store plugin"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"vc - The VC. Must conform to the VerifiableCredential standard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'saveVC',\n      params: {\n        verifiableCredential: vc,\n      },\n    },\n  ],\n});\n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"boolean if save was successful."),(0,r.kt)("h3",{id:"getvcs"},"getVCs"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Method used to retrieve a list of VCs. VCs returned using this method will include an additional property ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", which can be used when generating, retrieving or deleting a VC."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"query (optional) - Object that is subset of the wanted VC object. Used to filter VCs and only return VCs that are a superset of the query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n          method: 'wallet_invokeSnap',\n          params: [snapId, {\n            method: 'getVCs',\n            params: {query: {credentialSubject: {id: \"did:ethr:0x04:0x123..321\"}}}\n          }]\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"array of VCs"),(0,r.kt)("h3",{id:"getvp"},"getVP"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Method used to generate a VP signed by DID (selected MetaMask account + selected DID method). If you want to change DID, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"switchMethod")," method and/or switch MetaMask account."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"vc_id - ID of the VC that is used to generate a VP. vc_id is equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," property of the VCs returned with ",(0,r.kt)("inlineCode",{parentName:"li"},"getVCs")," method."),(0,r.kt)("li",{parentName:"ol"},"challenge (optional) - challenge used in VP generation"),(0,r.kt)("li",{parentName:"ol"},"domain (optional) - domain used in VP generation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getVP',\n      params: { vc_id: vc_id },\n    },\n  ],\n});\n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"verifiable presentation"),(0,r.kt)("h2",{id:"did-methods"},"DID Methods"),(0,r.kt)("h3",{id:"getdid"},"getDID"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Generates and returns a DID based on currently selected MetaMask Account and DID Method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getDID',\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"getmethod"},"getMethod"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"Returns currently selected DID method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getMethod',\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"switchmethod"},"switchMethod"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Switch the DID method"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'didMethod - name of did method ("did:ethr" or "did:key"). Must be one of methods returned by ',(0,r.kt)("inlineCode",{parentName:"li"},"getAvailableMethods"),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"DID:KEY support is experimental and still under development!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'switchMethod',\n      params: { didMethod: method },\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"getavailablemethods"},"getAvailableMethods"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"Returns a list of supported DID methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getDID',\n    },\n  ],\n});\n")),(0,r.kt)("h2",{id:"vc-store-methods"},"VC Store Methods"),(0,r.kt)("h3",{id:"getvcstore"},"getVCStore"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"Get selected VC Store plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getVCStore',\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"setvcstore"},"setVCStore"),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"Change the selected VC Store plugin"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'vcStore - name of VC Store plugin ("snap" or "ceramic"). Must be one of methods returned by ',(0,r.kt)("inlineCode",{parentName:"li"},"getAvailableVCStores"),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ceramic network support is experimental and still under development!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'setVCStore',\n    },\n  ],\n});\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("h3",{id:"getavailablevcstores"},"getAvailableVCStores"),(0,r.kt)("h4",{id:"description-9"},"Description"),(0,r.kt)("p",null,"Get a list of supported VC Store plugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'getAvailableVCStores',\n    },\n  ],\n});\n")),(0,r.kt)("h2",{id:"snap-methods"},"Snap Methods"),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("h4",{id:"description-10"},"Description"),(0,r.kt)("p",null,"Used to familiarize the user with Risks, etc. and to get the accounts Public key, which is used to generate DIDs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'init',\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"togglepopups"},"togglePopups"),(0,r.kt)("h4",{id:"description-11"},"Description"),(0,r.kt)("p",null,"Used to disable popups that show up whenever user tries to save a VC, generate a VP, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'togglePopups',\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"changeinfuratoken"},"changeInfuraToken"),(0,r.kt)("h4",{id:"description-12"},"Description"),(0,r.kt)("p",null,"change the Infura token used by SSI Snap"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"infuraToken - new infura token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const response = await ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: [\n    snapId,\n    {\n      method: 'changeInfuraToken',\n      params: { infuraToken: infuraToken },\n    },\n  ],\n});\n")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"boolean"))}u.isMDXComponent=!0}}]);