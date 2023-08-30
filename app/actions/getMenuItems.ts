import prisma from "@/libs/prismadb";

export default async function getMenuItems() {
  try {
    return await prisma.menuItem.findMany({});
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}
