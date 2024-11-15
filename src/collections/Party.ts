import { AdminOrCaptain, CaptainOnly } from "@/access/captain";
import { CollectionConfig } from "payload";

export const Party: CollectionConfig = {
  slug: 'party',
  access: {
    read: () => true,
    create: () => true,
    update: CaptainOnly,
    delete: AdminOrCaptain
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'captain',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => true,
      },
      hasMany: true,
    },
    {
      name: 'inviteCode',
      type: 'text',
      unique: true,
    },
    {
      name: "isPublic",
      type: "checkbox",
      defaultValue: false,
    }
  ]
}
