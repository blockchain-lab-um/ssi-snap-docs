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

## Digital Signatures

Digital signatures apply to both VCs and VPs, but in most cases, they are signed by different actors in the SSI lifecycle. Thus we can approach them in a slightly different way.

### Verifiable Credentials (VCs)

At the moment, SSI Snap supports only storing of VCs. They can contain different proof types, such as JSON-LD and JWT. There are also no limitations to signature algorithms since VCs are often signed on the backend systems of the issuers, where any software library can be used. Several algorithms and cryptographic primitives are supported, such as secp256k and Ed25519.

### Verifiable Presentations (VPs)

On the other hand, VPs are signed by holders using their wallets, which is the role of SSI Snap. MetaMask cryptographic and signing capabilities are used for digitally signing VPs; thus, digital signatures are limited to cryptographic primitives and formats supported in the Ethereum ecosystem. Therefore VPs contain signatures in type [Ethereum EIP712 Signature 2021](https://w3c-ccg.github.io/ethereum-eip712-signature-2021-spec/).

## SSI Framework

To make DIDs functional a framework is needed. SSI Snap uses **[Veramo framework](https://veramo.io/)** inside the SSI Snap to handle most work related to DIDs, VCs, and VPs. Veramo is a performant and modular API for Verifiable Data and SSI. Essentially it's a client that allows the creation and management of DIDs, VCs, and VPs and makes developers' lives working with them much easier.

## Data Storage

These DIDs and VCs need to be stored somewhere. By default, SSI Snap stores all data in the MetaMask State. More about this in the [State](/docs/ssi-snap/storage) section.

In the future other ways of storing data will be implemented, starting with storing data in the cloud. Storing data outside MetaMask brings many benefits such as ability to sync multiple applications and ability to make external backups.

## Security

To maintain as much security as possible, private keys from existing MetaMask accounts are never exposed to SSI Snap. EIP712 Signature is used to sign credentials.

Additionally, all MetaMask state is encrypted!
