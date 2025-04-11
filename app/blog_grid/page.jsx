"use client";
import clsx from "clsx";
import PageBanner from "../ui/components/common/PageBanner";
import { blogGridData } from "../data/data";
import BlogGridCard from "../ui/components/blog/BlogGridCard";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BlogGrid() {
  const { ref: pagingRef, inView: pagingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { posts } = blogGridData;
  return (
    <section>
      <PageBanner
        title="blog grid"
        subtitles={[
          { page: "home", link: "/" },
          { page: "blog", link: "/blog_grid" },
        ]}
      />
      <div
        className={clsx(
          "w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-20",
          "flex flex-col gap-10"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogGridCard key={index} item={post} />
          ))}
        </div>
      </div>
      <div
        ref={pagingRef}
        className={clsx(
          " font-hanken flex justify-center items-center py-10 space-x-2 text-black/70",
          pagingInView ? "animate-fadeInDown opacity-100" : "opacity-0"
        )}
      >
        <button className="px-3 py-3 sm:px-4 sm:py-3 border rounded-md  hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300">
          <FaArrowLeft />
        </button>

        {/* شماره صفحات */}
        {Array.from({ length: 3 }, (_, i) => (
          <button
            key={i + 1}
            className="px-3 py-2 sm:px-4 border rounded-md hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300 "
          >
            0{i + 1}
          </button>
        ))}

        {/* دکمه بعدی */}
        <button className="px-3 py-3 sm:px-4 sm:py-3 border rounded-md hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition duration-300">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
