"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import clsx from "clsx";

export default function IconicBox({ image, title, caption,animation }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref}
      className={clsx(
        "flex flex-col items-center justify-center gap-2",
        "bg-[var(--gray-light-color)] hover:bg-[var(--primary-color)]",
        "text-black hover:text-white",
        inView ? animation + " opacity-100" : "opacity-0",
        "transition-all duration-300 ease-out",
        "pt-10 pb-9 px-8 rounded-xl",
        "group"
      )}
    >
      <div
        className={clsx(
          "relative w-24 h-24",
          "[&>img]:transition-colors [&>img]:duration-300",
          "group-hover:[&>img]:brightness-0 group-hover:[&>img]:invert"
        )}
      >
        <Image src={`/assets/icons/${image}`} alt={title} fill />
      </div>
      <h4 className="font-bold text-2xl text-center">{title}</h4>
      <p className="text-center text-lg font-hanken">{caption}</p>
    </div>
  );
}
