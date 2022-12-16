"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[16],{8968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(8427),o=(t(2784),t(876));const r={sidebar_position:1},s="SSI Snap Connector",i={unversionedId:"libraries/ssi-snap-connector",id:"libraries/ssi-snap-connector",title:"SSI Snap Connector",description:"SSI Snap connector is used to install SSI snap and expose API toward snap on dApps and other applications.",source:"@site/docs/libraries/ssi-snap-connector.md",sourceDirName:"libraries",slug:"/libraries/ssi-snap-connector",permalink:"/ssi-snap-docs/docs/libraries/ssi-snap-connector",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/libraries/ssi-snap-connector.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Libraries & Plugins",permalink:"/ssi-snap-docs/docs/category/libraries--plugins"},next:{title:"DataManager (Veramo)",permalink:"/ssi-snap-docs/docs/libraries/data-manager"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Install",id:"install",level:3},{value:"Connector methods",id:"connector-methods",level:2},{value:"Utility methods",id:"utility-methods",level:2}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssi-snap-connector"},"SSI Snap Connector"),(0,o.kt)("p",null,"SSI Snap connector is used to install SSI snap and expose API toward snap on dApps and other applications."),(0,o.kt)("p",null,"For more details on SSI Snap Connector, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockchain-lab-um/ssi-snap-connector"},"ssi-snap-connector repo"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @blockchain-lab-um/ssi-snap-connector")),(0,o.kt)("p",null,"Connector has exposed function for installing the Snap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function enableSSISnap(\n  {\n    snapId?: string;\n    version?: string;\n    supportedMethods?: Array<typeof availableMethods[number]>;\n  }): Promise<MetaMaskSSISnap>;\n")),(0,o.kt)("p",null,"When installing the SSI Snap it is possible to set a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"snapId")," if you do not want to instal it from the official repository."),(0,o.kt)("p",null,"It is also possible to use custom version and set a list of supported methods. If connected SSI Snap does not currently have one of the supported methods selected, ",(0,o.kt)("inlineCode",{parentName:"p"},"switchMethod")," RPC method will be automatically called."),(0,o.kt)("p",null,"After snap installation, this function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"MetamaskSSISnap")," object that can be used to retrieve snap API.\nAn example of initializing SSI snap and invoking snap API is shown below."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"More detailed description of methods & parameters is provided in chapter ",(0,o.kt)("a",{parentName:"p",href:"/ssi-snap-docs/docs/tutorial/rpc-methods"},"JSON-RPC API"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// install snap and fetch API\nconst snap = await enableSSISnap({ version: 'latest' });\nconst api = await snap.getSSISnapApi();\n\n// invoke API\nconst vcs = await api.queryVCs();\n\nconsole.log('list of VCs:', vcs);\n")),(0,o.kt)("h2",{id:"connector-methods"},"Connector methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * type QueryVCsRequestParams = {\n *  filter?: {\n *      type: 'id' | 'JSONPath' | 'none';\n *     filter: unknown;\n *    };\n *  options?: {\n *     store?: string | string[];\n *     returnStore?: boolean;\n *   };\n * };\n */\n\nconst vcs = await api.queryVCs({\n  filter: { type: id, filter: '0x123321' },\n  options: { returnStore: true, store: ['ceramic', 'snap'] },\n});\n\n/**\n * Create a VP from one or more VCs\n *\n * type CreateVPRequestParams = {\n *  vcs: VCRequest[];\n *  proofFormat?: 'jwt' | 'jsonld' | 'EthereumEip712Signature2021;\n *  proofOptions?: {\n *    type?: string\n *    domain?: string\n *    challenge?: string\n *  };\n * };\n *\n * type VCRequest = {\n *  id: string,\n *  metadata?: {\n *    store?: string\n *  }\n * }\n */\nconst vp = await api.createVP({\n  vcs: [{ id: '123', metadata: { store: 'ceramic' } }, { id: '456' }],\n  proofFormat: 'jwt',\n  proofOptions: {\n    domain: '123',\n    challenge: '456',\n  },\n});\n\n/**\n * Save a VC in the SSI Snap under currently selected MetaMask account\n *\n * @param {W3CVerifiableCredential} vc - vc\n * @param {SaveVCOptions} options? - optional options param\n *\n * type SaveVCOptions =\n * {\n *  store?: string | string[]\n * }\n *\n */\nconst res = await api.saveVC(verifiableCredential, {\n  store: ['snap', 'ceramic'],\n});\n\nconst res = await api.deleteVC('0x123', {\n  store: ['snap', 'ceramic'],\n});\n\nconst did = await api.getDID();\n\nconst method = await api.getSelectedMethod();\n\nconst methods = await api.getAvailableMethods();\n\nconst res = await api.switchDIDMethod('did:key');\n\nconst res = await api.togglePopups();\n\nconst vcStores = await api.getVCStore();\n\nconst availableVCStores = await api.getAvailableVCStores();\n\nconst res = await api.setVCStore('ceramic', true);\n\nconst res = await api.changeInfuraToken(infuraToken);\n\nconst snapSettings = await api.getSnapSettings();\n\nconst accountSettings = await api.getAccountSettings();\n")),(0,o.kt)("h2",{id:"utility-methods"},"Utility methods"),(0,o.kt)("p",null,"SSI Snap Connector also comes with additional utility methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"isSnapInstalled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isMetamaskSnapsSupported")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasMetamask"),"."))}d.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,s(s({ref:n},l),{},{components:t})):a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);