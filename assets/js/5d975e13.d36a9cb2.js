"use strict";(self.webpackChunkssi_docs=self.webpackChunkssi_docs||[]).push([[647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},s="Getting Started",o={unversionedId:"get_started",id:"get_started",title:"Getting Started",description:"The SSI Snap is a MetaMask Snap, that can handle DIDs, securely store VCs, create VPs and is designed to be blockchain-agnostic.",source:"@site/docs/get_started.md",sourceDirName:".",slug:"/get_started",permalink:"/ssi-snap-docs/docs/get_started",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/get_started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ssi-snap-docs/docs/intro"},next:{title:"Self Sovereign Identity - Basics",permalink:"/ssi-snap-docs/docs/category/self-sovereign-identity---basics"}},l={},p=[{value:"User",id:"user",level:2},{value:"Using the Snap",id:"using-the-snap",level:3},{value:"Testing on testnet",id:"testing-on-testnet",level:4},{value:"Running SSI Snap locally",id:"running-ssi-snap-locally",level:4},{value:"Developer",id:"developer",level:2},{value:"Implementing the Snap in a dApp",id:"implementing-the-snap-in-a-dapp",level:3},{value:"Working with VCs",id:"working-with-vcs",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"SSI Snap")," is a MetaMask Snap, that can handle ",(0,r.kt)("strong",{parentName:"p"},"DIDs"),", securely store ",(0,r.kt)("strong",{parentName:"p"},"VCs"),", create ",(0,r.kt)("strong",{parentName:"p"},"VPs")," and is designed to be blockchain-agnostic."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("h3",{id:"using-the-snap"},"Using the Snap"),(0,r.kt)("p",null,"In order to install and test the Snap, you will need to install ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/flask/"},"MetaMask Flask"),"."),(0,r.kt)("p",null,"You can install the Snap in ",(0,r.kt)("a",{parentName:"p",href:"config"},"Configuration Page")," or by simply connecting to our ",(0,r.kt)("a",{parentName:"p",href:"https://blockchain-lab-um.github.io/course-dapp/"},"Platform")," or select it from the ",(0,r.kt)("a",{parentName:"p",href:"https://snaplist.org/"},"Snaplist")),(0,r.kt)("h4",{id:"testing-on-testnet"},"Testing on testnet"),(0,r.kt)("p",null,"To test on the testnet get some test ether from a ",(0,r.kt)("a",{parentName:"p",href:"https://faucets.chain.link/rinkeby"},"rinkeby faucet"),". The snap can be tested on our ",(0,r.kt)("a",{parentName:"p",href:"https://blockchain-lab-um.github.io/course-dapp/"},"Platform"),"."),(0,r.kt)("h4",{id:"running-ssi-snap-locally"},"Running SSI Snap locally"),(0,r.kt)("p",null,"Build and test locally"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,r.kt)("p",null,"Demo should open on localhost:8081"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"developer"},"Developer"),(0,r.kt)("h3",{id:"implementing-the-snap-in-a-dapp"},"Implementing the Snap in a dApp"),(0,r.kt)("p",null,"For snap to work, users will have to install it and connect to the dApp. Once user connects MetaMask to the dApp, dApp can request a list of installed snaps. If SSI Snap is not installed user can be requested to install it ."),(0,r.kt)("p",null,"We developed a simple library called ",(0,r.kt)("a",{parentName:"p",href:"plugins/ssi-snap-connector"},"SSI Snap Connector")," to make interacting with SSI Snap easy. SSI Snap Connector comes with a function that checks if installed MetaMask supports Snaps, if SSI Snap is installed and with an API for interacting with the Snap."),(0,r.kt)("p",null,"To ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," the SSI Snap:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE:")," ",(0,r.kt)("em",{parentName:"p"},"Snap can also be installed using a 3rd party Platform such as our ",(0,r.kt)("a",{parentName:"em",href:"https://blockchain-lab-um.github.io/course-dapp/"},"Platform")," or ",(0,r.kt)("a",{parentName:"em",href:"https://snaplist.org/"},"Snaplist"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @blockchain-lab-um/ssi-snap-connector")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enableSSISnap")," is a function used to install the SSI Snap."),(0,r.kt)("p",null,"After snap installation, this function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"MetamaskSSISnap")," object that can be used to retrieve snap API.\nAn example of initializing SSI snap and invoking snap API is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// install snap and fetch API\nconst metamaskSSISnap = await enableSSISnap();\nconst api = metamaskSSISnap.getSSISnapApi();\n\n// invoke API\nconst vcs = await api.getVCs();\n\nconsole.log("list of VCs:", vcs);\n')),(0,r.kt)("p",null,"More detailed documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"SSISnapConnector")," can be found ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"plugins/ssi-snap-connector"},"here")),"."),(0,r.kt)("h3",{id:"working-with-vcs"},"Working with VCs"),(0,r.kt)("p",null,"It is up to the dApp to issue VCs and/or request VPs/VCs and verify their validity (scheme, subject, controller, content, etc.). We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://veramo.io/"},"Veramo Framework"),". For implementation references take a look at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blockchain-lab-um/course-dapp"},"dApp")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blockchain-lab-um/course-backend"},"backend")," code."))}u.isMDXComponent=!0}}]);