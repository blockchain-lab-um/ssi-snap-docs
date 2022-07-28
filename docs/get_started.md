---
sidebar_position: 2
---

# Getting Started

The **SSI Snap** is a MetaMask Snap, that can handle **DIDs**, securely store **VCs**, create **VPs** and is designed to be blockchain-agnostic.

---

## User

### Using the Snap

In order to install and test the Snap, you will need to install [MetaMask Flask](https://metamask.io/flask/). For full functionality, creating a delegate is required, which costs some gas, hence some ether is required!

You can install the Snap in [Configuration Page](config) or by simply connecting to our [Platform](https://blockchain-lab-um.github.io/course-dapp/) or select it from the [Snaplist](https://snaplist.org/)

#### Testing on testnet

To test on the testnet get some test ether from a [rinkeby faucet](https://faucets.chain.link/rinkeby). The snap can be tested on our [Platform](https://blockchain-lab-um.github.io/course-dapp/).

---

## Developer

### Implementing the Snap in a dApp

For snap to work, users will have to install it and connect to the dApp. Once user connects MetaMask to the dApp, dApp can request a list of installed snaps. If SSI Snap is not installed user can be requested to install it .

To `install` the SSI Snap:

_NOTE:_ _Snap can also be installed using a 3rd party Platform such as our [Platform](https://blockchain-lab-um.github.io/course-dapp/) or [Snaplist](https://snaplist.org/)._

```js
const response = await window.ethereum.request({
  method: "wallet_enable",
  params: [
    {
      wallet_snap: {
        ["npm:@blockchain-lab-um/ssi-snap"]: { version: "latest" },
      },
    },
  ],
});
if (response) {
  //Snap installed successfully
}
```

Once Snap is installed, VCs can be saved in the MetaMask state. VCs must adhere to the W3C Verifiable Credentials Recommendation. Invalid format might lead to failure when generating VPs.

`Save a VC` in MetaMask state:

_NOTE:_ _a VC will be stored under currently connected account._

```js
const response = await window.ethereum.request({
  method: "wallet_invokeSnap",
  params: [
    snapId,
    {
      method: "saveVC",
      params: [VC],
    },
  ],
});
if (response.data) {
  //VC saved successfully
} else console.log(response.error);
```

To `get an array of VCs` stored in MetaMask:

_NOTE:_ _This will retrieve a list of VCs stored under currently connected account._

```js
const response = await window.ethereum.request({
  method: "wallet_invokeSnap",
  params: [
    snapId,
    {
      method: "getVCs",
    },
  ],
});
if (response.data) {
  //response.data.map((vc) => console.log(vc))
} else console.log(response.error);
```

To `generate a VP` you need `id` of a VC (from array). It's highly recommended to use `domain` and `challenge` as well:

_NOTE:_ _When generating VP for the first time, users will be asked to generate a delegate for their MetaMask account (This will cost a small tx fee). This is needed for Snap to work properly! More in later sections._

```js
const response = await window.ethereum.request({
  method: "wallet_invokeSnap",
  params: [
    snapId,
    {
      method: "getVP",
      params: [vp_id, domain, challenge],
    },
  ],
});
if (response.data) {
  //console.log(response.data))
} else console.log(response.error);
```

### Working with VCs

It is up to the dApp to issue VCs and/or request VPs/VCs and verify their validity (scheme, subject, controller, content, etc.). We recommend using [Veramo Framework](https://veramo.io/).
