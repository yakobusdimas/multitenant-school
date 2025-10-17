// src/app/(app)/[slug]/page.tsx
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export default async function TenantPage({ params }: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const page = await payload.find({
    collection: 'pages',
    where: { slug: { equals: params.slug } },
    depth: 2,
  })

  if (!page || !page.docs?.length) {
    return <div className="p-10 text-center text-gray-600">Page not found for this tenant</div>
  }

  const data = page.docs[0] as { title?: string; content?: string }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">{data.title ?? 'Untitled'}</h1>
      <p>{data.content ?? ''}</p>
    </main>
  )
}
