---
slug: SSI using MetaMask Snaps, Part 1/3
title: SSI using MetaMask Snaps, Part 1
authors:
  name: Blockchain Lab:UM
  title: Blockchain Lab:UM Team
  url: https://github.com/blockchain-lab-um
  image_url: https://avatars.githubusercontent.com/u/47517974?s=200&v=4
tags:
  [
    ssi,
    metamask,
    dao,
    snapshot,
    verifiable credentials,
    verifiable presentations,
  ]
---

## Decision-making in DAOs (or any type of organization) should be done by knowledgeable members

Decentralized autonomous organizations (DAOs) are slowly emerging as a new structure without a typical organizational hierarchy. Since the DAOs are running on open and transparent blockchain networks, the barrier to joining and contributing to an organization (and being paid for the work) is more accessible than in a typical setting in the real world. While the mentioned structure provides many new opportunities and advantages, it comes with several problems. One of the problems is the so-called Plutocracy Problem, described by [Serto](https://serto.medium.com/the-dao-plutocracy-problem-a8841546a0f2) and Vitalik Buterin [here](https://vitalik.ca/general/2022/01/26/soulbound.html) and [here](https://vitalik.ca/general/2021/08/16/voting3.html). This problem affects tokens-based (ERC20, ERC721, or ERC1155) DAOs, which are currently the dominant form of DAOs, by a wide margin.

In a plutocracy, the wealthiest members of the organization/society are the people with the most power and influence, regardless of their expertise on the given topic. Adding to that, most proposals are decided by only a few members who control the majority of tokens.

<center>
    <img src="https://i.imgur.com/h05K2Ax.png" alt="The Graph Proposal" /> <br />
    Figure 1: Proposal for The Graph on <b><a href="https://snapshot.org/#/">Snapshot</a></b>
</center>
<br />
Therefore, most token-based DAOs are not decentralized and give their holders a false sense of security, leading them to believe that they hold any weight in the decision-making process. The problem lies in the possibility of obtaining and transferring the reputation that represents your worth in the DAO. The plutocracy problem can never be solved if the reputation can be bought. Suppose we want to make DAOs more aligned with the web3 ethos and strive for the meritocracy, where the power of members is determined based on their skills. In that case, different ways to represent reputation must be implemented.

## What would meritocracy look like in DAO?

Imagine a made-up metaverse DAO. There are several decisions that the community can make: changes in the smart contracts, connecting and creating new partnerships, designing new worlds, creating new graphical content for the project, etc. Who should be able to vote on the changes in a smart contract code, and who on the future of marketing? The former should be decided by the proficient developers in Solidity, while the latter by the digital marketing experts. The question is, how to confirm the potential voter's specific skills?

## Reputation should be hard to obtain and non-transferable

Reputation should be gained through experience, achievements, and other successful contributions to some cause (e.g., DAO). This could be anything from completing a quest on Rabbithole, committing new code to a project, or being active in the DAO communities. A credible third party should then give a reputation to the contributor in the form of proof of contribution. It's only natural to do that in a digital, cryptographically verifiable, and tamper-proof way. And the best way to do that in a structural and reusable way is to use **DIDs**, **VCs**, and **VPs** (by W3C), which form the term: **Self-Sovereign Identity (SSI)**.

## Self-Sovereign Identity

There are three main components to a digital self-sovereign identity: DIDs, VCs, and VPs.

**Decentralized Identifiers** ([W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/)), or **DIDs** in short, are the new type of unique and persistent identifiers (URI) that enable verifiable and decentralized identity. They are entirely controlled by the identity owner and are independent of centralized authorities. Each individual can create as many DIDs as they wish and use each in different contexts to prevent data correlation.

**DID Document** forms the root record for a DID and is a set of data that describes a DID, including mechanisms, such as public keys and pseudonymous biometrics, that an entity can use to authenticate itself as the DID. While a public key can be obtained from the DID document by anyone, a private key used for proofs and digital signatures is safely stored in the user's wallet. DID Document may also include other attributes or claims describing the entity, such as service endpoint, delegates, etc. These documents are often expressed using JSON-LD.

DIDs are verifiable; their data usually lives on a **trusted data registry** (typically a blockchain) and can be accessed by anybody. There are multiple **methods** for storing and resolving DIDs. For example, the method ETHR uses a Smart Contract on Ethereum to store the DID data. Similarily to blockchain addresses, DIDs are pseudonymous; however, they offer additional capabilities such as key rotation, delegation, and a way to link a service endpoint (social media account, etc.) to the identity.

DID is a simple line of text, consisting of three parts:

- `did` URI scheme identifier
- the identifier for the DID Method
- the unique identifier

<center>
    
<img src="https://www.w3.org/TR/did-core/diagrams/parts-of-a-did.svg" alt="DID" /><br />
    Figure 2: An example of a DID (<a href="https://www.w3.org/TR/did-core/diagrams/parts-of-a-did.svg">image source</a>)

</center>

However, DIDs are not enough to represent our entire identities as they merely provide a "basket" for them. This basket must be filled with all kinds of data, usually presented in the form of credentials in the real world. Credentials are ubiquitous in our daily lives; they take the forms of passports, various licenses, and certificates, ownerships of bank accounts, and much more. The problem with credentials is that until recently, there had been no standard ways of representing them organized online.

**Verifiable Credentials** ([W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/)), or **VCs** for short, are an open standard for digital credentials to solve this issue. They are digitally signed and can be verified cryptographically, which makes them tamper-proof. VCs work well with data privacy, which goes well with data regulations pushed by the European Union (GDPR) and some other countries.

VCs are interoperable and can use **[JSON-LD](https://json-ld.org/)**; a lightweight Linked Data format. It is an extension of an already successful JSON format that provides a way to include object and data typing, JSON-LD keyword aliasing, creating links via nesting or referencing, and internationalization features (describes how to express data values in different languages). Another format for VCs is **[JWT](https://www.rfc-editor.org/rfc/rfc7519)** (JSON Web Token); popular internet format for transferring data with digital signatures. Because of that, current SSI tools often provide better support for JWTs.

**Verifiable Presentation**, or **VP** for short, expresses data from one or more VCs and is packaged so that the authorship of the data is verifiable. The data in a VP, which is often about the same subject, could have been issued by multiple issuers. Let's say you're required to prove your University degree, past employment, and date of birth. Each of these credentials is issued by a different entity, and the owner can combine them to create a single VP.

There is a lot of ongoing work on further enhancing data privacy when presenting VCs. This can be done with **Selective Disclosure** and **Zero-Knowledge Proofs** (ZKP). Selective disclosure enables generating proofs from **only a few attributes** of a credential. Using ZKPs, one could prove the necessary condition for the attribute **without revealing the actual value**. In practice, this means one could prove that they are above the age of 18 without showing their ID card, and third parties would instantly be able to verify that data.

![](https://www.w3.org/TR/vc-data-model/diagrams/zkp-cred-pres.svg)

<center>
  Figure 3: Visual example of the relationship between Verifiable Credentials
  and Derived Credentials in a ZKP Presentation (
  <a href="https://www.w3.org/TR/vc-data-model/diagrams/zkp-cred-pres.svg">
    image source
  </a>
  )
</center>

<br />

Now that we have a base understanding of the individual SSI components, we can look at how they work together.

### VC Trust Model

SSI completely changes the paradigm of online data sharing and brings it closer to the physical world. There are three entities in the **VC trust model:**

- **Issuer** that issues the credential
- **Holder** that is the owner and subject of the credential
- **Verifier** that receives and verifies the credential

<center>

![VC Workflow](https://i.imgur.com/YjGAqsE.png) Figure 4: VC Workflow

</center>

As seen in the image above, the issuer is the entity that issues VC to the holder whom the VC is about. The holder then presents the VC to the verifier, who verifies the validity of the VC and checks if it meets the established criteria.

For example, a government issues an ID card in the form of a VC to Alice. Alice is the holder of the VC. Alice wants to buy alcohol at the local convenience store. Alice has to prove that she is 18+ and does so by presenting a VP, which she generates using her VC. The convenience store then verifies if Alices VC is valid and if she is indeed older than 18.

How can the convenience store verify the validity of the VC? It's simple. When the government issues a VC, they attach and sign the credential with their **Public DID**. The same Public DID is also registered on a blockchain. When the convenience store wants to verify the authenticity and validity of the VC and its proof, they can check the DID and its associated public key on the blockchain to see who issued it without contacting the issuing entity. DIDs enable VCs to be **verified anywhere, at any time**.

## Sounds great! But, how can we use VCs?

Unfortunately, there is no easy way to use and manage VCs. More or less, all current solutions require users to install an additional mobile application or use a specific yet another platform. These solutions are called SSI wallets and agents, e.g., Hyperleger Aries, Serto ... But this is a significant flaw in the user experience. Needing to use a different application or service might be a burden for most users who haven't come to grips with the most basic web3 applications and wallets. The question arises, is it possible to add support for DIDs and VCs to a massively adopted and easy-to-use wallet?

### MetaMask Snaps

The answer is... **YES**. The most popular wallet, **[MetaMask](https://metamask.io/)**, introduced **[Snaps](https://docs.metamask.io/guide/snaps.html)**, which makes building plugins for additional functionality possible. MetaMask is a crypto wallet and gateway to blockchain apps, providing a simple interface for users to interact with EVM-based blockchains, sign and send transactions, etc. Snaps make a wide specter of new applications possible. They can enable support for previously unsupported chains like Polkadot, Solana, Bitcoin, etc. They allow dApps to modify MetaMask's state to store and retrieve data, like VCs. They also enable access to the web and the possibility to leverage practically any API and much more. New functionality is only limited by the creativity of developers. Here is a [list](https://github.com/piotr-roslaniec/awesome-metamask-snaps) of already developed Snaps!

Technically speaking, MetaMask Snaps is a system that allows anyone to expand the capabilities of MetaMask safely. It is a JavaScript program that runs in an isolated, sandboxed environment inside the MetaMask. In addition to the existing MetaMask RPC methods, Snaps can create new RPC methods for websites to call. Unfortunately, that is the only way to interact with the Snaps, as modifying MetaMask UI is not possible (at least at the moment.)

Snaps are currently only supported in the [MetaMask Flask](https://metamask.io/flask/), a separate desktop browser extension for developers. But it is expected that the Snap system will be integrated into the main MetaMask in the future. For more information about Snaps, check their [documentation](https://docs.metamask.io/guide/snaps.html).

### SSI Snap Design

There are various DID methods. One of the most popular methods is called **did:ethr**. This method uses Ethereum addresses as fully self-managed DIDs. In other words, every Ethereum account is a DID (_DIDs are Ethereum addresses with a "did:ethr:network:" prefix_). Ethereum accounts in MetaMask, used daily by millions, are essentially DIDs. What is missing is the functionality to use them and leverage their potential correctly.

## We've implemented the SSI Snap. The SSI Snap can handle DIDs, securely store VCs, and create the VPs. It is designed to be blockchain-agnostic.

Here is a simple workflow of the SSI Snap; a VC service provider issues a VC to a selected MetaMask account. This VC is stored in the MetaMask wallet using the SSI Snap RPC methods. When needed, the VC can be used to generate the required VP.

Our **demo** will use SSI Snap to store Solidity Course Completion VC, proving that the user controlling the MetaMask account has completed a Solidity course and is qualified to vote on Snapshot governance proposals. For those unfamiliar with **[Snapshot](https://snapshot.org/#/)**; it plays a vital role in the decentralized world. Snapshot is a decentralized voting platform that provides flexibility and supports various voting mechanisms. It is also user-friendly and does not cost gas, as the voting process is done off-chain.

### How does the SSI Snap work?

Let's get a bit more technical.

We decided to use **[Veramo framework](https://veramo.io/)** inside the SSI Snap to handle most work related to DIDs, VCs, and VPs. Veramo is a performant and modular API for Verifiable Data and SSI. Essentially it's a client that allows the creation and management of DIDs, VCs, and VPs and makes developers' lives working with them much easier.

![SSI Snap Architecture](https://i.imgur.com/YiAnoly.png)

<center>Figure 5: Architecture of the SSI Snap</center>

Veramo takes care of pretty much everything. It is used to generate and store DIDs and additional keypairs. The team behind Veramo implemented plugins called DIDManager, KeyManager, and PrivateKeyManager to do precisely that. However, these plugins do not come with a way to store data inside the MetaMask State. Luckily, due to the extendable nature of these plugins, it made it easy for us to implement a [custom datastore plugin](https://www.npmjs.com/package/@blockchain-lab-um/veramo-vc-manager) that allows the Managers to store data inside the MetaMask State.

Veramo is also used to verify and store VCs and generate VPs. Unfortunately, Veramo does not have a VCManager plugin. Fortunately, their great documentation makes plugin development easy, which allowed us to develop the VCManager plugin with an additional datastore plugin to save VCs in the MetaMask state.

The ability to create additional datastore plugins is also great for future implementations. In the future, we plan to implement additional ways to store data, starting with storing everything (of course encrypted) in a cloud. This will make syncing with other MetaMask wallets possible. Having multiple ways of storing data and quickly changing between them will create a better user experience.

To maintain as much security as possible, we have decided not to expose private keys from existing MetaMask accounts but to create and use an additional DID (Ethereum account) exclusively for generating VPs. Private keys are needed for digitally signing VPs with Veramo, since core MetaMask RPC methods do not offer a way to sign them properly. Essentially, this means that a separate DID is generated for every MetaMask account that wants to store and manage VCs. This DID lives in the MetaMask state and is only used for generating VPs.

But this complicates things a little. A DID can only use its own VCs (you can't use somebody else's ID to travel), and since VCs are issued to a MetaMask account DID, the newly generated DID can't use them. To make things right, we need to authorize the new DID to use VCs explicitly. Thus, the DID has to be registered as a delegate to the DID document of a MetaMask's account. We hope this won't be necessary in the future as MetaMask is constantly updated with new features and tighter Snaps integrations are on the horizon.

You might ask yourselves why we have decided to build a proof of concept on Ethereum. There are a couple of reasons:

- Aside from Bitcoin, it's the most decentralized blockchain,
- It's the most popular and most commonly used blockchain,
- Huge developer community with plenty of already established frameworks, including various SSI & DID frameworks and battle-tested did:ethr method,
- DID Documents do not need to be changed often (or even never in some cases); hence gas fees do not present such a huge problem

To learn more about the SSI Snap, its architecture, and how to use it, visit our [GitHub repo](https://github.com/blockchain-lab-um/ssi-snap).

## Demo

To showcase the workflow of the SSI Snap, we have developed a demo platform.

In this demo, a user will install and approve the SSI Snap, add a delegate to the DID Document of the selected MetaMask account, get and store a VC after completing a straightforward course and display the VC on the profile page.

Soon, we'll be expanding our demo with the Snapshot voting mechanism that only allows users who can provide a valid VP to vote on specific proposals, so make sure to stick around! :)

You can try the demo [here](https://blockchain-lab-um.github.io/course-dapp/). You'll need to use **[MetaMask Flask](https://metamask.io/flask/)** (version >10.9.2).

To follow this demo, you'll need some ETH on Rinkeby testnet. You can get some from the [ChainLink Rinkeby faucet](https://faucets.chain.link/rinkeby).

### Course Platform

To start using the platform, the user needs to connect to the platform using the MetaMask. After the connection is established, the user gets a prompt to install and Connect to the SSI Snap. The user needs to give it specific permissions for the Snap to work. Besides the standard permissions, SSI Snap also needs permission to manage the MetaMask state. When the user has successfully installed the Snap and connected to the platform, they can start the Solidity course. First, the SSI Snap needs to initialize for the current account.

![Step 2](https://i.imgur.com/eObvjQ0.png)

Adding a delegate will cost the user some ETH, as it modifies the blockchain state. Reminder, this demo is designed to work on Rinkeby testnet.

![Step 4](https://i.imgur.com/GTZ2TRE.png)

Once the transaction is confirmed, a new delegate is added to the DID document. To make sure a new delegate has been added correctly, we can resolve the DID Document using the [Universal Resolver](https://dev.uniresolver.io/) (ff you want to try this yourself, make sure to use the prefix `did:ethr:rinkeby:` in front of your MetaMask address). You can see that the delegate has been added to the DID Document of the user's account.

![DID Document](https://i.imgur.com/OGfwue7.png)

The next step is to fill out the form and request the VC. We also use the Veramo in the platform's backend to generate a VC. The user will be prompted to save the VC in the MetaMask state. Currently, this is done in a non-standardized way, but we are looking into **[OpenID Connect standards for Verifiable Credential Issuance](https://openid.net/specs/openid-connect-4-verifiable-credential-issuance-1_0.html)**.

![Step 6](https://i.imgur.com/9g7GmGr.png)

A VC should appear under 'My VCs' on the profile page if everything goes well. This VC can then be used to create a VP when the user votes on the Snapshot platform.

![Step 8](https://i.imgur.com/iRndGb2.png)

To use the SSI Snap, dApps only need to implement a Connect MetaMask button and call our custom RPC methods. It's as simple as that!

## Next Steps

This was part 1 of the SSI using MetaMask Snaps trilogy. Part 2 will showcase how to use VCs on the Snapshot governance platform and vote on proposals using VPs. In part 3, we will open-source all components and provide an outlook on the future of SSI Snap.

Stay tuned!

**By Blockchain Lab:UM**
**[Website](https://blockchain-lab.um.si/?lang=en) | [LinkedIn](https://www.linkedin.com/company/blockchain-lab-um/) | [Twitter](https://twitter.com/blockchainlabum) | [Facebook](https://www.facebook.com/blockchainlabum/) | [GitHub](https://github.com/blockchain-lab-um) | [Email](mailto:blockchain-lab@um.si)**
