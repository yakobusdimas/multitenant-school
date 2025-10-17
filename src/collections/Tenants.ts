import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'domain',
      type: 'text',
      required: true,
      admin: {
        description: 'contoh: school1.localhost.com',
      },
    },
    {
      name: 'email', 
      type: 'email',
      required: true,
      admin: {
        description: 'Email admin tenant (digunakan untuk login)',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
