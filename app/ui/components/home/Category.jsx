"use client";

import Link from "next/link";
import { categoryData } from "@/app/data/data";
import IconicVerticalBox from "../common/IconicVerticalBox";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function Category() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { boxes } = categoryData;
  return (
    <section
      ref={ref}
      className="w-full px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
    >
      {/* Header */}
      <div className="pt-32 flex flex-col lg:flex-row lg:justify-between gap-6">
        <h2
          className={clsx(
            "text-6xl uppercase font-extrabold",
            inView ? "animate-fadeInUp opacity-100" : "opacity-0",
            "transition-all duration-300 ease-out"
          )}
        >
          our Categories
        </h2>
        <Link
          href="/menu_grid"
          className={clsx(
            "py-4 px-10 rounded-xl border border-[var(--primary-color)] capitalize text-2xl font-semibold text-[var(--text-color)]",
            inView ? "animate-fadeInDown opacity-100" : "opacity-0",
            "transition-all duration-300 ease-out"
          )}
        >
          see more
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {boxes.map((box, index) => (
            <Link href="#" key={index}>
              <IconicVerticalBox key={index} {...box} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
