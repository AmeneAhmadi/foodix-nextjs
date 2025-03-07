"use client";
import { useInView } from "react-intersection-observer";
import CountDownTimer from "../CountDownTimer";
import styles from "./styles.module.css";
import Image from "next/image";
import clsx from "clsx";

export default function OfferCombo() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section>
      <div ref={ref} className="font-hanken text-[var(--text-color)]">
        <div className={`${styles.offerBg} relative pb-20 pt-32 px-3`}>
          <div className="absolute top-0 right-0 hidden lg:block">
            <div className="relative w-40 h-52">
              <Image src="/assets/images/bn-img-6.png" alt="offer" fill />
            </div>
          </div>
          <div className="sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div
              className={clsx(
                inView ? "animate-fadeInLeft opacity-100" : "opacity-0",
                "mb-12 text-center flex flex-col gap-6 lg:text-left"
              )}
            >
              <div className="flex flex-col gap-4 items-center justify-center lg:justify-start">
                <div className="flex items-center justify-center gap-2 w-full">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/assets/icons/food-tray.png"
                      alt="offer"
                      fill
                      sizes="w-6 h-6"
                    />
                  </div>
                  <span className="uppercase font-bold text-[var(--orange-color)] text-center lg:text-left">
                    Get 25% Discount
                  </span>
                </div>
                <h2 className="font-barlow font-bold text-4xl md:text-5xl xl:text-7xl text-white uppercase ">
                  Today our special Combo offers
                </h2>
              </div>
              <CountDownTimer dayCount={300} />
              <div
                className={clsx(
                  inView ? "animate-fadeInUp opacity-100" : "opacity-0",
                  "flex items-center justify-center lg:justify-start py-4"
                )}
              >
                <a
                  href="#"
                  className="font-hanken bg-[var(--primary-color)] capitalize text-white rounded-lg text-xl py-4 px-11 font-bold"
                >
                  read more
                </a>
              </div>
            </div>
            <div
              className={clsx(
                inView ? "animate-fadeInRight opacity-100" : "opacity-0",
                "relative mb-8 w-full h-full flex items-center justify-center lg:justify-end"
              )}
            >
              <img
                src="/assets/images/offer-img1.png"
                alt="Combo Package image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
