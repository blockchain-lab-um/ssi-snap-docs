"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[576],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8427),a=(r(2784),r(876));const o={sidebar_position:3},i="Verifiable Presentations (VP)",s={unversionedId:"ssi/vp",id:"ssi/vp",title:"Verifiable Presentations (VP)",description:"Verifiable Presentation, or VP for short, expresses data from one or more VCs and is packaged so that the authorship of the data is verifiable.",source:"@site/docs/ssi/vp.md",sourceDirName:"ssi",slug:"/ssi/vp",permalink:"/ssi-snap-docs/docs/ssi/vp",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/ssi/vp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Verifiable Credentials (VC)",permalink:"/ssi-snap-docs/docs/ssi/vc"},next:{title:"SSI Trust Model",permalink:"/ssi-snap-docs/docs/ssi/trust-model"}},l={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifiable-presentations-vp"},"Verifiable Presentations (VP)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifiable Presentation"),", or ",(0,a.kt)("strong",{parentName:"p"},"VP")," for short, expresses data from one or more VCs and is packaged so that the authorship of the data is verifiable."),(0,a.kt)("p",null,"Essentially, VP is a way to verifiably present some or all data from one or more Verifiable Credentials. VP can contain one or more VCs and is signed using a DIDs."),(0,a.kt)("p",null,"The data in a VP, which is often about the same subject, could have been issued by multiple issuers. Let's say you must prove your University degree, past employment, and date of birth. This data usually originates from different entities, and the owner can combine them to create a single VP."),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://www.w3.org/TR/vc-data-model/diagrams/zkp-cred-pres.svg",alt:"VP",width:"700"}),(0,a.kt)("br",null),"Example of the relationship between Verifiable Credentials and Derived Credentials in a Verifiable Presentation (",(0,a.kt)("a",{href:"https://www.w3.org/TR/vc-data-model/diagrams/zkp-cred-pres.svg"},"image source"),")."),(0,a.kt)("br",null),(0,a.kt)("p",null,"There is a lot of ongoing work on further enhancing data privacy when presenting VCs. We can do this with ",(0,a.kt)("strong",{parentName:"p"},"Selective Disclosure")," and ",(0,a.kt)("strong",{parentName:"p"},"Zero-Knowledge Proofs")," (ZKP). Selective disclosure enables generating proofs from ",(0,a.kt)("strong",{parentName:"p"},"only a few attributes")," of a credential. Using ZKPs, one could prove the necessary condition for the attribute ",(0,a.kt)("strong",{parentName:"p"},"without revealing the actual value"),". In practice, this means one could prove that they are above 18 without showing their ID card, and third parties would instantly be able to verify that data."))}d.isMDXComponent=!0}}]);