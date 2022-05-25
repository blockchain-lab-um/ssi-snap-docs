---
sidebar_position: 7
---

# Implement SSI Snap in a dApp

For snap to work, users will have to install it and connect to the dApp. Once user connects MetaMask to the dApp, dApp can request a list of installed snaps. If SSI Snap is not installed you can request user to install it. This can be done with the following code, or by asking users to install it using a 3rd party Platform such as our [Platform](https://blockchain-lab-um.github.io/course-dapp/) or [Snaplist](https://snaplist.org/).

```
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

Once Snap is installed VCs can be saved in the MetaMask state. VCs must adhere to W3C Verifiable Credentials Recommendation. Invalid format might lead to failure when generating VPs.

```
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

To get an array of VCs stored in MetaMask (Will only return VCs of the connected account).

```
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

To generate a VP you need id of a VC (from array). It's highly recommended to use domain and challenge as well. When generating VP for the first time, users will be asked to generate a delegate for their MetaMask account (This will cost a small tx fee). This is needed for Snap to work properly! More in later sections.

```
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
