"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import PageBanner from "../ui/components/common/PageBanner";
import { blogDetailsCommentsData, blogPostsData } from "../data/data";
import BlogDetailsComment from "../ui/components/blog/BlogDetailsComment";
import BlogDetailsCommentForm from "../ui/components/blog/BlogDetailsCommentForm";
import BlogRecentPost from "../ui/components/blog/BlogRecentPost";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function BlogDetails() {
  const { ref: mainPostRef, inView: mainPostInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: socialRef, inView: socialInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: commentsRef, inView: commentsInView } = useInView({
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
  const { comments } = blogDetailsCommentsData;
  const { posts } = blogPostsData;
  return (
    <section className="w-full mx-auto">
      <PageBanner
        title="blog details"
        subtitles={[
          { page: "home", link: "/" },
          { page: "blog details", link: "/blog_details" },
        ]}
      />
      <div className=" w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* ستون سمت چپ */}
          <div className="xl:col-span-2 px-1 py-3 rounded-lg">
            <div
              ref={mainPostRef}
              className={clsx(
                mainPostInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}
            >
              <div>
                <h2 className="text-5xl font-bold">
                  Gourmet Griddle Masterpiece
                </h2>
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
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[var(--text-color)] leading-8 text-justify">
                      Embark on a delectable journey as we delve into the world
                      of culinary delights and gastronomic adventures. Food is
                      not just sustenance; it's an art that connects cultures,
                      evokes memories, and stirs emotions. In this blog, we
                      invite you to join us as we explore the fascinating realm
                      of flavors, aromas, and the stories behind every dish.
                      Whether you're a seasoned foodie or simply curious about
                      the magic that happens in the kitchen, our culinary
                      exploration promises to satisfy your appetite for
                      knowledge and inspiration
                    </p>
                    <p className="mt-12 text-[var(--text-color)] leading-8 text-justify">
                      Discover the artistry of blending flavors and techniques
                      from different cuisines. Explore how culinary fusion can
                      result in unique and tantalizing dishes that transcend
                      cultural boundaries. From Japanese-Peruvian fusion to
                      modern twists on classic comfort foods, we'll take you on
                      a global taste tour that celebrates the beauty of culinary
                      creativity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-6">
                <Image
                  src="/assets/images/blog-single-1.jpg"
                  alt="Blog Image"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <Image
                  src="/assets/images/blog-single-2.jpg"
                  alt="Blog Image"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div
              ref={socialRef}
              className={clsx(
                "mt-10 flex flex-row justify-between",
                socialInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}
            >
              <div className="flex flex-row gap-3">
                <h1 className="uppercase font-semibold text-md">tag:</h1>
                <Link
                  href="#"
                  className="font-semibold text-md ml-2 uppercase
                     hover:text-[var(--primary-color)] transition duration-400"
                >
                  BEER
                </Link>
                <Link
                  href="#"
                  className="font-semibold text-md ml-2 uppercase
                    hover:text-[var(--primary-color)] transition duration-400"
                >
                  Burgers
                </Link>
                <Link
                  href="#"
                  className="font-semibold text-md ml-2 uppercase
                    hover:text-[var(--primary-color)] transition duration-400"
                >
                  pizza
                </Link>
              </div>

              <div className="flex flex-row gap-3">
                <h1 className="uppercase font-semibold text-md">share:</h1>
                <div className="flex flex-row gap-3 mt-1">
                  <Link href="#">
                    <FaFacebookF className="text-lg hover:text-[var(--primary-color)] transition duration-400 " />
                  </Link>

                  <Link href="#">
                    <FaLinkedinIn className="text-xl hover:text-[var(--primary-color)] transition duration-400 " />
                  </Link>

                  <Link href="#">
                    <PiTelegramLogo className="text-xl hover:text-[var(--primary-color)] transition duration-400 " />
                  </Link>

                  <Link href="#">
                    <FaInstagram className="text-xl hover:text-[var(--primary-color)] transition duration-400 " />
                  </Link>
                </div>
              </div>
            </div>

            <div
              ref={commentsRef}
              className={clsx(
                "m-10 w-full mx-auto border-t border-gray-200 pt-10",
                commentsInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}
            >
              <h1 className="text-2xl font-bold">Popular Comments</h1>

              <div className="mt-6">
                {comments.map((item, index) => (
                  <BlogDetailsComment key={index} item={item} />
                ))}
              </div>
            </div>

            <BlogDetailsCommentForm />
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

            <div ref={categoriesRef}
              className={clsx(
                "font-hanken bg-[#f7f7f7] rounded-lg px-6 pt-6 pb-1 mt-8",
                categoriesInView
                  ? "animate-fadeInDown opacity-100"
                  : "opacity-0"
              )}
            >
              <h2 className="font-barlow text-2xl font-bold uppercase">categories</h2>
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

            <div ref={popularTagsRef}
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
