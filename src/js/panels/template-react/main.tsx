import { useEffect, useState } from "react";

import { os, path } from "@lib/node";
import { csi } from "@lib/cep";
import {
  evalES,
  openLinkInBrowser,
  evalTS,
  subscribeBackgroundColor,
} from "@lib/bolt";

import reactLogo from "../../assets/logos/react.svg";
import viteLogo from "../../assets/logos/vite.svg";
import tsLogo from "../../assets/logos/typescript.svg";
import sassLogo from "../../assets/logos/sass.svg";

import nodeJs from "../../assets/logos/node-js.svg";
import adobe from "../../assets/logos/adobe.svg";
import bolt from "../../assets/logos/bolt-cep.svg";

import "../../styles/index.scss";
import "./main.scss";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  const [count, setCount] = useState(0);

  //* Demonstration of Traditional string eval-based ExtendScript Interaction
  const jsxTest = () => {
    console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
  };

  //* Demonstration of End-to-End Type-safe ExtendScript Interaction
  const jsxTestTS = () => {
    evalTS("helloStr", "test").then((res) => {
      console.log(res);
    });

    evalTS("helloNum", 1000).then((res) => {
      console.log(typeof res, res);
    });

    evalTS("helloArrayStr", ["ddddd", "aaaaaa", "zzzzzzz"]).then((res) => {
      console.log(typeof res, res);
    });

    evalTS("helloObj", { height: 90, width: 100 }).then((res) => {
      console.log(typeof res, res);
      console.log(res.x);
      console.log(res.y);
    });

    evalTS("helloVoid").then(() => {
      console.log("function returning void complete");
    });

    evalTS("helloError", "test").catch((e) => {
      console.log("there was an error", e);
    });
  };

  const nodeTest = () => {
    const folder = path.basename(window.cep_node.global.__dirname);
    alert(
      `Node.js ${process.version}\nPlatform: ${os.platform}\nFolder: ${folder}`
    );
  };

  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <header className="app-header">
        <img src={bolt} className="icon" />
        <div className="stack-icons">
          <div>
            <img src={viteLogo} />
            Vite
          </div>
          +
          <div>
            <img src={reactLogo} />
            React
          </div>
          +
          <div>
            <img src={tsLogo} />
            TypeScript
          </div>
          +
          <div>
            <img src={sassLogo} />
            Sass
          </div>
        </div>
        <div className="button-group">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
          <button onClick={nodeTest}>
            <img className="icon-button" src={nodeJs} />
          </button>
          <button onClick={jsxTest}>
            <img className="icon-button" src={adobe} />
          </button>
          <button onClick={jsxTestTS}>Ts</button>
        </div>
        <p>
          Edit <code>main.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <button
            className="app-link"
            onClick={() =>
              openLinkInBrowser("https://github.com/hyperbrew/bolt-cep")
            }
          >
            Bolt Docs
          </button>
          {" | "}
          <button
            className="app-link"
            onClick={() => openLinkInBrowser("https://reactjs.org")}
          >
            React Docs
          </button>
          {" | "}
          <button
            className="app-link"
            onClick={() =>
              openLinkInBrowser("https://vitejs.dev/guide/features.html")
            }
          >
            Vite Docs
          </button>
        </p>
      </header>
    </div>
  );
};

export default Main;
