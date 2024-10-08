import { CollectionConfig } from "payload";

export const Party: CollectionConfig = {
  slug: 'party',
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
