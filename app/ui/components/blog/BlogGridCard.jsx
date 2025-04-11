"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function BlogGridCard({ item }) {
    const { ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });
  return (
    <div ref={ref} className={clsx("flex flex-col items-start justify-between gap-5", inView ? "animate-fadeInUp opacity-100" : "opacity-0")}>
      <div className="relative rounded-xl w-full">
        <Image
          src={item.imageSrc}
          alt="Blog Image"
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-row items-start justify-start w-full gap-4 font-hanken">
        <a href="#" className="text-black/70 text-lg font-medium capitalize">
          {item.subtitle}
        </a>
        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-3"></span>
        <p className="text-black/70 text-lg font-medium capitalize">
          {item.date}
        </p>
      </div>
      <Link href={"/blog_details"}>
        <h4 className="text-2xl uppercase font-bold text-black/90 cursor-pointer hover:text-[var(--primary-color)] transition-colors duration-300 ease-in-out">
          {item.title}
        </h4>
      </Link>
      <p className="font-hanken text-black/70 text-lg font-medium w-[95%]">
        {item.caption}
      </p>
      <Link
        href={"/blog_details"}
        className="font-hanken flex gap-2 items-center justify-start text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-300 font-bold text-xl"
      >
        Learn More <FaArrowRight size={16} />
      </Link>
    </div>
  );
}
