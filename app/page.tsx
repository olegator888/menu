import getMenuItems from "@/actions/getMenuItems";
import MainClient from "@/MainClient";

export default async function Home() {
  const menuItems = await getMenuItems();

  const menuItemsOptions = menuItems.map((item) => ({
    label: item.title,
    value: item.title,
  }));

  return (
    <MainClient menuItemsOptions={menuItemsOptions} menuItems={menuItems} />
  );
}
