"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PageBanner from "../ui/components/common/PageBanner";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { FaPlay } from "react-icons/fa";
import ChefCard from "../ui/components/ourChefs/ChefCard";
import { aboutUsTestimonialData, ourChefsData } from "../data/data";
import AboutUsTestimonialCard from "../ui/components/aboutUs/AboutUsTestimonialCard";

export default function AboutUs() {
  const { ref: topTitleRef, inView: topTitleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: videoRef, inView: videoInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: chefRef, inView: chefInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: testimonialCardsRef, inView: testimonialCardsInView } =
    useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  const { ourChefs } = ourChefsData;
  const { testimonials } = aboutUsTestimonialData;

  return (
    <section>
      <PageBanner
        title="about us"
        subtitles={[
          { page: "home", link: "/" },
          { page: "about us", link: "/about_us" },
        ]}
      />

      <div className="flex flex-col items-center justify-center py-20 h-[60%] w-full mx-auto  px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24">
        <div className="w-full relative flex flex-col items-center justify-center bg-center h-[100%] bg-cover bg-no-repeat">
          <div
            ref={topTitleRef}
            className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-6"
          >
            {/* ستون اول */}
            <div
              className={clsx(
                "text-black",
                topTitleInView ? "animate-fadeInLeft opacity-100" : "opacity-0"
              )}
            >
              <h2 className="text-4xl md:text-3xl font-bold leading-relaxed max-w-xl">
                Hi! Our Restaurant has been present for over 20 years in the
                market. We make the most of all our customers.
              </h2>
            </div>

            {/* ستون دوم */}
            <div
              className={clsx(
                "text-gray-700 font-semibold",
                topTitleInView ? "animate-fadeInRight opacity-100" : "opacity-0"
              )}
            >
              <p className="text-lg font-hanken">
                Embark on a delectable journey as we delve into the world of
                culinary delights and gastronomic adventures. Food is not just
                sustenance; it's an art that connects cultures, evokes memories,
                and stirs emotions. In this blog, we invite you to join us as we
                explore the fascinating realm.
              </p>
            </div>
          </div>

          {/* ویدیو پس‌زمینه */}
          <section ref={videoRef} className="w-full">
            <div
              className={clsx(
                "w-full mt-8 pt-32 pb-28 rounded-2xl relative flex flex-col items-center justify-center",
                "bg-[url('/assets/images/about-intro.jpg')] bg-cover bg-center bg-no-repeat",
                videoInView ? "animate-fadeInDown opacity-100" : "opacity-0"
              )}
            >
              <div className="relative flex items-center justify-center mt-20">
                <div className="absolute border-2 border-white rounded-full opacity-0 animate-ripple animation-delay-0 w-20 h-20"></div>
                <div className="absolute border-2 border-white rounded-full opacity-0 animate-ripple delay-500 w-24 h-24"></div>
                <a
                  href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                  target="_blank"
                  className={clsx(
                    "absolute z-10 text-white",
                    "flex items-center justify-center bg-[var(--secondary-color)] rounded-full w-20 h-20"
                  )}
                >
                  <FaPlay />
                </a>
              </div>
              <h2 className="uppercase text-white text-6xl font-bold text-center mt-32">
                Eat and enjoy in our <br /> restaurant
              </h2>
            </div>
          </section>

          <section>
            <div
              ref={chefRef}
              className={clsx(
                "mx-auto pt-20 w-full",
                chefInView ? "animate-fadeInDown opacity-100" : "opacity-0"
              )}
            >
              <div>
                <div className="w-full h-full mt-6">
                  <h2 className="uppercase text-6xl font-bold text-center">
                    Meet our special chef
                  </h2>
                  <p className="font-hanken text-base lg:text-lg font-medium mt-6 text-center text-[var(--text-color)]">
                    Introducing our esteemed culinary virtuoso, a maestro of
                    flavors crafting exquisite <br /> dishes with passion,
                    precision, and a touch of magic.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full mx-auto">
            <div className="mx-auto py-15 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourChefs.slice(0, 3).map((chef, index) => (
                  <ChefCard key={index} {...chef} />
                ))}
              </div>
            </div>
          </section>

          <section>
            <div
              ref={testimonialRef}
              className={clsx(
                "mx-auto pt-10 w-full",
                testimonialInView
                  ? "animate-fadeInDown opacity-100"
                  : "opacity-0"
              )}
            >
              <div>
                <div className="w-full h-full mt-6 text-center">
                  <p className="font-hanken uppercase font-semibold text-[var(--primary-color)]">
                    Testimonial
                  </p>
                  <h2 className="uppercase text-6xl font-bold mt-2">
                    Our client reviews
                  </h2>
                  <p className="font-hanken text-base lg:text-lg font-medium mt-6 text-[var(--text-color)]">
                    Customer reviews sorted by rating, date, or relevance. See
                    what others are saying to <br /> make informed purchasing
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full bg-[#fefefe] py-12 sm:py-20 px-4">
          <div
            ref={testimonialCardsRef}
            className={clsx(
              "w-full mx-auto overflow-hidden",
              testimonialCardsInView
                ? "animate-fadeInUp opacity-100"
                : "opacity-0"
            )}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonialSwiper w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <AboutUsTestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* اضافه کردن استایل‌های سفارشی برای pagination */}
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
          }
        `}</style>
      </div>
    </section>
  );
}
