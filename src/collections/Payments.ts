import { Admin_or_Self } from "@/access/admin_or_self";
import { CollectionConfig } from "payload";

export const Payments: CollectionConfig = {
  slug: 'payments',
  access: {
    read: () => true,
    create: Admin_or_Self,
    update: () => false,
    delete: () => false
  },
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
