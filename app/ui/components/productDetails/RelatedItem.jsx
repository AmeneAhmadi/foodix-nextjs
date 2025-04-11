import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function RelatedItem({ imageSrc, title, subtitle }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={clsx(
        "col-span-1",
        inView ? "animate-fadeInUp opacity-100" : "opacity-0"
      )}
    >
      <div className="bg-white">
        <Image
          src={imageSrc}
          alt="Food 1"
          className="w-full h-auto object-cover px-3 sm:px-4 lg:px-5"
          width={500}
          height={500}
        />
        <div className="px-3 sm:px-4 py-5 sm:py-6 lg:py-7 flex items-center justify-center flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center uppercase">
            <Link href="/menu_details">{title}</Link>
          </h3>
          <p className="text-[var(--text-color)] text-sm sm:text-base lg:text-xl leading-relaxed text-center text-wrap w-2/3">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
