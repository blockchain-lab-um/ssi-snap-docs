"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[755],{4993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(2983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7364),r=(n(2983),n(4993));const i={sidebar_position:1},o="How To Implement It?",s={unversionedId:"tutorial/implementation",id:"tutorial/implementation",title:"How To Implement It?",description:"The SSI Snap is a MetaMask Snap, that can handle DIDs, securely store VCs, create VPs and is designed to be blockchain-agnostic.",source:"@site/docs/tutorial/implementation.md",sourceDirName:"tutorial",slug:"/tutorial/implementation",permalink:"/ssi-snap-docs/docs/tutorial/implementation",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap/edit/develop/packages/docs/docs/tutorial/implementation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Use SSI Snap",permalink:"/ssi-snap-docs/docs/category/use-ssi-snap"},next:{title:"JSON-RPC API",permalink:"/ssi-snap-docs/docs/tutorial/rpc-methods"}},p={},l=[{value:"Implementing the Snap in a dApp",id:"implementing-the-snap-in-a-dapp",level:2},{value:"Using the SSI Snap Connector",id:"using-the-ssi-snap-connector",level:3},{value:"Save VC",id:"save-vc",level:3},{value:"Query VCs",id:"query-vcs",level:3},{value:"Create VP",id:"create-vp",level:3},{value:"Delete VC",id:"delete-vc",level:3},{value:"DIDs",id:"dids",level:3},{value:"Supported DID Methods and VC Stores",id:"supported-did-methods-and-vc-stores",level:3},{value:"Switch DID Method",id:"switch-did-method",level:3},{value:"Configure VC Stores",id:"configure-vc-stores",level:3},{value:"Snap Settings",id:"snap-settings",level:3},{value:"For a more detailed look at SSI Snap Connector visit its documentation!",id:"for-a-more-detailed-look-at-ssi-snap-connector-visit-its-documentation",level:4},{value:"Working with VCs",id:"working-with-vcs",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-implement-it"},"How To Implement It?"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"SSI Snap")," is a MetaMask Snap, that can handle ",(0,r.kt)("strong",{parentName:"p"},"DIDs"),", securely store ",(0,r.kt)("strong",{parentName:"p"},"VCs"),", create ",(0,r.kt)("strong",{parentName:"p"},"VPs")," and is designed to be blockchain-agnostic."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ceramic network and DID:KEY support are experimental and still under development!")),(0,r.kt)("h2",{id:"implementing-the-snap-in-a-dapp"},"Implementing the Snap in a dApp"),(0,r.kt)("h3",{id:"using-the-ssi-snap-connector"},"Using the SSI Snap Connector"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @blockchain-lab-um/ssi-snap-connector")),(0,r.kt)("p",null,"Connector has exposed function for installing the Snap."),(0,r.kt)("p",null,"After snap installation, this function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"MetamaskSSISnap")," object that can be used to retrieve snap API.\nAn example of initializing SSI snap and invoking snap API is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// install snap and fetch API\nconst snap = await enableSSISnap({\n  snapId: snapId,\n  version: 'latest',\n  supportedMethods: ['did:ethr', 'did:key'],\n});\nconst api = await snap.getSSISnapApi();\n")),(0,r.kt)("p",null,"SSI Snap Connector will take care of initializing the Snap for other DID methods (Needed to extract the public key) during the enableSSISnap function and whenever account changes."),(0,r.kt)("h3",{id:"save-vc"},"Save VC"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"saveVC")," is used to save a VC under the currently selected MetaMask account. Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"vc")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"W3CVerifiableCredential")," VC. Invalid format might lead to failure when generating VPs. We recommend using Veramo to generate VCs with this ",(0,r.kt)("a",{parentName:"p",href:"https://veramo.io/docs/api/core.verifiablecredential"},"interface"),". Optional parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," defines where the VC will get saved. VC can be stored in one or more places at the same time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await api.saveVC(verifiableCredential, {\n  store: ['ceramic', 'snap'],\n});\n")),(0,r.kt)("h3",{id:"query-vcs"},"Query VCs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryVCs")," is used to get a list of VCs stored by the currently selected MetaMask account. Optional parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," is an object with optional properties ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,r.kt)("p",null,"Filter defines what ",(0,r.kt)("inlineCode",{parentName:"p"},"queryVCs")," returns and Options defines where to search for data and what format to return it in."),(0,r.kt)("p",null,"QueryVCsRequestParams type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type QueryVCsRequestParams = {\n  filter?: {\n    type: string;\n    filter: unknown;\n  };\n  options?: {\n    store?: AvailableVCStores | AvailableVCStores[];\n    returnStore?: boolean;\n  };\n};\n")),(0,r.kt)("p",null,"Currently, 3 different ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," types are supported; ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONPath"),". Type ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," will work as if no filter property was provided, ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will search for matching ID of VC and ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONPath")," will use jsonpath lib to find matching VCs."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", filter.filter is a string of an id."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONPath")," , filter.filter is a string containing JSONPath string. Note: query needs to start with @.data while filterin VC alone. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const jsonPath =\n  '$[?(@.data.credentialSubject.achievement == \"Certified Solidity Developer 2\")]';\n")),(0,r.kt)("p",null,"Options defines where to search for VCs. One or more supported stores can be provided. If ",(0,r.kt)("inlineCode",{parentName:"p"},"returnStore")," is enabled, metadata of returned VCs will contain a string where they're stored"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get a single VC or a list of VCs you're looking for\nconst vcs = await api.queryVCs({\n  filter: {\n    type: id,\n    filter: '123456',\n  },\n  options: {\n    returnStore: true,\n  },\n});\nconsole.log('VCs', vcs);\n\n// To return every VC\nconst vcs = await api.queryVCs();\n")),(0,r.kt)("h3",{id:"create-vp"},"Create VP"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createVP")," is used to get a VP for one or more specific VCs. Params object is of type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CreateVPRequestParams = {\n  vcs: VCRequest[];\n  proofFormat?: 'jwt' | 'lds' | 'EthereumEip712Signature2021';\n  proofOptions?: {\n    type?: string;\n    domain?: string;\n    challenge?: string;\n  };\n};\n\nexport type VCRequest = {\n  id: string;\n  metadata?: {\n    store?: AvailableVCStores;\n  };\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vcs")," is a list of VCs to be included in a VP. Its an array of objects that need to contain ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of a VC (Which can be obtained using the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryVCs")," method). ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," property is optional and it contains ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," property which defines where to look for VC with id ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proofFormat")," can be jwt, jsonld or EthereumEip712Signature2021."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," is optional and is used to define ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"challenge")," if needed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"holder")," of the VP will be a DID generated based on currently selected MetaMask account AND currently selected DID Method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get VP\nconst vp = await api.createVP({\n  vcs: [{ id: '123', metadata: { store: 'ceramic' } }, { id: '456' }],\n  proofFormat: 'jwt',\n  options: {\n    challenge: '123456789',\n  },\n});\n")),(0,r.kt)("h3",{id:"delete-vc"},"Delete VC"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deleteVC")," is used to delete a VC from one or more stores"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id")," - id of VC"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," is optional and is used to select a store where to delete VC from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await api.deleteVC('123', { store: 'snap' });\n")),(0,r.kt)("h3",{id:"dids"},"DIDs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getDID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSelectedMethod")," are used to get current did and currently selected did method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await api.getDID();\n\nconst res = await api.getSelectedMethod();\n")),(0,r.kt)("h3",{id:"supported-did-methods-and-vc-stores"},"Supported DID Methods and VC Stores"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getAvailableVCStores")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getAvailableMethods")," are used to get all supported methods and vcstores"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const supportedMethods = await api.getAvailableMethods();\n\nconst supportedStores = await api.getAvailableVCStores();\n")),(0,r.kt)("h3",{id:"switch-did-method"},"Switch DID Method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"switchMethod")," is used to switch the currently selected DID method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await api.switchMethod('did:key');\n")),(0,r.kt)("h3",{id:"configure-vc-stores"},"Configure VC Stores"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setVCStore")," is used to enable/disable specific VC store. By default both snap & ceramic are enabled!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await api.setVCStore('ceramic', false);\n")),(0,r.kt)("h3",{id:"snap-settings"},"Snap Settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"togglePopups")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"changeInfuraToken"),' are used to enable/disable "Are you sure?" alerts and to change the infuraToken.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await api.changeInfuraToken('new token');\n\nconst res = await api.togglePopups();\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE:")," ",(0,r.kt)("em",{parentName:"p"},"Snap can also be installed using a 3rd party Platform such as our ",(0,r.kt)("a",{parentName:"em",href:"https://blockchain-lab-um.github.io/course-dapp/"},"Platform")," or ",(0,r.kt)("a",{parentName:"em",href:"https://snaplist.org/"},"Snaplist"),".")),(0,r.kt)("h4",{id:"for-a-more-detailed-look-at-ssi-snap-connector-visit-its-documentation"},"For a more detailed look at SSI Snap Connector visit its ",(0,r.kt)("a",{parentName:"h4",href:"../libraries/ssi-snap-connector"},"documentation"),"!"),(0,r.kt)("p",null,"If you need more help with implementation feel free to contact us in Discord, or check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blockchain-lab-um/course-dapp"},"DEMO Platform repo"),"!"),(0,r.kt)("h3",{id:"working-with-vcs"},"Working with VCs"),(0,r.kt)("p",null,"It is up to the dApp to issue VCs and/or request VPs/VCs and verify their validity (scheme, subject, controller, content, etc.). We recommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://veramo.io/"},"Veramo Framework"),"."))}c.isMDXComponent=!0}}]);