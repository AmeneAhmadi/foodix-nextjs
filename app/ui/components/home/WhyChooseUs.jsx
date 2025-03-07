"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import IconicBox from "../common/IconicBox";
import clsx from "clsx";
import { whyChooseUsData } from "@/app/data/data";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { boxes } = whyChooseUsData;
  return (
    <section>
      <div
        ref={ref}
        className={clsx(
          "flex flex-col items-center justify-center",
          "pb-20 pt-32 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto"
        )}
      >
        <div className=" flex flex-col items-center justify-between gap-20">
          <div
            className={clsx(
              inView ? "animate-fadeInDown opacity-100" : "opacity-0",
              "flex flex-col gap-4 items-center justify-center"
            )}
          >
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="relative w-6 h-6">
                <Image
                  src="/assets/icons/food-tray.png"
                  alt="offer"
                  fill
                  sizes="w-6 h-6"
                />
              </div>
              <span className="uppercase font-bold text-[var(--orange-color)] text-center font-hanken">
                Why choose us
              </span>
            </div>
            <h2 className="font-barlow font-bold text-4xl md:text-5xl xl:text-6xl uppercase text-center">
              Why We're Your Best Choice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {boxes.map((box, index) => (
              <IconicBox
                key={index}
                image={box.image}
                title={box.title}
                caption={box.caption}
                animation={box.animation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
