"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BiDish } from "react-icons/bi";
import clsx from "clsx";
import HomeMenuCard from "./HomeMenuCard";
import { homeMenuData } from "@/app/data/data";

export default function Menu() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { boxes } = homeMenuData;
  return (
    <section
      ref={ref}
      className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
    >
      <div className="pt-24">
        <div
          className={clsx(
            "text-center w-full",
            inView ? "animate-fadeInDown opacity-100" : "opacity-0"
          )}
        >
          <div className="font-hanken text-[var(--orange-color)] uppercase font-bold px-2 sm:px-5 flex items-center justify-center gap-2">
            <BiDish size={20} />
            <span>delicious menu</span>
          </div>
          <div>
            <h2 className="text-black text-center text-[2.5rem] sm:text-5xl lg:text-6xl uppercase font-extrabold px-2 mb-3 sm:mb-4 mt-3 leading-tight max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] mx-auto">
              explore our delicious
              <br />
              menu
            </h2>
          </div>
        </div>
        <div className="w-full">
          <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-7 place-items-center w-full mx-auto ">
            {boxes.map((box, index) => (
              <HomeMenuCard key={index} {...box} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
