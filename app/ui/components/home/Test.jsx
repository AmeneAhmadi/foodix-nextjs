"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { testimonialsData } from "@/app/data/data";
import TestimonialCard from "../common/TestimonialCard";
import { useInView } from "react-intersection-observer";

export default function Testimonial() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { testimonials } = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const transitionRef = useRef(null);
  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]; // اضافه کردن یک نسخه اضافی برای حرکت بی‌وقفه

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 768 ? 2 : 1);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => {
        transitionRef.current.style.transition = "none";
        setCurrentIndex(testimonials.length);
        requestAnimationFrame(() => {
          transitionRef.current.style.transition = "transform 1s ease-in-out";
        });
      }, 500);
    }
  }, [currentIndex]);

  return (
    <section>
      <div
        ref={ref}
        className="bg-[var(--gray-color)] flex flex-col items-center justify-center pb-20 pt-32 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
      >
        <div className="flex flex-col items-center justify-between gap-20">
          {/* Title Section */}
          <div
            className={clsx(
              "flex flex-col gap-4 items-center justify-center",
              inView ? "animate-fadeInDown opacity-100" : "opacity-0"
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

          {/* Carousel Section */}
          <div className="relative overflow-hidden w-full max-w-4xl">
            <div
              ref={transitionRef}
              className="flex w-full transition-transform ease-in-out duration-1000"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {loopedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 px-2 ${
                    visibleCards === 2 ? "w-1/2" : "w-full"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1 }}
                >
                  <TestimonialCard
                    rating={testimonial.rating}
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <ul className="flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <li key={index}>
                <button
                  className={clsx(
                    "w-3 h-3 rounded-full transition-all",
                    currentIndex % testimonials.length === index
                      ? "bg-[var(--orange-color)]"
                      : "bg-black/20"
                  )}
                  onClick={() => setCurrentIndex(index + testimonials.length)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
