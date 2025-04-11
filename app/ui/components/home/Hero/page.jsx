"use client";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <>
      <section>
        <div ref={ref} className="relative overflow-hidden w-full">
          <div
            className={`absolute ${styles.animatedBackground} ${styles.heroBg}`}
          ></div>
          <div className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 pt-48 pb-20 2xl:pt-42 mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-center mt-2 sm:mt-4 md:mt-6">
              <div className="order-2 xl:order-1 flex flex-col items-center xl:items-start justify-center w-full gap-6 px-2 sm:px-4">
                <span
                  className={clsx(
                    "font-hanken",
                    inView ? "animate-fadeInDown opacity-100" : "opacity-0",
                    "uppercase font-bold text-xl sm:text-lg md:text-xl text-[var(--orange-color)]",
                    "text-center xl:text-left"
                  )}
                >
                  Hot for every Sunday
                </span>
                <h1
                  className={clsx(
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0",
                    "capitalize w-full font-bold text-7xl xl:text-8xl text-white text-center xl:text-left"
                  )}
                >
                  Enjoy our{" "}
                  <span className="text-[var(--primary-color)] px-2">
                    delicious
                  </span>{" "}
                  food
                </h1>
                <p
                  className={clsx(
                    inView ? "animate-fadeInDown opacity-100" : "opacity-0",
                    "font-hanken w-full  text-xl sm:leading-7 font-semibold",
                    "text-white text-center xl:text-left "
                  )}
                >
                  Savor the taste of our delicious, expertly crafted dishes made
                  with the finest ingredients, offering a perfect blend of
                  flavors.
                </p>
                <div
                  className={clsx(
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0",
                    "flex items-center justify-center py-4"
                  )}
                >
                  <Link
                    href="/our_shop"
                    className={clsx(
                      "font-hanken bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]",
                      "text-white rounded-lg text-xl py-4 px-11 font-bold transition-colors"
                    )}
                  >
                    Order Now
                  </Link>
                </div>
              </div>
              <div className="order-1 xl:order-2 mb-8 sm:mb-10 md:mb-12 w-full">
                <div className="relative flex flex-col items-center text-center mx-auto xl:text-right">
                  <div
                    className={clsx(
                      "absolute -top-8 sm:-top-2 md:-top-1 lg:-top-2",
                      "-left-3 sm:-left-8 md:left-0 lg:left-24 xl:-left-16 xl:-top-12",
                      "2xl:-left-16 2xl:-top-4",
                      inView
                        ? "animate-bounceInUpShape opacity-100"
                        : "opacity-0"
                    )}
                  >
                    <div className="-rotate-[45deg] sm:-rotate-[50deg] relative w-26 sm:w-48 lg:w-56 aspect-square">
                      <Image
                        src="/assets/images/text-03.png"
                        alt="20%off"
                        fill
                        sizes="(max-width: 640px) 4rem, (max-width: 768px) 5rem, (max-width: 1024px) 6rem, 7rem"
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div
                    className={clsx(
                      inView ? "animate-fadeInRight opacity-100" : "opacity-0",
                      "rounded-full w-full sm:w-[90%] lg:w-[65%] xl:w-[90%] relative aspect-square"
                    )}
                  >
                    <Image
                      src="/assets/images/hero-four_img1.png"
                      alt="hero-img"
                      fill
                      priority
                      className="object-contain"
                      sizes="w-full sm:w-[90%] lg:w-[65%] xl:w-[90%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
