"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[289],{4993:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(2983);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7364),r=(a(2983),a(4993));const s={sidebar_position:4},o="Architecture",i={unversionedId:"ssi-snap/architecture",id:"ssi-snap/architecture",title:"Architecture",description:"As already mentioned, SSI Snap is a MetaMask Snap extension. MetaMask Snaps is a system that allows anyone to expand the capabilities of MetaMask safely. This ranges from adding support for other non-EVM blockchains to managing online identity. You can learn more about MetaMask Snaps in this section.",source:"@site/docs/ssi-snap/architecture.md",sourceDirName:"ssi-snap",slug:"/ssi-snap/architecture",permalink:"/ssi-snap-docs/docs/ssi-snap/architecture",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap/edit/develop/packages/docs/docs/ssi-snap/architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/ssi-snap-docs/docs/ssi-snap/design"},next:{title:"Storage",permalink:"/ssi-snap-docs/docs/ssi-snap/storage"}},c={},p=[{value:"Veramo Client",id:"veramo-client",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"As already mentioned, SSI Snap is a MetaMask Snap extension. MetaMask Snaps is a system that allows anyone to expand the capabilities of MetaMask safely. This ranges from adding support for other non-EVM blockchains to managing online identity. You can learn more about MetaMask Snaps in ",(0,r.kt)("a",{parentName:"p",href:"/ssi-snap-docs/docs/ssi-snap/snaps"},"this section"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/YiAnoly.png",alt:"SSI Snap Architecture"})),(0,r.kt)("center",null," Figure 1: SSI Snap Architecture "),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"veramo-client"},"Veramo Client"),(0,r.kt)("p",null,"Veramo client powers the SSI Snap. Inside SSI Snap, Veramo Client is used to manage DIDs and VCs, using Veramos ",(0,r.kt)("strong",{parentName:"p"},"DIDManager"),", ",(0,r.kt)("strong",{parentName:"p"},"KeyManager")," and ",(0,r.kt)("strong",{parentName:"p"},"PrivateKeyManager")," plugins and our custom ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../libraries/data-manager"},"DataManager plugin")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DIDManager"),", ",(0,r.kt)("strong",{parentName:"p"},"KeyManager"),", ",(0,r.kt)("strong",{parentName:"p"},"PrivateKeyManager")," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../libraries/data-manager"},"DataManager"))," plugins take care of managing and storing data. They all come with an abstract data-store class, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blockchain-lab-um/veramo-vc-manager/blob/main/src/vc-store/abstract-vc-store.ts"},"AbstractVCStore"),". Using said class, we implemented custom data-store plugins, that save data inside the MetaMask state or on the Ceramic Network."),(0,r.kt)("p",null,"These abstract classes make implementing different ways of storing data easy."),(0,r.kt)("p",null,"In the future, users will get to choose between different DataStore plugins (cloud, other apps, etc.)."),(0,r.kt)("p",null,"Additionally to storing data, Veramo also handles creation of ",(0,r.kt)("strong",{parentName:"p"},"Verifiable Presentations")," ",(0,r.kt)("strong",{parentName:"p"},"ICredentialIssuer")," is a plugin used to create a VP using one or more VCs with the selected proof format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you're interested in how VCs and VPs are generated and how Veramo and its plugins work visit their ",(0,r.kt)("a",{parentName:"strong",href:"https://veramo.io/docs/basics/introduction"},"documentation"),"!")))}u.isMDXComponent=!0}}]);