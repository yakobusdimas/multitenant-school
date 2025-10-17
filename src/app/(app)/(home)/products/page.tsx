// app/(app)/products/page.tsx
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";


export default async function ProductsPage() {
  const payload = await getPayloadHMR({ config });

  const page = await payload.find({
    collection: 'pages',
    where: { slug: { equals: "products" } },
    tenant: { equals: "sma-andalan" },
    depth: 2,
  });

  // Ensure the doc is of the correct type that has 'layout'
  const docWithLayout = page.docs?.[0] as { layout?: any[] } | undefined;
  const heroBlock = docWithLayout?.layout?.find(
    (b: any) => b.blockType === "hero"
  );

  if (!heroBlock) {
    return <p>No hero content found. Please add in Payload admin.</p>;
  }

  return (
    <section className="bg-white font-sans overflow-hidden relative">
      {/* ✅ Dekorasi background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Garis kiri atas */}
        <Image
          src="/Line1.png"
          alt="Background Decoration"
          width={125}
          height={50}
          className="absolute top-0 left-0 opacity-70"
        />
        {/* Arrow 1: kiri bawah */}
        <Image
          src="/Arrow 3.png"
          alt="Arrow Decoration"
          width={200}
          height={200}
          className="absolute bottom-0 left-0 opacity-70"
        />
        {/* Arrow 2: posisi tengah */}
        <Image
          src="/Arrow 1.png"
          alt="Arrow Decoration Center"
          width={180}
          height={180}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
      </div>

      {/* ✅ Konten utama */}
      <main className="relative flex min-h-screen flex-col lg:flex-row items-center justify-center px-6 py-12 md:px-12 lg:px-12">
        {/* Left: text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight tracking-tight">
            {heroBlock.heading}
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-md">
            {heroBlock.description}
          </p>

          <a
            href={heroBlock.ctaLink}
            className="bg-[#C3F498] hover:bg-opacity-90 text-[#2F584F] font-semibold px-8 py-3 rounded-full shadow-sm transition-all inline-block"
          >
            {heroBlock.ctaText}
          </a>

          {/* ✅ Follow Us */}
          <div className="flex items-center gap-4 pt-4">
            <p className="font-semibold text-gray-500 text-sm">Follow us on:</p>
            <a
              href={heroBlock.youtubeLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Image src="/Youtube Button.ico" alt="YouTube" width={25} height={25} />
            </a>
            <a
              href={heroBlock.tiktokLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Image src="/Tiktok Button.ico" alt="TikTok" width={25} height={25} />
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center z-10 mt-16 lg:mt-0">
          {heroBlock.image?.url && (
            <Image
              src={heroBlock.image.url}
              alt="Hero Image"
              width={450}
              height={900}
            />
          )}
        </div>
      </main>


      {/* Footer note */}
      {heroBlock.footerNote && (
        <footer className="absolute bottom-4 right-6 md:right-12 text-xs text-gray-500 z-10">
          {heroBlock.footerNote}
        </footer>
      )}
    </section>
  );
}
