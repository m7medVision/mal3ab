import { admin_only } from "@/access/admin_only";
import { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  access: {
    read: () => true,
    create: admin_only,
    update: admin_only,
    delete: admin_only,
  },
  fields: [
    {
      name: 'stadium',
      type: 'relationship',
      relationTo: 'stadiums',
      required: true,
    },
    {
      name: 'party',
      type: 'relationship',
      relationTo: 'party',
      required: true,
    },
    {
      name: 'startTime',
      type: 'date',
      required: true,
    },
    {
      name: 'endTime',
      type: 'date',
      required: true,
    },
    {
      name: 'totalAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'confirmed', 'cancelled'],
      required: true,
    },
    {
      name: 'payments',
      type: 'relationship',
      relationTo: 'payments',
      hasMany: true,
    }
  ]
}
