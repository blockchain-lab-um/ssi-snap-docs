(self.webpackChunkssi_docs=self.webpackChunkssi_docs||[]).push([[62],{7331:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>z,contentTitle:()=>A,default:()=>U,frontMatter:()=>_,metadata:()=>V,toc:()=>L});var n=a(7462),i=a(7294),o=a(3905),s=a(1265),r=a(1927),l=a(7044),c=a(923),d=a(6621),u=a(412),m=a(6886),g=a(6863),p=a(1057),b=a(5861),f=a(5449),h=a(913),S=a(3841),k=a(9207),E=a(5819),v=a(3457),C=a(480),Z=a(5071);let w=!1;var y=a(9857);const I="teamCard_uvCn",x=new y._k({supportedChainIds:[1,3,4,5,42]});function M(){const[e,t]=(0,i.useState)(!1),[a,n]=(0,i.useState)(""),[o,s]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),[y,M]=(0,i.useState)(void 0),[D,P]=(0,i.useState)(""),[T,_]=(0,i.useState)([]),[A,V]=(0,i.useState)(""),[z,L]=(0,i.useState)(""),[O,U]=(0,i.useState)([]),{activate:G,deactivate:N}=(0,l.Ge)(),{account:X}=(0,l.Ge)();u.Z.canUseDOM&&(0,i.useEffect)((()=>{(async()=>{c(await(0,d.isMetamaskSnapsSupported)())})()}),[]);const F=async()=>{if(await G(x),console.log("Metamask connected",X),window.ethereum){const a=await async function(e){try{console.log("Attempting to connect to snap...");const t=await(0,d.enableSSISnap)({snapId:e,supportedMethods:["did:ethr","did:key"]});return w=!0,console.log("Snap installed!"),{isSnapInstalled:!0,snap:t}}catch(t){return console.error(t),w=!1,{isSnapInstalled:!1}}}("npm:@blockchain-lab-um/ssi-snap");if(a.isSnapInstalled){var e;t(!0);const n=await(null==(e=a.snap)?void 0:e.getSSISnapApi());M(n),P(await n.getMethod()),_(await n.getAvailableMethods()),V(await n.getDID()),L(await n.getVCStore()),U(await n.getAvailableVCStores())}}};return u.Z.canUseDOM&&window.ethereum&&r?i.createElement("div",{className:I},i.createElement(m.ZP,{container:!0,alignItems:"center",spacing:2},X&&i.createElement(m.ZP,{item:!0,xs:12},i.createElement(g.Z,{variant:"contained","aria-label":"outlined primary button group"},i.createElement(p.Z,{variant:"outlined",size:"large",style:{backgroundColor:"#e8e8e8",color:"#8349bb"},onClick:async()=>{await navigator.clipboard.writeText(X)}},X.substring(0,5)+"..."+X.substring(38)),i.createElement(p.Z,{variant:"outlined",size:"large",style:{backgroundColor:"#e8e8e8",color:"#8349bb"},onClick:async()=>{await navigator.clipboard.writeText(A)}},A.substring(0,A.lastIndexOf(":"))+":"+A.split(":")[A.split(":").length-1].substring(0,5)+"..."+A.substring(A.length-4)),i.createElement(p.Z,{size:"small",style:{textAlign:"center"},onClick:()=>N()},"Disconnect"))),!X&&i.createElement(m.ZP,{item:!0,xs:!0}," ",i.createElement(p.Z,{variant:"contained",onClick:F},"Connect MetaMask")),X&&e&&i.createElement(i.Fragment,null,i.createElement(m.ZP,{item:!0,xs:12},i.createElement(m.ZP,{item:!0,xs:!0},i.createElement(b.Z,{variant:"h5",sx:{mb:1.5}},"Snap Configuration")),i.createElement(f.Z,{id:"standard-basic",label:"Infura Token",variant:"standard",size:"small",color:"secondary",style:{backgroundColor:"#e8e8e8"},onChange:e=>{!function(e){n(e.target.value)}(e)}}),i.createElement(p.Z,{variant:"contained",onClick:()=>async function(){if(""!==a&&y){const e=await y.changeInfuraToken(a);console.log(e),s(e)}}()},"Change Infura Token")),i.createElement(m.ZP,{item:!0,xs:!0},i.createElement(p.Z,{variant:"contained",onClick:()=>async function(){if(y){const e=await y.togglePopups();console.log(e),s(e)}}()},"Toggle popups")),i.createElement(m.ZP,{item:!0,xs:12},i.createElement(b.Z,{variant:"h5",sx:{mb:1.5}},"DID Configuration")),i.createElement(m.ZP,{item:!0,xs:3},i.createElement(h.Z,{fullWidth:!0,variant:"filled"},i.createElement(S.Z,{id:"select-did-method-label",color:"secondary"},"DID Method"),i.createElement(k.Z,{color:"secondary",style:{backgroundColor:"#e8e8e8"},labelId:"select-did-method-label",id:"select-did-method",value:D,label:"DID Method",onChange:e=>(async e=>{await y.switchMethod(e.target.value)&&(P(e.target.value),V(await y.getDID()))})(e)},T.map(((e,t)=>i.createElement(E.Z,{value:e,key:t},e)))))),i.createElement(m.ZP,{item:!0,xs:12},i.createElement(b.Z,{variant:"h5",sx:{mb:1.5}},"VC Store Configuration")),i.createElement(m.ZP,{item:!0,xs:3},i.createElement(v.Z,null,i.createElement(C.Z,{control:i.createElement(Z.Z,{checked:"ceramic"===z}),label:"Enable Ceramic",onChange:e=>(async e=>{"on"===e.target.value&&await y.setVCStore("ceramic"),L(await y.getVCStore())})(e)})))))):i.createElement("div",null,"Install MetaMask first!")}function D(e){return new c.Q(e)}const P=(0,s.Z)({palette:{primary:{main:"#a495ff",light:"#8349bb",dark:"#8349bb"},secondary:{main:"#8349bb",light:"#a495ff",dark:"#3b3b3b"}}});function T(){return i.createElement(l.Ht,{getLibrary:D},i.createElement(r.Z,{theme:P},i.createElement(M,null)))}const _={sidebar_position:6},A="Configure SSI Snap",V={unversionedId:"config",id:"config",title:"Configure SSI Snap",description:"",source:"@site/docs/config.mdx",sourceDirName:".",slug:"/config",permalink:"/ssi-snap-docs/docs/config",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/config.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Live Demo",permalink:"/ssi-snap-docs/docs/tutorial/demo"},next:{title:"Libraries & Plugins",permalink:"/ssi-snap-docs/docs/category/libraries--plugins"}},z={},L=[],O={toc:L};function U(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-ssi-snap"},"Configure SSI Snap"),(0,o.kt)(T,{mdxType:"MetaMaskConfigRoot"}))}U.isMDXComponent=!0},8677:()=>{},2808:()=>{}}]);