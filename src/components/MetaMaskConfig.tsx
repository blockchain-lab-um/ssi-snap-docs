/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from "react";
import { SSISnapApi } from "@blockchain-lab-um/ssi-snap-types";
import { isMetamaskSnapsSupported } from "@blockchain-lab-um/ssi-snap-connector";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { initiateSSISnap } from "./snap";

export default function MetaMaskConfig() {
  const [mmAddress, setMmAddress] = useState<string | null>(null);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [infuraToken, setInfuraToken] = useState("");
  const [success, setSuccess] = useState(false);
  const [snapSupported, setSnapSupported] = useState(false);
  const [api, setApi] = useState<SSISnapApi | undefined>(undefined);

  // TODO: Move both to .env ?
  const snapID = "npm:@blockchain-lab-um/ssi-snap";

  if (ExecutionEnvironment.canUseDOM) {
    useEffect(() => {
      const snapsSupported = async () => {
        setSnapSupported(await isMetamaskSnapsSupported());
      };
      snapsSupported();
    }, []);
  }

  const connectMetamask = async () => {
    let mmAddr = null;
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: React.SetStateAction<string | null>[]) => {
          console.log("Setting MM address!");
          mmAddr = result[0];
          setMmAddress(mmAddr);
        });
      const result = await initiateSSISnap(snapID as string);
      if (result.isSnapInstalled) {
        setSnapInstalled(true);
        setApi(await result.snap?.getSSISnapApi());
      }
    }
  };

  async function submitToken() {
    if (infuraToken !== "" && api) {
      const res = await api.changeInfuraToken(infuraToken);
      console.log(res);
      setSuccess(res);
    }
  }
  async function togglePopups() {
    if (api) {
      const res = await api.togglePopups();
      console.log(res);
      setSuccess(res);
    }
  }

  function tokenChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInfuraToken(e.target.value);
  }

  if (ExecutionEnvironment.canUseDOM) {
    if (window.ethereum && snapSupported) {
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
            {mmAddress && snapInstalled && (
              <>
                <input onChange={tokenChange} type="text" />
                <button type="button" onClick={submitToken}>
                  Change Infura Token
                </button>
                <br />
                <button type="button" onClick={togglePopups}>
                  Disable Popups
                </button>
              </>
            )}
          </p>
        </div>
      );
    }
  }
  return <div>Install MetaMask first!</div>;
}
