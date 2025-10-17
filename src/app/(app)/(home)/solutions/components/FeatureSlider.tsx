"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Feature = {
  description: string;
  image?: { url: string; alt?: string };
};

export default function FeatureSlider({
  title,
  features,
}: {
  title: string;
  features: Feature[];
}) {
  const slides = features || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides.length) {
    return <p>No School OS features found.</p>;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Garis dekorasi kiri atas (tembus navbar) */} 
      <div className="absolute top-0 left-0 md:left-0 z-50"> 
        <Image src="/Line3.png" 
        alt="Line Decoration" 
        width={300} 
        height={300} 
        className="object-contain" 
        priority 
        /> 
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          {title || "#Kenapa Pilih School OS?"}
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-300">
          {slides[currentIndex]?.description}
        </p>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="w-full h-[500px] relative flex items-center justify-center">
            {slides[currentIndex]?.image?.url && (
              <Image
                src={slides[currentIndex].image.url}
                alt={slides[currentIndex].image.alt || "School OS"}
                width={900}
                height={500}
                className="object-contain max-h-[500px]"
              />
            )}
          </div>

          {/* Tombol Navigasi */}
          <div className="absolute top-4 right-4 flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-[#2F584F] text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indikator */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-6 rounded-full cursor-pointer transition-all ${
                  currentIndex === index
                    ? "bg-teal-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
