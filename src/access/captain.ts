import { Access } from "payload";
export const CaptainOnly: Access = ({ req: { user } }) => {
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
export const AdminOrCaptain: Access = ({ req: { user } }) => {
  if (!user) {
    return false;
  } else {
    if (user.role === 'admin') {
      return true;
    }
    return {
      captain: {
        equals: user?.id
      }
    }
  }
}
