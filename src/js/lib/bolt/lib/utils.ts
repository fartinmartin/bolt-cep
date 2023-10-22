import { csi } from "@lib/cep";

export const posix = (str: string) => str.replace(/\\/g, "/");

export const openLinkInBrowser = (url: string) => {
  if (window.cep) {
    csi.openURLInDefaultBrowser(url);
  } else {
    location.href = url;
  }
};
