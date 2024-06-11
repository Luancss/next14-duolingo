import { auth } from "@clerk/nextjs";

const adminIds = ["user_2gNsy0TgcN32FndP9BTURA5qxru"];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
