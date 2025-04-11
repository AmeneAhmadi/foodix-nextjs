"use client";

import { blogData } from "@/app/data/data";
import { useInView } from "react-intersection-observer";
import { whyChooseUsData } from "@/app/data/data";
import { BiDish } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";

import clsx from "clsx";

export default function Blog() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { blogPosts } = blogData;
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className=" px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto">
        <div
          className={clsx(
            inView ? "animate-fadeInDown opacity-100" : "opacity-0",
            "flex flex-col gap-4 items-center justify-center mb-16"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center gap-2 w-full ",
              "text-[var(--orange-color)] text-center font-hanken"
            )}
          >
            <BiDish size={20} />
            <span className="uppercase font-bold ">Our Latest Blog</span>
          </div>
          <h2
            className={clsx(
              "font-bold text-4xl md:text-5xl xl:text-6xl uppercase text-center ",
              "[&::after]:content-['posts'] [&::after]:block before:content-['discover_our_latest_blog']"
            )}
          ></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={clsx(
                "bg-gray-100 group rounded-sm shadow-md hover:shadow-lg ",
                "transition-all duration-300",
                inView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[280px] object-cover"
                />
              </div>
              <div className="p-8 bg-gray-100">
                <div className="flex items-center gap-6 text-black/50 mb-3 font-hanken">
                  <div className="flex items-center gap-2">
                    <FaRegUser size={16} />
                    <span className="hover:text-[var(--secondary-color)]">By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoChatbubbleOutline size={16} />
                    <span className="hover:text-[var(--secondary-color)]">Comment ({post.comments})</span>
                  </div>
                </div>
                <div className="hover:text-[var(--secondary-color)]">
                <h3 className="text-2xl font-bold  transition-colors duration-300">
                  {post.title}
                </h3>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300">
                  {post.subtitle}
                </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-hanken">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
