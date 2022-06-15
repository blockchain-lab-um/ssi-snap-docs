---
sidebar_position: 7
---

# How to use it?

The **SSI Snap** is a MetaMask Snap, that can handle **DIDs**, securely store **VCs**, create **VPs** and is designed to be blockchain-agnostic.

## Implementing the Snap in a dApp

For snap to work, users will have to install it and connect to the dApp. Once user connects MetaMask to the dApp, dApp can request a list of installed snaps. If SSI Snap is not installed user can be requested to install it.

To `install` the SSI Snap:

_NOTE:_ _Snap can also be installed using a 3rd party Platform such as our [Platform](https://blockchain-lab-um.github.io/course-dapp/) or [Snaplist](https://snaplist.org/), or our [Configuration Page](../config)._

```js
const response = await window.ethereum.request({
        method: 'wallet_enable',
        params: [
          {
            wallet_snap: { ['npm:@blockchain-lab-um/ssi-snap']: { version: 'latest' } },
          },
        ],
    });
if (response) {
    //Snap installed successfully
}
```

This code will install the latest version of the SSI snap. You can also use any other version you want.

Once Snap is installed, VCs can be saved in the MetaMask state. VCs must adhere to the W3C Verifiable Credentials Recommendation. Invalid format might lead to failure when generating VPs.

### SSI Snap RPC methods

To use the SSI Snap, dApps must interact with its RPC methods.

#### saveVC

---

`saveVC` is used to save a VC in the state of the currently selected MetaMask account. Additional parameter `VC` is required. VCs must adhere to the W3C Verifiable Credentials Recommendation. Invalid format might lead to failure when generating VPs. We recommend using Veramo to generate VCs with this [interface](https://veramo.io/docs/api/core.verifiablecredential).

_NOTE:_ _a VC will be stored under currently connected account._

```js
const response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [
          snapId,
          {
            method: 'saveVC',
            params: [VC],
          },
        ],
    });
if(response.data){
    //VC saved successfully
}
else console.log(response.error)
```

#### getVCs

---

`getVCs` is used to get a list of VCs from the state of the currently selected MetaMask account.

_NOTE: Currently, the only way to select a VC, for which you want to generate a VP, is through the dApp. This will change once MetaMask allows Snaps to implement custom UI elements and enable VC selection directly in MetaMask_

_NOTE 2:_ _This will retrieve a list of VCs stored under currently connected account._

```js
const response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [
          snapId,
          {
            method: 'getVCs',
          },
        ],
    })
if(response.data){
    //response.data.map((vc) => console.log(vc))
}
else console.log(response.error)

```

#### getVP

---

`getVP` is used to get a VP for a specific VC. Parameter `VC_ID` is needed. `VC_ID` represents the id of a VC from the array returned by the `getVCs` method! SSI Snap supports generating VPs using domain and challenge. It is recommended to use domain and challenge when generating and verifying VPs. To do so use additional parameters `domain` and `challenge`, however they are not required!

_NOTE:_ _When generating VP for the first time, users will be asked to generate a delegate for their MetaMask account (This will cost a small tx fee). This is needed for Snap to work properly! More in later sections._

_NOTE 2: Currently, VPs can only contain a single VC. This will be changed in upcoming versions._

```js
const response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [
          snapId,
          {
            method: 'getVP',
            params: [vp_id, domain, challenge],
          },
        ],
    });
if(response.data){
    //console.log(response.data))
}
else console.log(response.error)
```

### Working with VCs

It is up to the dApp to issue VCs and/or request VPs/VCs and verify their validity (scheme, subject, controller, content, etc.). We recommend using the [Veramo Framework](https://veramo.io/).
