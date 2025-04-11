import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function HomeMenuCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={clsx(
        "bg-gray-100 p-4 flex items-center justify-between w-full h-full group",
        "border-1 border-dashed border-gray-300 hover:bg-[var(--secondary-color)]",
        "hover:text-white transition duration-300",
        inView ? "animate-fadeInUp opacity-100" : "opacity-0"
      )}
    >
      <div className="relative flex flex-row gap-4 items-center">
        <Image
          src={`/assets/images/${item.thumb}`}
          alt="menu"
          width={70}
          height={70}
          style={{
            width: "70px",
            height: "auto",
          }}
        />
        <div className="flex flex-col gap-1">
          <Link href={`/product/details?id=${index+1}`} className="text-2xl font-bold group-hover:text-white">
            <h4>{item.title}</h4>
          </Link>
          <p className="font-hanken text-[var(--text-color)] text-sm font-medium group-hover:text-white">
            {item.caption}
          </p>
        </div>
      </div>
      <div className="h-13">
        <p className="text-2xl font-bold text-[var(--primary-color)] group-hover:text-white">
          ${item.cost}
        </p>
      </div>
    </div>
  );
}
