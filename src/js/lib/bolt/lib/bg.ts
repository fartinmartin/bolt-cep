import { csi } from "@lib/cep";

export const getAppBackgroundColor = () => {
  const env = window.__adobe_cep__.getHostEnvironment() as string;
  const { green, blue, red } =
    JSON.parse(env).appSkinInfo.panelBackgroundColor.color;
  return {
    rgb: { r: red, g: green, b: blue },
    hex: `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`,
  };
};

export const subscribeBackgroundColor = (callback: (color: string) => void) => {
  const getColor = () => {
    const newColor = getAppBackgroundColor();
    console.log("BG Color Updated: ", { rgb: newColor.rgb });
    const { r, g, b } = newColor.rgb;
    return `rgb(${r}, ${g}, ${b})`;
  };
  // get current color
  callback(getColor());
  // listen for changes
  csi.addEventListener(
    "com.adobe.csxs.events.ThemeColorChanged",
    () => callback(getColor()),
    {}
  );
};
