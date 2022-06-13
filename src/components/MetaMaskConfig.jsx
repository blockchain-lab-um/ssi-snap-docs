import React, { useState } from "react";

export default function MetaMaskConfig() {
  const [mmAddress, setMmAddress] = useState(null);
  const [snapInstalled, setSnapInstalled] = useState(false);

  const connectMetamask = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log("Setting MM address!", result);
          setMmAddress(result[0]);
        });
      console.log("Checking for snap...");
    } else {
      console.log("Install Metamask");
    }
    return;
  };

  async function getWalletSnaps() {
    return await window.ethereum.request({
      method: "wallet_getSnaps",
    });
  }

  async function isSnapInstalled(snapOrigin, version) {
    console.log(await getWalletSnaps());
    try {
      return !!Object.values(await getWalletSnaps()).find(
        (permission) =>
          permission.id === snapOrigin &&
          (!version || permission.version === version)
      );
    } catch (e) {
      console.log("Failed to obtain installed snaps", e);
      return false;
    }
  }

  const installSnap = async () => {
    // if (isSnapInstalled("npm:@blockchain-lab-um/ssi-snap")) {
    //   console.log("Snap already installed");
    //   return true;
    // }
    const res = await window.ethereum.request({
      method: "wallet_enable",
      params: [
        {
          wallet_snap: {
            ["npm:@blockchain-lab-um/ssi-snap"]: { version: "latest" },
          },
        },
      ],
    });
    if (res) {
      const snap = res.snaps;
      //// TODO improve this
      if (snap["npm:@blockchain-lab-um/ssi-snap"]) {
        console.log("Sucessfuly installed.");
        setSnapInstalled(true);
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      {mmAddress != null && <p>Connected account: {mmAddress}</p>}
      <p>
        {mmAddress == null && (
          <button onClick={connectMetamask}>Connect MetaMask</button>
        )}
        {mmAddress != null && snapInstalled == false && (
          <button onClick={installSnap}>install Snap</button>
        )}
        {mmAddress != null && snapInstalled == true && (
          <button onClick={console.log("Hello world")}>Test</button>
        )}
      </p>
    </div>
  );
}
