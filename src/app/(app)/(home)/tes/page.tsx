import HeroSection from "@/components/HeroSection"
import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from "@payload-config"

export default async function TesPage() {
  const payload = await getPayloadHMR({ config })

  // Ambil halaman dengan slug "tes"
  const { docs } = await payload.find({
    collection: "pages",
    where: { slug: { equals: "tes" } },
    depth: 2,
    limit: 1, // biar lebih efisien
  })

  const page = docs?.[0]
  const heroBlock = page?.hero?.[0]

  if (!heroBlock) {
    return <p>No content found. Please add blocks in Payload admin.</p>
  }

  return (
    <HeroSection
      heading={heroBlock.heading || ""}
      description={heroBlock.description || ""}
      ctaText={heroBlock.ctaText || ""}
      ctaLink={heroBlock.ctaLink || "#"}
      rightImage={heroBlock.rightImage || ""}
    />
  )
}
