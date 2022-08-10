/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  MetaMaskSSISnap,
  enableSSISnap,
} from "@blockchain-lab-um/ssi-snap-connector";

export const defaultSnapId = "local:http://localhost:8081";

let isInstalled: boolean = false;

export interface SnapInitializationResponse {
  isSnapInstalled: boolean;
  snap?: MetaMaskSSISnap;
}

export async function initiateSSISnap(
  snapId: string
): Promise<SnapInitializationResponse> {
  try {
    console.log("Attempting to connect to snap...");
    const metamaskSSISnap = await enableSSISnap(snapId, {
      version: "latest",
    });
    isInstalled = true;
    console.log("Snap installed!");
    return { isSnapInstalled: true, snap: metamaskSSISnap };
  } catch (e) {
    console.error(e);
    isInstalled = false;
    return { isSnapInstalled: false };
  }
}

export function isSSISnapInstalled(): boolean {
  return isInstalled;
}
