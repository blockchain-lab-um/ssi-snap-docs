---
sidebar_position: 6
---

# RPC Methods

To use the SSI Snap, dApps must interact with its RPC methods.

---

`getDIDAddress` is used to get the newly generated DID for a MetaMask account. If this DID does not exist yet, it is generated. <i>This address is needed to add the newly generated DID as a delegate to the DID document of the currently selected MetaMask account. </i>

---

`saveVC` is used to save a VC in the state of the currently selected MetaMask account. Additional parameter `VC` is required.

---

`getVCs` is used to get a list of VCs from the state of the currently selected MetaMask account. <i> Currently, the only way to select a VC, for which you want to generate a VP, is through the dApp. This will change once MetaMask allows Snaps to implement custom UI elements and enable VC selection directly in MetaMask </i>

---

`getVP` is used to get a VP for a specific VC. Additional parameter `VC_ID` is needed.

### How to implement SSI Snap

1. dApp first calls the `getDIDAddress` RPC method to get a DID for the selected MetaMask account.
2. if dApp wants to issue a VC, it should call the `saveVC` RPC method with the VC provided as parameter.
3. if dApp wants to request a VP, it should call the `getVCs` RPC method, filter the needed VC and then call the `getVP` RPC method, with id of the selected VC provided, to request user to generate a VP for the selected VC. When calling `getVP` method snap will check if a valid delegate exists. If it doesnt, user will be requested to confirm a transaction to create one. Valid delegate is required for VPs to work!
