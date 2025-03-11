"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import Image from 'next/image';
import { galleryData } from "@/app/data/data";
import ClientOnly from "../../components/common/ClientOnly";

export default function Gallery() {
  const swiperRef = useRef(null);
  const [startIndex, setStartIndex] = useState(null);
  const [maxDragSlides, setMaxDragSlides] = useState(1);
  const {galleryItems} = galleryData;

  const onSlideChange = (swiper) => {
    if (startIndex !== null) {
      const draggedSlides = Math.abs(swiper.realIndex - startIndex);

      if (draggedSlides > maxDragSlides) {
        swiper.slideTo(startIndex, 500);
      }
    }
  };

  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container mx-auto px-0 max-w-full">
        <ClientOnly>
          <Swiper
            ref={swiperRef}
            modules={[Mousewheel, FreeMode, Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={5}
            speed={800}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.6 }}
            mousewheel={{ forceToAxis: true, sensitivity: 1 }}
            resistanceRatio={0.85}
            breakpoints={{
              280: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            onTouchStart={(swiper) => {
              setStartIndex(swiper.realIndex);
              setMaxDragSlides(galleryItems[swiper.realIndex].number - 1);
            }}
            onSlideChange={onSlideChange}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index} className="gallery-slide">
                <div className="relative group overflow-hidden select-none">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out mb-8">
                      <h3 className="text-white text-2xl font-bold text-center px-6 py-2 ">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-white text-xl text-center px-6 py-2 mt-1  ">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ClientOnly>
      </div>

      <style jsx global>{`
        .gallery-swiper {
          width: 100vw;
          padding: 0;
        }
        .gallery-slide {
          transition: opacity 0.3s ease;
          cursor: grab;
        }
        .gallery-slide:active {
          cursor: grabbing;
        }

        @media (min-width: 1024px) and (max-width: 1366px) {
          .gallery-slide {
            height: 250px !important;
          }
          .gallery-slide img {
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}
