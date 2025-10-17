import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from "@payload-config"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })

  // Ambil data dari Payload dengan slug "resources"
  const page = await payload.find({
    collection: "pages",
    where: { slug: { equals: "resources" } },
    depth: 2,
  })

  const doc = page.docs?.[0]
  const block = doc?.layout?.find((b: any) => b.blockType === "resources")

  if (!block) {
    return <p>No content found. Please add 'resources' block in Payload admin.</p>
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
      {/* Section Promo */}
      <section className="text-center max-w-2xl pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {block.heading || "Bonus Ekslusif: Free Trial 1 Tahun!"}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {block.description ||
            "Mulai gunakan School OS: Base hari ini tanpa biaya selama 12 bulan. Rasakan langsung kemudahan, efisiensi, dan dampak positifnya di sekarang. Kontak tim kami untuk mengecek apakah sekolah Anda memenuhi syarat untuk paket promosi ini."}
        </p>
      </section>

      {/* Gambar & Tagline */}
      <section className="relative mt-10">
        <div className="rounded-xl relative inline-block">
          {block.image?.url ? (
            <Image
              src={block.image.url}
              alt="Foto Promosi"
              width={600}
              height={350}
              quality={100}
              className="object-cover relative z-10"
            />
          ) : (
            <Image
              src="/Illustration.png"
              alt="Foto Promosi"
              width={600}
              height={350}
              quality={100}
              className="object-cover relative z-10"
            />
          )}

          <Image
            src="/Arrow 2.png"
            alt="Dekorasi Hijau"
            width={530}
            height={450}
            className="absolute -bottom-54 left-2/3 pointer-events-none select-none z-[-1]"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center md:text-left">
          <div>
            <a href="#" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <h4 className="font-bold text-lg">Andalan Smart School</h4>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">School Information System</a></li>
              <li><a href="#" className="hover:underline">Exam App</a></li>
              <li><a href="#" className="hover:underline">Presensi</a></li>
              <li><a href="#" className="hover:underline">Modul Pembayaran Sekolah</a></li>
              <li><a href="#" className="hover:underline">Learning Management System</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Hubungi Kami</h4>
            <p className="text-gray-600 mb-15">
              Ada pertanyaan atau saran? <br /> Kami siap membantu
            </p>

            <div className="flex gap-4 justify-center md:justify-start text-[#1D331E]">
              <a href="#"><FaWhatsapp size={26} /></a>
              <a href="#"><MdEmail size={26} /></a>
              <a href="#"><FaYoutube size={26} /></a>
              <a href="#"><FaTiktok size={26} /></a>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-left text-gray-500 text-sm max-w-5xl mx-auto px-6">
          ©2025 Andalan Smart School oleh Systemagix Sykpay Indonesia
          <div className="mt-2">
            <Link href="#" className="hover:underline">Terms of Service</Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
