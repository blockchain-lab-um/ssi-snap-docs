import React, { useState } from "react";

export default function MetaMaskConfig() {
  const [mmAddress, setMmAddress] = useState(null);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [infuraToken, setInfuraToken] = useState("");
  const [success, setSuccess] = useState(false);

  //const snapID = "npm:@blockchain-lab-um/ssi-snap";
  const snapID = "local:http://localhost:8081/";
  const connectMetamask = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log("Setting MM address!", result);
          setMmAddress(result[0]);

          console.log("Checking for snap...");
        });
      const snapInstalled = await isSnapInstalled(snapID);
      console.log("installed: ", snapInstalled);
      setSnapInstalled(snapInstalled);
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
            [snapID]: { version: "latest" },
          },
        },
      ],
    });
    if (res) {
      const snap = res.snaps;
      //// TODO improve this
      if (snap[snapID]) {
        console.log("Sucessfuly installed.");
        setSnapInstalled(true);
        return true;
      }
    }
    return false;
  };

  const submitToken = async () => {
    if (infuraToken != "") {
      console.log(infuraToken);
      const response = await window.ethereum.request({
        method: "wallet_invokeSnap",
        params: [
          snapID,
          {
            method: "changeInfuraToken",
            params: [infuraToken],
          },
        ],
      });
      console.log(response.data);
      if (response.data == true) {
        setSuccess(true);
      }
    }
  };

  const tokenChange = (e) => {
    setInfuraToken(e.target.value);
  };

  return (
    <div>
      {mmAddress != null && <p>Connected account: {mmAddress}</p>}
      {success && <p>Successfully changed configuration!</p>}
      <p>
        {mmAddress == null && (
          <button onClick={connectMetamask}>Connect MetaMask</button>
        )}
        {mmAddress != null && snapInstalled == false && (
          <button onClick={installSnap}>install Snap</button>
        )}
        {mmAddress != null && snapInstalled == true && (
          <>
            <input onChange={tokenChange} type={"text"} />
            <button onClick={submitToken}>Change Infura Token</button>
          </>
        )}
      </p>
    </div>
  );
}
