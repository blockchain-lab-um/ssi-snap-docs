---
sidebar_position: 4
---

# Architecture

Veramo client powers the SSI Snap.

![SSI Snap Architecture](https://i.imgur.com/YiAnoly.png)

<center> Figure 1: SSI Snap Architecture </center>
<br />

## Veramo Client

Veramo Client is used to manage DIDs and VCs, using Veramos **DIDManager**, **KeyManager** and **PrivateKeyManager** plugins and our custom **[VCManager plugin](../plugins/vc-manager)**.

SSI Snap uses following Veramo Client configuration:

```
export const agent = createAgent<
  IDIDManager & IKeyManager & IDataStore & IResolver & IVCManager
>({
  plugins: [
    new KeyManager({
      store: new SnapKeyStore(),
      kms: {
        local: new KeyManagementSystem(new SnapPrivateKeyStore()),
      },
    }),
    new DIDManager({
      store: new SnapDIDStore(),
      defaultProvider: "did:ethr:rinkeby",
      providers: {
        "did:ethr:rinkeby": new EthrDIDProvider({
          defaultKms: "local",
          network: "rinkeby",
          rpcUrl: "https://rinkeby.infura.io/v3/" + INFURA_PROJECT_ID,
        }),
      },
    }),
    new VCManager({ store: new SnapVCStore() }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
      }),
    }),
  ],
});
```

**DIDManager**, **KeyManager**, **PrivateKeyManager** and **[VCManager](../plugins/vc-manager)** plugins take care of managing and storing data. They all come with an [abstract data-store class](https://github.com/blockchain-lab-um/veramo-vc-manager/blob/main/src/vc-store/abstract-vc-store.ts). Using said class, we implemented custom data-store plugins, that save data inside the MetaMask state.

Here is the code of **SnapVCStore** plugin, that extends one of the previously mentioned abstract classes;

```
export class SnapVCStore extends AbstractVCStore {
  async get(args: { id: number }): Promise<VerifiableCredential | null> {
    let ssiAccountState = await getVCAccount();
    if (args.id > ssiAccountState.vcs.length) return null;
    return ssiAccountState.vcs[args.id];
  }

  async delete({ id }: { id: number }) {
    return true;
  }

  async import(args: VerifiableCredential) {
    let ssiAccountState = await getVCAccount();
    ssiAccountState.vcs.push(args);
    await updateVCAccount(ssiAccountState);
    return true;
  }

  async list(): Promise<VerifiableCredential[]> {
    let ssiAccountState = await getVCAccount();
    return ssiAccountState.vcs;
  }
}
```

These abstract classes make implementing different ways of storing data easy.

In the future, users will get to choose between different DataStore plugins (cloud, other apps, etc.).

**If you're interested in how VCs and VPs are generated and how Veramo and its plugins work visit their [documentation](https://veramo.io/docs/basics/introduction)!**
