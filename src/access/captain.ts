import { Access } from "payload";
export const captain: Access = async ({ req }) => {
  if (!req.user) {
    return false;
  } else {
    return {
      captain: {
        equals: req.user.id
      }
    }
  }
}
