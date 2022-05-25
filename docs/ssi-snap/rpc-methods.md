---
sidebar_position: 6
---

# RPC Methods

To use the SSI Snap, dApps must interact with its RPC methods.

---

`saveVC` is used to save a VC in the state of the currently selected MetaMask account. Additional parameter `VC` is required.

---

`getVCs` is used to get a list of VCs from the state of the currently selected MetaMask account. <i> Currently, the only way to select a VC, for which you want to generate a VP, is through the dApp. This will change once MetaMask allows Snaps to implement custom UI elements and enable VC selection directly in MetaMask </i>

---

`getVP` is used to get a VP for a specific VC. Parameter `VC_ID` is needed. SSI Snap supports generating VPs using domain and challenge. It is recommended to use domain and challenge when generating and verifying VPs. To do so use additional parameters `domain` and `challenge`.
