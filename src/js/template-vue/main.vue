<script setup lang="ts">
import { onMounted, ref } from "vue";
import { os, path } from "../lib/cep/node";
import {
  addFlyOutMenuItems,
  csi,
  evalES,
  initBolt,
  openLinkInBrowser,
  subscribeBackgroundColor,
} from "../lib/utils/bolt";
import "../index.scss";

const count = ref(0);
const backgroundColor = ref("#282c34");

const jsxTest = () => {
  console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
};

const nodeTest = () => {
  alert(
    `Node.js ${process.version}\nPlatform: ${
      os.platform
    }\nFolder: ${path.basename(window.cep_node.global.__dirname)}`
  );
};
onMounted(() => {
  if (window.cep) {
    subscribeBackgroundColor((c: string) => (backgroundColor.value = c));
    initBolt();
    addFlyOutMenuItems([
      { id: "test", label: "Test Item", callback: () => alert("Hello!") },
    ]);
  }
});
</script>

<template>
  <div class="app" :style="{ backgroundColor: backgroundColor }">
    <header class="app-header">
      <img src="../assets/bolt-cep.svg" class="icon" />
      <div class="stack-icons">
        <div>
          <img src="../assets/vite.svg" />
          Vite
        </div>
        +
        <div>
          <img src="../assets/vue.svg" />
          Vue
        </div>
        +
        <div>
          <img src="../assets/typescript.svg" />
          TypeScript
        </div>
        +
        <div>
          <img src="../assets/sass.svg" />
          Sass
        </div>
      </div>
      <div class="button-group">
        <button @click="count++">Count is: {{ count }}</button>
        <button @click="nodeTest">
          <img class="icon-button" src="../assets/node-js.svg" />
        </button>
        <button @click="jsxTest">
          <img class="icon-button" src="../assets/adobe.svg" />
        </button>
      </div>

      <p>Edit <code>main.vue</code> and save to test HMR updates.</p>
      <p>
        <button
          @click="
            () => openLinkInBrowser('https://github.com/hyperbrew/bolt-cep')
          "
        >
          Bolt Docs
        </button>
        |
        <button @click="() => openLinkInBrowser('https://v3.vuejs.org/')">
          Vue Docs
        </button>
        |
        <button
          @click="
            () => openLinkInBrowser('https://vitejs.dev/guide/features.html')
          "
        >
          Vite Docs
        </button>
      </p>
    </header>
  </div>
</template>
