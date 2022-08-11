---
sidebar_position: 1
---

# SSI Snap Connector

SSI Snap connector is used to install SSI snap and expose API toward snap on dApps and other applications.

For more details on SSI Snap Connector itself see [ssi-snap-connector repo](https://github.com/blockchain-lab-um/ssi-snap-connector).

## Usage

### Install

`yarn add @blockchain-lab-um/ssi-snap-connector`

Connector has exposed function for installing the Snap.

```typescript
export async function enableSSISnap(
  snapOrigin?: string,
  snapInstallationParams: Record<SnapInstallationParamNames, unknown> = {}
): Promise<MetaMaskSSISnap>;
```

It is possible to override default SSI Snap origin and 'latest' version.

After snap installation, this function returns `MetamaskSSISnap` object that can be used to retrieve snap API.
An example of initializing SSI snap and invoking snap API is shown below.

```typescript
// install snap and fetch API
const snap = await enableSSISnap({ version: "latest" });
const api = await snap.getSSISnapApi();

// invoke API
const vcs = await api.getVCs();

console.log("list of VCs:", vcs);
```

## Connector methods:

```typescript
/**
 * Get a list of VCs stored in the SSI Snap under currently selected MetaMask account
 *
 * @param {VCQuerry} querry - Querry for filtering through all VCs
 * @return {Promise<Array<VerifiableCredential>>} list of VCs
 */
const vcs = await api.getVCs({ issuer: "did:0x04:0x123..." });

/**
 * Get a VP from a VC
 *
 * @param {string} vc_id - ID of VC used for generating a VP. Can be obtained with getVCs function
 * optional @param {string} challenge
 * optional @param {string} domain
 */
const vp = await api.getVP(vc_id);

/**
 * Save a VC in the SSI Snap under currently selected MetaMask account
 *
 * @param {VerifiableCredential} verifiableCredential - vc
 *
 */
const res = await api.saveVC(verifiableCredential);

/**
 * Toggle popups - enable/disable "Are you sure?" confirmation windows when retrieving VCs and generating VPs,...
 *
 */
const res = await api.togglePopups();

/**
 * Change infura token
 *
 * @param {string} infuraToken
 *
 */
const res = await api.changeInfuraToken(infuraToken);
```

_NOTE: VCQuerry is an object that is a subset of VerifiableCredential. If provided, the function will only return VCs that match the VCQuerry subset. For example if you only want to retrieve VCs issued by a specific DID to a specific subject you would need to use `agent.listVCS({querry: {issuer: {id: 'did:ethr:0x...'}, credentialSubject: {id: 'did:ethr:0x...'}}})`_

#### Utility methods

SSI Snap Connector also comes with additional utility methods such as `isSnapInstalled`, `isMetamaskSnapsSupported` and `hasMetamask`.
