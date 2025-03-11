"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../common/TestimonialCard";
import { testimonialsData } from "@/app/data/data";
import { useInView } from "react-intersection-observer";
import { BiDish } from "react-icons/bi";
import clsx from "clsx";

export default function Testimonial() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { testimonials } = testimonialsData;
  return (
    <section ref={ref}>
      <div className="bg-[#f7f1e1]">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div
            className={clsx(
              "flex flex-col items-center gap-1 w-full mb-10",
              inView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            <div className="font-hanken text-[var(--orange-color)] uppercase font-bold xl:text-lg flex items-center gap-2">
              <BiDish size={20} />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl uppercase font-extrabold mb-4 xl:mb-8 leading-tight">
            Our Guests Are Saying
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className={clsx("testimonialSwiper",inView ? "animate-fadeInUp opacity-100" : "opacity-0")}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          margin-top: 40px !important;
          position: relative !important;
        }

        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary-color);
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
