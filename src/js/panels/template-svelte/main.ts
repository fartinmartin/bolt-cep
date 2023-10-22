import { initBolt } from "@lib/bolt";
import App from "./main.svelte";

initBolt();

const app = new App({
  target: document.getElementById("root") as Element,
});

export default app;
