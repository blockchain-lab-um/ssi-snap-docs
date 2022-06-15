---
sidebar_position: 2
---

# Design

**The SSI Snap is a MetaMask Snap, that can handle DIDs, securely store VCs, and create the VPs. It is designed to be blockchain-agnostic.
**

## DID Method

When working with DIDs, there are various DID methods to choose from. One of the most popular methods is called **did:ethr**. This method uses Ethereum addresses as fully self-managed DIDs. In other words, every Ethereum account is a DID. An example of Ethereum address as a DID;

```js
did:ethr:0x9907a0cf64ec9fbf6ed8fd4971090de88222a9ac
```

Ethereum accounts in MetaMask, used daily by millions, are essentially DIDs. What is missing is the functionality to use them and leverage their potential correctly.

You might ask yourselves why we have decided to build a proof of concept on Ethereum. There are a couple of reasons:

- Aside from Bitcoin, it's the most decentralized blockchain,
- It's the most popular and most commonly used blockchain,
- Huge developer community with plenty of already established frameworks, including various SSI & DID frameworks and battle-tested did:ethr method,
- DID Documents do not need to be changed often (or even never in some cases); hence gas fees do not present such a huge problem

## SSI Framework

To make DIDs functional a framework is needed. SSI Snap uses **[Veramo framework](https://veramo.io/)** inside the SSI Snap to handle most work related to DIDs, VCs, and VPs. Veramo is a performant and modular API for Verifiable Data and SSI. Essentially it's a client that allows the creation and management of DIDs, VCs, and VPs and makes developers' lives working with them much easier.

## Data Storage

These DIDs and VCs need to be stored somewhere. By default, SSI Snap stores all data in the MetaMask State. More about this in the [State](/docs/ssi-snap/storage) section.

In the future other ways of storing data will be implemented, starting with storing data in the cloud. Storing data outside MetaMask brings many benefits such as ability to sync multiple applications and ability to make external backups.

## Security

To maintain as much security as possible, private keys from existing MetaMask accounts are never exposed to SSI Snap. Instead, an additional DID is created and is used exclusively for generating VPs. Private keys are needed for digitally signing VPs with Veramo, since core MetaMask RPC methods do not offer a way to sign them properly.

**Essentially, this means that a separate DID is generated for every MetaMask account that wants to store and manage VCs. This DID lives in the MetaMask state and is only used for generating VPs.**

A DID can only use VCs it owns, and since VCs are issued to a MetaMask account DID, the newly generated DID can't use them. To make things right, the new DID needs to get authorized to use VCs. Thus, the DID has to be registered as a delegate to the DID document of a MetaMask's account.

Currently, this step needs to be taken care of by Apps. In the future we'll implement a way to handle this in the SSI Snap.
