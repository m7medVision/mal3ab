import { CollectionConfig } from "payload";

export const Payments: CollectionConfig = {
  slug: 'payments',
  fields: [
    {
      name: 'booking',
      type: 'relationship',
      relationTo: 'bookings',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'completed', 'failed'],
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'text',
      required: true,
    },
    {
      name: 'transactionId',
      type: 'text',
    }
  ]
}
