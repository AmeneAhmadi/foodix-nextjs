import React from "react";
import { FaStar, FaRegCheckCircle } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export default function VerticalProductCard({ product, border=false }) {
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={clsx(
        "bg-white overflow-hidden w-full",
        "flex flex-col md:flex-row",
        inView ? "animate-fadeInUp opacity-100" : "opacity-0",
        border ? "border border-gray-200" : "border-none",
      )}
    >
      {/* تصویر محصول */}
      <div className="w-48 h-48 min-w-1/3 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start justify-between p-3">
        <h3 className="text-2xl font-bold text-gray-900">
          {product.title}
        </h3>
        <p className="font-hanken text-black/70 font-medium text-sm md:text-lg w-[90%] text-ellipsis line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-[var(--primary-color)] text-2xl font-semibold">
            ${Number(product.price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
