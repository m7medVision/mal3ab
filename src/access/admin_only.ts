import { Access, FieldAccess } from "payload";


export const admin_only: Access = ({ req: { user } }) => {
  return Boolean(user?.role?.includes("admin"));
}

export const admin_only_field: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.role?.includes("admin"));
}
