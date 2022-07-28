/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
import React, { useState } from "react";

export default function MetaMaskConfig() {
  const [mmAddress, setMmAddress] = useState<string | null>(null);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [infuraToken, setInfuraToken] = useState("");
  const [success, setSuccess] = useState(false);

  const snapID = "npm:@blockchain-lab-um/ssi-snap";
  // const snapID = "local:http://localhost:8081/";
  // https://gist.github.com/rekmarks/1d249cb9d805f8b8ad89467ae961517b
  const connectMetamask = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log("Setting MM address!", result);
          setMmAddress(result[0]);
          console.log("Checking for snap...");
        })
        .catch((err) => {
          /* TODO: Handle error */
          console.error(err);
        });
      const res = await isSnapInstalled(snapID);
      console.log("installed: ", res);
      setSnapInstalled(res);
    } else {
      console.log("Install Metamask");
    }
  };

  async function getWalletSnaps() {
    return window.ethereum.request({
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
    } catch (err) {
      console.log("Failed to obtain installed snaps", err);
      return false;
    }
  }

  const installSnap = async () => {
    // if (isSnapInstalled("npm:@blockchain-lab-um/ssi-snap")) {
    //   console.log("Snap already installed");
    //   return true;
    // }
    try {
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
        /// / TODO improve this
        if (snap[snapID]) {
          console.log("Sucessfuly installed.");
          setSnapInstalled(true);
        }
      }
    } catch (err) {
      console.log("Failed to install snap", err);
    }
  };

  const submitToken = async () => {
    if (infuraToken !== "") {
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
      if (response.data === true) {
        setSuccess(true);
      }
    }
  };

  const tokenChange = (e) => {
    setInfuraToken(e.target.value);
  };

  return (
    <div>
      {mmAddress && <p>Connected account: {mmAddress}</p>}
      {success && <p>Successfully changed configuration!</p>}
      <p>
        {!mmAddress && (
          <button type="button" onClick={connectMetamask}>
            Connect MetaMask
          </button>
        )}
        {mmAddress && !snapInstalled && (
          <button type="button" onClick={installSnap}>
            install Snap
          </button>
        )}
        {mmAddress && snapInstalled && (
          <>
            <input onChange={tokenChange} type="text" />
            <button type="button" onClick={submitToken}>
              Change Infura Token
            </button>
          </>
        )}
      </p>
    </div>
  );
}
