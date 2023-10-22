import { initBolt } from "@lib/bolt";

import { createApp } from "vue";
import App from "./main.vue";

initBolt();

createApp(App).mount("#root");
