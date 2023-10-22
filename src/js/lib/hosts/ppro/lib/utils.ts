import { fs } from "@lib/node";

export const readDirSafe = (dir: string) =>
  fs.existsSync(dir) ? fs.readdirSync(dir) : [];
