import { Access } from "payload";

export const is_auth: Access = ({ req: { user } }) => {
  return Boolean(user);
}
