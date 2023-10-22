interface IOpenDialogResult {
  data: string[];
}

export const selectFolder = (
  dir: string,
  msg: string,
  callback: (res: string) => void
) => {
  const result = window.cep.fs.showOpenDialog(
    false,
    true,
    msg,
    dir
  ) as IOpenDialogResult;
  if (result.data?.length > 0) {
    const folder = decodeURIComponent(result.data[0].replace("file://", ""));
    callback(folder);
  }
};

export const selectFile = (
  dir: string,
  msg: string,
  callback: (res: string) => void
) => {
  const result = window.cep.fs.showOpenDialog(
    false,
    false,
    msg,
    dir
  ) as IOpenDialogResult;
  if (result.data?.length > 0) {
    const folder = decodeURIComponent(result.data[0].replace("file://", ""));
    callback(folder);
  }
};
