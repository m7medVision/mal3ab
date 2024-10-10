import { admin_only } from "@/access/admin_only";
import { is_auth } from "@/access/is_auth";
import { owner_only } from "@/access/owner";
import { CollectionConfig } from "payload";

export const Stadiums: CollectionConfig = {
  slug: 'stadiums',
  access: {
    read: is_auth,
    create: admin_only,
    update: owner_only,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text',
          required: true,
        },
        {
          name: 'coordinates',
          type: 'point',
        }
      ]
    },
    {
      name: 'hourlyRate',
      type: 'number',
      required: true,
    },
    {
      name: 'amenities',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        }
      ]
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ]
    }
  ]
}
