"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BlogRecentPost from "../ui/components/blog/BlogRecentPost";
import { blogPostsData } from "../data/data";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";
import PageBanner from "../ui/components/common/PageBanner";
import Image from "next/image";

export default function BlogStandard() {
  const { ref: mainPostRef, inView: mainPostInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: secondPostRef, inView: secondPostInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: thirdPostRef, inView: thirdPostInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: pagingRef, inView: pagingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: searchRef, inView: searchInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: recentPostsRef, inView: recentPostsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: popularTagsRef, inView: popularTagsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { posts } = blogPostsData;
  return (
    <section className="w-full mx-auto">
      <PageBanner
        title="blog classic"
        subtitles={[
          { page: "home", link: "/" },
          { page: "blog", link: "/blog_standard" },
        ]}
      />
      <div className=" w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          {/* ستون سمت چپ */}
          <div className="xl:col-span-2 py-3 rounded-lg">
            <div >
              <div ref={mainPostRef}
              className={clsx(
                mainPostInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}>
                <Link
                  href="#"
                  className="text-5xl font-bold uppercase hover:text-[var(--primary-color)] transition duration-300 cursor-pointer"
                >
                  Gourmet Griddle Masterpiece
                </Link>
                <div className="font-hanken mt-6 text-[var(--text-color)] text-lg flex items-center gap-4 font-semibold">
                  <span>Creativity</span>
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <span>JUly 5 , 2024</span>
                </div>

                <div>
                  <div className="mt-6">
                    <Image
                      src="/assets/images/blog-10.jpg"
                      alt="Blog Image"
                      width={1000}
                      height={400}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-hanken text-lg text-gray-700 text-justify leading-relaxed w-9/10">
                      Plant-based dining is no longer a niche; it's a movement.
                      Chefs are pushing the boundaries of creativity with
                      plant-powered dishes that are not only delicious but also
                      eco-friendly.
                    </p>
                    <Link
                      href="#"
                      className="font-hanken text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 font-bold text-xl mt-4 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
              <div ref={secondPostRef}
              className={clsx("border-t border-gray-200 mt-12 pt-14",
                secondPostInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}>
                <Link
                  href="#"
                  className="text-5xl font-bold uppercase hover:text-[var(--primary-color)] transition duration-300 cursor-pointer"
                >
                  skyline epicurean delight
                </Link>
                <div className="font-hanken mt-6 text-[var(--text-color)] text-lg flex items-center gap-4 font-semibold">
                  <span>Creativity</span>
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <span>JUly 5 , 2024</span>
                </div>

                <div>
                  <div className="mt-6">
                    <Image
                      src="/assets/images/blog-11.jpg"
                      alt="Blog Image"
                      width={1000}
                      height={400}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-hanken text-lg text-gray-700 text-justify leading-relaxed w-9/10">
                      Plant-based dining is no longer a niche; it's a movement.
                      Chefs are pushing the boundaries of creativity with
                      plant-powered dishes that are not only delicious but also
                      eco-friendly.
                    </p>
                    <Link
                      href="#"
                      className="font-hanken text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 font-bold text-xl mt-4 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
              <div ref={thirdPostRef} className={clsx("border-t border-gray-200 mt-12 pt-14",thirdPostInView ? "animate-fadeInUp opacity-100" : "opacity-0")}>
                <Link
                  href="#"
                  className="text-5xl font-bold uppercase hover:text-[var(--primary-color)] transition duration-300 cursor-pointer"
                >
                  Burger and Soft Drings
                </Link>
                <div className="font-hanken mt-6 text-[var(--text-color)] text-lg flex items-center gap-4 font-semibold">
                  <span>Creativity</span>
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <span>JUly 5 , 2024</span>
                </div>

                <div>
                  <div className="mt-6">
                    <Image
                      src="/assets/images/blog-12.jpg"
                      alt="Blog Image"
                      width={1000}
                      height={400}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-hanken text-lg text-gray-700 text-justify leading-relaxed w-9/10">
                      Plant-based dining is no longer a niche; it's a movement.
                      Chefs are pushing the boundaries of creativity with
                      plant-powered dishes that are not only delicious but also
                      eco-friendly.
                    </p>
                    <Link
                      href="#"
                      className="font-hanken text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 font-bold text-xl mt-4 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div ref={pagingRef}
              className={clsx(
                " font-hanken flex justify-start items-center mt-10 space-x-2",
                pagingInView ? "animate-fadeInDown opacity-100" : "opacity-0"
              )}
            >
              <button
                className="px-4 py-3 border rounded-md  hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300" >
                <FaArrowLeft />
              </button>

              {/* شماره صفحات */}
              {Array.from({ length: 3 }, (_, i) => (
                <button key={i + 1} className="px-4 py-2 border rounded-md hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300 ">
                  0{i + 1}
                </button>
              ))}

              {/* دکمه بعدی */}
              <button
                className="px-4 py-3 border rounded-md hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300">
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* ستون سمت راست */}
          <div className="px-1 py-6 rounded-lg">
            <div
              ref={searchRef}
              className={clsx(
                "bg-[#f7f7f7] rounded-lg px-6 py-6",
                searchInView ? "animate-fadeInDown opacity-100" : "opacity-0"
              )}
            >
              <h2 className="text-2xl font-bold uppercase">search</h2>
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="font-hanken border border-gray-300 px-6 py-4 rounded-lg w-full bg-white focus:outline-none pr-12"
                />
                <Link
                  href="#"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2  cursor-pointer"
                >
                  <IoSearch size={20}/>
                </Link>
              </div>
            </div>

            <div
              ref={recentPostsRef}
              className={clsx(
                "bg-[#f7f7f7] rounded-lg px-6 pt-6 pb-1 mt-8",
                recentPostsInView
                  ? "animate-fadeInDown opacity-100"
                  : "opacity-0"
              )}
            >
              <h2 className="text-2xl font-bold uppercase">recent post</h2>
              <div className="mt-5">
                {posts.map((item) => (
                  <BlogRecentPost key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div
              ref={categoriesRef}
              className={clsx(
                "font-hanken bg-[#f7f7f7] rounded-lg px-6 pt-6 pb-1 mt-8",
                categoriesInView
                  ? "animate-fadeInDown opacity-100"
                  : "opacity-0"
              )}
            >
              <h2 className="font-barlow text-2xl font-bold uppercase">
                categories
              </h2>
              <div className="mt-5">
                <div className="flex flex-row justify-between items-center mb-3 border-b-2 border-b-gray-200 pb-4">
                  <Link
                    href="#"
                    className="flex flex-row justify-between items-center w-full font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition duration-400"
                  >
                    <h1 className="text-lg capitalize">burger</h1>
                    <span className="text-lg">(6)</span>
                  </Link>
                </div>

                <div className="flex flex-row justify-between items-center mb-3 border-b-2 border-b-gray-200 pb-4">
                  <Link
                    href="#"
                    className="flex flex-row justify-between items-center w-full font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition duration-400"
                  >
                    <h1 className="text-lg capitalize">pizza</h1>
                    <span className="text-lg">(4)</span>
                  </Link>
                </div>

                <div className="flex flex-row justify-between items-center mb-3 border-b-2 border-b-gray-200 pb-4">
                  <Link
                    href="#"
                    className="flex flex-row justify-between items-center w-full font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition duration-400"
                  >
                    <h1 className="text-lg capitalize">sushi</h1>
                    <span className="text-lg">(7)</span>
                  </Link>
                </div>

                <div className="flex flex-row justify-between items-center mb-3 border-b-2 border-b-gray-200 pb-4">
                  <Link
                    href="#"
                    className="flex flex-row justify-between items-center w-full font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition duration-400"
                  >
                    <h1 className="text-lg capitalize">chicken</h1>
                    <span className="text-lg">(8)</span>
                  </Link>
                </div>

                <div className="flex flex-row justify-between items-center mb-3">
                  <Link
                    href="#"
                    className="flex flex-row justify-between items-center w-full font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition duration-400"
                  >
                    <h1 className="text-lg capitalize">mutton</h1>
                    <span className="text-lg">(9)</span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              ref={popularTagsRef}
              className={clsx(
                "bg-[#f7f7f7] rounded-lg px-6 py-6 mt-8",
                popularTagsInView
                  ? "animate-fadeInDown opacity-100"
                  : "opacity-0"
              )}
            >
              <h2 className="text-2xl font-bold uppercase">Popular Tags</h2>

              <div className="mt-5">
                <div className="mt-3 flex flex-row gap-3">
                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">beer</h2>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">burgers</h2>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">delicious</h2>
                  </Link>
                </div>

                <div className="mt-3 flex flex-row gap-3">
                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">fast food</h2>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">beef</h2>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">muton</h2>
                  </Link>
                </div>

                <div className="mt-3 flex flex-row gap-3">
                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">good meal</h2>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white text-[var(--text-color)]  py-3 px-4 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
                  >
                    <h2 className="uppercase font-bold text-lg">pizza</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
