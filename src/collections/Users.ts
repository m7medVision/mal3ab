import { admin_only_field } from '@/access/admin_only'
import { Admin_or_Self } from '@/access/admin_or_self'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    update: Admin_or_Self,
    delete: Admin_or_Self,
  },
  fields: [
    {
      access: {
        update: admin_only_field,
      },
      name: 'role',
      type: 'select',
      options: ['user', 'stadium_owner', 'admin'],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'party',
      type: 'relationship',
      relationTo: 'party',
      hasMany: true,
    }
  ],
}
