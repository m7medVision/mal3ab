import { Access } from "payload";

export const Self: Access = ({ req: { user }, id }) => {
  return Boolean(user && user.id === id);
}
