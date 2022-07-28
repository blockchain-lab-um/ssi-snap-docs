/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
import React, { useState } from "react";

export default function MetaMaskConfig() {
  const [mmAddress, setMmAddress] = useState<string | null>(null);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [infuraToken, setInfuraToken] = useState("");
  const [success, setSuccess] = useState(false);

  // TODO: Move both to .env ?
  const snapID = "npm:@blockchain-lab-um/ssi-snap";
  const snapVersion = "1.0.8";

  // const snapID = "local:http://localhost:8081/";
  async function getWalletSnaps(): Promise<WalletGetSnapsResult> {
    return window.ethereum.request<WalletGetSnapsResult>({
      method: "wallet_getSnaps",
    });
  }

  async function isSnapInstalled(
    snapOrigin: string,
    version: string
  ): Promise<boolean> {
    try {
      console.log(await getWalletSnaps());

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

  async function connectMetamask() {
    if (window.ethereum) {
      window.ethereum
        .request<string[]>({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log("Setting MM address!", result);
          setMmAddress(result[0]);
          console.log("Checking for snap...");
        })
        .catch((err) => {
          /* TODO: Handle error */
          console.error(err);
        });

      const res = await isSnapInstalled(snapID, snapVersion);
      console.log("installed: ", res);
      setSnapInstalled(res);
    } else {
      console.log("Install Metamask");
    }
  }

  const installSnap = async () => {
    // if (isSnapInstalled("npm:@blockchain-lab-um/ssi-snap")) {
    //   console.log("Snap already installed");
    //   return true;
    // }
    try {
      const res = await window.ethereum.request<WalletEnableResult>({
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
        const { snaps } = res;
        // TODO: improve this
        if (snaps[snapID]) {
          console.log("Sucessfuly installed.");
          setSnapInstalled(true);
        }
      }
    } catch (err) {
      console.log("Failed to install snap", err);
    }
  };

  async function submitToken() {
    if (infuraToken !== "") {
      try {
        console.log(infuraToken);
        const response = await window.ethereum.request<{
          data: boolean;
          error?: string;
        }>({
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
      } catch (err) {
        console.error("An error occured", err);
      }
    }
  }

  function tokenChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInfuraToken(e.target.value);
  }

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
