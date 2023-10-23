import { CEP_Panel } from "vite-cep-plugin";

export const debugAll = [
  {
    mainPath: "./panels/template-react/index.html", // DEBUG the React Template
    name: "template-react",
    displayName: "Bolt CEP - React",
    window: { autoVisible: true, width: 600, height: 650 },
  },
  {
    mainPath: "./panels/template-vue/index.html", // DEBUG the Vue Template
    name: "template-vue",
    displayName: "Bolt CEP - Vue",
    window: { autoVisible: true, width: 600, height: 650 },
  },
  {
    mainPath: "./panels/template-svelte/index.html", // DEBUG the Svelte Template
    name: "template-svelte",
    displayName: "Bolt CEP - Svelte",
    window: { autoVisible: true, width: 600, height: 650 },
  },
] satisfies CEP_Panel[];
