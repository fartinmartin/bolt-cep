import { csi } from "@lib/cep";

type FlyOutMenuItem = {
  id: string;
  label: string;
  callback: () => void;
  enabled?: boolean;
  checked?: boolean;
};

export const addFlyOutMenuItems = (items: FlyOutMenuItem[]) => {
  const itemsXML = items.map((item) => {
    const enabled = item.enabled ?? true;
    const checked = item.checked ?? false;
    return `<MenuItem Id="${item.id}" Label="${item.label}" Enabled="${enabled}" Checked="${checked}"/>`;
  });

  const flyoutXML = `<Menu>\n\t` + itemsXML.join("\n\t") + `\n</Menu>`;
  csi.setPanelFlyoutMenu(flyoutXML);

  items.forEach((item) => {
    csi.addEventListener(
      "com.adobe.csxs.events.flyoutMenuClicked",
      (e: any) => e.data.menuId === item.id && item.callback(),
      false
    );
  });
};
