import { fs, path } from "@lib/node";
import { getLatestFile } from "./get-latest-file";
import { getPrefsDir } from "./get-prefs-dir";

export const getOutputModules = (): string[] => {
  const prefsDir = getPrefsDir();
  const prefsSuffix = "indep-output.txt";
  const outputPref = getLatestFile(prefsDir, prefsSuffix);

  if (outputPref) {
    const txt = fs.readFileSync(path.join(prefsDir, outputPref), {
      encoding: "utf-8",
    });

    const matches = txt.match(
      /\"Output Module Spec Strings Name .* = \".*.\"/g
    );

    if (matches) {
      let outputModules: string[] = [];
      matches.map((line) => {
        const str = line.split("=").pop()?.trim().replace(/"/g, "");
        if (str && !str.includes("_HIDDEN X-Factor")) {
          outputModules.push(str);
        }
      });
      return outputModules;
    }
  }

  return [];
};
