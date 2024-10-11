import { Access } from "payload";
export const CaptainOnly: Access = async ({ req: { user } }) => {
  if (!user) {
    return false;
  } else {
    return {
      captain: {
        equals: user?.id
      }
    }
  }
}
