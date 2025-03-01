import "virtual:uno.css";

import type { AppContext } from "@oomol-lab/ovm-web";

import { ConnectionClient } from "@oomol/connection";
import { ElectronClientAdapter } from "@oomol/connection-electron-adapter/client";
import { WindowService, SigninService } from "@oomol-lab/ovm-service/common";
import { StudioHome } from "@oomol-lab/ovm-web";
import { createRoot } from "react-dom/client";
import { val } from "value-enhancer";

const client = new ConnectionClient(new ElectronClientAdapter());

client.start();
const windowService = client.use(WindowService);
const signinService = client.use(SigninService);

const localeLang$ = val<string | undefined>();

const os = await windowService.invoke("getPlatform");
const os$ = val(os);
const darkMode$ = val(true);
const appContext: AppContext = {
  os$,
  darkMode$,
  getOoProjects: async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoSecrets: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoBillRecords: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoPaymentHistory: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoInvoices: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoNotifications: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoDeviceInfo: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoSafetyRecord: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoAccountInfo: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoLinkAccounts: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoSecretTable: async (_page?: number, _count?: number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [];
  },
  getOoSecretTitle: async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      secretId: "",
      name: "",
      icon: "",
      platform: "",
    };
  },
  windowService,
  signinService,
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <StudioHome appContext={appContext} localeLang$={localeLang$} />
  </>
);
