import { CEP_Config } from "vite-cep-plugin";
import { version } from "./package.json";
import { debugAll } from "./cep.config.debug"; // BOLT-CEP-DEBUG-ONLY

const config: CEP_Config = {
  id: "com.bolt.cep",
  displayName: "Bolt CEP",
  version,

  type: "Panel",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  symlink: "local",

  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,

  serverConfig: {
    port: 3000,
    servePort: 5000,
    startingDebugPort: 8860,
  },

  hosts: [
    { name: "AEFT", version: "[0.0,99.9]" },
    { name: "AME", version: "[0.0,99.9]" },
    { name: "AUDT", version: "[0.0,99.9]" },
    { name: "FLPR", version: "[0.0,99.9]" },
    { name: "IDSN", version: "[0.0,99.9]" },
    { name: "ILST", version: "[0.0,99.9]" },
    { name: "KBRG", version: "[0.0,99.9]" },
    { name: "PHXS", version: "[0.0,99.9]" },
    { name: "PPRO", version: "[0.0,99.9]" },
  ],

  panels: [
    {
      mainPath: "./panels/main/index.html",
      name: "main",
      displayName: "Bolt CEP",
      window: {
        autoVisible: true,
        width: 600,
        height: 650,
      },
    },
    ...debugAll, // BOLT-CEP-DEBUG-ONLY
  ],

  icons: {
    darkNormal: "./src/assets/light-icon.png",
    normal: "./src/assets/dark-icon.png",
    darkNormalRollOver: "./src/assets/light-icon.png",
    normalRollOver: "./src/assets/dark-icon.png",
  },

  window: {
    width: 500,
    height: 550,
  },

  build: {
    jsxBin: "off",
    sourceMap: true,
  },

  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off",
  },

  bundle: {
    copy: [],
    zip: [],
  },

  // installModules: [],
  // scriptPath: undefined,
  // standalone: false,
};
export default config;
