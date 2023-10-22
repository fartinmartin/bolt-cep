import { path } from "@lib/node";
import { csi } from "@lib/cep";

export const getPrefsDir = (): string => {
  const appVersion = csi.getHostEnvironment().appVersion;
  const { platform, env } = window.cep_node.process;
  const mainDir =
    platform == "darwin"
      ? `${env.HOME}/Library/Preferences`
      : env.APPDATA || "";
  const prefsDir = path.join(
    mainDir,
    "Adobe",
    "After Effects",
    parseFloat(appVersion).toFixed(1).toString()
  );
  return prefsDir;
};
