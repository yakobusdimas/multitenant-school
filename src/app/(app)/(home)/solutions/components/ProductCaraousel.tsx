"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface CardSchoolProps {
  title: string;
  description: string;
  cards: {
    image: { url: string; alt?: string };
  }[];
}

export default function ProductCaraousel({ title, description, cards }: CardSchoolProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Garis dekorasi kiri atas (tembus navbar) */}
      <div className="absolute right-0 top-0 z-50">
        <Image
          src="/Arrow 2.png"
          alt="Line Decoration"
          width={500}
          height={500}
          className="object-contain"      
          priority
        />
      </div>
      {/* Bagian teks */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/Logo3.png"
                alt="Ikon"
                width={43}
                height={43}
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 leading-relaxed text-lg max-w-xl">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-4xl font-bold text-left">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={"auto"}
        className="!pl-6 lg:!pl-12"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {cards?.map((card, index) => (
          <SwiperSlide
            key={index}
            className="!w-[80%] md:!w-[45%] lg:!w-[35%]"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={card.image.url}
                alt={card.image.alt || "School Product"}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom slider bar */}
      <div className="flex justify-center mt-6 w-full max-w-md mx-auto">
        {cards?.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              swiperRef.current?.slideTo(index);
            }}
            className={`h-2 flex-1 cursor-pointer transition-all mx-[1px] ${
              currentIndex === index
                ? "bg-teal-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
