import { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: 'bookings',
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
