import { Access } from "payload"
export const Admin_or_Self: Access = ({ req: { user } }) => {
  if (user?.role.includes("admin")) return true
  else return {
    id: {
      equals: user?.id
    }
  }
}
