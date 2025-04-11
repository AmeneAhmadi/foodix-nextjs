"use client";
import clsx from "clsx";
import { FaRegEnvelope, FaPhone } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { useInView } from "react-intersection-observer";
export default function ContactCard({ card }) {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const icon =
    card.icon === "location" ? (
      <MdOutlineLocationOn
        size={36}
        className="text-[var(--primary-color)] text-4xl"
      />
    ) : card.icon === "email" ? (
      <FaRegEnvelope
        size={30}
        className="text-[var(--primary-color)] text-4xl"
      />
    ) : (
      <FaPhone size={30} className="text-[var(--primary-color)] text-4xl" />
    );

  return (
    <div ref={ref}
      className={clsx(
        "flex flex-col items-center shadow-[0px_0px_25px_0px_rgba(0,0,0,0.08)] ",
        "p-6 rounded-xl w-full md:w-80 lg:w-full transition-all sm:justify-center overflow-hidden",
        inView ? "animate-fadeInDown opacity-100" : "opacity-0",
      )}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#FCF3F3]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
      <p className="font-hanken text-gray-700 mt-2 text-center">
        {card.firstText}
      </p>
      <p className="font-hanken text-gray-700 mt-2 text-center">
        {card.secondText}
      </p>
    </div>
  );
}
