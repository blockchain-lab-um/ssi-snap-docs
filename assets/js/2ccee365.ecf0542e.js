"use strict";(self.webpackChunk_blockchain_lab_um_ssi_snap_docs=self.webpackChunk_blockchain_lab_um_ssi_snap_docs||[]).push([[442],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8427),a=(r(2784),r(876));const i={sidebar_position:2},o="Verifiable Credentials (VC)",s={unversionedId:"ssi/vc",id:"ssi/vc",title:"Verifiable Credentials (VC)",description:"Verifiable Credentials (W3C Verifiable Credentials), or VCs for short, are an open standard for digital, cryptographically verifiable credentials. They can be stored on digital devices, are digitally signed and can be verified cryptographically, which makes them tamper-proof. VCs work well with data privacy, which goes well with data regulations pushed by the European Union (GDPR) and some other countries.",source:"@site/docs/ssi/vc.md",sourceDirName:"ssi",slug:"/ssi/vc",permalink:"/ssi-snap-docs/docs/ssi/vc",draft:!1,editUrl:"https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/docs/ssi/vc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Decentralized Identifiers (DID)",permalink:"/ssi-snap-docs/docs/ssi/did"},next:{title:"Verifiable Presentations (VP)",permalink:"/ssi-snap-docs/docs/ssi/vp"}},l={},c=[{value:"Use cases for VCs",id:"use-cases-for-vcs",level:2},{value:"Structure of a VC",id:"structure-of-a-vc",level:2},{value:"Type",id:"type",level:4},{value:"Identifier",id:"identifier",level:4},{value:"Issuer",id:"issuer",level:4},{value:"Credential Subject",id:"credential-subject",level:4},{value:"Cryptographic Proofs",id:"cryptographic-proofs",level:4},{value:"Proof Formats",id:"proof-formats",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifiable-credentials-vc"},"Verifiable Credentials (VC)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifiable Credentials")," (",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials"),"), or ",(0,a.kt)("strong",{parentName:"p"},"VCs")," for short, are an open standard for digital, cryptographically verifiable credentials. They can be stored on digital devices, are digitally signed and can be verified cryptographically, which makes them tamper-proof. VCs work well with data privacy, which goes well with data regulations pushed by the European Union (GDPR) and some other countries."),(0,a.kt)("p",null,"VCs bring many benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Instantly verifiable")," - They can be verified anywhere at any time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tamper-proof")," - Cryptography assures their authenticity and enables users to store and share data securely"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Independent from the issuer")," - Instant verifiability makes them independent from the issuer. They can get verified anywhere, without the need of the issuer (e.g. an university) to confirm the authenticity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VC holders have full control and ownership of their data and privacy")," - Users decide what gets shared and what doesn't"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Portable")," - Users can store VCs in their digital wallet (e.g. a mobile app) and use them anywhere")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/guqZBX9.png"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/wallet-rendering/#term:display-mapping-object"},"UI Example")," of a VC")),(0,a.kt)("h2",{id:"use-cases-for-vcs"},"Use cases for VCs"),(0,a.kt)("p",null,"VCs have many different use cases. The most notable ones are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ID Card"),(0,a.kt)("li",{parentName:"ul"},"Degree"),(0,a.kt)("li",{parentName:"ul"},"Employment credential"),(0,a.kt)("li",{parentName:"ul"},"Certificates"),(0,a.kt)("li",{parentName:"ul"},"Documents"),(0,a.kt)("li",{parentName:"ul"},"Licenses"),(0,a.kt)("li",{parentName:"ul"},"And much, much more.")),(0,a.kt)("p",null,"All the previously mentioned benefits make VCs the perfect solution for many problems. For example IDs, Documents, Licenses, etc. can be forged and dfficult to authenticate. Process of authentication is usually slow and prone to errors. Another issue is lack of control over data and lack of privacy. Another problem or risk is reliance on the issuer. If entity that provides credentials might not always be reachable and available (e.g. server failures, electricity outages, etc.) to authenticate credentials. All of mentioned issues/risks can be solved with VCs. This would affect many fields, ranging from Healthcare to Finance."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-use-cases/"},"Learn more...")),(0,a.kt)("h2",{id:"structure-of-a-vc"},"Structure of a VC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": ["https://www.w3.org/2018/credentials/v1"],\n  "type": ["VerifiableCredential", "UniversityDegree"],\n  "id": "feri:degree:17891",\n  "issuer": "did:web:feri.um.si",\n  "issuanceDate": "2022-11-20T15:11:22Z",\n  "credentialSubject": {\n    "id": "did:ethr:0x01:0x123",\n    "studentId": "1023213981",\n    "faculty": "FERI",\n    "module": "Computer Science",\n    "yearOfGraduation": "2022",\n    "averageScore": "8.91",\n    "name": "John Dough",\n    "dateOfBirth": "2001-12-12",\n    "placeOfBirth": "London",\n    "currentAddress": "Street of London 13",\n    "gender": "Male"\n  },\n  "proof": {\n    "type": "Ed25519Signature2020",\n    "created": "2022-11-20T15:11:22Z",\n    "proofPurpose": "assertionMethod",\n    "verificationMethod": "https://feri.um.si/verifyDegree/keys/1",\n    "proofValue": "bXN0IDI3JVV1aBUXfiwJJmZhe19TLTgxemI/P11yPGkvbXN0IDI3JVV1aBUXfiwJJmZhe19TLTgxemI/P11yPGkv"\n  }\n}\n')),(0,a.kt)("p",null,"VC consists of multiple important parts:"),(0,a.kt)("h4",{id:"type"},(0,a.kt)("a",{parentName:"h4",href:"https://www.w3.org/TR/vc-data-model/#types"},"Type")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "type": ["VerifiableCredential", "UniversityDegree"],\n  ...\n}\n')),(0,a.kt)("p",null,"Credential can have one or more types. Its types are defined in an array of strings. String ",(0,a.kt)("inlineCode",{parentName:"p"},"VerifiableCredential")," is mandatory. Use case can be detirmined based on types of a VC. In this particular example, the string ",(0,a.kt)("inlineCode",{parentName:"p"},"UniversityDegree")," tells us this VC serves as an Uni Degree and might be useful when applying for a job."),(0,a.kt)("h4",{id:"identifier"},(0,a.kt)("a",{parentName:"h4",href:"https://www.w3.org/TR/vc-data-model/#identifiers"},"Identifier")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "feri:degree:17891"\n}\n')),(0,a.kt)("p",null,"When expressing statements about a specific thing, such as a person, product, or organization, it is often useful to use some kind of identifier so that others can express statements about the same thing. The id property is intended to unambiguously refer to an object, such as a person, product, or organization."),(0,a.kt)("h4",{id:"issuer"},(0,a.kt)("a",{parentName:"h4",href:"https://www.w3.org/TR/vc-data-model/#issuer"},"Issuer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "issuer": "did:web:feri.um.si",\n  ...\n}\n')),(0,a.kt)("h4",{id:"credential-subject"},(0,a.kt)("a",{parentName:"h4",href:"https://www.w3.org/TR/vc-data-model/#credential-subject"},"Credential Subject")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "credentialSubject": {\n    "id": "did:ethr:0x01:0x123",\n    "degree": "Computer Science",\n    "yearOfGraduation": "2022",\n    "averageScore": "8.91",\n    "name": "John Dough",\n    "dateOfBirth": "2001-12-12",\n    "placeOfBirth": "London",\n    "currentAddress": "Street of London 13",\n    "gender": "Male",\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("p",null,"The entity (e.g. a person, object or company) the credential data is about. This object contains one or more properties that are related to the subject of VC. The subject identifier (",(0,a.kt)("inlineCode",{parentName:"p"},"credentialSubject.id"),") is usually a DID of the entity. In our example, ",(0,a.kt)("inlineCode",{parentName:"p"},"credentialSubject")," contanis relevant data (type of degre, year of graduation, score, etc.) for the University Degree of ",(0,a.kt)("inlineCode",{parentName:"p"},"John Dough"),"."),(0,a.kt)("h4",{id:"cryptographic-proofs"},(0,a.kt)("a",{parentName:"h4",href:"https://www.w3.org/TR/vc-data-model/#proofs-signatures"},"Cryptographic Proofs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "proof": {\n    "type": "Ed25519Signature2020",\n    "created": "2022-11-20T15:11:22Z",\n    "proofPurpose": "assertionMethod",\n    "verificationMethod": "https://feri.um.si/verifyDegree/keys/1",\n    "proofValue": "bXN0IDI3JVV1aBUXfiwJJmZhe19TLTgxemI/P11yPGkvbXN0IDI3JVV1aBUXfiwJJmZhe19TLTgxemI/P11yPGkv"\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"One or more cryptographic proofs can be used to detect tampering and verify the authorship of a credential."),(0,a.kt)("h2",{id:"proof-formats"},"Proof Formats"),(0,a.kt)("p",null,"VCs are interoperable and can use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://json-ld.org/"},"JSON-LD"))," (JSON for Linked Data). It is an extension of an already successful JSON format that provides a way to include object and data typing, JSON-LD keyword aliasing, creating links via nesting or referencing, and internationalization features (describes how to express data values in different languages). Another popular format for VCs is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.rfc-editor.org/rfc/rfc7519"},"JWT"))," (JSON Web Token), a standardized internet format for transferring data with digital signatures. Because of that, current tools often provide better support for JWTs."))}d.isMDXComponent=!0}}]);