"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[693],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8427),a=(n(2784),n(876));const o={sidebar_position:4},i="VCManager (Veramo)",s={unversionedId:"plugins/vc-manager",id:"plugins/vc-manager",title:"VCManager (Veramo)",description:"Ceramic network support is experimental and still under development!",source:"@site/docs/plugins/vc-manager.md",sourceDirName:"plugins",slug:"/plugins/vc-manager",permalink:"/ssi-snap-docs/docs/plugins/vc-manager",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/plugins/vc-manager.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SSI Snap Connector",permalink:"/ssi-snap-docs/docs/plugins/ssi-snap-connector"},next:{title:"Roadmap",permalink:"/ssi-snap-docs/docs/roadmap"}},l={},c=[{value:"Introduction",id:"introduction",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Veramo Agent Setup",id:"veramo-agent-setup",level:4},{value:"VCManager Functions",id:"vcmanager-functions",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vcmanager-veramo"},"VCManager (Veramo)"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Ceramic network support is experimental and still under development!")),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Veramo does not provide similar support for managing VCs like it does for DIDs and KeyPairs. ",(0,a.kt)("strong",{parentName:"p"},"Veramo VC Manager")," is a custom plugin for managing VCs with the Veramo client. It works very similarly to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uport-project/veramo/tree/next/packages/did-manager"},"DIDManager")," and other Manager plugins built for Veramo. VCs stored using this plugin are stored in an array."),(0,a.kt)("p",null,"VCManager stores a Record of extended AbstractVCStore plugins, which makes storing different VCs on different platforms possible! Optionally, VCManager also has built in querying functionality which filters VCs and returns only a list of VCs that are a superset of provided query object (subset)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/UUf5NtO.png",alt:"VCManager design"})),(0,a.kt)("p",null,"This plugin comes with an abstract class that can be extended in any form needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export abstract class AbstractVCStore {\n  abstract import(args: VerifiableCredential): Promise<boolean>\n  abstract get(args: { id: string }): Promise<VerifiableCredential | null>\n  abstract delete(args: { id: string }): Promise<boolean>\n  abstract list(): Promise<VerifiableCredential[]>\n}\n\n")),(0,a.kt)("p",null,"This abstract class enabled ",(0,a.kt)("a",{parentName:"p",href:"/ssi-snap-docs/docs/ssi-snap/architecture"},(0,a.kt)("inlineCode",{parentName:"a"},"SnapVCStore"))," plugin, which stores the array of VCs in MetaMask State and ",(0,a.kt)("inlineCode",{parentName:"p"},"CeramicVCStore")," which stores VCs on Ceramic Network."),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("h4",{id:"veramo-agent-setup"},"Veramo Agent Setup"),(0,a.kt)("p",null,"Add the plugin to the Veramo agent setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  const vcStorePlugins: Record<string, AbstractVCStore> = {};\n  vcStorePlugins['snap'] = new SnapVCStore();\n  vcStorePlugins['ceramic'] = new CeramicVCStore();\n  vcStorePlugins['memory'] = new MemoryVCStore();\n  export const agent = createAgent<\n      ...\n      IVCManager &\n      ...\n  >({\n    plugins: [\n      ...\n      new VCManager({ store: vcStorePlugins }),\n      ...\n    ],\n  });\n")),(0,a.kt)("p",null,"Use the plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await agent.saveVC({ store: 'snap', vc });\nawait agent.saveVC({ store: 'ceramic', vc });\nconst res = await agent.getVCs({\n  store: 'ceramic',\n  query: { credentialSubject: { id: 'did:ethr:0x04:0x123...321' } },\n});\n")),(0,a.kt)("h4",{id:"vcmanager-functions"},"VCManager Functions"),(0,a.kt)("p",null,"Get a specific VC from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.getVC({store: vcStore, id: vc_id})")),(0,a.kt)("p",null,"Save a VC to selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.saveVC({store: vcStore, vc: vc})")),(0,a.kt)("p",null,"Delete a VC from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.deleteVC({store: vcStore, id: vc_id})")),(0,a.kt)("p",null,"Get an array of all VCs from selected store"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.listVCS({store: vcStore, query: VCQuery})")),(0,a.kt)("p",null,"VCQuery is an object that is a subset of VerifiableCredential. If provided, the function will only return VCs that match the VCQuerry subset. For example if you only want to retrieve VCs issued by a specific DID to a specific subject you would need to use"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent.listVCS({query: {issuer: {id: 'did:ethr:0x...'}, credentialSubject: {id: 'did:ethr:0x...'}}})")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/blockchain-lab-um/veramo-vc-manager"},"GitHub")," |\n",(0,a.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@blockchain-lab-um/veramo-vc-manager"},"npm"))))}u.isMDXComponent=!0}}]);