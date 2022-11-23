"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[833],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8427),a=(r(2784),r(876));const o={sidebar_position:4},i="VCManager (Veramo)",s={unversionedId:"libraries/vc-manager",id:"libraries/vc-manager",title:"VCManager (Veramo)",description:"Ceramic network support is experimental and still under development!",source:"@site/docs/libraries/vc-manager.md",sourceDirName:"libraries",slug:"/libraries/vc-manager",permalink:"/ssi-snap-docs/docs/libraries/vc-manager",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/libraries/vc-manager.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SSI Snap Connector",permalink:"/ssi-snap-docs/docs/libraries/ssi-snap-connector"},next:{title:"Apps",permalink:"/ssi-snap-docs/docs/category/apps"}},l={},c=[{value:"Introduction",id:"introduction",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Veramo Agent Setup",id:"veramo-agent-setup",level:4},{value:"VCManager Functions",id:"vcmanager-functions",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vcmanager-veramo"},"VCManager (Veramo)"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Ceramic network support is experimental and still under development!")),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Veramo does not provide similar support for managing VCs like it does for DIDs and KeyPairs. ",(0,a.kt)("strong",{parentName:"p"},"Veramo VC Manager")," is a custom plugin for managing VCs with the Veramo client. It works very similarly to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uport-project/veramo/tree/next/packages/did-manager"},"DIDManager")," and other Manager plugins built for Veramo. VCs stored using this plugin are stored in an array."),(0,a.kt)("p",null,"VCManager stores a Record of extended AbstractVCStore plugins, which makes storing different VCs on different platforms possible! Optionally, VCManager also has built in querying functionality which filters VCs and returns only a list of VCs that are a superset of provided query object (subset)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/UUf5NtO.png",alt:"VCManager design"})),(0,a.kt)("p",null,"This plugin comes with an abstract class that can be extended in any form needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export abstract class AbstractVCStore {\n  abstract import(args: VerifiableCredential): Promise<boolean>\n  abstract get(args: { id: string }): Promise<VerifiableCredential | null>\n  abstract delete(args: { id: string }): Promise<boolean>\n  abstract list(): Promise<VerifiableCredential[]>\n}\n\n")),(0,a.kt)("p",null,"This abstract class enabled ",(0,a.kt)("a",{parentName:"p",href:"/ssi-snap-docs/docs/ssi-snap/architecture"},(0,a.kt)("inlineCode",{parentName:"a"},"SnapVCStore"))," plugin, which stores the array of VCs in MetaMask State and ",(0,a.kt)("inlineCode",{parentName:"p"},"CeramicVCStore")," which stores VCs on Ceramic Network."),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("h4",{id:"veramo-agent-setup"},"Veramo Agent Setup"),(0,a.kt)("p",null,"Add the plugin to the Veramo agent setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  const vcStorePlugins: Record<string, AbstractVCStore> = {};\n  vcStorePlugins['snap'] = new SnapVCStore();\n  vcStorePlugins['ceramic'] = new CeramicVCStore();\n  vcStorePlugins['memory'] = new MemoryVCStore();\n  export const agent = createAgent<\n      ...\n      IVCManager &\n      ...\n  >({\n    plugins: [\n      ...\n      new VCManager({ store: vcStorePlugins }),\n      ...\n    ],\n  });\n")),(0,a.kt)("p",null,"Use the plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await agent.saveVC({ store: 'snap', vc });\nawait agent.saveVC({ store: 'ceramic', vc });\nconst res = await agent.getVCs({\n  store: 'ceramic',\n  query: { credentialSubject: { id: 'did:ethr:0x04:0x123...321' } },\n});\n")),(0,a.kt)("h4",{id:"vcmanager-functions"},"VCManager Functions"),(0,a.kt)("p",null,"Get a specific VC from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.getVC({store: vcStore, id: vc_id})")),(0,a.kt)("p",null,"Save a VC to selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.saveVC({store: vcStore, vc: vc})")),(0,a.kt)("p",null,"Delete a VC from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.deleteVC({store: vcStore, id: vc_id})")),(0,a.kt)("p",null,"Get an array of all VCs from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.listVCS({store: vcStore, query: VCQuery})")),(0,a.kt)("p",null,"VCQuery is an object that is a subset of VerifiableCredential. If provided, the function will only return VCs that match the VCQuerry subset. For example if you only want to retrieve VCs issued by a specific DID to a specific subject you would need to use"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.listVCS({query: {issuer: {id: 'did:ethr:0x...'}, credentialSubject: {id: 'did:ethr:0x...'}}})")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/blockchain-lab-um/veramo-vc-manager"},"GitHub")," |\n",(0,a.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@blockchain-lab-um/veramo-vc-manager"},"npm"))))}u.isMDXComponent=!0}}]);