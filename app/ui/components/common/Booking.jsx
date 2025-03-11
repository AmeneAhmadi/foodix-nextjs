"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BiDish } from "react-icons/bi";
import clsx from "clsx";
export default function Booking() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section ref={ref} className="w-full">
      <div className="w-full h-auto bg-[url('/assets/images/offer-bg1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full">
          <div className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 lg:pt-32 gap-8 lg:gap-12">
              <div
                className={clsx(
                  "text-center lg:text-start",
                  inView ? "animate-fadeInDown opacity-100" : "opacity-0"
                )}
              >
                <div className="font-hanken text-[var(--orange-color)] uppercase font-bold xl:text-lg flex items-center gap-2">
                  <BiDish size={20} />
                  <span>reservation</span>
                </div>

                <div>
                  <h2 className="text-white text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl uppercase font-extrabold px-2 mb-3 sm:mb-4 mt-3 leading-tight">
                    Need reservation? booking your table now
                  </h2>
                </div>
                <div>
                  <div className="text-[var(--orange-color)] font-bold px-2 sm:px-5 font-hanken">
                    <span>Order online</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="test.html"
                      className={clsx(
                        "inline-block px-8 sm:px-11 py-4 sm:py-4 rounded-xl font-hanken",
                        "bg-[var(--secondary-color)] capitalize text-lg sm:text-xl ",
                        "font-bold text-white transition duration-300",
                        "hover:bg-[var(--orange-color)]"
                      )}
                    >
                      <i className="fa-solid fa-phone"></i>
                      +555-657-8876
                    </Link>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <div
                  className={clsx(
                    "w-full bg-[var(--secondary-color)] rounded-tr-2xl rounded-tl-2xl",
                    "h-auto min-h-[515px]",
                    " mt-8 lg:mt-0 mx-auto max-w-[90%] lg:max-w-full pb-0",
                    inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                  )}
                >
                  <div className="px-7 py-12">
                    <h2 className="uppercase text-white text-3xl font-bold text-center mb-12">
                      create an booking table
                    </h2>
                    <form>
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full px-6 py-[20px] rounded-lg bg-[#20ac44] text-white placeholder-white border border-[#37b557] focus:outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-6 py-[20px] rounded-lg bg-[#20ac44] text-white placeholder-white focus:outline-none border border-[#37b557]"
                        />
                      </div>

                      {/* Phone and Date */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7 relative">
                        <input
                          type="tel"
                          placeholder="Enter your phone"
                          className="w-full px-6 py-[20px] rounded-lg bg-[#20ac44] text-white placeholder-white focus:outline-none border border-[#37b557]"
                        />
                        <input
                          type="date"
                          className="w-full px-6 py-[20px] rounded-lg bg-[#20ac44] text-white placeholder-white focus:outline-none border border-[#37b557] [color-scheme:dark]"
                        />
                      </div>

                      {/* List of people */}
                      <div className="mb-4">
                        <select className="w-full px-4 py-5 rounded-lg bg-[#20ac44] text-white focus:outline-none mb-7 border border-[#37b557]">
                          <option value="">Select people</option>
                          <option value="people-01">People-01</option>
                          <option value="people-02">People-02</option>
                          <option value="people-02">People-03</option>
                          <option value="people-02">People-04</option>
                          <option value="people-02">People-05</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <Link
                        href="#"
                        className="w-full py-4 rounded-lg bg-[var(--orange-color)] text-black font-bold text-lg hover:bg-[var(--primary-color)] transition duration-300 block text-center"
                      >
                        Book A Table
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
