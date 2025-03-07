import { FaStar } from "react-icons/fa";
import { MdOutlineFormatQuote } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";

export default function TestimonialCard({ rating, quote, author }) {
  return (
    <div
      className={clsx(
        "bg-white p-10 rounded-sm w-full",
        "border border-dashed border-black/10"
      )}
    >
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex items-center gap-1 text-start w-full">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} color="var(--orange-color)" size={20} />
          ))}
        </div>
        <p className="text-start font-hanken font-light text-lg">{quote}</p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="relative w-14 h-14">
              <Image src={`/assets/images/${author.thumb}`} alt="author" fill sizes="w-14 h-14"/>
            </div>
            <div className="flex flex-col items-center ">
              <h5 className="font-bold capitalize text-lg text-center">
                {author.name}
              </h5>
              <span className="uppercase font-hanken text-black/60">
                {author.position}
              </span>
            </div>
          </div>
          <div
            className={clsx(
              "flex items-center justify-center rounded-full",
              "w-11 h-11 bg-[var(--secondary-color)] "
            )}
          >
            <MdOutlineFormatQuote color="white" fontWeight={700} size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
