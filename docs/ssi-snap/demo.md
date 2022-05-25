---
sidebar_position: 8
---

# Demo

To showcase the workflow of the SSI Snap, we have developed a demo platform.

In this demo, a user will install and approve the SSI Snap, add a delegate to the DID Document of the selected MetaMask account, get and store a VC after completing a straightforward course and display the VC on the profile page.

Soon, we'll be expanding our demo with the Snapshot voting mechanism that only allows users who can provide a valid VP to vote on specific proposals, so make sure to stick around! :)

You can try the demo **[here](https://blockchain-lab-um.github.io/course-dapp/)**. You'll need to use **[MetaMask Flask](https://metamask.io/flask/)** (version >10.9.2).

To follow this demo, you'll need some ETH on Rinkeby testnet. You can get some from the [ChainLink Rinkeby faucet](https://faucets.chain.link/rinkeby).

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
