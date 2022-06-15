---
sidebar_position: 4
---

# veramo-vc-manager (Veramo)

### Introduction

Veramo does not provide similar support for managing VCs like it does for DIDs and KeyPairs. **Veramo VC Manager** is a custom plugin for managing VCs with the Veramo client. It works very similarly to [DIDManager](https://github.com/uport-project/veramo/tree/next/packages/did-manager) and other Manager plugins built for Veramo. VCs stored using this plugin are stored in an array.

This plugin comes with an abstract class that can be extended in any form needed.

```js
export abstract class AbstractVCStore {
  abstract import(args: VerifiableCredential): Promise<boolean>
  abstract get(args: { id: number }): Promise<VerifiableCredential | null>
  abstract delete(args: { id: number }): Promise<boolean>
  abstract list(): Promise<VerifiableCredential[]>
}
```

This abstract class enabled [`SnapVCStore`](../ssi-snap/architecture.md) plugin, which stores the array of VCs in MetaMask State.

### How to use

#### Veramo Agent Setup

Add the plugin to the Veramo agent setup.

```js
export const agent = createAgent<
    ...
    IVCManager &
    ...
>({
  plugins: [
    ...
    new VCManager({ store: new MemoryVCStore() }),
    ...
  ],
});
```

#### veramo-vc-manager Functions

Get a specific VC

`agent.getVC({id: vc_id})`

Save a VC

`agent.saveVC({vc: vc})`

Delete a VC

`agent.deleteVC({id: vc_id})`

Get an array of all VCs

`agent.listVCS()`

**[GitHub](https://github.com/blockchain-lab-um/veramo-vc-manager) |
[npm](https://www.npmjs.com/package/@blockchain-lab-um/veramo-vc-manager)**
