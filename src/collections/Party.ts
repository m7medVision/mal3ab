import { CollectionConfig } from "payload";

export const Party: CollectionConfig = {
  slug: 'party',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true
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
      hasMany: true,
    },
    {
      name: 'inviteCode',
      type: 'text',
      unique: true,
    }
  ]
}
