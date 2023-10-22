import { initBolt } from "@lib/bolt";

import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./main";

initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // @ts-ignore
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
