"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BiDish } from "react-icons/bi";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section
      ref={ref}
      className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
    >
      <div className="pt-12 sm:pt-16 lg:pt-24 xl:pt-32 pb-10 sm:pb-16 lg:pb-20 xl:pb-32">
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8 xl:gap-4"
          )}
        >
          {/* Image section */}
          <div
            className={clsx(
              "order-1 lg:order-1 xl:order-1",
              inView ? "animate-fadeInLeft opacity-100" : "opacity-0"
            )}
          >
            <Image
              src="/assets/images/about-6.png"
              width={600}
              height={600}
              alt="about us"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Content section */}
          <div className="order-2 px-14 sm:px-1 md:px-12 lg:px-1 xl:px-2 lg:order-2 xl:order-2 flex flex-col items-start">
            <div
              className={clsx(
                "flex items-start flex-col gap-4",
                inView ? "animate-fadeInDown opacity-100" : "opacity-0"
              )}
            >
              <div className="font-hanken text-[var(--orange-color)] uppercase font-bold xl:text-lg flex items-center gap-2">
                <BiDish size={20} />
                <span>about us</span>
              </div>
              <h2 className="text-3xl text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl uppercase font-extrabold mb-4 xl:mb-8 leading-tight">
                Delicia's about fresh
                <br />
                flavorful dining
              </h2>
            </div>

            <div className="w-full">
              <p
                className={clsx(
                  "text-[var(--text-color)] text-left leading-relaxed mb-5 xl:mb-10 text-base",
                  inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                We are passionate about serving fresh, flavorful dishes crafted
                with the finest ingredients. Every meal is thoughtfully prepared
                to deliver a memorable dining experience you'll love.
              </p>

              {/* Stats cards */}
              <div className="flex flex-col sm:flex-row gap-4 xl:gap-8 mb-4 xl:mb-9">
                {/* First stat card */}
                <div
                  className={clsx(
                    "bg-[var(--gray-light-color)] w-full sm:w-[275px] xl:w-[320px] h-[120px] rounded-xl",
                    inView ? "animate-fadeInDown opacity-100" : "opacity-0"
                  )}
                >
                  <div className="flex flex-row px-4 sm:px-5 xl:px-8 items-center h-full">
                    <div className="w-12 sm:w-16 xl:w-20">
                      <Image
                        src="/assets/icons/icon-7.svg"
                        width={1000}
                        height={1000}
                        alt="about us"
                      />
                    </div>
                    <div className="pl-3 sm:pl-5 xl:pl-6">
                      <h4 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
                        1500+
                      </h4>
                      <p className="text-[var(--text-color)] capitalize text-sm font-medium">
                        total food item
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second stat card */}
                <div
                  className={clsx(
                    "bg-[var(--gray-light-color)] w-full sm:w-[275px] xl:w-[320px] h-[120px] rounded-xl",
                    inView ? "animate-fadeInDown opacity-100" : "opacity-0"
                  )}
                >
                  <div className="flex flex-row px-4 sm:px-5 xl:px-8 items-center h-full">
                    <div className="w-12 sm:w-16 xl:w-20">
                      <Image
                        src="/assets/icons/icon-8.svg"
                        width={1000}
                        height={1000}
                        alt="about us"
                      />
                    </div>
                    <div className="pl-3 sm:pl-5 xl:pl-6">
                      <h4 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
                        500+
                      </h4>
                      <p className="text-[var(--text-color)] capitalize text-lg font-medium">
                        branch office
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="test.html"
                  className={clsx(
                    "inline-block px-8 sm:px-9 xl:px-11 py-4 sm:py-4 rounded-xl",
                    "bg-[var(--primary-color)] capitalize text-xl sm:text-2xl xl:text-2xl",
                    "font-semibold text-white transition duration-300 ",
                    " hover:bg-[var(--secondary-color)]",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
