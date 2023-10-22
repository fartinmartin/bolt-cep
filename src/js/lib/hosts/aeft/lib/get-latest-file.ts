import { fs, path } from "@lib/node";

export const getLatestFile = (dir: string, suffix: string): string | null => {
  const getModified = (filePath: string) =>
    fs.statSync(filePath).mtime.valueOf();

  let latestFile: string | null = null;

  fs.readdirSync(dir)
    .filter((file) => file.includes(suffix))
    .map((file) => {
      if (
        latestFile === null ||
        getModified(path.join(dir, file)) >
          getModified(path.join(dir, latestFile))
      ) {
        latestFile = file;
      }
    });

  return latestFile;
};
