import { evalFile } from "@lib/bolt";
import { csi } from "@lib/cep";
import { fs } from "@lib/node";

export const initBolt = (log = true) => {
  if (window.cep) {
    const extRoot = csi.getSystemPath("extension");
    const jsxSrc = `${extRoot}/jsx/index.js`;
    const jsxBinSrc = `${extRoot}/jsx/index.jsxbin`;
    if (fs.existsSync(jsxSrc)) {
      if (log) console.log(jsxSrc);
      evalFile(jsxSrc);
    } else if (fs.existsSync(jsxBinSrc)) {
      if (log) console.log(jsxBinSrc);
      evalFile(jsxBinSrc);
    }
  }
};
