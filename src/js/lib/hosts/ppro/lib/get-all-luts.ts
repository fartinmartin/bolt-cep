import { os, path } from "@lib/node";
import { csi } from "@lib/cep";
import { readDirSafe } from "./utils";

export const getAllLuts = (): { creative: string[]; technical: string[] } => {
  const isWin = os.platform() === "win32";

  const appPath = path.dirname(csi.getSystemPath("hostApplication"));
  const appLutsDir = path.join(
    isWin ? appPath : path.dirname(appPath),
    "Lumetri",
    "LUTs"
  );

  const winLocal = path.join(
    os.homedir(),
    "AppData",
    "Roaming",
    "Adobe",
    "Common",
    "LUTs"
  );
  const winGlobal = path.join("C:", "Program Files", "Adobe", "Common", "LUTs");
  const macLocal = path.join(
    os.homedir(),
    "Library",
    "Application Support",
    "Adobe",
    "Common",
    "LUTs"
  );
  const macGlobal = path.join(
    "Library",
    "Application Support",
    "Adobe",
    "Common",
    "LUTs"
  );

  const appCreative = path.join(appLutsDir, "Creative");
  const appTechnical = path.join(appLutsDir, "Technical");
  const localCreative = isWin
    ? path.join(winLocal, "Creative")
    : path.join(macLocal, "Creative");
  const localTechnical = isWin
    ? path.join(winLocal, "Technical")
    : path.join(macLocal, "Technical");
  const globalCreative = isWin
    ? path.join(winGlobal, "Creative")
    : path.join(macGlobal, "Creative");
  const globalTechnical = isWin
    ? path.join(winGlobal, "Technical")
    : path.join(macGlobal, "Technical");

  const appCreativeLuts = readDirSafe(appCreative);
  const appTechnicalLuts = readDirSafe(appTechnical);

  const localCreativeLuts = readDirSafe(localCreative);
  const localTechnicalLuts = readDirSafe(localTechnical);
  const globalCreativeLuts = readDirSafe(globalCreative);
  const globalTechnicalLuts = readDirSafe(globalTechnical);
  const creative = [
    ...appCreativeLuts,
    ...localCreativeLuts,
    ...globalCreativeLuts,
  ]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((lut) => path.basename(lut, path.extname(lut)));
  const technical = [
    ...appTechnicalLuts,
    ...localTechnicalLuts,
    ...globalTechnicalLuts,
  ]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((lut) => path.basename(lut, path.extname(lut)));

  return { creative, technical };
};
