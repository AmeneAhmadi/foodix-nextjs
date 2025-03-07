"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import clsx from "clsx";
import { testimonialsData } from "@/app/data/data";
import TestimonialCard from "../common/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Testimonial() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { testimonials } = testimonialsData;

  return (
    <section>
      <div
        ref={ref}
        className={clsx(
          "bg-[var(--gray-color)]",
          "flex flex-col items-center justify-center",
          "pb-10 pt-32 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
        )}
      >
        <div className="flex flex-col items-center justify-between gap-20">
          <div
            className={clsx(
              inView ? "animate-fadeInDown opacity-100" : "opacity-0",
              "flex flex-col gap-4 items-center justify-center"
            )}
          >
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="relative w-6 h-6">
                <Image
                  src="/assets/icons/food-tray.png"
                  alt="offer"
                  fill
                  sizes="w-6 h-6"
                />
              </div>
              <span className="uppercase font-bold text-[var(--orange-color)] text-center font-hanken">
                Testimonials
              </span>
            </div>
            <h2 className="font-barlow font-bold text-4xl md:text-5xl xl:text-6xl uppercase text-center">
              Our Guests Are Saying
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className={clsx(
              " max-w-[1200px]",
              "[--swiper-theme-color:var(--primary-color)] [--swiper-pagination-color:var(--primary-color)]",
              "w-full max-w-[1200px] [&_.swiper-pagination-bullet-active]:bg-[var(--primary-color)]",
              "[&_.swiper-pagination-bullet]:bg-white [&_.swiper-button-next]:w-[4rem]",
              "[&_.swiper-button-prev]:w-[4rem] [&_.swiper-button-next]:text-[var(--primary-color)]",
              " [&_.swiper-button-prev]:text-[var(--primary-color)] ",
              "[&_.swiper-button-next:hover]:text-[var(--primary-color)] ",
              "[&_.swiper-button-prev:hover]:text-[var(--primary-color)] ",
              "[&_.swiper-button-next]:static [&_.swiper-button-prev]:static ",
              "[&_.swiper-button-next]:mt-8 [&_.swiper-button-prev]:mt-8 ",
              "[&_.swiper-button-next]:!right-[45%] [&_.swiper-button-prev]:!left-[45%] ",
              "[&_.swiper-button-next]:!after:text-[var(--primary-color)] ",
              "[&_.swiper-button-prev]:!after:text-[var(--primary-color)] ",
              "[&_.swiper-button-next:hover]:!after:text-[var(--primary-color)]",
              "[&_.swiper-button-prev:hover]:!after:text-[var(--primary-color)] [&_.swiper-button-next]:!mt-16 ",
              "[&_.swiper-button-prev]:!mt-16 [&_.swiper-slide]:w-full"
            )}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
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
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center mb-10">
                <TestimonialCard
                  rating={testimonial.rating}
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
