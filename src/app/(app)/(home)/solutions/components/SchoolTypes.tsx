// src/components/solution/SchoolTypes.tsx
"use client";

import Image from "next/image";

type SchoolSolutionsBlock = {
  title?: string;
  description?: string;
  items?: {
    image?: { url: string; alt?: string };
  }[];
};

export default function SchoolTypes({ block }: { block: SchoolSolutionsBlock }) {
  return (
    <section className="py-20 bg-white relative">
      {/* Dekorasi Line di pojok kanan atas */}
      <div className="absolute right-0 top-0 z-50">
        <Image
          src="/Line4.png"
          alt="Line Decoration"
          width={300}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: Ambil gambar dari items[0] */}
        <div className="relative w-full max-w-lg mx-auto">
          <div className="relative">
            {block.items?.[0]?.image?.url ? (
              <Image
                src={block.items[0].image.url}
                alt={block.items[0].image.alt || "School Solutions Image"}
                width={500}
                height={500}
                className="rounded-[2rem] object-cover"
              />
            ) : (
              <div className="w-[500px] h-[500px] bg-gray-200 rounded-[2rem]" />
            )}
          </div>
        </div>

        {/* Kolom Kanan: Judul & Deskripsi dari Payload */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {block.title || "Tersedia untuk Semua Jenis Sekolah"}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {block.description ||
              "Baik sekolah negeri maupun swasta, dari tingkat dasar hingga menengah atas, School OS siap disesuaikan dengan kebutuhan spesifik sekolah Anda."}
          </p>

          {/* Ikon Hijau → ambil dari items[1] */}
          <div className="mt-10 flex justify-end">
            {block.items?.[1]?.image?.url ? (
              <Image
                src={block.items[1].image.url}
                alt={block.items[1].image.alt || "Ikon Hijau"}
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-[120px] h-[120px] bg-gray-200 rounded-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
