import { fs, path } from "../../../node";
import { getLatestFile } from "./get-latest-file";
import { getPrefsDir } from "./get-prefs-dir";

export const getRenderSettingsList = (): string[] => {
  const prefsDir = getPrefsDir();
  const prefsSuffix = "indep-render.txt";
  const renderPref = getLatestFile(prefsDir, prefsSuffix);
  if (renderPref) {
    const txt = fs.readFileSync(path.join(prefsDir, renderPref), {
      encoding: "utf-8",
    });
    const lines = txt.match(/[^\r\n]+/g);
    if (lines) {
      const firstLine = lines.findIndex((line) =>
        line.includes("Render Settings List")
      );
      const lastLine = lines.findIndex((line) =>
        line.includes("Still Frame RS Index")
      );
      const settingBlock = lines
        .slice(firstLine, lastLine)
        .join("")
        .trim()
        .replace(/^.*\=/g, "")
        .replace(/\t/g, "")
        .replace(/\\/g, "")
        .replace(/\"\"/g, "");
      let renderSettings: string[] = [];
      settingBlock.match(/\".*?\"/g)?.map((str) => {
        if (str && !str.includes("_HIDDEN X-Factor")) {
          renderSettings.push(str.replace(/\"/g, ""));
        }
      });
      return renderSettings;
    }
  }
  return [];
};
