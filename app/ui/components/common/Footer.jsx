"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    setMousePosition({ x, y });
  };

  return (
    <>
      {/* Start Footer Section */}
      <footer ref={ref} className="overflow-hidden">
        <section
          className="w-full bg-[var(--primary-dark-color)] relative group"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
          }}
        >
          {/* Background Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
            <div className="absolute top-30 left-0">
              <Image
                src="/assets/images/shape-2.png"
                alt="shape"
                width={50}
                height={50}
                className="w-[105px] h-[108px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${
                    mousePosition.y * 20
                  }px)`,
                }}
              />
            </div>

            <div className="absolute top-1/2 right-0">
              <Image
                src="/assets/images/shape-8.png"
                alt="shape"
                width={60}
                height={60}
                className="w-[102px] h-[143px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * -30}px, ${
                    mousePosition.y * 30
                  }px)`,
                }}
              />
            </div>

            <div className="absolute bottom-5 left-1/3">
              <Image
                src="/assets/images/shape-4.png"
                alt="shape"
                width={45}
                height={45}
                className="w-[86px] h-[112px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * 25}px, ${
                    mousePosition.y * -25
                  }px)`,
                }}
              />
            </div>

            <div className="absolute bottom-0 right-1/2">
              <Image
                src="/assets/images/shape-5.png"
                alt="shape"
                width={55}
                height={55}
                className="w-[87px] h-[87px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * -15}px, ${
                    mousePosition.y * 15
                  }px)`,
                }}
              />
            </div>

            <div className="absolute bottom-0 right-1/4">
              <Image
                src="/assets/images/shape-6.png"
                alt="shape"
                width={40}
                height={40}
                className="w-[126px] h-[71px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * 35}px, ${
                    mousePosition.y * -20
                  }px)`,
                }}
              />
            </div>

            <div className="absolute bottom-0 right-5">
              <Image
                src="/assets/images/shape-7.png"
                alt="shape"
                width={65}
                height={65}
                className="w-[201px] h-[103px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * -25}px, ${
                    mousePosition.y * 25
                  }px)`,
                }}
              />
            </div>

            <div className="absolute top-[292px] left-0">
              <Image
                src="/assets/images/shape-3.png"
                alt="shape"
                width={48}
                height={48}
                className="w-[129px] h-[191px] transition-all duration-300"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${
                    mousePosition.y * -20
                  }px)`,
                }}
              />
            </div>
          </div>
          <div className="relative z-10">
            <div className=" py-20 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Column 1 */}
                <div
                  className={clsx(
                    "p-4 flex flex-col gap-4",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  <div>
                    <Image
                      src="/assets/images/logo-white.png"
                      alt="Foodix Logo"
                      width={150}
                      height={50}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="font-hanken text-white/70 font-semibold mb-3">
                      Discover culinary delights recipes and inspiration in our
                      delightful food haven..
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Link href="#" className="cursor-pointer">
                      <div
                        className={clsx(
                          "w-8 h-8 text-white/70 hover:text-white border border-gray-500 ",
                          "rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] ",
                          "hover:border-0 transition-all duration-300"
                        )}
                      >
                        <FaFacebookF size={16} />
                      </div>
                    </Link>
                    <Link href="#" className="cursor-pointer">
                      <div
                        className={clsx(
                          "w-8 h-8 text-white/70 hover:text-white border border-gray-500 ",
                          "rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] ",
                          "hover:border-0 transition-all duration-300"
                        )}
                      >
                        <FaTwitter size={16} />
                      </div>
                    </Link>
                    <Link href="#" className="cursor-pointer">
                      <div
                        className={clsx(
                          "w-8 h-8 text-white/70 hover:text-white border border-gray-500 ",
                          "rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] ",
                          "hover:border-0 transition-all duration-300"
                        )}
                      >
                        <FaInstagram size={16} />
                      </div>
                    </Link>
                    <Link href="#" className="cursor-pointer">
                      <div
                        className={clsx(
                          "w-8 h-8 text-white/70 hover:text-white border border-gray-500 ",
                          "rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] ",
                          "hover:border-0 transition-all duration-300"
                        )}
                      >
                        <FaYoutube size={16} />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Column 2 */}
                <div
                  className={clsx(
                    "p-4",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left text-[var(--white-color)] uppercase">
                    contact us
                  </h3>
                  <ul className="space-y-2 font-hanken ">
                    <li className="text-white/70 font-semibold mb-3">
                      1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      <Link
                        href="#"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        +88-344-667-999
                      </Link>
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      <Link
                        href="#"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        order@foodix.com
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div
                  className={clsx(
                    "p-4",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left text-[var(--white-color)] uppercase">
                    quick link
                  </h3>
                  <ul className="space-y-2 font-hanken capitalize">
                    <li className="text-white/70 font-semibold mb-3">
                      <Link
                        href="/"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        home
                      </Link>
                    </li>
                    <li className="text-white/70 font-semibold mb-3 ">
                      <Link
                        href="/about_us"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        about us
                      </Link>
                    </li>
                    <li className="text-white/70 font-semibold mb-3 ">
                      <Link
                        href="/our_shop"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        services
                      </Link>
                    </li>
                    <li className="text-white/70 font-semibold mb-3 ">
                      <Link
                        href="/menu_one"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        our menu
                      </Link>
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      <Link
                        href="/our_gallery"
                        className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                      >
                        gallery
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div
                  className={clsx(
                    "p-4",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left text-[var(--white-color)] uppercase">
                    opining time
                  </h3>
                  <ul className="space-y-2 font-hanken ">
                    <li className="text-white/70 font-semibold mb-3">
                      Monday: 10.00am - 05.00pm
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      Tuesday: 10.20am - 05.30pm
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      Wednesday: 10.30am - 05.50pm
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      Thursday: 11.00am - 07.10pm
                    </li>
                    <li className="text-white/70 font-semibold mb-3">
                      Friday : Closed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-800 w-full" />
          <div className="max-w-screen-xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/60 font-hanken font-semibold text-center">
              © 2024 All rights reserved design by Pixelfit
            </p>
          </div>
        </section>
      </footer>
      {/* End Footer Section */}
    </>
  );
}
