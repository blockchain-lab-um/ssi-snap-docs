---
sidebar_position: 2
---

# Design

**The SSI Snap is a MetaMask Snap, that can handle DIDs, securely store VCs, and create the VPs. It is designed to be blockchain-agnostic.
**

## DID Method

When working with DIDs, there are various DID methods to choose from. One of the most popular methods is called **did:ethr**. This method uses Ethereum addresses as fully self-managed DIDs. In other words, every Ethereum account is a DID. An example of Ethereum address as a DID;

```js
did: ethr: 0x9907a0cf64ec9fbf6ed8fd4971090de88222a9ac;
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

To maintain as much security as possible, private keys from existing MetaMask accounts are never exposed to SSI Snap. EIP712 Signature is used to sign credentials.

Additionally, all MetaMask state is encrypted!
