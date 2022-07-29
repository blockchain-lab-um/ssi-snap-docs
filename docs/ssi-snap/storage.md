---
sidebar_position: 5
---

# Storage

SSI Snap utilizes MetaMask's state to store data. SSI Snap is designed in a way that it does not affect state used by other Snaps. It only modifies the **SSISnapState** object.

In the SSISnapState object, data for every MetaMask account is stored in property, named after the said MetaMask account. Inside this property Keypairs, DIDs and VCs are stored.

Data-store plugins, used by Veramo Client and Manager plugins, modify the state.

- KeyStoreManager manages data in **snapKeyStore**.
- PrivateKeyManager manages data in **snapPrivateKeyStore**.
- DIDManager manages data in **identifiers**.
- VCManager manages data in **vcs**.

There is also an object that stores configuration, called **SSISnapConfig**. Inside this object user-set settings are stored, such as Infura token, where VCs are stored (currently only Snap is supported), etc.

Structure of the state stored in MetaMask:

```js
{
  ...
  objectCreatedByOtherSnaps...,
  SSISnapState:
    {
      config:
      {
        store: "SNAP",
        infuraToken: ...,
        ...,
      }
      0xBea807A8...e59D:
        {
          snapKeyStore: Record<string, IKey>,
          snapPrivateKeyStore: Record<string, IKey>,
          identifiers: Record<string, IIdentifier>,
          vcs: VerifiableCredential[]
        },
      0x8Db2a08D...caD7:
        {
          snapKeyStore: Record<string, IKey>,
          snapPrivateKeyStore: Record<string, IKey>,
          identifiers: Record<string, IIdentifier>,
          vcs: VerifiableCredential[]
        },
      ...,
    },
}
```
