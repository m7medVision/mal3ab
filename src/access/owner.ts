import { Access } from "payload";

export const owner_only: Access = ({ req: { user } }) => {
  return Boolean(user?.role === "stadium_owner" || user?.role === "admin");
}
